
import React from "react";
import Image from "next/image";

// Importing logos
import logo2 from "@/assets/scroll_logos/2.png";
import logo3 from "@/assets/scroll_logos/3.png";
import logo4 from "@/assets/scroll_logos/4.png";
import logo5 from "@/assets/scroll_logos/5.png";
import logo6 from "@/assets/scroll_logos/6.png";
import logo7 from "@/assets/scroll_logos/7.png";
import logo8 from "@/assets/scroll_logos/8.png";
import logo9 from "@/assets/scroll_logos/9.png";
import logo10 from "@/assets/scroll_logos/10.png";
import logo11 from "@/assets/scroll_logos/11.png";

const logos = [
  { id: 2, src: logo2, alt: "Company Logo 2" },
  { id: 3, src: logo3, alt: "Company Logo 3" },
  { id: 4, src: logo4, alt: "Company Logo 4" },
  { id: 5, src: logo5, alt: "Company Logo 5" },
  { id: 6, src: logo6, alt: "Company Logo 6" },
  { id: 7, src: logo7, alt: "Company Logo 7" },
  { id: 8, src: logo8, alt: "Company Logo 8" },
  { id: 9, src: logo9, alt: "Company Logo 9" },
  { id: 10, src: logo10, alt: "Company Logo 10" },
  { id: 11, src: logo11, alt: "Company Logo 11" },
];

export default function LogoTicker() {
  return (
    <div className="trusted-by-section z-10 w-full max-w-6xl mx-auto border-t border-white/5 pt-6">
      <p className="text-xs text-gray-500 uppercase tracking-widest mb-8 font-semibold">Technologies Used to Build Ai Systems</p>

      <div className="logos-slide flex items-center">
        {/* First Set of Logos */}
        <div className="flex items-center gap-12 md:gap-20 px-10 min-w-max">
          {logos.map((logo) => (
            <div key={logo.id} className="relative w-24 h-12 md:w-32 md:h-16 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        
        {/* Duplicate Set for Infinite Scroll */}
        <div className="flex items-center gap-12 md:gap-20 px-10 min-w-max">
          {logos.map((logo) => (
            <div key={`${logo.id}-duplicate`} className="relative w-24 h-12 md:w-32 md:h-16 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
