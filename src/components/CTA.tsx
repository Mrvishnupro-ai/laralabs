import Image from "next/image";
import bgImage from "@/assets/cta/bg.jpg";
import personImage from "@/assets/cta/img.png";
import { ArrowUpRight } from "lucide-react";
import { FaPhoneAlt } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="w-full px-[10%] pt-10 pb-20 flex justify-center">
      <div className="relative w-full rounded-[2rem] overflow-hidden aspect-[10/3.2] flex items-center">
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
        <div className="relative z-10 w-full h-full grid grid-cols-[1.2fr_0.8fr] gap-4 items-center pl-8 pr-4 md:pl-24 md:pr-12">
          
          {/* Left Side: Text */}
          <div className="flex flex-col justify-center h-full space-y-3 pt-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-[Telegraph,serif] leading-[1.1] mb-4">
              Get A Free Ai Growth plan <br /> for your Business
            </h2>
            
            <p className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-lg">
              Schedule a strategy call and discover how AI can automate, scale, and optimize your operations.
            </p>

            <div className="pt-2 space-y-3">
              <p className="text-white text-base md:text-lg uppercase tracking-wider font-semibold opacity-90">
                Claim Free AI Consultation Now
              </p>
              
              <button className="group flex items-center gap-3 bg-white text-black px-7 py-3 rounded-full font-medium text-base hover:bg-gray-100 transition-colors w-fit">
                Schedule a Call
                <span className="bg-black text-white rounded-full p-1.5 group-hover:bg-gray-800 transition-colors">
                   <ArrowUpRight size={18} />
                </span>
              </button>
            </div>
          </div>

            {/* Right Side: Image */}
          <div className="relative h-full flex items-end justify-end">
             <div className="relative z-10 w-full h-[135%]">
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
    </section>
  );
}
