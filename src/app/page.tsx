import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesCards from "@/components/ServicesCards";
import CardSwipeStack from "@/components/CardSwipeStack";
import ScheduleMeet from "@/components/ScheduleMeet";
import OurWork from "@/components/OurWork";
import ThreeSimpleSteps from "@/components/ThreeSimpleSteps";

export default function Home() {
  return (
    <div className="min-h-screen font-sans animate-gradient-bg">
      <Navbar />
      <main>
        <Hero />
        <ServicesCards />
        <ThreeSimpleSteps />
        <OurWork />
        <CardSwipeStack />
        <ScheduleMeet />
      </main>
    </div>
  );
}
