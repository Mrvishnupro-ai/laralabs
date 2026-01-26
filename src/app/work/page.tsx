import Navbar from "@/components/Navbar";
import React from "react";

export default function WorkPage() {
  return (
    <div className="min-h-screen text-white font-sans overflow-x-hidden selection:bg-blue-500/30">
      <Navbar />

      {/* DENSE BACKGROUND ELEMENTS */}

      <main className="relative z-10 w-full">
        
        {/* --- HERO SECTION (Halo Style) --- */}
        <section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-24 md:pt-32 mb-20 px-[5%] md:px-[10%] overflow-hidden">
          
          {/* MASSIVE BLUR BACKGROUND (The "Halo") */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] md:w-[1200px] h-[600px] md:h-[800px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none z-0 opacity-80 mix-blend-screen animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-[60%] -translate-y-[40%] w-[600px] h-[600px] bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none z-0"></div>



          {/* CENTRAL CONTENT */}
          <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
            
            {/* Main Title */}
            <h1 className="text-3xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl">
              Laralabs AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500 font-serif italic opacity-90">studio.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light">
              We develop custom AI solutions for innovative companies. <br className="hidden md:block"/>
              Automating workflows and building digital workers.
            </p>

            {/* Action Pill */}
            <div className="inline-flex items-center bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-full p-1.5 shadow-2xl shadow-blue-900/20">
              <a href="#" className="px-6 py-2.5 rounded-full text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 transition-all">
                Our Services
              </a>
              <a href="/contact" className="px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-500 transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                Contact Us
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>

          </div>



        </section>





        {/* --- INTRO TEXT SECTION --- */}
        <section className="relative max-w-7xl mx-auto mb-20 md:mb-40 px-6 z-10">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
             <div className="md:w-2/3">
                <h2 className="text-4xl md:text-6xl md:leading-[1.1] font-medium text-white mb-8">
                  We are a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 font-serif italic pr-2">creative collective</span> 
                  of event producers, marketing specialists, and strategic analysts.
                </h2>
             </div>
             <div className="md:w-1/3 pt-4">
               <div className="border-l-2 border-blue-500/50 pl-6">
                 <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                   Together, we create bespoke solutions for each brand, embracing high-impact creativity.
                 </p>
                 <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-[2rem] text-center border border-white/5 hover:bg-white/10 transition-colors">
                       <div className="text-2xl font-bold text-white">50+</div>
                       <div className="text-xs text-zinc-500 uppercase mt-1">Project</div>
                    </div>
                     <div className="bg-white/5 p-4 rounded-[2rem] text-center border border-white/5 hover:bg-white/10 transition-colors">
                       <div className="text-2xl font-bold text-white">12</div>
                       <div className="text-xs text-zinc-500 uppercase mt-1">Countries</div>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </section>


        {/* --- PROCESS SECTION (Restoring the Wavy Line but Better) --- */}
        <section className="relative min-h-[1400px] w-full max-w-6xl mx-auto py-20 px-4 overflow-hidden">
          
          {/* Header */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-blue-400 font-serif italic text-3xl z-20 bg-[#050505] px-4">
            process.
          </div>

          {/* Complex SVG Path (Restored & Improved) */}
          <div className="absolute top-20 left-0 w-full h-[1200px] pointer-events-none z-0 opacity-60">
             <svg className="w-full h-full visible lg:block hidden" viewBox="0 0 1000 1200" preserveAspectRatio="none">
               <defs>
                 <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                   <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
                   <stop offset="20%" stopColor="#3B82F6" stopOpacity="1" />
                   <stop offset="80%" stopColor="#3B82F6" stopOpacity="1" />
                   <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                 </linearGradient>
               </defs>
               
               {/* 
                  Curve Logic:
                  Start Top Center (500, 0)
                  1. Analysis Left (200, 250)
                  2. Concept Right (800, 500) with a loop
                  3. Visuals Left (250, 800)
                  4. Budgeting Center/Right (600, 1100)
               */}
               <path 
                 d="M 500 0 
                    Q 500 100, 500 150
                    C 500 250, 250 150, 200 300
                    S 100 500, 400 550
                    C 700 600, 800 400, 800 550
                    S 600 800, 300 850
                    C 100 880, 200 1000, 400 1050
                    S 700 1100, 600 1200"
                 fill="none" 
                 stroke="url(#lineGrad)" 
                 strokeWidth="1.5"
                 strokeDasharray="10 5"
               />
               
               {/* Decorative dots on curve */}
               <circle cx="200" cy="300" r="4" fill="#3B82F6" />
               <circle cx="800" cy="550" r="4" fill="#3B82F6" />
               <circle cx="300" cy="850" r="4" fill="#3B82F6" />
               <circle cx="600" cy="1200" r="4" fill="#3B82F6" />
             </svg>

              {/* Mobile Line (Simple) */}
             <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500 to-transparent"></div>
          </div>


          {/* --- STEPS (Positioned to match curve) --- */}
          
          {/* Step 1: Analysis (Left) */}
          <div className="relative w-full h-[300px] flex justify-start lg:pl-[5%]">
             <div className="lg:absolute left-[10%] top-[20%] w-[300px] lg:text-right pl-10 lg:pl-0">
                 <span className="text-blue-400 font-mono text-xs mb-2 block">STEP 01</span>
                 <h3 className="text-3xl font-bold text-white mb-4">Analysis</h3>
                 <div className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                     <p className="text-sm text-zinc-400">
                       We analyse your brand to identify the core message. Deep diving into market research and competitor analysis to find your unique angle.
                     </p>
                 </div>
             </div>
          </div>

          {/* Step 2: Concept (Right) */}
          <div className="relative w-full h-[300px] flex justify-start lg:justify-end lg:pr-[10%]">
             <div className="lg:absolute right-[15%] top-[10%] w-[350px] pl-10 lg:pl-0">
                 <div className="flex items-center gap-4 mb-2 lg:justify-end">
                    <span className="text-blue-400 font-mono text-xs">STEP 02</span>
                 </div>
                <h3 className="text-3xl font-bold text-white mb-4 lg:text-right">Concept</h3>
                 
                 {/* Image Card for Concept */}
                 <div className="relative bg-zinc-800 p-2 rounded-xl rotate-2 hover:rotate-0 transition-transform duration-300 w-full mb-4">
                    <div className="h-32 w-full bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg flex items-center justify-center overflow-hidden">
                       <span className="font-serif italic text-white/20 text-4xl">moodboard</span>
                    </div>
                 </div>

                <p className="text-sm text-zinc-400 lg:text-right">
                  Bringing ideas to life with visual mood boards. We iterate on concepts until we find the perfect match for your vision.
                </p>
             </div>
          </div>

          {/* Step 3: Visuals (Left) */}
          <div className="relative w-full h-[300px] flex justify-start lg:pl-[15%]">
             <div className="lg:absolute left-[18%] top-[10%] w-[320px] pl-10 lg:pl-0">
                 <span className="text-blue-400 font-mono text-xs mb-2 block">STEP 03</span>
                <h3 className="text-3xl font-bold text-white mb-4">Visuals & Manifesto</h3>
                <div className="border-l-2 border-blue-500 pl-6 py-2">
                   <p className="text-sm text-zinc-400">
                     We provide 3D visualisations and a manifesto to convey the key message. Every pixel is crafted with purpose.
                   </p>
                   <div className="mt-4 flex gap-2">
                      <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-white">3D RENDER</span>
                      <span className="text-[10px] bg-white/10 px-2 py-1 rounded text-white">COPYWRITING</span>
                   </div>
                </div>
             </div>
          </div>

          {/* Step 4: Budgeting (Center/Right) */}
           <div className="relative w-full h-[200px] flex justify-start lg:justify-center">
             <div className="lg:absolute lg:left-[55%] top-[10%] w-[300px] text-left pl-10 lg:pl-0">
                 <span className="text-blue-400 font-mono text-xs mb-2 block">STEP 04</span>
                <h3 className="text-3xl font-bold text-white mb-4">Budgeting</h3>
                <p className="text-sm text-zinc-400">
                  Transparent pricing with no hidden costs. We respect your budget and maximize value.
                </p>
             </div>
          </div>

        </section>

        {/* --- DENSITY BOOSTER: GLOWING DIVIDER --- */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50 mb-20"></div>

      </main>
    </div>
  );
}
