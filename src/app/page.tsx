import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesCards from "@/components/ServicesCards";
import CardSwipeStack from "@/components/CardSwipeStack";
import OurWork from "@/components/OurWork";
import ThreeSimpleSteps from "@/components/ThreeSimpleSteps";
import CTA from "@/components/CTA";

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
