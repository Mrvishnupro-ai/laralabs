"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { BlogPost } from "@/lib/getBlogs";

import glass1 from "../assets/glass-elements/1.png";
import glass5 from "../assets/glass-elements/5.png";
import glass6 from "../assets/glass-elements/6.png";

export default function BlogClientUI({ blogs }: { blogs: BlogPost[] }) {
    return (
        <main className="relative min-h-screen w-full flex flex-col items-center justify-start overflow-hidden text-foreground font-sans bg-[#0a0a16]">
            <Navbar />

            {/* Glass Elements for aesthetic */}
            <motion.div
                initial={{ opacity: 0, x: -50, rotate: -20 }}
                animate={{ opacity: 0.6, x: 0, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                className="absolute top-[10%] left-[5%] w-32 md:w-48 pointer-events-none z-0 blur-[2px]"
            >
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                    <Image src={glass1} alt="Glass Element" className="w-full h-auto object-contain drop-shadow-2xl" />
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 0.4, y: 0 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "backOut" }}
                className="absolute top-[5%] left-1/2 -translate-x-1/2 w-16 md:w-24 pointer-events-none z-0 blur-[3px]"
            >
                <Image src={glass5} alt="Glass Element" className="w-full h-auto object-contain" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: 180 }}
                animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
                transition={{ duration: 1.6, delay: 0.3, ease: "easeOut" }}
                className="absolute top-1/3 right-[2%] -translate-y-1/2 w-28 md:w-40 pointer-events-none z-0"
            >
                <motion.div animate={{ y: [0, -18, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}>
                    <Image src={glass6} alt="Glass Element" className="w-full h-auto object-contain drop-shadow-xl" />
                </motion.div>
            </motion.div>

            {/* Header Section */}
            <div className="z-20 flex flex-col items-center justify-center text-center px-[5%] md:px-[10%] pt-32 pb-16 max-w-5xl mx-auto w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl lg:text-7xl mb-4 text-white drop-shadow-lg font-bold"
                >
                    Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300 italic font-serif">Guides</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300/90 font-light max-w-2xl mx-auto"
                >
                    Learn how to implement AI agents, RAG systems, and workflow automation to scale your business effortlessly.
                </motion.p>
            </div>

            {/* Blog Grid */}
            <section className="px-4 md:px-[10%] w-full max-w-7xl mx-auto z-20 pb-24">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    {blogs.length === 0 ? (
                        <div className="col-span-full text-center text-gray-400 py-12">
                            No blog posts found. Check back later!
                        </div>
                    ) : (
                        blogs.map((post) => (
                            <Link href={`/blog/\${post.slug}`} key={post.slug} className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl p-8 transition-all hover:bg-white/10 hover:border-blue-500/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] relative overflow-hidden">
                                {/* Card Glow */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] group-hover:bg-blue-400/20 transition-all duration-500"></div>
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-3 text-sm font-medium mb-4">
                                        <span className="text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">{post.category}</span>
                                        <span className="text-gray-500">{post.readTime}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-400 leading-relaxed flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="mt-8 flex items-center text-blue-400 font-medium group-hover:text-blue-300 transition-colors">
                                        Read Article 
                                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))
                    )}
                </motion.div>
            </section>
        </main>
    );
}
