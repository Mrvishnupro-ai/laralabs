import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom AI Workflow Automation | Lara Labs AI",
  description: "Automate your internal business processes with AI. We integrate APIs, AI models, and custom software to eliminate manual data entry.",
  keywords: ["Custom AI workflow automation", "Automate business processes with AI", "API integration agency", "Business process automation", "Lara Labs AI"],
};

export default function WorkflowAutomationPage() {
  return (
    <div className="min-h-screen text-white font-sans overflow-hidden">
      <Navbar />
      
      <main className="flex flex-col items-center justify-start pb-12 overflow-hidden w-full relative">
        <section className="relative flex flex-col items-center justify-center pt-32 pb-16 px-4 md:px-[10%] w-full max-w-7xl mx-auto z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-center drop-shadow-sm">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                Custom AI Workflow Automation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Stop paying humans to do robotic work. We connect your existing software stack and automate complex processes from end to end.
            </p>
          </div>
        </section>

        <section className="px-4 md:px-[10%] max-w-7xl mx-auto py-12 space-y-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">How to Automate Internal Business Processes with AI</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              True business efficiency happens when different software platforms talk to each other seamlessly. We analyze your most time-consuming bottlenecks—from invoicing and lead routing to inventory management—and build custom, automated pipelines.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              <li><strong>Seamless Integrations:</strong> We connect Hubspot, Salesforce, Slack, Gmail, and hundreds of other APIs.</li>
              <li><strong>AI Decision Routing:</strong> Use Large Language Models to automatically categorize emails, extract invoice data, and make logic-based routing decisions.</li>
              <li><strong>Massive ROI:</strong> Recapture hundreds of hours previously spent on manual data entry every month.</li>
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
