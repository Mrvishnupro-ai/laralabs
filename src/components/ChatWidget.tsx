"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ChatModal from "./ChatModal";

/**
 * Floating chat widget for mobile — appears at the bottom-right
 * only after the user has previously initiated a chat (laralabs_user_data exists).
 * Also exports a hook so the Navbar can check the same condition.
 */

export function useChatReady() {
  const [hasChatted, setHasChatted] = useState(false);

  useEffect(() => {
    const data = localStorage.getItem("laralabs_user_data");
    // eslint-disable-next-line
    setHasChatted(!!data);

    // Listen for storage changes (in case user submits form in ChatModal)
    const handler = () => {
      const d = localStorage.getItem("laralabs_user_data");
      setHasChatted(!!d);
    };
    window.addEventListener("storage", handler);

    // Also poll briefly — storage event only fires across tabs
    const interval = setInterval(handler, 2000);
    return () => {
      window.removeEventListener("storage", handler);
      clearInterval(interval);
    };
  }, []);

  return hasChatted;
}

export default function ChatWidget() {
  const hasChatted = useChatReady();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);

    const handleNavToggle = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsNavOpen(customEvent.detail.isOpen);
    };
    window.addEventListener("navbar-toggle", handleNavToggle);

    return () => {
      window.removeEventListener("resize", check);
      window.removeEventListener("navbar-toggle", handleNavToggle);
    };
  }, []);

  // Only render on mobile, only after user has chatted, and NOT when nav menu is open
  if (!isMobile || !hasChatted || isNavOpen) return null;

  return (
    <>
      {/* Floating Action Button */}
      <AnimatePresence>
        {!isModalOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            onClick={() => setIsModalOpen(true)}
            className="fixed bottom-6 right-6 z-[9998] w-14 h-14 rounded-full flex items-center justify-center shadow-2xl group border border-white/20 backdrop-blur-md"
            style={{
              background: "rgba(255, 255, 255, 0.15)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            }}
            aria-label="Open chat"
          >
            {/* Glass shine */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent pointer-events-none" />

            <MessageCircle className="w-6 h-6 text-white relative z-10 group-hover:scale-110 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Modal */}
      <ChatModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialMessage=""
        onSubmit={() => setIsModalOpen(false)}
      />
    </>
  );
}
