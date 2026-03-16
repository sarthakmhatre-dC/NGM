
import React from 'react';
const ServiceHero = ({ title, description, stats }) => {
    return (
        <section className="relative min-h-[80vh] flex flex-col justify-center px-6 pt-40 pb-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[150px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-[150px] -z-10 pointer-events-none"></div>


            <div className="max-w-7xl mx-auto w-full flex flex-col gap-16 lg:gap-24">
                {/* Row 1: Heading and Agency Box */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    <h1 className="text-6xl md:text-7xl font-bold font-outfit mb-4 tracking-wider uppercase leading-[0.9]">
                        POWERING <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">DIGITAL GROWTH</span> <br />
                        FOR BRANDS THAT ARE READY TO SCALE
                    </h1>

                    <div className="glass-card p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider">{title} Agency</h3>
                            <p className="text-neutral-300 text-lg leading-relaxed font-light">
                                {description}
                            </p>
                            <button className="w-fit px-8 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all duration-300 uppercase text-xs font-bold tracking-widest mt-4">
                                Talk To Us
                            </button>
                        </div>
                    </div>
                </div>

                {/* Row 2: Stats in one row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 pt-12 border-t border-white/5">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <div className="text-5xl md:text-6xl font-light font-outfit text-white">
                                {stat.value}
                            </div>
                            <div className="h-px w-full bg-gradient-to-r from-white/30 to-transparent my-2"></div>
                            <div className="text-sm tracking-[0.2em] text-neutral-400 uppercase font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceHero;
