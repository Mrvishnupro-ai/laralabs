import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Autonomous Agents for Business | Lara Labs",
  description: "Hire AI digital workers and autonomous agents to handle customer support, sales, and operations 24/7. Cut costs and scale your business.",
  keywords: ["AI autonomous agents for business", "Hire AI digital workers", "AI customer support agents", "AI sales automation platform", "Lara Labs AI"],
};

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen text-white font-sans overflow-hidden">
      <Navbar />
      
      <main className="flex flex-col items-center justify-start pb-12 overflow-hidden w-full relative">
        <section className="relative flex flex-col items-center justify-center pt-32 pb-16 px-4 md:px-[10%] w-full max-w-7xl mx-auto z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-center drop-shadow-sm">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                AI Autonomous Agents for Business
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Hire intelligent digital workers that never sleep. Our custom AI agents handle customer support, qualify leads, and automate your repetitive daily tasks.
            </p>
          </div>
        </section>

        <section className="px-4 md:px-[10%] max-w-7xl mx-auto py-12 space-y-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">What is an AI Digital Worker?</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Unlike traditional chatbots that rely on pre-programmed scripts, autonomous AI agents understand context, make decisions, and execute multi-step workflows. Whether it is responding to a complex customer query by fetching data from your CRM, or proactively emailing a warm lead, our AI agents act as an extension of your team.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              <li><strong>AI Customer Support Agents:</strong> Resolve 80% of Tier-1 support tickets instantly.</li>
              <li><strong>AI Sales Automation:</strong> Engage leads within seconds of form submission.</li>
              <li><strong>Internal Operations:</strong> Automate data entry, scheduling, and internal knowledge retrieval.</li>
            </ul>
          </div>
        </section>

        <div className="w-full relative z-0 mt-12">
          <CTA />
        </div>
      </main>
    </div>
  );
}
