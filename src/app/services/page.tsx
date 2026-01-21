import Navbar from "@/components/Navbar";
import ServicesSwipeCardStack from "@/components/ServicesSwipeCardStack";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import ServicesList from "@/components/ServicesList";

export default function ServicesPage() {
  return (
    <div className="min-h-screen text-white font-sans overflow-hidden">
      <Navbar />
      
      <main className="flex flex-col items-center justify-start pt-32 pb-12 overflow-hidden w-full relative">
         {/* Background Elements */}

        {/* --- HERO SECTION --- */}
        <section className="relative flex flex-col items-center justify-center min-h-[60vh] pt-20 pb-16 px-4 md:px-8 w-full max-w-7xl mx-auto z-10">
          <div className="text-center space-y-10 max-w-5xl mx-auto">
            {/* Main Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-center max-w-5xl mx-auto drop-shadow-sm">
              <span className="block mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">We build AI systems that</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-indigo-300 pb-2">save time, cut costs, and grow your business.</span>
            </h1>

            {/* Chrome UI Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-6">
              <a href="/contact" className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-b from-blue-600 to-blue-800 text-white text-base font-semibold rounded-full border border-blue-500 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_10px_20px_rgba(29,78,216,0.3)] hover:from-blue-500 hover:to-blue-700 transition-all hover:scale-105 active:scale-95">
                <span>Start a Project</span>
                <svg className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a href="#services" className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-b from-gray-50 to-gray-200 text-black text-base font-semibold rounded-full border border-white shadow-[inset_0_1px_0_0_rgba(255,255,255,1),0_10px_20px_rgba(0,0,0,0.1)] hover:from-white hover:to-gray-100 transition-all hover:scale-105 active:scale-95">
                Explore Services
              </a>
            </div>
          </div>
        </section>
         
         <div className="w-full relative z-0">
             <ServicesSwipeCardStack />
             <ServicesList />
         </div>
      </main>
    </div>
  );
}
