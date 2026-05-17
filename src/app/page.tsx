import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lara Labs AI | Top AI Automation Agency",
  description: "Lara Labs is an AI Automation Agency. We build custom AI agents, RAG systems, and automate workflows to save your business time and money.",
  keywords: ["AI automation agency", "Hire AI developers", "Custom AI solutions", "Workflow automation company"],
};

const ServicesCards = dynamic(() => import("@/components/ServicesCards"), {
  ssr: true, // we still want them SEO optimized, just async js bundle
});
const CardSwipeStack = dynamic(() => import("@/components/CardSwipeStack"), {
  ssr: true,
});
const OurWork = dynamic(() => import("@/components/OurWork"), {
  ssr: true,
});
const ThreeSimpleSteps = dynamic(() => import("@/components/ThreeSimpleSteps"), {
  ssr: true,
});
const CTA = dynamic(() => import("@/components/CTA"), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="relative min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <ServicesCards />
        <CardSwipeStack />
        <OurWork />
        <ThreeSimpleSteps />
        <CTA />
      </main>
    </div>
  );
}
