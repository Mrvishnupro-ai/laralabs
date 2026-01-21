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
        <section className="w-full px-[10%] pt-10 pb-8 font-sans">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="w-full h-[280px] rounded-[32px] relative overflow-hidden group border border-white/10 shadow-2xl bg-[#0f172a] transition-all duration-500 hover:-translate-y-2 hover:shadow-cyan-900/20"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-60"
                                quality={90}
                            />
                        </div>

                        {/* Bottom Gradient for Text Readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full px-8 pb-12 pt-8 flex items-end justify-between z-10 gap-4">
                            <div className="flex flex-col max-w-[60%] transform transition-transform duration-500 translate-y-2 group-hover:translate-y-0">
                                <h2 className="text-3xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                                    {service.title}
                                </h2>
                                <p className="text-gray-300 text-sm font-medium leading-relaxed line-clamp-2 drop-shadow-md">
                                    {service.subtitle}
                                </p>
                            </div>

                            <button className="flex-shrink-0 px-6 py-2.5 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-semibold hover:bg-white/20 transition-all flex items-center gap-2 shadow-lg group-hover:scale-105">
                                <ArrowUpRight className="w-4 h-4" />
                                Explore
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesCards;
