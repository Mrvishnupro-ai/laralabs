import Link from "next/link";
import Image from "next-image-export-optimizer";

import personImage from "@/assets/cta/img.png";
import compImage from "@/assets/cta/comp.png";
import { ArrowUpRight } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="w-full px-[5%] md:px-[10%] pt-0 pb-10 md:pt-10 md:pb-20 select-none">
      {/* Desktop View (Existing) */}
      <div className="hidden md:block relative w-full rounded-[2rem] overflow-hidden aspect-[10/3.2] items-center">
        {/* Background & Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-3xl" />
        <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none" />
        
        {/* Shine Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 pointer-events-none" />
          
        {/* Floating Glass Effects - Scaled for Desktop */}
        <div className="absolute top-[-30%] right-[-10%] w-[500px] h-[500px] bg-blue-500/30 blur-[100px] rounded-full pointer-events-none mix-blend-overlay" />
        <div className="absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] bg-purple-500/20 blur-[80px] rounded-full pointer-events-none mix-blend-overlay" />
        <div className="absolute top-[20%] left-[30%] w-[200px] h-[200px] bg-cyan-400/10 blur-[60px] rounded-full pointer-events-none" />


        {/* Content Grid */}
        <div className="relative z-10 w-full h-full grid grid-cols-[1.2fr_0.8fr] gap-4 items-center px-6 pt-6 pl-24 pr-12 pb-0">
          
          {/* Left Side: Text */}
          <div className="flex flex-col justify-center h-full space-y-6 w-auto p-0 pt-4">
            <h2 className="text-3xl lg:text-5xl text-white font-sans font-bold tracking-tight leading-[1.1]">
              AI Growth Strategy, <br /> Designed for Serious Businesses
            </h2>
            
            <p className="pt-6 text-gray-200 text-lg lg:text-xl font-light leading-relaxed max-w-xl">
              A focused strategy session to identify where AI can reduce costs, improve efficiency, and unlock scalable growth tailored to your business model.
            </p>

            <div className="pt-6 one space-y-4">
              
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="flex group items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-semibold text-base lg:text-lg hover:bg-gray-100 transition-all w-fit">
                  Get Your Free AI Strategy Session
                  <span className="bg-black text-white rounded-full p-1.5 group-hover:bg-gray-800 transition-colors">
                     <ArrowUpRight size={20} />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative w-auto h-full flex items-end justify-end mt-0">
             <div className="relative z-10 w-full h-[110%] flex items-end">
                <Image
                  src={personImage}
                  alt="Business Person"
                  fill
                  className="object-contain object-bottom"
                />
             </div>
          </div>
        </div>
      </div>

      {/* Mobile View (Redesigned) */}
      <div className="md:hidden relative w-full h-auto p-5 rounded-[24px] bg-gradient-to-br from-white/15 via-white/5 to-transparent backdrop-blur-2xl border border-white/20 flex flex-row items-center justify-between gap-4 shadow-[0_0_30px_rgba(59,130,246,0.15)] overflow-hidden">
          
          {/* Shine Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50 pointer-events-none" />
          
          {/* Floating Glass Effects */}
          <div className="absolute top-[-20%] right-[-10%] w-[150px] h-[150px] bg-blue-500/40 blur-[50px] rounded-full pointer-events-none mix-blend-overlay" />
          <div className="absolute bottom-[-20%] left-[10%] w-[120px] h-[120px] bg-purple-500/30 blur-[40px] rounded-full pointer-events-none mix-blend-overlay" />
          <div className="absolute top-[30%] left-[40%] w-[80px] h-[80px] bg-cyan-400/20 blur-[30px] rounded-full pointer-events-none" />

          {/* Text Left */}
          <div className="relative z-10 flex flex-col gap-3 flex-1">
             <h2 className="text-xl font-bold text-white leading-tight drop-shadow-md">
                Get Free AI <br /> Growth Plan
             </h2>
              <p className="text-gray-300 text-xs font-medium leading-relaxed drop-shadow-sm">
                 Schedule a strategy call to automate & scale.
              </p>
             <Link href="/contact" className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold w-fit mt-1 hover:bg-gray-200 transition-colors shadow-lg">
                Schedule a call
                <ArrowUpRight size={14} />
             </Link>
          </div>

          {/* Image Right */}
          <div className="relative z-10 shrink-0 w-[100px] h-[100px]">
              <Image
                src={compImage}
                alt="Computer"
                fill
                className="object-contain drop-shadow-xl"
              />
          </div>
      </div>
    </section>
  );
}
