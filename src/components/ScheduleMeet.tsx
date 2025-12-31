"use client";

import React from 'react';
import Image from 'next/image';
import scheduleImage from '../assets/schedule.jpg';

const ScheduleMeet: React.FC = () => {
    return (
        <section className="py-[60px] px-[10%] w-full box-border flex justify-center items-center">
            {/* Embedded styles for custom animations */}
            <style>
                {`
                @keyframes moveVertical {
                    0% { transform: translateY(0); }
                    100% { transform: translateY(40px); }
                }
                @keyframes moveHorizontal {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-40px); }
                }
                @keyframes pulse-custom {
                    0% { transform: scale(1); opacity: 0.6; }
                    100% { transform: scale(1.2); opacity: 0.4; }
                }
                `}
            </style>

            <div className="relative flex w-full min-h-[450px] rounded-[30px] bg-transparent backdrop-blur-[20px] shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden border border-[rgba(255,255,255,0.1)] border-t-[rgba(255,255,255,0.2)] border-l-[rgba(255,255,255,0.2)] max-lg:flex-col">

                {/* Background Blur Effect - Theme Aligned */}
                <div className="absolute inset-0 z-0 blur-[80px] pointer-events-none w-full h-full opacity-50">
                    <div className="absolute rounded-full w-[400px] h-[400px] bg-[#4169E1] -top-[50px] -left-[80px] opacity-40 animate-pulse"></div>
                    <div className="absolute rounded-full w-[350px] h-[350px] bg-[#E0E7FF] bottom-[20px] -right-[60px] opacity-20"></div>
                </div>

                {/* Visual Side (Left) z-index 1 */}
                <div className="w-[45%] relative max-lg:w-full max-lg:h-[300px] z-[1]">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-[2]" />
                    {/* Image with object-cover to handle height change */}
                    <div className="absolute inset-0 z-[1]">
                        <Image
                            src={scheduleImage}
                            alt="Schedule Meeting"
                            fill
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Overlay Content */}
                    <div className="relative z-[3] h-full flex flex-col justify-between p-10 text-white">
                        <div className="flex justify-between items-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer">
                            <Image src="/logo.png" alt="Agency Logo" className="h-8 w-auto object-contain" width={120} height={32} />
                        </div>

                        <div className="mb-4">
                            <h2 className="text-[32px] font-playfair font-bold leading-tight mb-2 drop-shadow-lg">
                                Ready for the Future?
                            </h2>
                            <p className="text-white/80 font-montserrat text-[14px] max-w-[80%]">
                                Let's collaborate to bring your vision to reality with our expert team.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Side (Right) z-index 1 */}
                <div className="w-[55%] p-[40px] flex flex-col justify-center items-center text-center max-lg:w-full max-lg:p-10 z-[1] bg-transparent">

                    <h2 className="text-[48px] leading-[1.1] font-montserrat font-bold mb-6 bg-gradient-to-b from-white via-[#E0E7FF] to-[#4169E1] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(65,105,225,0.4)]">
                        Schedule a meet.
                    </h2>

                    <p className="text-[#a0a0a0] text-[18px] font-montserrat mb-10 max-w-[80%] leading-relaxed">
                        Empowering your success with cutting-edge automation. Connect with our experts directly—no forms, just results.
                    </p>

                    {/* Simple Chrome UI Button */}
                    <button suppressHydrationWarning className="bg-gradient-to-b from-[#4169E1] to-[#0047AB] text-white py-4 px-12 rounded-xl border border-white/20 text-[16px] font-bold font-montserrat shadow-[0_10px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_15px_30px_rgba(65,105,225,0.4),inset_0_1px_0_rgba(255,255,255,0.3)] hover:-translate-y-0.5 transition-all uppercase tracking-wide">
                        Book Your Session
                    </button>

                </div>
            </div>
        </section>
    );
};

export default ScheduleMeet;
