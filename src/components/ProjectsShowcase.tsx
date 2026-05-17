import Image from 'next/image';
import { MoveRight } from 'lucide-react';

export default function ProjectsShowcase() {
  return (
    <section className="relative w-full bg-transparent text-white overflow-visible pb-24">
      
      {/* Container for the main visual - Aligned with Site UI (px-[10%]) */}
      <div className="w-full px-[5%] md:px-[10%] pt-8">
        {/* Outer styling wrapper */}
        <div className="rounded-3xl border border-white/10 p-2 bg-white/5">
            <div className="relative w-full rounded-2xl overflow-hidden group">
            
            {/* Aspect Ratio Box to Ensure Image Height */}
            <div className="relative aspect-[16/10] md:aspect-[21/9] w-full min-h-[600px]">
                 {/* Background Image */}
                <Image
                    src="/dirt_bike_racer.png"
                    alt="Dirt bike racer"
                    fill
                    className="object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    priority
                />
                
                {/* Gradient Overlays for text readability - mimicking the dark fade at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent opacity-60 z-10" />

                {/* Content Container positioned absolutely over the image */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end pb-12 md:pb-16 px-6 md:px-16">
                    <div className="flex flex-col lg:flex-row items-end justify-between w-full gap-8 lg:gap-0">
                        
                        {/* Left Side: Projects Title */}
                        <div className="transform translate-y-0 transition-transform duration-700 w-full lg:w-auto">
                            <span className="text-[#ff5500] font-bold uppercase tracking-[0.1em] text-sm md:text-base mb-3 block pl-1">
                                Selected Work
                            </span>
                            <h1 className="text-6xl md:text-8xl lg:text-[9rem] xl:text-[10rem] font-bold text-white tracking-tighter leading-[0.9] drop-shadow-2xl">
                                Projects
                            </h1>
                        </div>

                        {/* Right Side: Description */}
                        <div className="max-w-md text-left lg:mb-6 lg:pr-8 w-full lg:w-auto">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight">
                                Real brands, real <br className="hidden md:block"/> results
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light opacity-90">
                                Take a closer look at how strategy and design come together to build brands that connect and endure.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
       </div>
      </div>

     {/* Bottom Info Section (Bringing Brands to Life) is SEPARATE, below the image */}
      <div className="w-full px-[5%] md:px-[10%] mt-20 md:mt-24">
        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-16">
            <div className="max-w-2xl w-full">
                 <span className="text-[#ff5500] font-bold uppercase tracking-[0.2em] text-xs mb-6 block">Selected Work</span>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
                    Bringing Brands <br />
                    to Life Through <br />
                    Design
                 </h2>
            </div>

            <div className="mt-10 md:mt-0 flex flex-col items-start md:items-end gap-8 w-full md:w-auto">
                <p className="text-gray-400 max-w-md text-left md:text-right text-lg">
                    A curated collection of visual identities, packaging, and creative systems built for impact.
                </p>
                
                <div className="flex flex-col gap-2 items-start md:items-end w-full">
                     <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest text-right mb-1 w-full md:w-auto">Let&apos;s Build Something</p>
                     <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-widest text-right mb-4 w-full md:w-auto">Meaningful Together</p>
                     
                     <button className="group relative inline-flex items-center gap-4 pl-8 pr-2 py-2 bg-[#ff5500] text-white rounded-full font-bold text-sm transition-all hover:bg-[#ff6600] hover:shadow-[0_0_20px_rgba(255,85,0,0.4)] w-fit self-start md:self-end">
                        Get in touch
                        <span className="w-10 h-10 rounded-full bg-white text-[#ff5500] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-md">
                           <MoveRight className="w-5 h-5" />
                        </span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
