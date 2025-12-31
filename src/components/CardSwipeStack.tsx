"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import BigGradientCard from "./BigGradientCard";
import SimonCard from "./SimonCard";
import SaraCard from "./SaraCard";
import RioCard from "./RioCard";

const cards = [BigGradientCard, SimonCard, SaraCard, RioCard];

const CardSwipeStack = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1 for next, -1 for prev

    const nextCard = useCallback(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % cards.length);
    }, []);

    const prevCard = useCallback(() => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextCard();
        }, 5000); // 5 seconds interval
        return () => clearInterval(timer);
    }, [index, nextCard]); // Reset timer on index change

    const CurrentCard = cards[index];

    // Variants for direction-aware animation
    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -300 : 300,
            opacity: 0
        })
    };

    return (
        <div className="relative w-full min-h-[900px] overflow-hidden flex items-center justify-center group">
            {/* Left Arrow */}
            <button
                onClick={prevCard}
                className="absolute left-4 md:left-10 z-20 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all cursor-pointer text-white/70 hover:text-white transform hover:scale-110 active:scale-95 hidden md:flex"
                aria-label="Previous Card"
            >
                <ChevronLeft size={40} />
            </button>

            {/* Right Arrow */}
            <button
                onClick={nextCard}
                className="absolute right-4 md:right-10 z-20 p-4 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all cursor-pointer text-white/70 hover:text-white transform hover:scale-110 active:scale-95 hidden md:flex"
                aria-label="Next Card"
            >
                <ChevronRight size={40} />
            </button>

            {/* Mobile Arrows (smaller and positioned differently if needed, or just visible) */}
            <div className="absolute bottom-10 flex gap-10 md:hidden z-20 pointer-events-none">
                <button onClick={prevCard} className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white">
                    <ChevronLeft size={30} />
                </button>
                <button onClick={nextCard} className="pointer-events-auto p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white">
                    <ChevronRight size={30} />
                </button>
            </div>


            <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute w-full flex justify-center px-4"
                >
                    <CurrentCard />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default CardSwipeStack;
