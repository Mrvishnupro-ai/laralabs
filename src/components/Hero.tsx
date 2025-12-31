import React from "react";
import Image from "next/image";
import Link from "next/link";
import pillImage from "../assets/pill.png"; // Ensure this path is correct based on your project structure
import ChatBox from "./ChatBox";

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-[10%] min-h-screen flex flex-col items-center text-center justify-center overflow-hidden">
            {/* Background Overlay for depth */}
            {/* Background Overlay for depth - Removed for seamless background */}
            {/* <div className="absolute inset-0 bg-black/10 z-0" /> */}

            {/* Badge Wrapper */}
            <div className="badge-wrapper relative z-10">
                <div className="line-decoration left"></div>
                <Image src={pillImage} alt="Success As A Service" className="h-12 w-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer" />
                <div className="line-decoration right"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl mb-4 leading-tight max-w-6xl relative z-10">
                <span className="font-geom">Are you</span> <span className="playfair-italic-custom bg-gradient-to-b from-[#3B82F6] to-[#BDE0FE] bg-clip-text text-transparent pr-[5px]">struggling</span> <span className="font-geom">to Integrate</span> <br className="hidden md:block" />
                <span className="font-geom">AI in your Business ?</span>
            </h1>

            {/* Subheading */}
            <div className="text-gray-200 mb-8 max-w-2xl space-y-1 relative z-10 font-serif text-lg md:text-xl tracking-wide">
                <p>We build digital workers that work for you.</p>
                <p>We design AI systems that think, learn, and scale with your business.</p>
            </div>

            {/* Input Field */}
            <ChatBox />

            {/* Buttons */}
            <div className="flex items-center gap-4 mb-16 z-10">
                <button suppressHydrationWarning className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                    Request a demo
                </button>
                <Link href="/coming-soon">
                    <button suppressHydrationWarning className="bg-white/10 text-white border border-white/10 px-8 py-3 rounded-full font-medium hover:bg-white/20 transition-colors backdrop-blur-md">
                        Learn More
                    </button>
                </Link>
            </div>

            {/* Trusted By / Technologies */}
            <div className="trusted-by-section z-10 w-full max-w-6xl mx-auto border-t border-white/5 pt-12">
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 font-semibold">Technologies we use to build AI Systems</p>

                <div className="logos-slide flex items-center">
                    {/* First Set of Logos */}
                    <div className="flex items-center gap-12 md:gap-20 px-10 min-w-max opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-blue-500 rotate-45"></div><span className="font-bold">Quantum</span></div>
                        <div className="flex items-center gap-2"><div className="w-4 h-4 border border-white rotate-45"></div><span className="font-bold">Echo Valley</span></div>
                        <div className="flex items-center gap-2"><span className="font-black tracking-widest">PULSE</span></div>
                        <div className="flex items-center gap-2"><div className="w-4 h-4 grid grid-cols-2 gap-0.5"><div className="bg-white/80"></div><div className="bg-white/80"></div><div className="bg-white/80"></div><div className="bg-white/80"></div></div><span className="font-bold">APEX</span></div>
                        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-white/80 rounded-full"></div><span className="font-bold">Celestial</span></div>
                    </div>
                    {/* Duplicate Set for Infinite Scroll - EXACT COPY */}
                    <div className="flex items-center gap-12 md:gap-20 px-10 min-w-max opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-blue-500 rotate-45"></div><span className="font-bold">Quantum</span></div>
                        <div className="flex items-center gap-2"><div className="w-4 h-4 border border-white rotate-45"></div><span className="font-bold">Echo Valley</span></div>
                        <div className="flex items-center gap-2"><span className="font-black tracking-widest">PULSE</span></div>
                        <div className="flex items-center gap-2"><div className="w-4 h-4 grid grid-cols-2 gap-0.5"><div className="bg-white/80"></div><div className="bg-white/80"></div><div className="bg-white/80"></div><div className="bg-white/80"></div></div><span className="font-bold">APEX</span></div>
                        <div className="flex items-center gap-2"><div className="w-4 h-4 bg-white/80 rounded-full"></div><span className="font-bold">Celestial</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
