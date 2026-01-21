import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface FeaturedPostProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  href: string;
}

export default function FeaturedPost({
  title,
  excerpt,
  author,
  date,
  image,
  href,
}: FeaturedPostProps) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden group border border-white/5">
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a16] via-[#0a0a16]/80 to-transparent" />
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
      </div>

      <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end h-[500px] md:h-[650px] max-w-4xl">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6 w-fit backdrop-blur-md">
            Featured Post
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
          {title}
        </h1>
        
        <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl line-clamp-3 leading-relaxed">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-6 text-sm text-slate-400 font-medium">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-blue-400 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
              {author[0]}
            </div>
            <span className="text-white">{author}</span>
          </div>
          <span>•</span>
          <span>{date}</span>
        </div>

        <Link 
            href={href}
            className="absolute bottom-8 right-8 md:bottom-12 md:right-12 w-20 h-20 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-500 hover:scale-110"
        >
            <ArrowUpRight className="w-8 h-8" />
        </Link>
      </div>
    </div>
  );
}
