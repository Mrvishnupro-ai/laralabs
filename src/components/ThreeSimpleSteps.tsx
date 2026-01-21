"use client";

import React from 'react';
import Image from 'next/image';
import img1 from '../assets/elements/7.png';
import img2 from '../assets/elements/8.png';
import img3 from '../assets/elements/9.png';

const ThreeSimpleSteps: React.FC = () => {
    const steps = [
        {
            id: 1,
            label: "Step 01",
            title: "Tell us what you need",
            description: "We start by understanding your business from the ground level using first principle thinking.",
            image: img1
        },
        {
            id: 2,
            label: "Step 02",
            title: "We plan the right system",
            description: "We break the problem into simple steps and design an AI system that fits your work and goals.",
            image: img2
        },
        {
            id: 3,
            label: "Step 03",
            title: "Build and deploy with control",
            description: "We build a custom system with security, accuracy, and risks, then deploy it for daily use.",
            image: img3
        }
    ];

    return (
        <section className="pt-10 pb-10 px-[10%] w-full relative overflow-hidden">
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
                <h2 className="font-playfair text-5xl md:text-7xl font-bold text-center text-white mb-16 leading-tight drop-shadow-lg">
                    <span className="bg-gradient-to-r from-[#FFFFFF] to-[#C0C0C0] bg-clip-text text-transparent italic">
                        How we Design the Solution
                    </span>
                </h2>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    {steps.map((step, index) => (
                        <div
                            key={step.id}
                            className={`group relative flex flex-col items-start p-10 rounded-[32px] 
                         bg-transparent border border-white/10 overflow-hidden
                         transition-all duration-500 hover:border-white/20 hover:shadow-2xl
                         ${index === 0 ? 'md:row-span-2 min-h-[500px] justify-end' : 'justify-center min-h-[260px]'}`}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0 opacity-60 transition-opacity duration-500 group-hover:opacity-40">
                                <Image
                                    src={step.image}
                                    alt="Background"
                                    fill
                                    className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                                />
                            </div>

                            {/* Gradient Overlay for Text Readability */}
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/100 via-black/50 to-transparent opacity-80" />





                            {/* Content Wrapper */}
                            <div className="relative z-30 flex flex-col gap-2 mt-auto">
                                <h3 className="font-sans text-[32px] md:text-[36px] leading-[1.1] font-bold text-white tracking-wide drop-shadow-md">
                                    {step.title}
                                </h3>

                                <p className="font-montserrat text-white/70 text-[16px] leading-[1.6] max-w-[90%] mb-2">
                                    {step.description}
                                </p>

                                {/* Learn More */}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ThreeSimpleSteps;
