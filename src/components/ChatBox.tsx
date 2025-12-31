"use client";

import React, { useState, ChangeEvent } from 'react';

const ChatBox: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    return (
        <div className="w-full max-w-[650px] mx-auto my-[20px] relative z-10">
            <style>
                {`
                @keyframes borderFlow {
                    0% { background-position: 0% 0%; }
                    100% { background-position: -200% 0%; }
                }
                `}
            </style>

            <div className="relative bg-transparent backdrop-blur-[12px] rounded-[12px] p-[18px_12px_18px_20px] flex flex-row items-center gap-3 transition-transform duration-300 hover:-translate-y-[2px]">
                {/* Border shine effect */}
                <div
                    className="absolute inset-0 rounded-[12px] p-[1.5px] pointer-events-none z-[2]"
                    style={{
                        background: 'linear-gradient(115deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.05) 40%, rgba(255, 255, 255, 0.9) 50%, rgba(255, 255, 255, 0.05) 60%, rgba(255, 255, 255, 0.05) 100%)',
                        backgroundSize: '200% 100%',
                        animation: 'borderFlow 4s linear infinite',
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude'
                    }}
                />

                <div className="flex-1 flex items-center">
                    <textarea
                        className="w-full bg-transparent border-none outline-none text-white/95 font-lexend font-medium text-[16px] leading-normal resize-none min-h-[24px] h-6 p-0 m-0 overflow-hidden placeholder:text-white/60 placeholder:font-playfair placeholder:font-medium placeholder:opacity-80"
                        placeholder="Talk to our Expert to know how we can help your business..."
                        value={message}
                        onChange={handleInputChange}
                        rows={1}
                    />
                </div>
                <div className="flex items-center gap-2 shrink-0">
                    <button suppressHydrationWarning className="bg-gradient-to-b from-white to-[#D0D0D0] text-black border border-white/80 rounded-[16px] px-6 py-3 font-inter text-[15px] font-bold cursor-pointer flex items-center gap-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_5px_15px_rgba(0,0,0,0.3)] transition-all duration-300 uppercase tracking-[0.5px] hover:bg-gradient-to-b hover:from-white hover:to-[#E0E0E0] hover:-translate-y-[1px] hover:shadow-none active:scale-95">
                        Send
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px] rotate-45 -mt-0.5 -mr-0.5">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatBox;
