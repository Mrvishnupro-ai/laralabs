import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, Sparkles, Zap } from "lucide-react";
import founderImg from "@/assets/services-cards/founder.jpg";
import businessImg from "@/assets/services-cards/business.jpg";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen font-sans">
      <Navbar />
      <main className="min-h-screen text-white pb-20 overflow-hidden">
      
      {/* 1. Hero Section */}
      <section className="relative w-full px-[5%] md:px-[10%] pt-24 md:pt-32 pb-12 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20">
          
          {/* Left Column: Text */}
          <div className="flex flex-col justify-between z-10 h-full">
            <div>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1]">
                <span className="block text-white drop-shadow-sm">We build the</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500">workforce of the future.</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100/80 mb-8 md:mb-10 max-w-md leading-relaxed font-light">
                Intelligent digital workers that automate complex workflows, so you can focus on what matters.
              </p>
              <div className="flex flex-row items-center gap-3 md:gap-6">
                <Link 
                  href="/join" 
                  className="group relative inline-flex items-center gap-2 px-4 py-2.5 md:px-8 md:py-4 bg-white text-black hover:bg-gray-200 text-xs md:text-base font-bold rounded-full transition-all hover:scale-105 active:scale-95"
                >
                  Start Automating
                  <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300"/>
                </Link>
                <Link 
                  href="/services" 
                  className="text-gray-400 hover:text-white font-medium text-xs md:text-lg flex items-center gap-2 transition-colors group px-2 py-2"
                >
                  Explore our services
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100"/>
                </Link>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="w-full border-t border-white/10 pt-8 mt-8 md:mt-12 pb-2">
               <div className="grid grid-cols-3 divide-x divide-white/10 border-white/10">
                  {[
                    { label: "UP TO", val: "10X", desc: "Faster Execution" },
                    { label: "UP TO", val: "80%", desc: "Cost Reduction" },
                    { label: "ZERO", val: "0%", desc: "Error Rate" },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col px-2 md:px-6 first:pl-0 last:pr-0">
                       <span className="text-[9px] md:text-[10px] tracking-widest text-gray-500 uppercase font-semibold mb-1">{stat.label}</span>
                       <span className="text-2xl md:text-3xl font-serif text-white font-medium mb-1">{stat.val}</span>
                       <span className="text-[10px] md:text-xs text-gray-400 font-light leading-tight">{stat.desc}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          {/* Right Column: Bento Grid Side Component */}
          <div className="w-full relative z-10 mt-8 lg:mt-0">
             <div className="grid grid-cols-2 gap-3 md:gap-4">
                
                {/* Column 1 */}
                <div className="flex flex-col gap-4">
                    {/* 3. White Metric (Short) */}
                    <div className="bg-gradient-to-br from-white/10 to-gray-400/10 backdrop-blur-md border border-white/10 md:border-none md:bg-[#e4e4e7] p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] h-auto aspect-square md:aspect-auto md:h-[200px] flex flex-col justify-between relative overflow-hidden group hover:brightness-110 transition-all">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 md:bg-white flex items-center justify-center shadow-sm">
                            <Zap size={16} className="text-white md:text-black" />
                        </div>
                        <div>
                             <h3 className="text-xl md:text-3xl font-bold text-white md:text-black mb-1">100+</h3>
                             <p className="text-gray-300 md:text-black/70 text-[10px] md:text-sm font-semibold leading-tight">Digital Workers Deployed</p>
                        </div>
                    </div>

                    {/* 2. Orange Image (Tall) */}
                    <div className="hidden md:block relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-[300px] md:h-[420px] group border border-white/5">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-gray-900 z-0" />
                        {/* Simulated Image Content */}
                        <Image 
                            src={businessImg} 
                            alt="Process" 
                            fill 
                            className="object-cover mix-blend-overlay opacity-60 grayscale group-hover:scale-110 transition-transform duration-700" 
                        />
                         <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-white font-bold text-lg leading-tight">Complex Logic Handling</p>
                        </div>
                    </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-4">
                     {/* 4. Blue Image (Tall) */}
                    <div className="hidden md:block relative rounded-[1.5rem] md:rounded-[2rem] overflow-hidden h-[300px] md:h-[420px] group border border-white/5">
                         {/* Fallback color/image */}
                         <div className="absolute inset-0 bg-blue-600" />
                         <Image 
                            src={founderImg} 
                            alt="Founder" 
                            fill 
                            className="object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                         {/* Glossy Overlay */}
                         <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-80" />
                    </div>

                    {/* 6. Dark Metric (Short) */}
                     {/* 6. Dark Metric (Short) */}
                     <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 backdrop-blur-md border border-blue-500/20 md:border-white/10 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] h-auto aspect-square md:aspect-auto md:h-[200px] flex flex-col justify-between relative overflow-hidden group hover:border-white/20 transition-colors">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                            <Sparkles size={16} className="text-white" />
                        </div>
                        <div>
                             <h3 className="text-xl md:text-3xl font-bold text-white mb-1">500+</h3>
                             <p className="text-gray-400 text-[10px] md:text-sm font-medium leading-tight">Work hours saved for teams</p>
                        </div>
                    </div>
                </div>

             </div>
          </div>

        </div>
      </section>

      {/* 2 & 3. Problem & Solution Unified */}
      <section className="w-full px-[5%] md:px-[10%] py-12 md:py-24 border-b border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-y-12 md:gap-y-24">
          
          {/* Left: The Problem */}
          <div className="flex flex-col space-y-6 md:space-y-8">
             <div>
                <span className="text-blue-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-3 md:mb-4 block font-semibold">The Context</span>
                <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">The core problem.</h2>
                <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md">
                  Businesses are drowning in repetitive tasks that stifle creativity and slow down growth. 
                </p>
             </div>
             
             <div className="space-y-4 pt-4">
                {[
                  "Human talent is wasted on data entry and copy-pasting.",
                  "Scaling operations linearly requires hiring more people.",
                  "Efficiency hits a ceiling with manual workflows."
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-5 bg-white/5 backdrop-blur-md border border-white/5 p-5 rounded-2xl hover:border-white/10 transition-colors shadow-lg">
                     <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                         <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                     </div>
                    <p className="text-lg text-gray-300 font-medium">{point}</p>
                  </div>
                ))}
            </div>
          </div>

          {/* Right: The Solution (Methodical Precision) */}
          <div className="flex flex-col space-y-6 md:space-y-8 relative pl-0 lg:pl-16 lg:border-l border-white/5">
             <div>
                <span className="text-blue-500 font-mono text-xs md:text-sm tracking-[0.2em] uppercase mb-3 md:mb-4 block font-semibold">Our Answer</span>
                <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6">Methodical Precision.</h2>
                <div className="prose prose-invert prose-lg text-gray-400 leading-relaxed font-light space-y-4">
                  <p>
                    We don't just "add AI" to your business. We deconstruct your entire operation, identify the bottlenecks, and engineer custom digital workers to handle them.
                  </p>
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { num: "01", title: "Audit", desc: "Map every step of your workflow." },
                  { num: "02", title: "Architect", desc: "Design the ideal automated state." },
                  { num: "03", title: "Build", desc: "Construct and integrate digital workers." },
                  { num: "04", title: "Evolve", desc: "Continuous performance optimization." }
                ].map((step, idx) => (
                  <div key={idx} className="group p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300 shadow-md h-[130px] flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-1">
                        <span className="text-2xl md:text-3xl font-bold text-white/20 group-hover:text-blue-500/40 transition-colors font-mono">{step.num}</span>
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{step.title}</h3>
                    </div>
                    <p className="text-gray-500 text-sm group-hover:text-gray-400 transition-colors font-light leading-snug">{step.desc}</p>
                  </div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* 4. What We Build */}


      {/* 7 & 8. Team Stats & Vision Combined */}
      <section className="w-full px-[5%] md:px-[10%] py-12 md:py-24 relative overflow-hidden">
        <div className="w-full border border-white/10 rounded-[2.5rem] bg-black/40 backdrop-blur-md p-8 md:p-16 relative">
             {/* Subtle internal glow for the frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent rounded-[2.5rem] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left: Team Snapshot */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-white">Built by Humans & AI</h2>
                <p className="text-gray-400 max-w-xl text-base md:text-lg mb-8 md:mb-12 font-light">
                We practice what we preach. LaraLabs is run by a lean, cross-functional team supported by an army of digital workers.
                </p>
                
                <div className="flex flex-row gap-8 md:gap-12">
                <div className="flex flex-col items-center lg:items-start gap-1 md:gap-2 group cursor-default">
                    <span className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tight group-hover:scale-105 transition-transform duration-500">100+</span>
                    <span className="text-blue-300 uppercase tracking-widest text-[10px] md:text-sm font-semibold">AI Digital Workers</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-1 md:gap-2 group cursor-default">
                    <span className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tight group-hover:scale-105 transition-transform duration-500">Human</span>
                    <span className="text-blue-300 uppercase tracking-widest text-[10px] md:text-sm font-semibold">Functional Team</span>
                </div>
                </div>
            </div>

            {/* Right: Vision Quote */}
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left relative pl-0 lg:pl-10 lg:border-l border-white/10">
                <div className="relative max-w-xl">
                <span className="absolute -top-12 -left-4 text-9xl text-white/5 font-serif font-bold -z-10 select-none">"</span>
                <p className="text-2xl md:text-4xl font-medium text-white leading-tight mb-8 drop-shadow-lg pt-4">
                    The future belongs to those who collaborate with intelligence, not those who compete with it.
                </p>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-transparent mx-auto lg:mx-0 rounded-full" />
                </div>
            </div>

            </div>
        </div>
      </section>

      {/* 9. Final CTA Section */}
      <section className="w-full pt-10 pb-16 md:pb-30 relative overflow-hidden">
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20 z-0" />
        <div className="absolute inset-0 bg-[url('/bg-stars.png')] opacity-20" /> {/* Assuming a subtle texture exists or generic noise */}
        
        <div className="relative z-10 w-full px-[5%] md:px-[10%] flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-7xl font-bold text-white mb-4 md:mb-6 tracking-tight drop-shadow-xl">
             Ready to evolve?
          </h2>
          <p className="text-base md:text-xl text-blue-100/70 mb-8 md:mb-12 max-w-lg font-light">
            Stop wasting time on the mundane. Let's build your workforce of tomorrow.
          </p>
          
          <Link 
            href="/contact" 
            className="group relative inline-flex items-center gap-2 px-6 py-3 md:gap-3 md:px-10 md:py-5 bg-white text-black hover:bg-gray-100 rounded-full font-bold text-sm md:text-lg transition-all hover:scale-105"
          >
            Free 30-minute AI Growth Consultation
            <ArrowUpRight size={16} className="md:w-5 md:h-5 group-hover:rotate-45 transition-transform duration-300"/>
          </Link>
        </div>
      </section>

      </main>
    </div>
  );
}
