"use client";

import React from 'react';
import Image from 'next/image';
import founderImg from '../assets/services-cards/founder.jpg';
import businessImg from '../assets/services-cards/business.jpg';
import brandsImg from '../assets/services-cards/brands.jpg';

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
        <section className="px-[10%] py-20 flex justify-between gap-8 flex-wrap w-full bg-transparent box-border">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="flex-1 min-w-[350px] h-[600px] rounded-[32px] relative overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-2 border border-white/10"
                >
                    {/* Background Image */}
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        quality={90}
                    />

                    {/* Strong Gradient Overlay for Text Readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-300" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 w-full p-10 flex flex-col justify-end h-full z-10">
                        <h2 className="text-4xl font-bold font-sans text-white mb-4 drop-shadow-lg tracking-tight">
                            {service.title}
                        </h2>

                        <p className="text-gray-300 font-sans text-base leading-relaxed mb-2 max-w-[90%] drop-shadow-md">
                            {service.subtitle}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ServicesCards;
