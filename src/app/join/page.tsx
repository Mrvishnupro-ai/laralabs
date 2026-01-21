import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
// @ts-ignore
import joinImage from '@/assets/join/1.jpg';
import Link from 'next/link';

const JoinPage = () => {
    // Reuse social data
    const socialLinks = [
        { name: "Twitter", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z", href: "https://x.com/laralabs_ai" },
        { name: "Instagram", icon: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.153 1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z", viewBox: "0 0 24 24", fillRule: "evenodd" },
        { name: "LinkedIn", icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z", viewBox: "0 0 24 24", fillRule: "evenodd" },
        { name: "YouTube", icon: "M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,10.641,4,10.641,4S3.028,4,1.468,4.418c-0.86,0.23-1.538,0.908-1.768,1.768C-0.719,7.746-0.719,11-0.719,11s0,3.254,0.418,4.814c0.23,0.86,0.908,1.538,1.768,1.768C3.028,18,10.641,18,10.641,18s7.613,0,9.174-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,14.254,22,11,22,11S22,7.746,21.582,6.186z M8,13.731V8.269L14.419,11L8,13.731z", viewBox: "0 0 21.281 14", fillRule: "nonzero" }
    ];

  return (
    <div className="min-h-screen text-white flex flex-col font-sans">
      <Navbar />


      <main className="flex-grow w-full px-[8%] pt-32 lg:pt-48 pb-20 relative z-10">
        
        {/* TOP SECTION: Split Layout */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 mb-16 lg:mb-24 items-start">
            
            {/* Left Column: Pill & Headline */}
            <div className="flex flex-col items-start text-left">
                
                {/* Pill Badge - Aligned Top */}
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
                    <span className="text-sm font-medium text-white">Community Open!</span>
                </div>

                <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1] text-white">
                    Join our <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">
                        Tech Community <br />
                        Today
                    </span>
                    <span className="text-blue-500 ml-2">*</span>
                </h1>
            </div>

            {/* Right Column: Description & Checkmarks & CTA */}
            {/* Added pt-14 to visually align the paragraph with the first line of the H1, skipping the pill height */}
            <div className="flex flex-col items-start text-left lg:pt-16">
                <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-8 max-w-lg">
                    Join in our tech community where we share marketing tips and AI usage in real businesses. We experiment with AI tools and write AI use cases.
                </p>

                {/* Checkmarks */}
                <div className="flex gap-8 mb-12">
                    <div className="flex items-center gap-2">
                         <div className="w-5 h-5 flex items-center justify-center">
                             <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <span className="text-zinc-300 font-medium">Marketing Tips</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="w-5 h-5 flex items-center justify-center">
                             <svg className="w-5 h-5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12" />
                            </svg>
                        </div>
                        <span className="text-zinc-300 font-medium">AI Use Cases</span>
                    </div>
                </div>

                {/* Big CTA Button */}
                <button className="h-16 px-12 rounded-full bg-black border border-zinc-800 text-white text-lg font-medium transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:bg-zinc-900 hover:scale-105 active:scale-95">
                    Join Community
                </button>
            </div>
        </div>


        {/* BOTTOM SECTION: Wide Banner */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[3rem] overflow-hidden border border-white/10 group">
            
            {/* Background Image */}
            <Image 
                src={joinImage}
                alt="Community Banner"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Bottom Left Badge */}
            <div className="absolute bottom-10 left-6 md:bottom-16 md:left-12 flex items-center gap-4 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-full">
                <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full bg-zinc-800 border-2 border-black flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 opacity-80" />
                         </div>
                     ))}
                </div>
                <div>
                    <span className="block text-white font-semibold">Follow us</span>
                    <span className="text-xs text-zinc-300">on social media</span>
                </div>
            </div>

            {/* Right Side Glass Card (Socials) */}
            <div className="absolute bottom-10 right-6 md:bottom-16 md:right-12 md:top-auto top-10 w-[280px] md:w-[350px] bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2rem] p-8 flex flex-col justify-between hover:bg-white/15 transition-colors">
                
                <div>
                    <h3 className="text-5xl font-medium text-white mb-2">Socials</h3>
                    <p className="text-zinc-300 leading-tight">
                        Follow our social medias to get more value out of it
                    </p>
                </div>

                <div className="flex justify-between mt-8 pt-8 border-t border-white/10">
                    {socialLinks.map((social) => (
                        <Link 
                            key={social.name} 
                            href={social.href || '#'} 
                            target="_blank"
                            className="text-zinc-400 hover:text-blue-400 transition-colors transform hover:scale-110"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox={social.viewBox}>
                                <path fillRule={social.fillRule as "evenodd" | "nonzero" | "inherit" | undefined} d={social.icon} />
                            </svg>
                        </Link>
                    ))}
                </div>
            </div>

        </div>

      </main>
    </div>
  );
};

export default JoinPage;
