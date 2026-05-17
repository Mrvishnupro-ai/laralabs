"use client";

import { motion, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next-image-export-optimizer";
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  tag: string;
}

const servicesDataList: ServiceData[] = [
  {
    id: 6,
    title: "Custom AI Agents for Operations",
    description: "Tailored agents to automate complex business workflows.",
    image: service6,
    tag: "Operations",
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
  {
    id: 2,
    title: "AI Chatbots for Lead Capture & Sales",
    description: "Automate interactions and convert visitors 24/7.",
    image: service2,
    tag: "Chatbots",
  },
  {
    id: 5,
    title: "AI-Powered Marketing Funnels",
    description: "Optimize customer journeys for higher conversion.",
    image: service5,
    tag: "Funnels",
  },
  {
    id: 7,
    title: "Lead Follow-up & CRM Automation",
    description: "Never lose a lead with automated nurturing systems.",
    image: service7,
    tag: "CRM",
  },
  {
    id: 3,
    title: "AI Content Generation System",
    description: "Scale your content production across all channels.",
    image: service3,
    tag: "Content",
  },
  {
    id: 1,
    title: "Free AI Growth Audit (Lead Magnet)",
    description: "Identify key opportunities for AI integration and growth.",
    image: service1,
    tag: "Audit",
  },
  {
    id: 4,
    title: "Social Media Automation",
    description: "Streamline management and boost engagement.",
    image: service4,
    tag: "Social",
  },
];

// Create a double set for seamless wrapping
const servicesData = [...servicesDataList, ...servicesDataList];

export default function ServicesSwipeCardStack() {
  const [isPaused, setIsPaused] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Speed setting: higher = faster
  const baseSpeed = -0.5;

  useAnimationFrame(() => {
    if (containerRef.current) {
      const fullWidth = containerRef.current.scrollWidth / 2;
      const currentX = x.get();

      // Wrapping logic (Active during both auto-scroll and manual drag)
      if (currentX <= -fullWidth) {
        x.set(currentX + fullWidth);
      } else if (currentX > 0) {
        x.set(currentX - fullWidth);
      }

      // Auto-scroll logic
      if (!isPaused) {
        x.set(x.get() + baseSpeed);
      }
    }
  });

  return (
    <div className="relative w-full pt-0 md:pt-4 pb-0 overflow-hidden flex flex-col justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none z-0" />

      {/* Scrolling Track Container */}
      <div className="relative w-full max-w-[95vw] 2xl:max-w-[1600px] mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_20%,black_80%,black_95%,transparent)]">
        <div 
          className="flex relative z-10 w-full cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div
            ref={containerRef}
            className="flex"
            style={{ x, touchAction: "pan-y" }}
            drag="x"
            // Allow dragging but handle wrapping in useAnimationFrame
            onDragStart={() => setIsPaused(true)}
            onDragEnd={() => setIsPaused(false)}
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
  return (
    <div className="relative flex-shrink-0 w-[160px] md:w-[280px] mr-3 md:mr-4 group cursor-pointer flex flex-col select-none">
      {/* Image Card */}
      <div className="w-full h-[220px] md:h-[360px] rounded-xl overflow-hidden bg-[#0a0a0a] border border-white/10 relative transition-transform duration-500 hover:-translate-y-4 shadow-lg hover:shadow-blue-900/20 pointer-events-none">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0 shadow-inner"
          draggable={false}
        />
        {/* Inner Gradient for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-90" />

        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 flex flex-col justify-end">
          <h3 className="text-lg md:text-xl font-medium text-white tracking-wide leading-tight drop-shadow-md">
            {data.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
