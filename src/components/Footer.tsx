import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="relative w-full py-16 px-6 bg-white/[0.02] backdrop-blur-md">
            {/* Background Gradient Blob for extral "glassy" feel */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center justify-center text-center">

                {/* Logo & Tagline */}
                <div className="flex flex-col items-center gap-6 mb-10">
                    <Link href="/" className="inline-block hover:opacity-80 transition-opacity">
                        <div className="relative h-16 w-48 md:h-20 md:w-60">
                            <Image
                                src="/logo.png"
                                alt="Agency 2.0"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </Link>
                    <p className="text-zinc-400 text-lg md:text-xl max-w-2xl font-light">
                        We help small businesses save 10–20 hours/week using AI automation.
                    </p>
                </div>

                {/* Separator Line */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12" />

                {/* Main Navigation - Horizontal & Big */}
                <nav className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-12">
                    {['Works', 'Services', 'About', 'Join', 'Contact us'].map((item) => (
                        <Link
                            key={item}
                            href="#"
                            className="text-lg md:text-xl text-zinc-300 hover:text-white transition-colors duration-300 font-medium tracking-wide"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Social Icons - Highlighted & Actual Links */}
                <div className="flex items-center gap-6 mb-12">
                    {/* X (Twitter) */}
                    <Link href="https://x.com/laralabs_ai" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 group border border-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <span className="sr-only">X (Twitter)</span>
                        <svg className="w-6 h-6 text-white transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </Link>

                    {/* Instagram */}
                    <Link href="https://www.instagram.com/laralabs_ai/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 group border border-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <span className="sr-only">Instagram</span>
                        <svg className="w-6 h-6 text-white transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                    </Link>

                    {/* LinkedIn */}
                    <Link href="https://linkedin.com/company/laralabs-ai" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/10 rounded-2xl hover:bg-white/20 transition-all duration-300 group border border-white/10 hover:border-white/30 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <span className="sr-only">LinkedIn</span>
                        <svg className="w-6 h-6 text-white transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                        </svg>
                    </Link>
                </div>

                {/* Bottom Links */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-zinc-500">
                    <p>© {new Date().getFullYear()} Agency 2.0. All Rights Reserved.</p>
                    <span className="hidden md:inline text-zinc-700">|</span>
                    <Link href="#" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
