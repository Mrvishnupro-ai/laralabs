"use client";

import React from 'react';
import Image from 'next/image';
import cardImage from '../assets/card-image4.png';

const RioCard: React.FC = () => {
    return (
        <section className="w-full px-[10%] py-20 flex justify-center">
            {/* Embedded styles for custom animations */}
            <style>
                {`
                @keyframes moveVertical {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(40px); }
                }
                @keyframes moveHorizontal {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-40px); }
                }
                @keyframes pulse-custom {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(1.2); opacity: 0.4; }
                }
                `}
            </style>

            <div className="relative w-full min-h-[600px] rounded-[24px] bg-transparent border border-[rgba(192,192,192,0.6)] border-t-[rgba(224,224,224,0.8)] border-l-[rgba(224,224,224,0.8)] shadow-[0_25px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 flex items-stretch justify-between p-0 max-md:flex-col max-md:p-10 max-md:text-center max-md:h-auto">

                {/* Noise Texture */}
                <div
                    className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none z-[2]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />

                {/* The Blurry Gradient Blobs - Aligned with Theme */}
                {/* 1. Purple Orb */}
                <div
                    className="absolute -top-[10%] -left-[10%] w-[450px] h-[450px] bg-[radial-gradient(circle,#000073_0%,transparent_70%)] blur-[80px] opacity-50 z-0"
                    style={{ animation: 'moveVertical 6s infinite alternate' }}
                ></div>

                {/* 2. Electric Silver Glow */}
                <div
                    className="absolute -bottom-[10%] right-[10%] w-[500px] h-[500px] bg-[radial-gradient(circle,#E0E7FF_0%,transparent_70%)] blur-[60px] opacity-30 z-0"
                    style={{ animation: 'moveHorizontal 7s infinite alternate' }}
                ></div>

                {/* 3. Royal Blue Accent */}
                <div
                    className="absolute top-[30%] left-[40%] w-[350px] h-[350px] bg-[radial-gradient(circle,#4169E1_0%,transparent_80%)] blur-[70px] opacity-40 z-0"
                    style={{ animation: 'pulse-custom 5s infinite alternate' }}
                ></div>

                <div className="flex-1 z-[3] max-w-[55%] p-[30px_50px_50px_50px] max-md:max-w-full max-md:mb-10 max-md:p-5 flex flex-col justify-center">
                    <div className="flex flex-col items-start max-md:items-center max-md:text-center">
                        <h2 className="font-playfair text-[56px] font-bold tracking-[-0.5px] mb-4 bg-gradient-to-b from-white via-white to-[#A0B0C0] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,200,255,0.2)] leading-[1.05]">
                            Meet Rio, Your Customer Agent.
                        </h2>
                        <h3 className="font-montserrat text-[24px] leading-[1.4] text-white/95 mb-5 font-medium">
                            Rio is a customer agent who resolves queries instantly 24/7.
                        </h3>
                        <ul className="list-none p-0 m-[0_0_24px_0] max-md:pl-0 max-md:list-inside">
                            <li className="font-montserrat text-[18px] leading-[1.5] text-white/90 mb-2.5 pl-7 relative font-normal max-md:pl-0 max-md:flex max-md:flex-col max-md:items-center">
                                <span className="absolute left-0 text-[#4169E1] text-[28px] leading-none -top-1 max-md:static max-md:mb-1">•</span>
                                Provide instant support across various channels.
                            </li>
                            <li className="font-montserrat text-[18px] leading-[1.5] text-white/90 mb-2.5 pl-7 relative font-normal max-md:pl-0 max-md:flex max-md:flex-col max-md:items-center">
                                <span className="absolute left-0 text-[#4169E1] text-[28px] leading-none -top-1 max-md:static max-md:mb-1">•</span>
                                Automate ticket resolution and repetitive inquiries.
                            </li>
                            <li className="font-montserrat text-[18px] leading-[1.5] text-white/90 mb-2.5 pl-7 relative font-normal max-md:pl-0 max-md:flex max-md:flex-col max-md:items-center">
                                <span className="absolute left-0 text-[#4169E1] text-[28px] leading-none -top-1 max-md:static max-md:mb-1">•</span>
                                Deliver seamless customer experiences around the clock.
                            </li>
                        </ul>
                        <div>
                            <button suppressHydrationWarning className="bg-gradient-to-b from-white to-[#D0D0D0] text-black py-4 px-9 rounded-xl border border-white/80 text-[16px] font-bold font-montserrat cursor-pointer transition-all duration-300 uppercase tracking-[0.5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_5px_15px_rgba(0,0,0,0.3)] hover:bg-gradient-to-b hover:from-white hover:to-[#E0E0E0] hover:-translate-y-0.5 hover:shadow-none">
                                CREATE YOUR CUSTOMER AGENT
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1 z-[3] flex justify-end items-end h-full pr-[0px] max-md:justify-center max-md:w-full max-md:mt-10 max-md:pr-0">
                    {/* Using Next.js Image for optimization */}
                    <Image src={cardImage} alt="Customer Agent Interface" className="max-w-[75%] h-auto max-md:max-w-full" />
                </div>
            </div>
        </section>
    );
};

export default RioCard;

