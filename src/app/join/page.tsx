import React from 'react';
import Navbar from '@/components/Navbar';

import Link from 'next/link';

const JoinPage = () => {
    // Reuse social data
    const socialLinks = [
        { 
            name: "Twitter", 
            icon: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z", 
            href: "https://x.com/laralabs_ai",
            viewBox: "0 0 24 24"
        },
        { 
            name: "Instagram", 
            icon: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 3.8 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6", 
            href: "#",
            viewBox: "0 0 24 24"
        },
        { 
            name: "LinkedIn", 
            icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z", 
            href: "#",
            viewBox: "0 0 24 24"
        },
        { 
            name: "YouTube", 
            icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", 
            viewBox: "0 0 24 24" 
        }
    ];

  return (
    <div className="min-h-screen text-white flex flex-col font-sans">
      <Navbar />


      <main className="flex-grow w-full px-[5%] md:px-[10%] pt-24 md:pt-32 pb-20 relative z-10">
        
        {/* TOP SECTION: Split Layout */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32 mb-12 md:mb-16 lg:mb-24 items-start">
            
            {/* Left Column: Pill & Headline */}
            <div className="flex flex-col items-start text-left">
                
                {/* Pill Badge - Aligned Top */}
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
                    <span className="text-sm font-medium text-white">Community Open!</span>
                </div>

                <h1 className="text-3xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1] text-white">
                    Join our <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                        Tech Community <br />
                        Today
                    </span>
                    <span className="text-blue-500 ml-2">*</span>
                </h1>
            </div>

            {/* Right Column: Description & Checkmarks & CTA */}
            {/* Added pt-14 to visually align the paragraph with the first line of the H1, skipping the pill height */}
            <div className="flex flex-col items-start text-left lg:pt-16">
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 max-w-lg">
                    Join in our tech community where we share marketing tips and AI usage in real businesses. We experiment with AI tools and write AI use cases.
                </p>

                {/* Checkmarks */}
                <div className="flex gap-8 mb-8 md:mb-12">
                    <div className="flex items-center gap-2">
                         <div className="w-5 h-5 flex items-center justify-center">
                             <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <span className="text-zinc-300 font-medium">Marketing Tips</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="w-5 h-5 flex items-center justify-center">
                             <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <span className="text-zinc-300 font-medium">AI Use Cases</span>
                    </div>
                </div>

                {/* Big CTA Button */}
                <button className="self-center md:self-start h-14 md:h-16 px-8 md:px-12 rounded-full bg-black border border-zinc-800 text-white text-base md:text-lg font-medium transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-zinc-900 hover:scale-105 active:scale-95">
                    Join Community
                </button>
            </div>
        </div>


        {/* BOTTOM SECTION: Wide Banner */}
        <div className="relative w-full rounded-[3rem] overflow-hidden border border-white/20 bg-white/10 backdrop-blur-2xl p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16 hover:bg-white/15 transition-colors group">
            
            <div className="flex flex-col items-start gap-4">
                <h3 className="text-4xl md:text-7xl font-medium text-white">Socials</h3>
                <p className="text-zinc-300 leading-tight text-lg md:text-2xl max-w-lg">
                    Follow our social medias to get more value out of it
                </p>
            </div>

            <div className="flex items-center gap-8 md:gap-12 w-full md:w-auto mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-white/10 md:border-none">
                {socialLinks.map((social) => (
                    <Link 
                        key={social.name} 
                        href={social.href || '#'} 
                        target="_blank"
                        className="text-zinc-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                    >
                        <svg className="w-8 h-8 md:w-12 md:h-12" fill="currentColor" viewBox={social.viewBox}>
                            <path d={social.icon} />
                        </svg>
                    </Link>
                ))}
            </div>
        </div>

      </main>
    </div>
  );
};

export default JoinPage;
