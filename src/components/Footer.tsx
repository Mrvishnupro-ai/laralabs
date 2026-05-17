import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
    const footerLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Blog", href: "/blog" },
        { name: "About", href: "/about" },
        { name: "Join", href: "/join" },
        { name: "Contact", href: "/contact" },
    ];

    const socialLinks = [
        { name: "Twitter", icon: Twitter, href: "https://x.com/laralabs_ai" },
        { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/laralabs_ai/" },
        { name: "LinkedIn", icon: Linkedin, href: "http://linkedin.com/company/laralabs-ai" },
        { name: "YouTube", icon: Youtube, href: "#" }
    ];

    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleJoin = async () => {
        if (!email) return;
        setStatus('loading');
        try {
            // Replace with your actual Google Apps Script Web App URL
            // Example: https://script.google.com/macros/s/DEPLOYMENT_ID/exec
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx9Rp_5jlI3lK-lzFDOsfJwnoj1K_oImB_zdIzDxje7Nnq7y8l09uPsEGS90BZNoPBs/exec';
            
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 3000);
        } catch (error) {
            console.error('Error joining community:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <footer className="relative w-full bg-[#050505]/60 backdrop-blur-md border-t border-white/10 pt-8 overflow-hidden flex flex-col justify-between">
            
            {/* Main Content Area */}
            <div className="relative z-10 w-full px-[5%]">
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-24 mb-10 md:mb-20">
                    
                    {/* Left Column: Brand & CTA (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col gap-4 md:gap-6">
                        {/* Logo - Increased Size */}
                        <div className="flex items-center gap-2">
                            <Link href="/" className="block relative h-10 w-32 md:h-20 md:w-64">
                                <Image
                                    src="/logo.png"
                                    alt="Laralabs Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </Link>
                        </div>
                        
                        {/* Description */}
                        <p className="text-zinc-400 text-sm md:text-lg leading-relaxed max-w-xl">
                            We help companies build digital workers that work for you, automating workflows and saving time.
                        </p>

                        {/* Big CTA Text - Reduced Spacing */}
                        <div className="mt-2">
                            <h3 className="text-3xl md:text-6xl font-semibold text-white leading-[1.1]">
                                Ready to scale your <br />
                                <span className="text-blue-500">Business?</span>
                            </h3>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-4">
                            <Link 
                                href="/contact" 
                                className="inline-flex h-12 md:h-14 items-center justify-center rounded-full bg-white px-6 md:px-10 text-sm md:text-lg font-bold text-black transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>

                    {/* Middle Column: Quick Links (3 cols) */}
                    <div className="lg:col-span-3 pt-2 lg:pl-12">
                        <h4 className="text-white font-semibold mb-8 text-lg md:text-xl">Quick Links</h4>
                        <ul className="grid grid-cols-3 lg:grid-cols-1 gap-4">
                            {footerLinks.map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-zinc-500 hover:text-blue-400 transition-colors text-sm md:text-lg font-medium">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: Community & Contact (4 cols) */}
                    <div className="lg:col-span-4 flex flex-col gap-10 pt-2">
                        <div>
                            <h4 className="text-white font-semibold mb-6 text-lg md:text-xl">Join our developers community</h4>
                            <div className="flex gap-2 w-full">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    suppressHydrationWarning
                                    className="flex-1 h-12 md:h-14 rounded-xl bg-white/5 border border-white/10 px-6 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all min-w-0"
                                />
                                <button 
                                    onClick={handleJoin}
                                    disabled={status === 'loading'}
                                    suppressHydrationWarning 
                                    className={`h-12 md:h-14 px-6 md:px-8 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] whitespace-nowrap ${
                                        status === 'success' ? 'bg-green-600 hover:bg-green-500 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white'
                                    }`}
                                >
                                    {status === 'loading' ? '...' : status === 'success' ? 'Joined!' : 'Join'}
                                </button>
                            </div>
                        </div>

                        <div>
                            <div className="flex gap-4 mb-8">
                                {socialLinks.map((social) => (
                                    <Link 
                                        key={social.name} 
                                        href={social.href} 
                                        target="_blank"
                                        className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-blue-600 hover:border-white transition-all duration-300 group"
                                    >
                                        <social.icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                                    </Link>
                                ))}
                            </div>
                            
                            <div className="text-zinc-400">
                                <p className="mb-2 text-sm font-medium text-zinc-500 uppercase tracking-wider">Contact Us Details</p>
                                <p className="text-white hover:text-blue-400 transition-colors cursor-pointer text-sm md:text-lg font-medium">contact@laralabs.in</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar Content - Moved up slightly within content block */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm relative z-20">
                     <p className="text-zinc-400 text-sm">
                        &copy; {new Date().getFullYear()} Laralabs. All Rights Reserved.
                    </p>
                     
                     <div className="flex gap-8 text-sm text-zinc-400">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                     </div>
                </div>
            </div>

            {/* Massive Background Text Effect - Positioned BELOW the line occupying space */}
            <div className="w-full flex justify-center py-4 bg-transparent">
                <h1 className="text-[17vw] font-black bg-gradient-to-b from-white/20 via-white/10 to-transparent bg-clip-text text-transparent text-center leading-none tracking-tighter whitespace-nowrap select-none">
                    LARA LABS AI
                </h1>
            </div>
        </footer>
    );
};

export default Footer;
