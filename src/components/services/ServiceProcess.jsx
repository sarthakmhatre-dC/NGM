
import React from 'react';
const ServiceProcess = ({ process }) => {
    return (
        <section className="py-20 px-6 bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit uppercase tracking-tight text-white mb-6">
                        OUR PROCESS
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        What It's Like To Work With Us. <br />
                        We don't do fluff. We do frameworks.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {process.map((step, index) => (
                        <div key={index} className="group flex flex-col gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white text-2xl group-hover:border-red-500/50 group-hover:bg-red-500/10 transition-all duration-300">

                                {/* Placeholder Icons - You might want to use a proper icon library like lucide-react or heroicons */}
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceProcess;
