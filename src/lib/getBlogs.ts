import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../sanity/env'

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, or using ISR
})

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
}

export async function getBlogs(): Promise<BlogPost[]> {
  try {
    const posts = await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        excerpt,
        category,
        "date": publishedAt,
        content
      }
    `)

    return posts.map((post: any) => ({
      ...post,
      // Fallback simple read time calculation
      readTime: post.content ? `\${Math.ceil(post.content.split(' ').length / 200)} min read` : '1 min read',
      date: new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }))
  } catch (error) {
    console.error("Error fetching from Sanity:", error)
    return []
  }
}
