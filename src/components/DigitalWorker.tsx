import React from "react";

export default function DigitalWorker() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto relative rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-b from-blue-900/40 to-black min-h-[500px] flex items-center">

                {/* Background Overlay/Glow */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/10 blur-[100px] rounded-full"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-12 w-full p-12 md:p-20">
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                            Meet Lara Your First <br />
                            <span className="text-blue-200">Digital Worker.</span>
                        </h2>

                        <p className="text-lg text-gray-300 mb-8 font-light">
                            Lara is a digital worker built to automate your chaos.
                        </p>

                        <ul className="space-y-4 text-gray-400 mb-10 text-sm md:text-base">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                                Syncs your CRM, answers customer queries, and chases follow ups.
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                                Connects your apps and automates your workflows
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2"></span>
                                Takes on repetitive tasks like support tickets and reporting.
                            </li>
                        </ul>

                        <button className="bg-gray-100 text-black px-8 py-3 rounded-lg font-bold text-sm tracking-wide uppercase hover:bg-white transition-colors w-fit">
                            Create your digital worker
                        </button>
                    </div>

                    {/* Image Placeholder / Graphic area */}
                    <div className="relative h-full min-h-[400px] flex items-end justify-center">
                        {/* Robot/Mask Placeholder */}
                        <div className="w-[300px] h-[400px] bg-gradient-to-t from-gray-200 to-gray-400 rounded-t-full relative overflow-hidden shadow-2xl opacity-80">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-40 h-20 bg-black rounded-full blur-2xl opacity-50"></div>
                            {/* Try to mimic the metallic face in the image using css gradients simply as placeholder */}
                            <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-400 to-gray-800"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
