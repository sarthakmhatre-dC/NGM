"use client";

import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { projects } from "@/data/projects";

const mainCategories = ["Videos", "Websites", "Social Media", "SEO"];
const subCategories = [
    "All",
    "Brand Documentaries",
    "Corporate Films",
    "Podcast",
    "Events",
    "Documentaries",
    "Animation",
    "Advertisement",
    "Promos",
    "Business Explainer",
    "Testimonial",
];

export default function PortfolioPage() {
    const [activeMainCategory, setActiveMainCategory] = useState("Videos");
    const [activeSubCategory, setActiveSubCategory] = useState("All");

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const mainMatch = project.category === activeMainCategory;
            const subMatch =
                activeSubCategory === "All" || project.subCategory === activeSubCategory;
            return mainMatch && subMatch;
        });
    }, [activeMainCategory, activeSubCategory]);

    return (
        <div className="min-h-screen bg-black text-white pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6 pt-15">
                {/* Header */}
                <div className="flex flex-col items-center justify-center mb-16 text-center">
                    <h1 className="text-6xl md:text-8xl font-black font-outfit mb-4 tracking-tighter uppercase text-white">
                        PORTFOLIO
                    </h1>
                    <div className="flex items-center gap-2 text-neutral-400 text-sm tracking-wide">
                        <Link to="/" className="hover:text-white transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <span className="text-white">Portfolio</span>
                    </div>
                </div>

                {/* Main Categories */}
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {mainCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveMainCategory(category)}
                            className={`px-8 py-2 rounded-full border transition-all duration-300 ${activeMainCategory === category
                                ? "border-red-500 bg-red-500/10 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)]"
                                : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Sub Categories */}
                <div className="flex justify-center flex-wrap gap-3 mb-16">
                    {subCategories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveSubCategory(category)}
                            className={`px-6 py-2 rounded-full border text-sm transition-all duration-300 ${activeSubCategory === category
                                ? "border-white bg-white text-black"
                                : "border-neutral-800 text-neutral-400 hover:border-neutral-600 hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <Link to={`/portfolio/${project.id}`} key={project.id}>
                            <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 aspect-video cursor-pointer">
                                {/* Image Placeholder */}
                                {project.videoUrl && (
                                    <div className="absolute inset-0 z-0">
                                        <img
                                            src={`https://img.youtube.com/vi/${project.videoUrl.split('/').pop()}/hqdefault.jpg`}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                                        />
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                                    </div>
                                )}

                                {/* Overlay Content */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-between">
                                    <div className="self-end">
                                        {/* Optional: Add an icon or logo here if needed */}
                                    </div>

                                    <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="inline-block px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-medium mb-3 border border-white/10">
                                            {project.subCategory}
                                        </div>
                                        <h3 className="text-lg font-bold font-outfit leading-tight group-hover:text-red-400 transition-colors">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div>

                                {/* Top Left Badge (Optional based on design) */}
                                <div className="absolute top-4 left-4">
                                    <div className="px-3 py-1 bg-neutral-900/80 backdrop-blur-md rounded-full text-[10px] uppercase tracking-wider font-bold border border-white/10">
                                        Brand Documentary
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
