import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image: string;
  href: string;
  category: string;
}

export default function BlogCard({
  title,
  excerpt,
  author,
  date,
  image,
  href,
  category,
}: BlogCardProps) {
  return (
    <Link 
      href={href}
      className="group flex flex-col gap-5 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 h-full"
    >
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs text-white font-semibold tracking-wide uppercase shadow-lg">
          <span className="text-blue-400 mr-1">●</span> {category}
        </div>
      </div>
      
      <div className="flex flex-col gap-3 flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
          {excerpt}
        </p>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-white/5">
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium tracking-wide">
                <span className="text-slate-400">{author}</span>
                <span>•</span>
                <span>{date}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-blue-400 font-medium opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Read <ArrowUpRight className="w-3 h-3" />
            </div>
        </div>
      </div>
    </Link>
  );
}
