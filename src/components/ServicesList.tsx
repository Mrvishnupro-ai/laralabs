import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

import glass1 from "../assets/glass-elements/1.png";
import glass2 from "../assets/glass-elements/2.png";
import glass3 from "../assets/glass-elements/3.png";

const services = [
  {
    icon: glass1,
    title: "Content Creation & AI Content Generation",
    description: "Turn ideas into content. On autopilot.",
    features: [
      "Blogs & articles for your business",
      "Short video scripts (Reels, Shorts, Ads)",
      "Posters & visuals (AI + human polish)"
    ]
  },
  {
    icon: glass2,
    title: "Marketing & Lead Generation",
    description: "More leads. Better follow-ups. Less chaos.",
    features: [
      "Customer & market research",
      "Marketing funnel setup (content → lead → sale)",
      "Lead follow-up systems",
      "CRM & lead tracking"
    ]
  },
  {
    icon: glass3,
    title: "AI Automation & Custom AI Development",
    description: "Let AI handle repetitive work while you scale.",
    features: [
      "AI chatbots for sales & support",
      "Custom AI agents trained on your data",
      "Website & landing page development",
      "Workflow automation (n8n & custom flows)",
      "AI content systems (input → auto output)",
      "Voice agents & call automation"
    ]
  }
];

export default function ServicesList() {
  return (
    <section className="w-full py-20 px-4 md:px-8 relative">
        <div className="max-w-6xl mx-auto">
            {services.map((service, index) => (
                <div key={index}>
                    <div className="group relative py-16">
                        {/* Glassy Background Glow */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                            {/* Icon Side */}
                            <div className="relative shrink-0">
                                <div className="w-32 h-32 md:w-40 md:h-40 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform duration-500 group-hover:scale-110">
                                    <Image 
                                        src={service.icon} 
                                        alt={service.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                {/* Decorative blurred glow behind icon */}
                                <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full" />
                            </div>

                            {/* Divider Line (Vertical) */}
                            <div className="hidden md:block w-[2px] bg-white/20 self-stretch shadow-[0_0_10px_rgba(255,255,255,0.05)]" />

                            {/* Content Side */}
                            <div className="flex-1 text-center md:text-left pt-4">
                                <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-lg text-blue-200/80 mb-8 font-light tracking-wide">
                                    {service.description}
                                </p>

                                {/* Features Box */}
                                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-left">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3 group/item">
                                                <div className="mt-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 group-hover/item:bg-blue-500/20 transition-colors">
                                                    <Check className="w-3 h-3 text-blue-400" />
                                                </div>
                                                <span className="text-gray-300 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Horizontal Divider */}
                    {index !== services.length - 1 && (
                        <div className="w-full h-[2px] bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.05)]" />
                    )}
                </div>
            ))}
        </div>
    </section>
  );
}
