"use client";

import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next-image-export-optimizer";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Check, ArrowRight, Sparkles, Calendar, Zap, Bot, Box, Clock, LayoutGrid } from "lucide-react";
import Link from "next/link";
import compImage from "@/assets/cta/comp.png";
import glass1 from "@/assets/glass-elements/1.png";
import glass2 from "@/assets/glass-elements/2.png";
import glass3 from "@/assets/glass-elements/3.png";
import { useChat } from "@/lib/hooks/useChat";
import { UserContext } from "@/lib/types/chat";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMessage: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => void;
}

const TEAM_SIZES = [
  "1-5",
  "6-10",
  "11-50",
  "50-200",
  "200+",
];

const SUGGESTION_CHIPS = [
    "How can you automate my business?",
    "What AI services do you offer?",
    "How does the free AI audit work?",
];

const SERVICES = [
    { img: glass1, title: "Custom AI Chatbots", desc: "24/7 Support Agents" },
    { img: glass2, title: "Workflow Automation", desc: "Streamline Operations" },
    { img: glass3, title: "LLM Integration", desc: "Custom Models & RAG" },
];

export default function ChatModal({ isOpen, onClose, initialMessage, onSubmit }: ChatModalProps) {
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    businessType: "",
    teamSize: "",
    keyProblem: "",
    userQuery: "", 
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // New State for Chat View
  const [view, setView] = useState<'form' | 'chat'>('form');
  const [chatMessage, setChatMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [hasSubmittedForm, setHasSubmittedForm] = useState(false);
  const [showLimitPopup, setShowLimitPopup] = useState(false);
  const initialMessageSentRef = useRef(false);

  // Initialize chat hook only after form submission
  const userContextForChat: UserContext = {
    userName: formData.userName,
    userEmail: formData.userEmail,
    businessType: formData.businessType,
    teamSize: formData.teamSize,
    keyProblem: formData.keyProblem,
    primaryGoal: ""
  };

  const { messages, isLoading, error: chatError, remainingMessages, sendMessage, resetChat } = useChat({
    userContext: userContextForChat,
    onError: (error) => {
      console.error('Chat error:', error);
    },
    onLimitReached: (remaining) => {
      if (remaining === 0) {
        setShowLimitPopup(true);
      }
    }
  });

  useEffect(() => {
    if (remainingMessages === 0 && view === 'chat') {
      // eslint-disable-next-line
      setShowLimitPopup(true);
    }
  }, [remainingMessages, view]);

  useEffect(() => {
    // eslint-disable-next-line
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      setMounted(false);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Load saved user data from localStorage on mount
  useEffect(() => {
    if (mounted) {
      const savedUserData = localStorage.getItem('laralabs_user_data');
      if (savedUserData) {
        try {
          const parsed = JSON.parse(savedUserData);
          // eslint-disable-next-line
          setFormData(prev => ({
            ...prev,
            ...parsed
          }));
        } catch (e) {
          console.error('Failed to parse saved user data:', e);
        }
      }
    }
  }, [mounted]);

  // Reset view when modal opens - check if user data exists
  useEffect(() => {
    if (isOpen) {
        initialMessageSentRef.current = false; // Reset ref when modal opens
        const savedUserData = localStorage.getItem('laralabs_user_data');
        
        // If user has already filled the form, skip to chat
        if (savedUserData) {
          try {
            const parsed = JSON.parse(savedUserData);
            // eslint-disable-next-line
            setFormData(prev => ({
              ...prev,
              ...parsed,
              userQuery: initialMessage || prev.userQuery 
            }));
            setHasSubmittedForm(true);
            setView('chat');
          } catch (e) {
            // If parsing fails, show form
            setView('form');
            setHasSubmittedForm(false);
          }
        } else {
          // No saved data, show form
          setView('form');
          setFormData(prev => ({
            ...prev, 
            userQuery: initialMessage || prev.userQuery 
          }));
          setHasSubmittedForm(false);
        }
        
        resetChat(); 
        setChatMessage("");
    }
  }, [isOpen, initialMessage, resetChat]);

  // Separate effect to send initial message after view is set to chat
  useEffect(() => {
    if (isOpen && view === 'chat' && hasSubmittedForm && initialMessage && initialMessage.trim() && !initialMessageSentRef.current) {
      initialMessageSentRef.current = true; // Mark as sent
      // Small delay to ensure chat interface is mounted
      const timer = setTimeout(() => {
        sendMessage(initialMessage);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen, view, hasSubmittedForm, initialMessage, sendMessage]);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!(formData.userName || "").trim()) newErrors.userName = "Name is required";
    if (!(formData.userEmail || "").trim()) {
      newErrors.userEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.userEmail || "")) {
      newErrors.userEmail = "Email is invalid";
    }
    if (!(formData.businessType || "").trim()) newErrors.businessType = "Business type is required";
    if (!formData.teamSize) newErrors.teamSize = "Please select a team size";
    if (!(formData.keyProblem || "").trim()) newErrors.keyProblem = "Please describe the key problem";
    // userQuery is optional or required? Given it comes from chat, let's make it visible but maybe optional to edit?
    // User logic: "User Query" is what they asked. "Key Problem" is what they need to define.
    // I'll leave userQuery validation out effectively since it's prefilled, but if empty, maybe require it?
    // Let's assume it's okay if empty or populated.
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Save user data to localStorage (excluding userQuery which is session-specific)
      const dataToSave = {
        userName: formData.userName,
        userEmail: formData.userEmail,
        businessType: formData.businessType,
        teamSize: formData.teamSize,
        keyProblem: formData.keyProblem
      };
      localStorage.setItem('laralabs_user_data', JSON.stringify(dataToSave));

      // Submit to Google Sheets (Fire and forget)
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (scriptUrl) {
          const sheetData = {
              ...dataToSave,
              userQuery: formData.userQuery
          };
          fetch(scriptUrl, {
              method: 'POST',
              mode: 'no-cors', 
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(sheetData)
          }).catch(err => console.error("Failed to submit to Google Sheets", err));
      }
      
      setHasSubmittedForm(true);
      setView('chat');
      
      // Seed chat with the initial query if available
      if (formData.userQuery && formData.userQuery.trim()) {
        const query = formData.userQuery;
        // Send message using the real API
        await sendMessage(query);
      }
    }
  };

  const handleSendMessage = async (e?: React.FormEvent, msgText?: string) => {
    if (e) e.preventDefault();
    const textToSend = msgText || chatMessage;
    
    if (!textToSend.trim() || isLoading) return;

    setChatMessage("");
    await sendMessage(textToSend);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className={`fixed inset-0 z-[9999] flex ${isMobile ? 'items-end justify-center' : 'items-center justify-center p-4'}`}>
          {/* Backdrop - Glassy and Translucent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/30 backdrop-blur-xl"
          />

          {/* Modal Content - Blue Gradient Glassy Popup */}
          <motion.div
            initial={isMobile ? { opacity: 0, y: "100%" } : { opacity: 0, scale: 0.95, y: 20 }}
            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, scale: 1, y: 0 }}
            exit={isMobile ? { opacity: 0, y: "100%" } : { opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full 
              ${isMobile ? 'rounded-t-3xl rounded-b-none border-b-0' : 'rounded-3xl'}
              ${view === 'chat' 
                ? (isMobile ? 'h-[90vh] bg-[#020617]' : 'max-w-5xl h-[800px] bg-gradient-to-br from-[#020617]/50 via-[#0f172a]/50 to-[#1e1b4b]/50 border border-white/10') 
                : (isMobile ? 'h-auto max-h-[90vh] bg-white/0 border border-white/10 border-b-0' : 'max-w-lg min-h-[500px] bg-white/0 border border-white/10')
              } 
              backdrop-blur-3xl ring-1 ring-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col transition-all duration-500`}
          >
            {/* Close Button (Absolute) */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 hover:bg-white/10 rounded-full transition-colors text-white/50 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {/* View Switcher */}
            <AnimatePresence mode="wait">
              {view === 'form' ? (
                <motion.div
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="w-full h-full bg-transparent p-4 md:p-8 overflow-y-auto"
                >
                    <div className="h-full flex flex-col justify-center">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-1">Project Details</h3>
                        <p className="text-gray-400 text-xs">Enter your project context to help us understand.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name and Email Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</label>
                            <input
                            type="text"
                            value={formData.userName || ""}
                            onChange={(e) => {
                                setFormData({ ...formData, userName: e.target.value });
                                if (errors.userName) setErrors({ ...errors, userName: "" });
                            }}
                            placeholder="e.g. Rahul Sharma"
                            className={`w-full px-3 py-2.5 bg-white/5 backdrop-blur-md border ${errors.userName ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:border-indigo-500 text-white placeholder:text-gray-500 transition-all text-sm`}
                            />
                            {errors.userName && <p className="text-xs text-red-400">{errors.userName}</p>}
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Email Address</label>
                            <input
                            type="email"
                            value={formData.userEmail || ""}
                            onChange={(e) => {
                                setFormData({ ...formData, userEmail: e.target.value });
                                if (errors.userEmail) setErrors({ ...errors, userEmail: "" });
                            }}
                            placeholder="rahul@company.in"
                            className={`w-full px-3 py-2.5 bg-white/5 backdrop-blur-md border ${errors.userEmail ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:border-indigo-500 text-white placeholder:text-gray-500 transition-all text-sm`}
                            />
                            {errors.userEmail && <p className="text-xs text-red-400">{errors.userEmail}</p>}
                        </div>
                        </div>
                        {/* Two Column Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Business Type */}
                        <div className="space-y-2">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Business Type</label>
                            <input
                            type="text"
                            value={formData.businessType || ""}
                            onChange={(e) => {
                                setFormData({ ...formData, businessType: e.target.value });
                                if (errors.businessType) setErrors({ ...errors, businessType: "" });
                            }}
                            placeholder="e.g. IT Services, EdTech"
                            className={`w-full px-3 py-2.5 bg-white/5 backdrop-blur-md border ${errors.businessType ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:border-indigo-500 text-white placeholder:text-gray-500 transition-all text-sm`}
                            />
                            {errors.businessType && <p className="text-xs text-red-400">{errors.businessType}</p>}
                        </div>

                        {/* Team Size Dropdown */}
                        <div className="space-y-2 relative">
                            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Team Size</label>
                            <div className="relative">
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className={`w-full px-3 py-2.5 bg-white/5 backdrop-blur-md border ${errors.teamSize ? 'border-red-500/50' : 'border-white/10'} rounded-xl flex items-center justify-between text-left focus:outline-none focus:border-indigo-500 transition-all group text-sm`}
                            >
                                <span className={formData.teamSize ? "text-white" : "text-gray-700"}>
                                {formData.teamSize || "Select size"}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1a] border border-white/10 rounded-xl overflow-hidden shadow-2xl z-20">
                                {TEAM_SIZES.map((size) => (
                                    <button
                                    key={size}
                                    type="button"
                                    onClick={() => {
                                        setFormData({ ...formData, teamSize: size });
                                        setIsDropdownOpen(false);
                                        if (errors.teamSize) setErrors({ ...errors, teamSize: "" });
                                    }}
                                    className="w-full px-4 py-2.5 text-left text-gray-400 hover:bg-white/5 hover:text-white transition-colors flex items-center justify-between text-sm"
                                    >
                                    {size}
                                    {formData.teamSize === size && <Check className="w-3 h-3 text-indigo-400" />}
                                    </button>
                                ))}
                                </div>
                            )}
                            </div>
                            {errors.teamSize && <p className="text-xs text-red-400">{errors.teamSize}</p>}
                        </div>
                        </div>

                        {/* Key Problem */}
                        <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Key Problem</label>
                        <textarea
                            value={formData.keyProblem || ""}
                            onChange={(e) => {
                            setFormData({ ...formData, keyProblem: e.target.value });
                            if (errors.keyProblem) setErrors({ ...errors, keyProblem: "" });
                            }}
                            placeholder="Tell us about your business challenge..."
                            rows={3}
                            className={`w-full px-3 py-2.5 bg-white/5 backdrop-blur-md border ${errors.keyProblem ? 'border-red-500/50' : 'border-white/10'} rounded-xl focus:outline-none focus:border-indigo-500 text-white placeholder:text-gray-500 resize-none transition-all text-sm`}
                        />
                        {errors.keyProblem && <p className="text-xs text-red-400">{errors.keyProblem}</p>}
                        </div>

          

                        {/* Submit Button */}
                        <button
                        type="submit"
      
                        className="w-full py-3 bg-white hover:bg-gray-100 text-black font-bold rounded-xl shadow-lg active:scale-[0.98] transition-all duration-200 mt-2 flex items-center justify-center gap-2 group text-sm"
                        >
                        Continue
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    </div>
                </motion.div>
              ) : (
                <motion.div
                    key="chat"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="w-full h-full flex flex-row relative"
                >
                    {/* LEFT SIDE: CHAT INTERFACE */}
                    <div className="flex-1 flex flex-col h-full border-r border-white/5 relative">
                        {/* Window Controls Header - Glassy */}
                        <div className="flex-none p-4 flex items-center justify-between z-10 border-b border-white/5 bg-white/5 backdrop-blur-sm">
                            <div className="flex items-center gap-2">
                                <Image 
                                    src="/logo.png" 
                                    alt="Lara Labs Logo" 
                                    width={100} 
                                    height={30} 
                                    className="h-6 w-auto object-contain" 
                                />
                            </div>
                        </div>

                        {/* Scrollable Content Area */}
                        <div className="flex-1 overflow-y-auto p-4 md:p-8 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                            <div className="flex flex-col items-center w-full min-h-full">
                                
                                {/* Persistent Header / Greeting */}
                                <div className="flex flex-col items-center w-full mb-8 mt-4 transition-all duration-500">
                                    {/* Blue & Silverish Orb */}
                                    <div className="relative w-28 h-28 mb-8 flex items-center justify-center">
                                        {/* Outer Glow */}
                                        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[40px] animate-pulse" />
                                        
                                        {/* Main Orb Sphere */}
                                        <div className="relative w-full h-full rounded-full shadow-2xl animate-[spin_12s_linear_infinite]"
                                            style={{ 
                                                background: 'radial-gradient(circle at 30% 30%, #e2e8f0 0%, #3b82f6 25%, #1e3a8a 60%, #020617 100%)',
                                                boxShadow: 'inset -10px -10px 20px rgba(0,0,0,0.5), inset 10px 10px 20px rgba(255,255,255,0.4), 0 0 20px rgba(59,130,246,0.3)'
                                            }}>
                                            {/* Surface Texture/Noise overlay */}
                                            <div className="absolute inset-0 rounded-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay" />
                                            
                                            {/* Shine Highlight */}
                                            <div className="absolute top-4 left-6 w-8 h-5 bg-white/40 blur-md rounded-full rotate-[-45deg]" />
                                        </div>
                                        
                                        {/* Orbiting Ring */}
                                        <div className="absolute inset-[-8px] rounded-full border border-white/10 scale-110 opacity-40 animate-[spin_8s_linear_infinite_reverse]" 
                                            style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%' }}
                                        />
                                    </div>

                                    <h2 className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-400 text-center leading-tight drop-shadow-sm max-w-xs">
                                        What do you want to know about Lara Labs?
                                    </h2>
                                </div>
                                
                                {/* Suggestion Chips (Visible only when no messages) */}
                                {messages.length === 0 && (
                                    <div className="w-full flex flex-col items-end gap-3 mt-4 mb-8">
                                        {SUGGESTION_CHIPS.map((chip, idx) => (
                                            <motion.button
                                                key={idx}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.1 }}
                                                onClick={() => handleSendMessage(undefined, chip)}
                                                className="px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 text-xs md:text-sm text-gray-300 hover:text-white transition-all text-right shadow-lg backdrop-blur-md"
                                            >
                                                {chip}
                                            </motion.button>
                                        ))}
                                    </div>
                                )}

                                {/* Message History - Glassy Bubbles */}
                                <div className="w-full max-w-lg space-y-4 flex-1 pb-4">
                                    {messages.map((msg, i) => (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            key={i}
                                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                        <div className={`p-3 md:p-4 rounded-2xl max-w-[85%] text-xs md:text-sm leading-relaxed backdrop-blur-md shadow-lg ${
                                                msg.role === 'user' 
                                                ? 'bg-blue-600/20 text-white rounded-tr-sm border border-blue-500/20' 
                                                : 'bg-black/20 text-gray-100 rounded-tl-sm border border-white/5'
                                            }`}>
                                                <ReactMarkdown
                                                    remarkPlugins={[remarkGfm]}
                                                    components={{
                                                        // Headings
                                                        h1: ({node, ...props}) => <h1 className="text-lg md:text-xl font-bold mb-2 text-white" {...props} />,
                                                        h2: ({node, ...props}) => <h2 className="text-base md:text-lg font-bold mb-2 text-white" {...props} />,
                                                        h3: ({node, ...props}) => <h3 className="text-sm md:text-base font-semibold mb-1.5 text-white" {...props} />,
                                                        h4: ({node, ...props}) => <h4 className="text-xs md:text-sm font-semibold mb-1 text-white" {...props} />,
                                                        // Paragraphs
                                                        p: ({node, ...props}) => <p className="mb-2 last:mb-0" {...props} />,
                                                        // Lists
                                                        ul: ({node, ...props}) => <ul className="list-disc list-inside mb-2 space-y-1" {...props} />,
                                                        ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-2 space-y-1" {...props} />,
                                                        li: ({node, ...props}) => <li className="ml-2" {...props} />,
                                                        // Links
                                                        a: ({node, ...props}) => <a className="text-blue-400 hover:text-blue-300 underline" target="_blank" rel="noopener noreferrer" {...props} />,
                                                        // Code
                                                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                                        code: ({node, inline, ...props}: any) => 
                                                            inline 
                                                            ? <code className="bg-white/10 px-1.5 py-0.5 rounded text-blue-200 font-mono text-xs" {...props} />
                                                            : <code className="block bg-white/10 p-2 rounded my-2 overflow-x-auto font-mono text-xs" {...props} />,
                                                        pre: ({node, ...props}) => <pre className="bg-white/5 p-3 rounded-lg my-2 overflow-x-auto border border-white/10" {...props} />,
                                                        // Emphasis
                                                        strong: ({node, ...props}) => <strong className="font-bold text-white" {...props} />,
                                                        em: ({node, ...props}) => <em className="italic" {...props} />,
                                                        // Blockquotes
                                                        blockquote: ({node, ...props}) => <blockquote className="border-l-2 border-blue-400 pl-3 my-2 italic text-gray-300" {...props} />,
                                                        // Tables
                                                        table: ({node, ...props}) => <table className="w-full border-collapse my-2" {...props} />,
                                                        thead: ({node, ...props}) => <thead className="bg-white/5" {...props} />,
                                                        tbody: ({node, ...props}) => <tbody {...props} />,
                                                        tr: ({node, ...props}) => <tr className="border-b border-white/5" {...props} />,
                                                        th: ({node, ...props}) => <th className="px-2 py-1.5 text-left font-semibold text-white text-xs" {...props} />,
                                                        td: ({node, ...props}) => <td className="px-2 py-1.5 text-xs" {...props} />,
                                                        // Horizontal rule
                                                        hr: ({node, ...props}) => <hr className="my-3 border-white/10" {...props} />,
                                                    }}
                                                >
                                                    {msg.content}
                                                </ReactMarkdown>
                                            </div>
                                        </motion.div>
                                    ))}
                                    
                                    {isLoading && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex justify-start w-full"
                                        >
                                            <div className="px-4 py-3 bg-black/20 rounded-2xl rounded-tl-sm border border-white/5 flex gap-1">
                                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                                                <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                                            </div>
                                        </motion.div>
                                    )}
                                    
                                    {chatError && (
                                        <div className="w-full px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
                                            {chatError}
                                        </div>
                                    )}

                                    <div ref={messagesEndRef} />
                                </div>
                            </div>
                        </div>

                        {/* Input Area - Floating Glass */}
                        <div className="flex-none p-4 md:p-6 pt-2 z-20">
                            <form onSubmit={(e) => handleSendMessage(e)} className="relative">
                                {/* Main Input */}
                                <div className={`relative flex items-center bg-black/30 backdrop-blur-2xl border border-white/10 rounded-2xl p-1.5 shadow-2xl transition-all ${remainingMessages === 0 ? 'opacity-50' : 'focus-within:border-indigo-500/50 focus-within:bg-black/40 hover:border-white/20'}`}>
                                    <input
                                        type="text"
                                        value={chatMessage}
                                        onChange={(e) => setChatMessage(e.target.value)}
                                        placeholder={remainingMessages === 0 ? "Let's discuss directly..." : "Ask AI anything..."}
                                        disabled={remainingMessages === 0}
                                        className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-gray-500 px-3 md:px-4 py-3 h-full text-xs md:text-sm font-medium disabled:cursor-not-allowed"
                                    />
                                    <div className="flex items-center gap-1 pr-1">
                                        <button 
                                            type="submit"
                                            disabled={!chatMessage.trim() || remainingMessages === 0}
                                            className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border border-white/5"
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT SIDEBAR */}
                    <div className="hidden md:flex w-[320px] flex-none p-6 flex-col gap-6 bg-black/20 backdrop-blur-md border-l border-white/5 relative overflow-hidden">
                        {/* Background ambient glow for sidebar */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-purple-600/10 blur-[80px] rounded-full pointer-events-none" />

                        {/* Services Section */}
                        <div className="space-y-4 relative z-10">
                            <h3 className="text-gray-400 text-xs font-semibold uppercase tracking-wider pl-1 flex items-center gap-2">
                                <Sparkles className="w-3 h-3 text-blue-400" />
                                Services We Offer
                            </h3>
                            <div className="space-y-3">
                                {SERVICES.map((service, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + i * 0.1 }}
                                        className="relative overflow-hidden flex items-center gap-3 p-3 rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/10 hover:border-blue-400/30 hover:bg-white/10 transition-all duration-300 group cursor-default shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
                                    >
                                        {/* Hover Shine Effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

                                        <div className="relative w-10 h-10 shrink-0 group-hover:scale-110 transition-transform duration-300">
                                            <Image 
                                                src={service.img} 
                                                alt={service.title} 
                                                fill 
                                                className="object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-gray-100 group-hover:text-white tracking-wide">{service.title}</h4>
                                            <p className="text-[11px] text-gray-400 group-hover:text-gray-300 font-medium">{service.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                         {/* Updated 'Free AI Growth Plan' CTA Card - ULTRA Glassy & Shiny */}
                         <div className="mt-auto relative z-10">
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="relative w-full aspect-square rounded-[30px] p-6 bg-gradient-to-br from-white/10 via-white/5 to-black/40 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_0_0_1px_rgba(255,255,255,0.1)] overflow-hidden flex flex-col justify-between group hover:border-white/30 transition-all duration-500"
                            >
                                {/* Vivid Inner Glows */}
                                <div className="absolute top-[-30%] right-[-20%] w-[180px] h-[180px] bg-blue-500/40 blur-[50px] rounded-full pointer-events-none mix-blend-screen animate-pulse" />
                                <div className="absolute bottom-[-20%] left-[-10%] w-[150px] h-[150px] bg-purple-600/40 blur-[60px] rounded-full pointer-events-none mix-blend-screen" />
                                
                                {/* Glass Shine Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-70 pointer-events-none" />

                                {/* Text Content */}
                                <div className="relative z-10 flex flex-col gap-3">
                                     <h2 className="text-2xl font-bold text-white leading-none tracking-tight drop-shadow-lg">
                                        Get Free AI <br /> 
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">Growth Plan</span>
                                     </h2>
                                      <p className="text-blue-100/80 text-xs font-medium leading-relaxed drop-shadow-sm max-w-[80%]">
                                         Schedule a strategy call to automate & scale.
                                      </p>
                                     <Link href="/contact" className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-xs font-bold w-fit mt-2 hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]">
                                        Schedule call
                                        <ArrowRight className="w-3 h-3" />
                                     </Link>
                                </div>

                                {/* Image Positioned at Bottom Right */}
                                <div className="absolute bottom-[-5px] right-[-5px] w-[130px] h-[130px] translate-x-2 translate-y-2 group-hover:scale-110 transition-transform duration-500">
                                    <Image
                                        src={compImage}
                                        alt="Computer"
                                        fill
                                        className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Rate Limit Popup */}
            <AnimatePresence>
              {showLimitPopup && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center z-[100] bg-black/70 backdrop-blur-md p-4"
                  onClick={() => setShowLimitPopup(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                    className="relative w-full max-w-[400px] bg-[#0b0f19] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
                  >
                        {/* Simple subtle glow at top */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-blue-500/10 blur-[50px] pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setShowLimitPopup(false);
                            }}
                            className="absolute top-4 right-4 z-20 text-gray-400 hover:text-white transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col items-center text-center p-8 pt-10">
                            {/* Green Tick Icon */}
                            <div className="mb-6 relative">
                                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                                    <Check className="w-8 h-8 text-black stroke-[3]" />
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 px-4">
                                Let&apos;s discuss the key problem directly with my team
                            </h3>
                            
                            <p className="text-gray-400 mb-8 text-sm leading-relaxed px-4">
                                Our experts are ready to help you solve your challenges with personalized AI solutions.
                            </p>

                            {/* Buttons */}
                            <div className="w-full space-y-3">
                                <button
                                    onClick={() => {
                                        setShowLimitPopup(false);
                                        window.location.href = "/contact";
                                    }}
                                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
                                >
                                    Book Free Session
                                    <ArrowRight className="w-4 h-4" />
                                </button>

                                <button
                                    onClick={() => {
                                        setShowLimitPopup(false);
                                        window.location.href = "/contact"; 
                                    }}
                                    className="w-full py-3.5 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-sm font-medium rounded-xl transition-all"
                                >
                                    Contact Us for More Details
                                </button>
                            </div>

                            <p className="text-[10px] text-gray-500 mt-6 font-medium tracking-wide text-center">
                                FREE AI AUDIT • NO COMMITMENT REQUIRED
                            </p>
                        </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
