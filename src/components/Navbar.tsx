"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
        { name: "Join", href: "/join" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav className="fixed w-full z-[100] top-0 left-0 bg-transparent backdrop-blur-sm border-b border-white/10">
            <div className="w-full px-[5%] md:px-[10%] h-16 md:h-20 flex items-center justify-between">
                <div className="flex-shrink-0 z-[101]">
                    <Link href="/" className="block" onClick={() => setIsOpen(false)}>
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={120}
                            height={40}
                            className="h-8 md:h-10 w-auto object-contain"
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:block">
                    <div className="flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden z-[101]">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none p-2"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-[#0a0a16]/95 backdrop-blur-xl z-[100] flex flex-col items-center justify-center space-y-8 md:hidden h-screen w-screen"
                        >
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-3xl font-serif italic text-white hover:text-blue-400 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
