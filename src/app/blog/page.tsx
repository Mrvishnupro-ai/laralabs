"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import glass1 from "../../assets/glass-elements/1.png";
import glass2 from "../../assets/glass-elements/2.png";
import glass3 from "../../assets/glass-elements/3.png";
import glass4 from "../../assets/glass-elements/4.png";
import glass5 from "../../assets/glass-elements/5.png";
import glass6 from "../../assets/glass-elements/6.png";
import Navbar from "@/components/Navbar";

export default function BlogPage() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const scriptURL = "https://script.google.com/macros/s/AKfycbyWRoZ3d8ZxmhFm9kXiauVmnrzcr_9eCutxFmIME6EWIdDhbKpkHwgBblALjexa59VzmQ/exec";
        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append('email', email);

            await fetch(scriptURL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });

            setIsSubmitted(true);
            setEmail("");
        } catch (error) {
            console.error("Error submitting email:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="relative min-h-screen w-full flex flex-col items-center justify-center md:justify-start md:pt-38 overflow-hidden text-foreground font-sans selection:bg-blue-500/30">
            <Navbar />

            {/* Background - Deep Space Gradients aligned with Agency Theme */}

            {/* Glass Elements */}

            {/* Top Left */}
            <motion.div
                initial={{ opacity: 0, x: -50, rotate: -20 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                className="absolute top-[10%] left-[5%] w-32 md:w-48 pointer-events-none z-10 blur-[2px]"
            >
                <motion.div
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Image src={glass1} alt="Glass Element" className="w-full h-auto object-contain drop-shadow-2xl" />
                </motion.div>
            </motion.div>

            {/* Top Right - Floating Further Back - Fixed */}
            <motion.div
                initial={{ opacity: 0, y: -50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.8, delay: 0.6, ease: "easeOut" }}
                className="absolute top-[20%] right-[10%] w-24 md:w-36 pointer-events-none z-0"
            >
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Image src={glass3} alt="Glass Element" className="w-full h-auto object-contain" />
                </motion.div>
            </motion.div>

            {/* Bottom Left - Subtle Floater */}
            <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                animate={{ opacity: 0.7, x: 0, y: 0 }}
                transition={{ duration: 2, delay: 0.8, ease: "easeOut" }}
                className="absolute bottom-[20%] left-[10%] w-20 md:w-32 pointer-events-none z-0 blur-[1px]"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Image src={glass4} alt="Glass Element" className="w-full h-auto object-contain" />
                </motion.div>
            </motion.div>

            {/* Top Center - Very Start */}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1, ease: "backOut" }}
                className="absolute top-[5%] left-1/2 -translate-x-1/2 w-16 md:w-24 pointer-events-none z-0 opacity-60 blur-[3px]"
            >
                <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Image src={glass5} alt="Glass Element" className="w-full h-auto object-contain" />
                </motion.div>
            </motion.div>

            {/* Right Center - Rotating Element */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                animate={{ opacity: 0.9, scale: 1, rotate: 0 }}
                transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" }}
                className="absolute top-1/2 right-[2%] -translate-y-1/2 w-28 md:w-40 pointer-events-none z-10"
            >
                <motion.div
                    animate={{ y: [0, -18, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Image src={glass6} alt="Glass Element" className="w-full h-auto object-contain drop-shadow-xl" />
                </motion.div>
            </motion.div>




            {/* Content Container */}
            <div className="z-20 flex flex-col items-center justify-center text-center px-[5%] md:px-[10%] max-w-5xl mx-auto w-full">

                {/* Logo with Graphical Highlights */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "backOut" }}
                    className="relative mb-6 md:mb-10 group"
                >
                    {/* Graphical Glow Behind */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/20 rounded-full blur-[40px] group-hover:bg-blue-400/30 transition-all duration-700"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-16 bg-indigo-500/10 rounded-full blur-[20px] mix-blend-screen animate-pulse"></div>

                    <div className="relative h-16 w-48 md:h-20 md:w-60">
                        <Image
                            src="/logo.png"
                            alt="Agency Logo"
                            fill
                            className="object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl md:text-5xl lg:text-7xl mb-4 text-white drop-shadow-lg font-bold"
                    style={{ fontFamily: 'var(--font-tinos)' }}
                >
                    Our Blog is
                    <br />
                    <span
                        className="bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent italic font-semibold"
                        style={{ fontFamily: 'var(--font-playfair)' }}
                    >
                        Coming soon ! 
                    </span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-300/90 mb-8 md:mb-12 font-light max-w-xl mx-auto"
                >
                    We are crafting insightful articles for you. Stay tuned!
                </motion.p>

                {/* Input Form */}
                <motion.form
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col sm:flex-row items-center p-2 sm:p-1.5 gap-3 sm:gap-2 w-full max-w-md bg-white/5 backdrop-blur-2xl rounded-3xl sm:rounded-full border border-white/10 hover:border-white/20 transition-all group focus-within:border-white/30"
                >
                    <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        disabled={isLoading || isSubmitted}
                        className="flex-1 bg-transparent text-white placeholder-gray-400 px-6 py-3 outline-none w-full sm:w-auto text-base disabled:opacity-50"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        type="submit"
                        disabled={isLoading || isSubmitted}
                        className={`w-full sm:w-auto px-8 py-3 rounded-full font-medium transition-all cursor-pointer whitespace-nowrap disabled:opacity-90 disabled:cursor-default flex items-center justify-center min-w-[140px] ${isSubmitted
                            ? 'bg-green-500/80 hover:bg-green-500/80 text-white'
                            : 'bg-[#5d5dff] hover:bg-[#4b4be0] text-white'
                            }`}
                    >
                        {isLoading ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Wait...
                            </span>
                        ) : isSubmitted ? (
                            <span className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                Joined!
                            </span>
                        ) : (
                            "Notify me"
                        )}
                    </button>
                </motion.form>

                <div className="mt-12"></div>

                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex items-center gap-6"
                >
                    {/* X (Twitter) */}
                    <a href="https://x.com/laralabs_ai" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 group border border-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <span className="sr-only">X (Twitter)</span>
                        <svg className="w-6 h-6 text-white transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/laralabs_ai/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 group border border-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-6 h-6 text-white transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://linkedin.com/company/laralabs-ai" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 group border border-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-6 h-6 text-white transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                    </a>
                </motion.div>

                {/* Fixed Success Toast */}

            </div>
        </main>
    );
}
