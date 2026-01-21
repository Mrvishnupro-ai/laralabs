import Link from "next/link";
import Image from "next/image";
import { 
  ArrowLeft, 
  Search, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Mail, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Send 
} from "lucide-react";

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Mock data to match the screenshot or just be dummy data
  const post = {
    title: "Indonesia to Host ASEAN Climate Summit 2025",
    author: "Rina Wulandari",
    role: "Politics",
    date: "June 24, 2025",
    image: "/blog/hero.png", // Using existing placeholder
    content: (
      <>
        <p className="mb-6 text-lg leading-relaxed text-slate-300">
          Jakarta, Indonesia – Indonesia has officially been selected as the host country for the ASEAN Climate Summit 2025, marking a historic milestone in the nation's diplomatic and environmental efforts. This will be the first time a Southeast Asian country leads the summit with a full green energy and sustainability agenda.
        </p>
        <p className="mb-6 text-lg leading-relaxed text-slate-300">
          The announcement was made during the ASEAN Ministerial Meeting held in Kuala Lumpur last weekend. Indonesia's proposal stood out for its ambitious commitment to renewable energy, climate resilience programs, and sustainable urban development.
        </p>
        <h3 className="text-2xl font-bold text-white mb-4 mt-8">A Regional Focus on Climate Action</h3>
        <p className="mb-6 text-lg leading-relaxed text-slate-300">
          The summit, scheduled for November 2025, will bring together leaders and environmental ministers from all 10 ASEAN member states, along with invited observers from the European Union, Japan, and Australia.
        </p>
        <p className="mb-4 text-lg leading-relaxed text-slate-300">Key discussion topics will include:</p>
        <ul className="list-disc list-inside mb-8 text-slate-300 space-y-2 ml-4">
          <li>Renewable Energy Transition Roadmap for Southeast Asia</li>
          <li>Cross-border Climate Financing Initiatives</li>
          <li>Disaster Risk Reduction and Response Strategies</li>
        </ul>
      </>
    )
  };

  const relatedArticles = [
    {
      title: "ASEAN Leaders Discuss Renewable Energy Policies",
      category: "Politics",
      image: "/blog/sidebar-1.png" 
    },
    {
      title: "Jakarta to Implement Green Transport System Ahead of Summit",
      category: "Urban",
      image: "/blog/sidebar-2.png" 
    },
    {
      title: "Indonesia's Climate Commitment: What's Next After the Summit?",
      category: "Environment",
      image: "/blog/sidebar-3.png"
    },
    {
      title: "Southeast Asia Faces Growing Threat from Rising Sea Levels",
      category: "Environment",
      image: "/blog/sidebar-4.png"
    },
    {
      title: "Local Startups Join Government's Green Innovation Program",
      category: "Business",
      image: "/blog/sidebar-5.png"
    },
    {
        title: "ASEAN Youth Summit: Climate Activists Demand Stronger Action",
        category: "Politics",
        image: "/blog/sidebar-6.png"
    }
  ];

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
            <span className="font-medium">Back to Homepage</span>
          </Link>

          <div className="relative hidden md:block w-72">
            <input 
              type="text" 
              placeholder="Search news..." 
              className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-10 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content */}
        <main className="lg:col-span-8">
          <article className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-3 text-sm text-slate-400 mb-8">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
              <span className="font-medium text-white">{post.author}</span>
              <span>•</span>
              <span>{post.role}</span>
              <span>•</span>
              <span>{post.date}</span>
            </div>

            <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10 border border-white/10">
              <Image 
                src={post.image} 
                alt="Article Hero" 
                fill 
                className="object-cover"
              />
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              {post.content}
            </div>
          </article>

          {/* Social Proof Bar */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
                <button className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group">
                    <ThumbsUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">1.3 Likes</span>
                </button>
                <button className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group">
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">55 Comments</span>
                </button>
                 <button className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors group">
                    <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">960 Shares</span>
                </button>
            </div>

            <div className="flex-1 max-w-md w-full relative">
                 <input 
                    type="text" 
                    placeholder="Write a comment..." 
                    className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                 />
                 <button className="absolute right-1.5 top-1.5 p-1.5 bg-white/10 rounded-full hover:bg-blue-500 text-white transition-colors">
                    <Send className="w-4 h-4" />
                 </button>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-10 lg:pl-8 lg:border-l border-white/10 h-fit sticky top-24">
          
          {/* Share Widget */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Share to</h3>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook, Mail].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all">
                  <Icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white">Related Articles</h3>
            <div className="flex flex-col gap-6">
                {relatedArticles.map((article, i) => (
                    <div key={i} className="group flex gap-4 items-start cursor-pointer">
                        <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0 border border-white/10">
                            {/* Using a placeholder since we don't have all these images */}
                            <div className="absolute inset-0 bg-slate-800" /> 
                            <Image 
                                src="/blog/abstract-1.png" // Fallback image
                                alt={article.title}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                             <h4 className="text-sm font-semibold text-white leading-snug group-hover:text-blue-400 transition-colors line-clamp-2">
                                {article.title}
                             </h4>
                             <span className="text-xs text-slate-500">{article.category}</span>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
