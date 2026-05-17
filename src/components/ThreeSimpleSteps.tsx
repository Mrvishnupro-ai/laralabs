"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MessageSquare, Cpu, Rocket, ArrowRight } from 'lucide-react';
import img1 from '../assets/elements/7.png';
import img2 from '../assets/elements/8.png';
import img3 from '../assets/elements/9.png';
import glass1 from '../assets/glass-elements/1.png';
import glass2 from '../assets/glass-elements/2.png';
import glass3 from '../assets/glass-elements/3.png';

const ThreeSimpleSteps: React.FC = () => {
    const router = useRouter();
    const steps = [
        {
            id: 1,
            label: "Step 01",
            title: "Tell us what you need",
            description: "We start by understanding your business from the ground level using first principle thinking.",
            image: img1,
            glassImage: glass1,
            icon: MessageSquare
        },
        {
            id: 2,
            label: "Step 02",
            title: "We plan the right system",
            description: "We break the problem into simple steps and design an AI system that fits your work and goals.",
            image: img2,
            glassImage: glass2,
            icon: Cpu
        },
        {
            id: 3,
            label: "Step 03",
            title: "Build and deploy with control",
            description: "We build a custom system with security, accuracy, and risks, then deploy it for daily use.",
            image: img3,
            glassImage: glass3,
            icon: Rocket
        }
    ];

    return (
        <section className="pt-0 pb-[30px] md:pt-10 md:pb-10 px-[5%] md:px-[10%] max-md:px-4 w-full relative overflow-hidden">
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
                `}
            </style>

            {/* Background Ambience */}
            <div
                className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-[#4169E1] opacity-[0.08] blur-[100px] rounded-full pointer-events-none"
                style={{ animation: 'moveVertical 8s infinite alternate' }}
            />
            <div
                className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] bg-[#8A2BE2] opacity-[0.08] blur-[100px] rounded-full pointer-events-none"
                style={{ animation: 'moveHorizontal 10s infinite alternate' }}
            />

            <div className="relative z-10 flex flex-col items-center w-full ">
                {/* Section Heading */}
                <h2 className="font-playfair text-3xl md:text-7xl font-bold text-center text-white mb-8 md:mb-16 leading-tight drop-shadow-lg max-md:text-2xl max-md:mb-6">
                    <span className="bg-gradient-to-r from-[#FFFFFF] to-[#C0C0C0] bg-clip-text text-transparent italic">
                        How we Design the Solution
                    </span>
                </h2>


                {/* Desktop View */}
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`group relative flex flex-col items-start p-6 md:p-10 max-md:p-3 rounded-[24px] md:rounded-[32px] 
                         bg-transparent border border-white/10 overflow-hidden
                         transition-all duration-500 hover:border-white/20 hover:shadow-2xl
                         ${index === 0 ? 'md:row-span-2 min-h-[140px] md:min-h-[500px] justify-end' : 'justify-center min-h-[140px] md:min-h-[260px]'}`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 max-md:inset-x-4 z-0 opacity-60 transition-opacity duration-500 group-hover:opacity-40">
                                <Image
                                    src={step.image}
                                    alt="Background"
                                    fill
                                    className={`max-md:object-contain object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500
                                        ${index === 0 ? 'max-md:object-left' : ''}
                                        ${index === 1 ? 'max-md:object-right' : ''}
                                        ${index === 2 ? 'max-md:object-left' : ''}
                                    `}
                                />
                            </div>

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/100 via-black/50 to-transparent opacity-80" />

                            {/* Content Wrapper */}
                            <div className="relative z-30 flex flex-col gap-2 mt-auto">
                                <h3 className="font-sans text-[32px] md:text-[36px] leading-[1.1] font-bold text-white tracking-wide drop-shadow-md max-md:text-lg max-md:leading-tight">
                                    {step.title}
                                </h3>

                                <p className="font-montserrat text-white/70 text-[16px] leading-[1.6] max-w-[90%] mb-2 max-md:text-[10px] max-md:leading-tight max-md:mb-0">
                                    {step.description}
                                </p>
                                
                                <Link 
                                    href="/about" 
                                    className="mt-4 px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-semibold inline-flex items-center gap-2 transition-all hover:bg-white/20 hover:scale-105 w-fit"
                                >
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile View - List Style Inspired by "Online Branding Mistakes" */}
                <div className="flex md:hidden flex-col gap-4 w-full mt-2">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex items-center bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-[16px] p-3 gap-3 overflow-hidden backdrop-blur-sm shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                            {/* Left Box with Image/Icon */}
                            <div className="flex-shrink-0 w-[80px] h-[80px] bg-white/5 rounded-[12px] flex items-center justify-center relative overflow-hidden">
                                <Image 
                                    src={step.glassImage} 
                                    alt={step.title}
                                    width={60}
                                    height={60}
                                    className="object-contain relative z-10"
                                />
                            </div>
                            
                            {/* Text Content */}
                            <div className="flex-1 min-w-0 py-1">
                                <h3 className="text-white font-serif text-lg leading-tight mb-1 tracking-wide">{step.title}</h3>
                                <p className="text-gray-400 text-xs font-sans leading-snug">{step.description}</p>
                            </div>

                            {/* Decorative Glow */}
                            <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-500/10 blur-[30px] rounded-full pointer-events-none"></div>
                        </div>
                    ))}

                    {/* Learn More Button - Mobile Only */}
                    {/* Learn More Button - Mobile Only */}
                    <div className="flex justify-center mt-2 w-full">
                        <button 
                            onClick={() => router.push('/about')}
                            className="w-full py-3 bg-white/5 border border-white/20 text-white font-sans font-medium rounded-full backdrop-blur-sm hover:bg-white/10 transition-colors shadow-lg active:scale-95"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThreeSimpleSteps;
