"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import founderImg from '../assets/services-cards/founder.jpg';
import businessImg from '../assets/services-cards/business.jpg';
import brandsImg from '../assets/services-cards/brands.jpg';
import { ArrowUpRight } from 'lucide-react';

interface Service {
    title: string;
    subtitle: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
            <div className="w-full px-[5%] md:px-[10%]">
                <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 w-full">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-full h-auto md:h-[280px] rounded-[20px] md:rounded-[32px] relative overflow-hidden group border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)] md:shadow-2xl bg-white/5 backdrop-blur-xl bg-gradient-to-br from-white/20 via-white/5 to-transparent transition-all duration-500 md:hover:-translate-y-2 md:hover:shadow-cyan-900/20 flex flex-row items-center md:block p-3 md:p-0 gap-4"
                    >
                        {/* Mobile Icon */}
                        <div className="md:hidden shrink-0 w-[60px] h-[60px] rounded-[16px] overflow-hidden relative shadow-md bg-white/5 border border-white/10">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Desktop Background Image & Gradient */}
                        <div className="hidden md:block absolute inset-0 w-full h-full">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover object-center transition-transform duration-700 md:group-hover:scale-105 opacity-60"
                                quality={90}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="relative md:absolute md:bottom-0 md:left-0 w-full md:px-8 md:pb-12 md:pt-8 flex items-center md:items-end justify-between z-10 gap-2 md:gap-4 md:h-full">
                            <div className="flex flex-col w-full md:max-w-[60%] transform transition-transform duration-500 md:translate-y-2 md:group-hover:translate-y-0 text-left">
                                <h2 className="text-lg md:text-3xl font-bold text-white mb-1 md:mb-2 leading-tight drop-shadow-lg">
                                    {service.title}
                                </h2>
                                <p className="text-gray-400 md:text-gray-300 text-xs md:text-sm font-medium leading-relaxed line-clamp-2 md:drop-shadow-md">
                                    {service.subtitle}
                                </p>
                            </div>

                            <Link href="/services" className="hidden md:flex flex-shrink-0 px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-semibold md:hover:bg-white/20 transition-all items-center gap-2 shadow-lg md:group-hover:scale-105">
                                <ArrowUpRight className="w-4 h-4" />
                                <span className="inline">Explore</span>
                            </Link>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesCards;
