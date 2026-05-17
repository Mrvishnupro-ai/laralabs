import React from "react";
import Image from "next-image-export-optimizer";
import Link from "next/link";
import pillImage from "../assets/pill.png"; // Ensure this path is correct based on your project structure

import ChatBox from "./ChatBox";
import LogoTicker from "./LogoTicker";

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32 pb-[30px] px-[5%] md:px-[10%] min-h-[auto] md:min-h-screen flex flex-col items-center text-center justify-center overflow-hidden">
      {/* Background Overlay for depth */}
      {/* Background Overlay for depth - Removed for seamless background */}
      {/* <div className="absolute inset-0 bg-black/10 z-0" /> */}

      {/* Badge Wrapper */}
      <div className="badge-wrapper relative z-10">
        <div className="line-decoration left"></div>
        <Image
          src={pillImage}
          alt="Success As A Service"
          className="h-6 md:h-12 w-auto object-contain hover:scale-105 transition-transform duration-300 cursor-pointer"
        />
        <div className="line-decoration right"></div>
      </div>

      {/* Main Heading */}
      <h1 className="text-3xl md:text-6xl lg:text-7xl mb-4 leading-tight max-w-6xl relative z-10">
        <span className="font-geom">Are you</span>{" "}
        <span className="playfair-italic-custom bg-gradient-to-b from-[#3B82F6] to-[#BDE0FE] bg-clip-text text-transparent pr-[5px]">
          struggling
        </span>{" "}
        <span className="font-geom">to Integrate</span>{" "}
        <br className="hidden md:block" />
        <span className="font-geom">AI in your Business ?</span>
      </h1>

      {/* Subheading */}
      <div className="text-gray-200 mb-8 max-w-2xl space-y-1 relative z-10 font-serif text-sm md:text-xl tracking-wide">
        <p>We build digital workers that work for you.</p>
        <p>
          We design AI systems that think, learn, and scale with your business.
        </p>
      </div>

      {/* Input Field */}
      <ChatBox />

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-8 z-10">
        <Link href="/contact">
          <button
            suppressHydrationWarning
            className="bg-white text-black px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Request a demo
          </button>
        </Link>
        <Link href="/services">
          <button
            suppressHydrationWarning
            className="bg-white/10 text-white border border-white/10 px-6 py-2 md:px-8 md:py-3 text-sm md:text-base rounded-full font-medium hover:bg-white/20 transition-colors backdrop-blur-md"
          >
            Learn More
          </button>
        </Link>
      </div>

      {/* Trusted By / Technologies */}
      <LogoTicker />
    </section>
  );
}
