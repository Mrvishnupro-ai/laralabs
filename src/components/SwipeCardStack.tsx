"use client";

import React from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

interface ServiceData {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string;
}

const originalData: ServiceData[] = [
  {
    id: 1,
    title: "Strategy",
    description: "Blueprint for digital success.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    tag: "Foundation",
  },
  {
    id: 2,
    title: "Design",
    description: "Crafting visual excellence.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    tag: "Core",
  },
  {
    id: 3,
    title: "Development",
    description: "Robust engineering solutions.",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop",
    tag: "Build",
  },
  {
    id: 4,
    title: "Launch",
    description: "Accelerating market impact.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    tag: "Growth",
  },
  {
    id: 5,
    title: "Analytics",
    description: "Data-driven decisions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    tag: "Insight",
  },
  {
    id: 6,
    title: "Support",
    description: "24/7 reliability.",
    image: "https://images.unsplash.com/photo-1553877615-30c730db5887?q=80&w=800&auto=format&fit=crop",
    tag: "Sustain",
  },
  {
    id: 7,
    title: "Scaling",
    description: "Global expansion ready.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    tag: "Scale",
  },
];

// 4 Sets of data for the loop
const servicesData = [
    ...originalData, 
    ...originalData, 
    ...originalData, 
    ...originalData
];

export default function SwipeCardStack() {
  return (
    <div className="relative w-full py-12 overflow-hidden flex flex-col justify-center">
      
      {/* Background Glow - Subtle & Merged with page BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none z-0" />



      {/* Scrolling Track */}
      <div className="flex relative z-10 w-full">
        <motion.div
            className="flex" 
            animate={{
               x: ["0%", "-25%"] 
            }}
            transition={{
                ease: "linear",
                duration: 60, // Slower duration as requested
                repeat: Infinity,
            }}
        >
             {servicesData.map((card, index) => (
                 <SimpleCard key={`${card.id}-${index}`} data={card} />
             ))}
        </motion.div>
      </div>
    </div>
  );
}

function SimpleCard({ data }: { data: ServiceData }) {
    // Generate formatted number like #01, #02...
    const formattedNumber = `#${data.id.toString().padStart(2, '0')}`;

    return (
        <div className="relative flex-shrink-0 w-[280px] mr-12 group cursor-pointer flex flex-col">
             {/* Image Card */}
             <div className="w-full h-[360px] rounded-[32px] overflow-hidden bg-[#0a0a0a] border border-white/10 relative transition-transform duration-500 hover:-translate-y-4 shadow-lg hover:shadow-blue-900/20">
                 <img 
                    src={data.image} 
                    alt={data.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                    draggable={false}
                 />
                 {/* Inner Gradient for depth */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                 
                 {/* Optional overlay content if needed, but per design most is below */}
             </div>

             {/* Content Below */}
             <div className="mt-6 text-center transition-opacity duration-300 opacity-70 group-hover:opacity-100">
                <p className="text-sm font-bold text-blue-500 mb-2 tracking-widest">{formattedNumber}</p>
                <h3 className="text-xl font-medium text-white tracking-wide">{data.title}</h3>
             </div>
        </div>
    )
}
