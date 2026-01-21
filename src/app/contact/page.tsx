import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import Image from 'next/image';
import contactHeroImage from '@/assets/contact/1.jpg';

const ContactPage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-blue-500/30 text-white">
      

      <Navbar />

      <main className="relative z-10 w-full px-[8%] pt-24 pb-20">
        
        {/* Hero Banner Section */}
        <div className="relative w-full h-[300px] md:h-[450px] rounded-[3rem] overflow-hidden mb-20 group">
            {/* Image */}
            <Image 
                src={contactHeroImage}
                alt="Contact Hero"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

            {/* Content within Banner */}
            <div className="absolute inset-0 p-8 md:p-14 flex flex-col justify-between">
                {/* Decoration */}
                <div className="w-12 h-12 relative">
                     <svg className="w-full h-full text-white/20" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="12" r="2" />
                        <circle cx="19" cy="12" r="2" />
                        <circle cx="5" cy="12" r="2" />
                        <circle cx="12" cy="19" r="2" />
                        <circle cx="12" cy="5" r="2" />
                     </svg>
                </div>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-lg">
                        Contacts
                    </h1>
                </div>
            </div>

            {/* Breadcrumb Pill - Floating */}
            <div className="absolute bottom-8 right-8 md:bottom-14 md:right-14">
                <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 text-sm font-medium flex items-center gap-2 hover:bg-white/20 transition-colors cursor-default">
                    <Link href="/" className="text-zinc-400 hover:text-white transition-colors">Home</Link>
                    <span className="text-zinc-600">•</span>
                    <span className="text-white">Contacts</span>
                </div>
            </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Info */}
            <div className="lg:col-span-5 flex flex-col gap-12">
                <div>
                    <span className="text-blue-500 font-mono text-sm tracking-wider uppercase mb-4 block">/ get in touch /</span>
                    <h2 className="text-4xl md:text-5xl font-semibold leading-[1.1] mb-6">
                        We are always ready to help you and answer your questions
                    </h2>
                    <p className="text-zinc-400 text-lg leading-relaxed">
                        Have a project in mind? We'd love to hear about it. Let's discuss how we can help scale your business with AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                    {/* Item 1 */}
                    <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg">Call Center</h3>
                        <div className="flex flex-col gap-1 text-zinc-400">
                             <p>+1 (555) 123-4567</p>
                             <p>+1 (555) 987-6543</p>
                        </div>
                    </div>
                     {/* Item 2 */}
                     <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg">Our Location</h3>
                        <div className="flex flex-col gap-1 text-zinc-400">
                             <p>888 Brannan St,</p>
                             <p>San Francisco, CA 94103</p>
                        </div>
                    </div>
                     {/* Item 3 */}
                     <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg">Email</h3>
                        <div className="flex flex-col gap-1 text-zinc-400">
                             <a href="mailto:hello@laralabs.ai" className="hover:text-blue-400 transition-colors">hello@laralabs.ai</a>
                        </div>
                    </div>
                     {/* Item 4 */}
                     <div className="space-y-4">
                        <h3 className="text-white font-bold text-lg">Social Network</h3>
                         <div className="flex gap-4">
                            {[
                                { icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", href: "https://x.com/laralabs_ai" },
                                { icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", href: "#" },
                            ].map((social, idx) => (
                                <Link 
                                    key={idx} 
                                    href={social.href} 
                                    target="_blank"
                                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-white hover:text-black transition-all"
                                >
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={social.icon}/></svg>
                                </Link>
                            ))}
                         </div>
                    </div>
                </div>
            </div>

            {/* Right Column: Form Card */}
            <div className="lg:col-span-7">
                <div className="bg-[#0f0f16] border border-white/5 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
                    {/* Subtle Glow inside card */}
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

                    <h3 className="text-3xl font-semibold text-white mb-2">Get in Touch</h3>
                    <p className="text-zinc-500 mb-10">Define your goals and identify areas where AI can add value to your business</p>

                    <form className="space-y-8">
                        <div className="space-y-1">
                            <input 
                                type="text" 
                                placeholder="Full name" 
                                className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>
                        <div className="space-y-1">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>
                        <div className="space-y-1">
                            <input 
                                type="text" 
                                placeholder="Subject" 
                                className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                            />
                        </div>
                        <div className="space-y-1">
                            <textarea 
                                placeholder="Message" 
                                rows={4}
                                className="w-full bg-transparent border-b border-white/10 py-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                            />
                        </div>

                        <div className="pt-6">
                            <button className="h-14 px-10 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:scale-105 transition-transform flex items-center gap-2 group">
                                <span>Send a message</span>
                                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

      </main>
    </div>
  );
};

export default ContactPage;
