import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Linkedin, Twitter, Facebook, Mail } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getBlogs } from "@/lib/getBlogs";
import type { Metadata } from "next";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  const blogs = await getBlogs();
  // Next.js static export requires at least one param or dynamicParams = false
  // but just to be safe if blogs is empty we can return a dummy or rely on dynamicParams=false
  if (!blogs || blogs.length === 0) {
    return [{ slug: "welcome-to-lara-labs-blog" }];
  }
  return blogs.map((post) => ({
    slug: post.slug,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const blogs = await getBlogs();
  const post = blogs.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Lara Labs Blog`,
    description: post.excerpt,
    keywords: [post.category, "AI automation", "Lara Labs blog"],
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const blogs = await getBlogs();
  const post = blogs.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedArticles = blogs.filter(p => p.slug !== post.slug);

  return (
    <div className="min-h-screen font-sans bg-[#0a0a16] text-white">
      {/* Custom Header */}
      <header className="sticky top-0 z-50 bg-[#0a0a16]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link 
            href="/blog" 
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Blog</span>
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <main className="lg:col-span-8">
          <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-3 text-sm text-slate-400 mb-8">
              <span className="text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">{post.category}</span>
              <span>•</span>
              <span className="font-medium text-white">Lara Labs AI</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-strong:text-white mt-10">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>
          </article>

          {/* Share Bar */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-xl font-bold text-white">Share this article</h3>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Mail].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-10 lg:pl-8 lg:border-l border-white/10 h-fit sticky top-24">
          
          <div className="p-6 bg-blue-600/10 border border-blue-500/20 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-3">Want to automate your business?</h3>
            <p className="text-blue-100/70 mb-6 text-sm">Our AI experts can build custom digital workers that save you hundreds of hours a month.</p>
            <Link href="/contact" className="block w-full text-center px-4 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors">
              Get a Free AI Audit
            </Link>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">More Articles</h3>
              <div className="flex flex-col gap-6">
                  {relatedArticles.map((article, i) => (
                      <Link href={`/blog/${article.slug}`} key={i} className="group flex flex-col gap-2 cursor-pointer border-b border-white/5 pb-4 last:border-0">
                          <h4 className="text-sm font-semibold text-white leading-snug group-hover:text-blue-400 transition-colors line-clamp-2">
                              {article.title}
                          </h4>
                          <span className="text-xs text-slate-500">{article.category} • {article.readTime}</span>
                      </Link>
                  ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
