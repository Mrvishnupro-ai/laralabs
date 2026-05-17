import Navbar from "@/components/Navbar";
import CTA from "@/components/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom RAG System Development | Lara Labs AI",
  description: "Securely query your internal company data. We build custom Retrieval-Augmented Generation (RAG) systems for business intelligence and knowledge management.",
  keywords: ["Custom RAG system development", "Retrieval-Augmented Generation", "AI knowledge management", "Enterprise AI search", "Lara Labs AI"],
};

export default function RAGSystemsPage() {
  return (
    <div className="min-h-screen text-white font-sans overflow-hidden">
      <Navbar />
      
      <main className="flex flex-col items-center justify-start pb-12 overflow-hidden w-full relative">
        <section className="relative flex flex-col items-center justify-center pt-32 pb-16 px-4 md:px-[10%] w-full max-w-7xl mx-auto z-10">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-center drop-shadow-sm">
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                Custom RAG System Development
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Unlock the data hidden inside your PDFs, Notion docs, and databases. Let your team chat securely with your entire company knowledge base.
            </p>
          </div>
        </section>

        <section className="px-4 md:px-[10%] max-w-7xl mx-auto py-12 space-y-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Why Your Business Needs a RAG System</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Retrieval-Augmented Generation (RAG) allows AI models to read and understand your private business data without actually training on it. This means your data stays completely secure, but you get the power of ChatGPT applied strictly to your company's documents, SOPs, and historical data.
            </p>
            <ul className="list-disc pl-5 space-y-3 text-gray-300">
              <li><strong>Zero Hallucinations:</strong> The AI only answers based on the context provided in your verified documents.</li>
              <li><strong>Instant Onboarding:</strong> New hires can instantly ask questions about complex internal processes.</li>
              <li><strong>Data Security:</strong> Enterprise-grade security ensures your private data never leaves your environment.</li>
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
