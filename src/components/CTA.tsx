import Image from "next/image";
import bgImage from "@/assets/cta/bg.jpg";
import personImage from "@/assets/cta/img.png";
import { ArrowUpRight } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="w-full px-[5%] md:px-[10%] pt-0 pb-10 md:pt-10 md:pb-20 flex flex-col items-center gap-6 lg:block lg:gap-0">
      <div className="relative w-full rounded-[24px] md:rounded-[2rem] overflow-hidden flex h-auto min-h-[150px] lg:block lg:aspect-[10/3.2] items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={bgImage}
            alt="Background"
            fill
            className="object-cover object-left-top blur-md scale-110 opacity-60"
            quality={100}
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-blue-600/20" />
        </div>

        {/* Content Grid */}
        <div className="relative z-10 w-full h-full lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:gap-4 lg:items-center lg:px-6 lg:pt-6 lg:pl-24 lg:pr-12 lg:pb-0">
          
          {/* Left Side: Text */}
          <div className="flex flex-col justify-center h-full space-y-2 md:space-y-3 w-[60%] pl-5 py-5 lg:w-auto lg:p-0 lg:pt-4">
            <h2 className="text-[18px] sm:text-2xl md:text-5xl lg:text-6xl text-white font-sans font-bold leading-[1.1] mb-2 md:mb-4">
              Get A Free Ai Growth plan <br className="hidden md:block" /> for your Business
            </h2>
            
            <p className="hidden md:block text-gray-200 text-[10px] sm:text-xs md:text-xl font-light leading-relaxed max-w-lg">
              Schedule a strategy call and discover how AI can automate, scale, and optimize your operations.
            </p>

            <div className="pt-1 md:pt-2 space-y-2 md:space-y-3">
              <p className="text-white text-[10px] sm:text-xs md:text-lg uppercase tracking-wider font-semibold opacity-90">
                Claim Free AI Consultation Now
              </p>
              
              <button suppressHydrationWarning className="hidden lg:flex group items-center gap-2 md:gap-3 bg-white text-black px-4 py-2 md:px-7 md:py-3 rounded-full font-medium text-[10px] sm:text-xs md:text-base hover:bg-gray-100 transition-colors w-fit">
                Schedule a Call
                <span className="bg-black text-white rounded-full p-1 md:p-1.5 group-hover:bg-gray-800 transition-colors">
                   <ArrowUpRight size={12} className="md:w-[18px] md:h-[18px]" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="absolute bottom-0 right-0 w-[45%] h-[90%] lg:relative lg:w-auto lg:h-full flex items-end justify-end mt-0">
             <div className="relative z-10 w-full h-full lg:h-[135%] flex items-end">
                <Image
                  src={personImage}
                  alt="Business Person"
                  fill
                  className="object-contain object-bottom"
                />
             </div>
          </div>
        </div>
      </div>

      {/* Mobile Button - Outside Card */}
      <button suppressHydrationWarning className="lg:hidden w-full group flex items-center justify-center gap-3 bg-white text-black px-7 py-3 rounded-xl font-medium text-sm hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        Schedule a Call
        <span className="bg-black text-white rounded-full p-1.5 group-hover:bg-gray-800 transition-colors">
            <ArrowUpRight size={16} />
        </span>
      </button>
    </section>
  );
}
