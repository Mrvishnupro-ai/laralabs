"use client";

import React from 'react';
import Image from 'next/image';
import cardImg1 from '../assets/card-image.png';
import cardImg2 from '../assets/card-image2.png';
import cardImg3 from '../assets/card-image3.png';
import cardImg4 from '../assets/card-image4.png';

const OurWork = () => {
    return (
        <section className="pt-10 pb-10 px-[10%] w-full box-border flex justify-center">
            <div className="relative w-full rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-[20px] p-6 text-center overflow-hidden shadow-2xl">

                {/* Background Ambient Gradients */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-1] pointer-events-none">
                    <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                    <div className="absolute bottom-[-20%] right-[20%] w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] mix-blend-screen" />
                </div>


                {/* Heading */}
                <h2 className="text-5xl md:text-7xl font-serif text-white mb-4 leading-tight">
                    Services <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-purple-300">We Provide</span>
                </h2>

                {/* Stats Grid */}
                {/* Bento Grid Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left border-t border-white/10 pt-6">

                    {/* Tall Card - Instant Talk */}
                    <div className="row-span-1 md:row-span-2 relative group overflow-hidden rounded-[24px] bg-white/5 border border-white/10 p-6 flex flex-col justify-end min-h-[600px] transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 opacity-50 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-70">
                            <Image src={cardImg1} alt="Instant Talk" fill className="object-cover" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/80 z-0" />
                        <div className="relative z-10">

                            <h3 className="text-3xl font-serif text-white mb-2">Marketing & Growth</h3>
                            <p className="text-gray-400 font-sans text-sm mb-4">Smarter marketing systems using AI to generate leads, run campaigns, and scale.</p>

                        </div>
                    </div>

                    {/* Square Card - Fine Details */}
                    <div className="relative group overflow-hidden rounded-[24px] bg-white/5 border border-white/10 p-6 flex flex-col justify-end min-h-[350px] transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-60">
                            <Image src={cardImg2} alt="Fine Details" fill className="object-cover" />
                        </div>
                        <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-blue-500/20 rounded-full blur-[60px]" />
                        <div className="relative z-10">
                            {/* <h5 className="text-xs font-sans uppercase tracking-widest text-blue-400 mb-2">Magic Pots</h5> */}
                            <h3 className="text-3xl font-serif text-white mb-2">Content Creation</h3>
                            <p className="text-gray-400 font-sans text-sm">AI powered content, creatives, and designs that match your brand and move fast.</p>
                        </div>
                    </div>

                    {/* Square Card - Encrypted Approach */}
                    <div className="relative group overflow-hidden rounded-[24px] bg-white/5 border border-white/10 p-6 flex flex-col justify-end min-h-[350px] transition-all duration-300 hover:bg-white/10 hover:scale-[1.02]">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-60">
                            <Image src={cardImg3} alt="Encrypted Approach" fill className="object-cover" />
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 to-transparent z-0" />
                        <div className="relative z-10">

                            {/* <h5 className="text-xs font-sans uppercase tracking-widest text-gray-500 mb-2">Top Notch Shots</h5> */}
                            <h3 className="text-2xl font-serif text-white mb-2">AI Development & Automation</h3>
                            <p className="text-gray-400 font-sans text-sm">Custom AI agents and automations built on your data to simplify operations.</p>

                        </div>
                    </div>

                    {/* Wide Card - Explore Features */}
                    <div className="md:col-span-2 relative group overflow-hidden rounded-[24px] bg-blue-800 border border-blue-800 p-6 flex items-center justify-between min-h-[250px] transition-all duration-300 hover:bg-blue-700">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-50">
                            <Image src={cardImg4} alt="Explore Features" fill className="object-cover" />
                        </div>
                        <div className="flex flex-col gap-2 z-10">
                            <h3 className="text-4xl font-serif text-white leading-tight">Explore<br />Features</h3>
                        </div>
                        <div className="absolute bottom-8 right-8 z-10 bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                        </div>

                        {/* Abstract Pattern overlay */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent)] opacity-50" />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default OurWork;
