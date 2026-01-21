import Navbar from "@/components/Navbar";
import { ArrowUpRight, Check } from "lucide-react";
import SwipeCardStack from "@/components/SwipeCardStack";

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans text-white relative overflow-hidden">
      {/* Translucent background grid */}

      <Navbar />
      <main className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 mt-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-tight">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-2">
              <span className="text-white">Grow</span>
              <span className="inline-flex justify-center items-center w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-slate-400 bg-gradient-to-b from-slate-700 to-black shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <span className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-slate-500 bg-slate-800"></span>
              </span>
              <span className="font-serif italic font-light text-slate-400">Your</span>
              <span className="text-white">Brand</span>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-2">
              <span className="block w-24 h-10 md:w-32 md:h-14 rounded-full bg-gradient-to-r from-blue-950 via-blue-800 to-black border border-blue-500/20 shadow-lg relative overflow-hidden">
                 <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.3),transparent_70%)]"></span>
              </span>
              <span className="font-serif italic font-light text-slate-300">&</span>
              <span className="text-white">Business</span>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
              <span className="font-serif italic font-light text-slate-400">With Our</span>
              <span className="text-white">Team</span>
              <span className="block w-24 h-10 md:w-32 md:h-14 rounded-full bg-gradient-to-br from-slate-200 via-blue-400 to-blue-900 border border-white/20 shadow-lg relative overflow-hidden">
                 <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_40%,rgba(255,255,255,0.4)_45%,transparent_50%)]"></span>
              </span>
            </div>
          </h1>
          
          {/* Brand Strip */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-20 text-slate-500 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] border-t border-b border-white/5 py-8">
            <span>Nextmove</span>
            <span>Border</span>
            <span>Sitemark</span>
            <span>Penta</span>
            <span>Network</span>
            <span>Prolin</span>
          </div>
        </div>

        {/* Feature Section - Card Stack & Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32 relative">
          {/* Left Column: Stacked Cards - Swipeable Component */}
          <div className="md:pr-10">
             <SwipeCardStack />
          </div>
          
          {/* Right Column: Content */}
          <div className="pl-0 md:pl-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Your Digital Partner</h2>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              We specialize in creating impactful digital experiences, developing customized strategies that elevate brands, drive targeted traffic, and deliver measurable results to help businesses grow.
            </p>
            
            <div className="space-y-5 mb-10">
              {['Innovative Problem Solvers', 'Results-Driven Strategies', 'Creative Brand Builders'].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group/item">
                  <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center group-hover/item:bg-blue-600 transition-colors duration-300">
                    <Check size={14} className="text-blue-400 group-hover/item:text-white transition-colors" />
                  </div>
                  <span className="text-slate-300 text-lg font-medium">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-all transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Meet Our Team
            </button>
          </div>
        </div>


      </main>
    </div>
  );
}
