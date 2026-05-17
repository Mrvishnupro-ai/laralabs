"use client";

import React from 'react';
import Image from 'next/image';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import cardImage from '../assets/card-image.png';

interface CardProps {
    onNext?: () => void;
    onPrev?: () => void;
}

const BigGradientCard: React.FC<CardProps> = ({ onNext, onPrev }) => {
    return (
        <section className="w-full px-[10%] max-md:px-4 py-8 max-md:py-0 flex justify-center">
            {/* Embedded styles for custom animations that are hard to do purely with Tailwind utilities */}
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

            <div className="relative w-full min-h-[600px] rounded-[24px] bg-transparent border border-[rgba(192,192,192,0.6)] border-t-[rgba(224,224,224,0.8)] border-l-[rgba(224,224,224,0.8)] shadow-[0_25px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 flex items-stretch justify-between p-0 max-md:block max-md:relative max-md:p-4 max-md:h-auto max-md:min-h-[420px]">
                {/* Navigation Buttons */}
                <div className="absolute top-6 right-6 flex gap-3 md:hidden z-[60]">
                    <button 
                        onClick={onPrev}
                        suppressHydrationWarning
                        className="p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all cursor-pointer group/arrow"
                        aria-label="Previous Card"
                    >
                        <ArrowLeft className="w-5 h-5 text-white group-hover/arrow:-translate-x-0.5 transition-transform" />
                    </button>

                    <button 
                        onClick={onNext}
                        suppressHydrationWarning
                        className="p-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all cursor-pointer group/arrow"
                        aria-label="Next Card"
                    >
                        <ArrowRight className="w-5 h-5 text-white group-hover/arrow:translate-x-0.5 transition-transform" />
                    </button>
                </div>

                {/* Noise Texture */}
                <div
                    className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none z-[2]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                    }}
                />

                {/* The Blurry Gradient Blobs */}
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

                <div className="relative flex-1 z-[20] max-w-[55%] p-[30px_50px_50px_50px] max-md:max-w-[60%] max-md:p-2 flex flex-col justify-center max-md:justify-start max-md:mt-4">
                    <div className="flex flex-col items-start max-md:items-start max-md:w-full">
                        <h2 className="font-playfair text-3xl md:text-6xl font-bold tracking-[-0.5px] mb-3 bg-gradient-to-b from-white via-white to-[#A0B0C0] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,200,255,0.2)] leading-[1.1] max-md:text-2xl max-md:mb-2">
                            Meet Lara Your First Digital Worker.
                        </h2>
                        <h3 className="font-montserrat text-[16px] md:text-[24px] leading-[1.4] text-white/95 mb-5 font-medium max-md:max-w-[95%] max-md:text-xs max-md:mb-3">
                            Lara is a digital worker built to automate your chaos.
                        </h3>
                        <ul className="list-none p-0 m-[0_0_24px_0] max-md:flex max-md:flex-col max-md:gap-1.5 max-md:mb-4">
                            <li className="font-montserrat md:text-[18px] text-[14px] leading-[1.5] text-white/90 relative font-normal max-md:flex max-md:items-center max-md:gap-2 max-md:bg-white/5 max-md:border max-md:border-white/10 max-md:rounded-full max-md:px-2.5 max-md:py-1 max-md:w-fit max-md:text-xs md:pl-7 md:mb-2.5">
                                <CheckCircle className="text-[#4169E1] w-5 h-5 flex-shrink-0 md:hidden max-md:w-3.5 max-md:h-3.5" />
                                <span className="hidden md:block absolute left-0 text-[#4169E1] text-[28px] leading-none -top-1">•</span>
                                Syncs your CRM, answers customer queries<span className="hidden md:inline">, and chases follow ups</span>.
                            </li>
                            <li className="font-montserrat md:text-[18px] text-[14px] leading-[1.5] text-white/90 relative font-normal max-md:flex max-md:items-center max-md:gap-2 max-md:bg-white/5 max-md:border max-md:border-white/10 max-md:rounded-full max-md:px-2.5 max-md:py-1 max-md:w-fit max-md:text-xs md:pl-7 md:mb-2.5">
                                <CheckCircle className="text-[#4169E1] w-5 h-5 flex-shrink-0 md:hidden max-md:w-3.5 max-md:h-3.5" />
                                <span className="hidden md:block absolute left-0 text-[#4169E1] text-[28px] leading-none -top-1">•</span>
                                Connects your apps and automates <span className="hidden md:inline">your </span>workflows.
                            </li>
                            <li className="font-montserrat md:text-[18px] text-[14px] leading-[1.5] text-white/90 relative font-normal max-md:flex max-md:items-center max-md:gap-2 max-md:bg-white/5 max-md:border max-md:border-white/10 max-md:rounded-full max-md:px-2.5 max-md:py-1 max-md:w-fit max-md:text-xs md:pl-7 md:mb-2.5">
                                <CheckCircle className="text-[#4169E1] w-5 h-5 flex-shrink-0 md:hidden max-md:w-3.5 max-md:h-3.5" />
                                <span className="hidden md:block absolute left-0 text-[#4169E1] text-[28px] leading-none -top-1">•</span>
                                Takes on repetitive tasks like support tickets<span className="hidden md:inline"> and reporting</span>.
                            </li>
                        </ul>
                        <div className="relative z-[50]">
                            <Link href="/contact" className="w-full md:w-auto">
                                <button suppressHydrationWarning className="bg-gradient-to-b from-white to-[#D0D0D0] text-black py-3 md:py-4 px-6 md:px-9 rounded-xl border border-white/80 text-[14px] md:text-[16px] font-bold font-montserrat cursor-pointer transition-all duration-300 uppercase tracking-[0.5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_5px_15px_rgba(0,0,0,0.3)] hover:bg-gradient-to-b hover:from-white hover:to-[#E0E0E0] hover:-translate-y-0.5 hover:shadow-none w-full md:w-auto max-md:py-2.5 max-md:px-4 max-md:text-xs max-md:rounded-lg">
                                    GET A CUSTOM AGENT LIKE LARA
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-1 z-[3] flex justify-end items-end h-full pr-[20px] max-md:absolute max-md:bottom-0 max-md:right-0 max-md:w-[60%] max-md:pr-0">
                    {/* Using Next.js Image for optimization */}
                    <Image src={cardImage} alt="AI Interface" className="w-[78%] h-auto max-md:w-full" />
                </div>
            </div>
        </section>
    );
};

export default BigGradientCard;
