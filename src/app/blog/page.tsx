
import Navbar from "@/components/Navbar";
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  const posts = [
    {
      title: "Indonesia to Host ASEAN Climate Summit 2025",
      excerpt: "Indonesia has officially been selected as the host country for the ASEAN Climate Summit 2025, marking a historic milestone.",
      author: "Rina Wulandari",
      date: "June 24, 2025",
      image: "/blog/hero.png",
      category: "Politics",
      href: "/blog/indonesia-to-host-asean-climate-summit-2025",
    },
    {
      title: "The Art of Website Typography: Best Practices and Tips",
      excerpt: "Discover the power of typography in web design for captivating user experiences.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: "/blog/hero.png",
      category: "Updates",
      href: "/blog/the-art-of-website-typography",
    },
    {
      title: "Optimizing Website Performance for Lightning-Fast Loading Times",
      excerpt: "Unlock the secrets to optimize your website's performance for exceptional speed.",
      author: "Alec Whitten",
      date: "17 Jan 2024",
      image: "/blog/abstract-1.png",
      category: "Updates",
      href: "/blog/optimizing-website-performance",
    },
     {
      title: "The Role of Color in Web Design: Impact and Emotion",
      excerpt: "Explore how color influences user perception and emotion in web design.",
      author: "Demi WIlkinson",
      date: "16 Jan 2024",
      image: "/blog/hero.png",
      category: "Updates",
      href: "/blog/role-of-color-in-web-design",
    },
    {
      title: "UX/UI Design: Creating Intuitive and Engaging User Experiences",
      excerpt: "Learn the principles and techniques to craft remarkable UX/UI designs.",
      author: "Candice Wu",
      date: "15 Jan 2024",
      image: "/blog/abstract-1.png",
      category: "Updates",
      href: "/blog/ux-ui-design-principles",
    },
    {
      title: "Responsive Web Design: Designing for All Devices",
      excerpt: "Discover the essentials of responsive web design to ensure seamless cross-device experiences.",
      author: "Natali Craig",
      date: "14 Jan 2024",
      image: "/blog/hero.png",
      category: "Updates",
      href: "/blog/responsive-web-design",
    },
  ];

  return (
    <div className="min-h-screen text-white selection:bg-blue-500/30 font-sans">
        <Navbar />
        
        <main className="pt-24 md:pt-32 pb-20 px-[5%] md:px-[10%] max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h1 className="text-3xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                    Latest News
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Stay updated with the latest trends, tips, and insights in web design through our informative and inspiring blog articles.
                </p>
            </div>

            {/* Posts Grid */}
            <section className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-12">
                    {posts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>

                <div className="mt-20 flex flex-col items-center">
                    <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
                    <button className="group relative px-8 py-3 rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:bg-white/10 hover:border-white/20">
                        <span className="relative z-10 text-slate-300 font-medium group-hover:text-white transition-colors">Load more posts</span>
                    </button>
                </div>
            </section>
        </main>
    </div>
  );
}
