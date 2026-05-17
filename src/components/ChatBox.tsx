"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import dynamic from "next/dynamic";

const ChatModal = dynamic(() => import("./ChatModal"), { ssr: false });

export default function ChatBox() {
  const [message, setMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    setIsModalOpen(true);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleModalSubmit = (formData: any) => {
    console.log("Full Request:", {
      message,
      context: formData
    });
    setMessage("");
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-10 z-10 relative group">
      {/* Moving Shining Silver Border - Masked to only show edges */}
      <div 
        className="absolute inset-0 rounded-2xl pointer-events-none z-0"
        style={{
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "6px", // Increased thickness for visibility
        }}
      >
        {/* Intense Silver & White Highlight Gradient */}
        <div className="absolute inset-[-100%] animate-[spin_12s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#cbd5e1_30%,#ffffff_50%,#cbd5e1_70%,#0000_100%)] opacity-100" />
      </div>

      <form
        onSubmit={handleSubmit}
        className="relative z-10 flex items-center gap-2 p-1.5 md:p-3 bg-black/10 rounded-xl md:rounded-2xl backdrop-blur-3xl border border-white/20 h-14 md:h-20 shadow-2xl transition-all duration-300"
      >
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Talk to our Expert to know how we can help you "
          suppressHydrationWarning
          className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-400 px-3 md:px-4 text-xs md:text-lg w-full h-full"
        />
        <button
          type="submit"
          suppressHydrationWarning
          className="relative h-10 md:h-12 px-4 md:px-6 rounded-lg md:rounded-xl bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 font-bold shadow-[0px_2px_0px_0px_#9ca3af,inset_0px_1px_0px_0px_rgba(255,255,255,1)] hover:brightness-105 active:translate-y-[2px] active:shadow-none transition-all flex items-center gap-2 text-xs md:text-base"
        >
          <span className="drop-shadow-sm">Send</span>
          <Send className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      </form>

      <ChatModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialMessage={message}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
}
