"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import service1 from "../assets/services/1.png";
import service2 from "../assets/services/2.png";
import service3 from "../assets/services/3.png";
import service4 from "../assets/services/4.png";
import service5 from "../assets/services/5.png";
import service6 from "../assets/services/6.png";
import service7 from "../assets/services/7.png";
import service8 from "../assets/services/8.png";
import service9 from "../assets/services/9.png";
import service10 from "../assets/services/10.png";

interface ServiceData {
  id: number;
  title: string;
  description: string;
  image: any;
  tag: string;
}

const servicesDataList: ServiceData[] = [
  {
    id: 1,
    title: "Free AI Growth Audit (Lead Magnet)",
    description: "Identify key opportunities for AI integration and growth.",
    image: service1,
    tag: "Audit",
  },
  {
    id: 2,
    title: "AI Chatbots for Lead Capture & Sales",
    description: "Automate interactions and convert visitors 24/7.",
    image: service2,
    tag: "Chatbots",
  },
  {
    id: 3,
    title: "AI Content Generation System",
    description: "Scale your content production across all channels.",
    image: service3,
    tag: "Content",
  },
  {
    id: 4,
    title: "Social Media Automation",
    description: "Streamline management and boost engagement.",
    image: service4,
    tag: "Social",
  },
  {
    id: 5,
    title: "AI-Powered Marketing Funnels",
    description: "Optimize customer journeys for higher conversion.",
    image: service5,
    tag: "Funnels",
  },
  {
    id: 6,
    title: "Custom AI Agents for Operations",
    description: "Tailored agents to automate complex business workflows.",
    image: service6,
    tag: "Operations",
  },
  {
    id: 7,
    title: "Lead Follow-up & CRM Automation",
    description: "Never lose a lead with automated nurturing systems.",
    image: service7,
    tag: "CRM",
  },
  {
    id: 8,
    title: "AI Website & Landing Pages",
    description: "High-performance sites designed for conversion.",
    image: service8,
    tag: "Web",
  },
  {
    id: 9,
    title: "RAG-Based Knowledge Bots",
    description: "Intelligent assistants trained on your internal data.",
    image: service9,
    tag: "Knowledge",
  },
  {
    id: 10,
    title: "AI Voice Agents & Call Automation",
    description: "Smart voice solutions for handling calls at scale.",
    image: service10,
    tag: "Voice",
  },
];

// 4 Sets of data for the loop
const servicesData = [
    ...servicesDataList, 
    ...servicesDataList, 
    ...servicesDataList, 
    ...servicesDataList
];

export default function ServicesSwipeCardStack() {
  return (
    <div className="relative w-full pt-4 pb-0 overflow-hidden flex flex-col justify-center">
      
      {/* Background Glow - Subtle & Merged with page BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none z-0" />



      {/* Scrolling Track Container with Width Constraint & Edge Masking */}
      <div className="relative w-full max-w-[95vw] 2xl:max-w-[1600px] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_20%,black_80%,black_95%,transparent)]">
        <div className="flex relative z-10 w-full">
            <motion.div
                className="flex" 
                animate={{
                x: ["0%", "-25%"] 
                }}
                transition={{
                    ease: "linear",
                    duration: 60,
                    repeat: Infinity,
                }}
            >
                {servicesData.map((card, index) => (
                    <SimpleCard key={`${card.id}-${index}`} data={card} />
                ))}
            </motion.div>
        </div>
      </div>
    </div>
  );
}

function SimpleCard({ data }: { data: ServiceData }) {
    // Generate formatted number like #01, #02...
    const formattedNumber = `#${data.id.toString().padStart(2, '0')}`;

    return (
        <div className="relative flex-shrink-0 w-[280px] mr-4 group cursor-pointer flex flex-col">
             {/* Image Card */}
             <div className="w-full h-[360px] rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 relative transition-transform duration-500 hover:-translate-y-4 shadow-lg hover:shadow-blue-900/20">
                 <Image 
                    src={data.image} 
                    alt={data.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                    draggable={false}
                 />
                 {/* Inner Gradient for depth */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
                 
                 {/* Overlay Content */}
                 <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
                    <p className="text-sm font-bold text-blue-400 mb-1 tracking-widest translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">{formattedNumber}</p>
                    <h3 className="text-xl font-medium text-white tracking-wide leading-tight">{data.title}</h3>
                 </div>
             </div>
        </div>
    )
}
