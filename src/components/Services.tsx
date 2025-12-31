import React from "react";

const services = [
    {
        title: "AI Automation & Operations",
        description: "Streamline processes, reduce operational costs, and scale business efficiently.",
        icon: (
            <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
        ),
        gradient: "from-blue-900/40 to-cyan-900/10"
    },
    {
        title: "AI Assistants & Support",
        description: "Deliver faster responses, reliable support, and better customer experiences.",
        icon: (
            <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
        ),
        gradient: "from-blue-900/40 to-indigo-900/10"
    },
    {
        title: "AI Strategy & Consulting",
        description: "Align AI initiatives with business objectives for long-term growth.",
        icon: (
            <svg className="w-10 h-10 text-emerald-400 effect-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
        ),
        gradient: "from-blue-900/40 to-purple-900/10"
    },
];

export default function Services() {
    return (
        <section className="py-20 px-6 relative">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${service.gradient} backdrop-blur-sm group hover:border-white/20 transition-all duration-300`}
                    >
                        <div className="mb-6 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center border border-white/5 shadow-inner">
                            {service.icon}
                        </div>

                        <h3 className="text-xl font-bold mb-4">{service.title}</h3>

                        <p className="font-serif italic text-gray-400 mb-8 leading-relaxed">
                            {service.description}
                        </p>

                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm text-gray-300 font-medium group-hover:text-white transition-colors">Explore Service</span>
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
