"use client";

import React from 'react';
import Image from 'next/image';
import founderImg from '../assets/services-cards/founder.jpg';
import businessImg from '../assets/services-cards/business.jpg';
import brandsImg from '../assets/services-cards/brands.jpg';
import { ArrowUpRight } from 'lucide-react';

interface Service {
    title: string;
    subtitle: string;
    image: any;
}

const ServicesCards: React.FC = () => {
    const services: Service[] = [
        {
            title: "Founders",
            subtitle: "Handling ops, content, follow ups, and decisions alone slows the business.",
            image: founderImg,
        },
        {
            title: "Business Owners",
            subtitle: "Teams spend time on repeat tasks instead of sales and customers.",
            image: businessImg,
        },
        {
            title: "Brands",
            subtitle: "Customer queries and marketing work need speed without losing control.",
            image: brandsImg,
        }
    ];

    return (
        <section className="w-full pt-0 md:pt-10 pb-[30px] font-sans overflow-hidden">
            <div className="w-full px-[5%] md:px-[10%] overflow-x-auto pb-0 no-scrollbar">
                <div className="flex flex-row lg:grid lg:grid-cols-3 gap-4 md:gap-8 w-max lg:w-full snap-x snap-mandatory">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="min-w-[80vw] md:min-w-0 w-[80vw] md:w-full h-[160px] md:h-[280px] rounded-[24px] md:rounded-[32px] relative overflow-hidden group border border-white/10 shadow-2xl bg-[#0f172a] transition-all duration-500 md:hover:-translate-y-2 md:hover:shadow-cyan-900/20 snap-center"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover object-center transition-transform duration-700 md:group-hover:scale-105 opacity-60"
                                quality={90}
                            />
                        </div>

                        {/* Bottom Gradient for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full px-4 pb-4 pt-4 md:px-8 md:pb-12 md:pt-8 flex items-end justify-between z-10 gap-2 md:gap-4">
                            <div className="flex flex-col max-w-[65%] md:max-w-[60%] transform transition-transform duration-500 md:translate-y-2 md:group-hover:translate-y-0">
                                <h2 className="text-lg md:text-3xl font-bold text-white mb-1 md:mb-2 leading-tight drop-shadow-lg">
                                    {service.title}
                                </h2>
                                <p className="text-gray-300 text-[10px] md:text-sm font-medium leading-relaxed line-clamp-2 drop-shadow-md">
                                    {service.subtitle}
                                </p>
                            </div>

                            <button className="flex-shrink-0 px-3 py-2 md:px-6 md:py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-[10px] md:text-sm font-semibold md:hover:bg-white/20 transition-all flex items-center gap-1.5 md:gap-2 shadow-lg md:group-hover:scale-105">
                                <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                                <span className="hidden sm:inline">Explore</span>
                                <span className="sm:hidden">View</span>
                            </button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesCards;
