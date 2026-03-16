


import React from 'react';


const ServiceClients = () => {
    // Placeholder logos - in a real app these would be SVGs or images
    const clients = [
        "BrandOne", "TechCorp", "Innovate", "MediaGroup", "CreativeLabs", "FutureSystems", "GlobalConnect"
    ];

    return (
        <section className="py-20 px-6 bg-black border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto mb-12">
                <h2 className="text-xl text-neutral-400 uppercase tracking-widest font-medium mb-4">
                    Industries & Clients
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold font-outfit text-white">
                    (B2B, B2C, FMCG PRODUCTS)
                </h3>
                <p className="mt-6 text-neutral-400 max-w-2xl leading-relaxed">
                    As a leading digital marketing agency in Mumbai, we've partnered with 100+ clients across industries including finance, fashion, real estate, technology, education, and beyond.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="flex overflow-hidden relative">
                <div className="flex animate-marquee gap-12 items-center">
                    {[...clients, ...clients, ...clients].map((client, index) => (
                        <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100">
                            {/* Placeholder Logo Box */}
                            <div className="w-48 h-24 border border-white/10 bg-white/5 rounded-xl flex items-center justify-center">
                                <span className="text-xl font-bold text-white font-outfit uppercase tracking-wider">{client}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Fade Edges */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                 .animate-marquee:hover {
                    animation-play-state: paused;
                }
            ` }} />
        </section>
    );
};

export default ServiceClients;
