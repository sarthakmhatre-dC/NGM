"use client";

import { Link } from "react-router-dom";
import TimelineSlider from "@/components/about/TimelineSlider";
import ContactSection from "@/components/global/ContactSection";

export default function AboutPage() {
    const stats = [
        { label: "FILMS", value: "300+" },
        { label: "BRANDS", value: "250+" },
        { label: "WEBSITES", value: "100+" },
        { label: "AWARDS", value: "10+" },
    ];


    const team = [
        {
            name: "Pratik Jambhale",
            role: "Team Member",
            image: "/team/pratik.jpg",
            linkedin: "https://www.linkedin.com/in/pratik-jambhale-64b85270/"
        },
        {
            name: "Anoop Pawar",
            role: "Team Member",
            image: "/team/anoop.jpg",
            linkedin: "https://www.linkedin.com/in/anooppawar/"
        },
        {
            name: "Sandeep Sharma",
            role: "Team Member",
            image: "/team/sandeep.jpg",
            linkedin: "https://www.linkedin.com/in/sandeep-sharma-21601428/"
        },
        {
            name: "Abhishek Patankar",
            role: "Team Member",
            image: "/team/abhishek.jpg",
            linkedin: "https://www.linkedin.com/in/abhishek-patankar-246a98290/"
        }
    ];

    return (
        <main className="bg-black min-h-screen text-white pt-32">
            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-6 mb-24 text-center pt-15">
                <h1 className="text-[clamp(2.5rem,6vw+1rem,5.5rem)] font-bold tracking-tight leading-[1.1] text-white uppercase mb-[clamp(1.5rem,4vw,2rem)]">
                    ABOUT US
                </h1>
                <div className="flex items-center justify-center gap-2 text-neutral-400 text-sm tracking-widest uppercase font-medium">
                    <Link to="/" className="hover:text-white transition-colors">
                        Home
                    </Link>
                    <span>/</span>
                    <span className="text-white">About Us</span>
                </div>
            </div>

            {/* Intro Section */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <h2 className="text-3xl font-bold font-outfit uppercase mb-8 tracking-wide text-white">
                            Get Nitty Gritty: <span className="text-red-600">Where Vision Meets Results.</span>
                        </h2>
                        <div className="space-y-6 text-neutral-400 text-lg leading-relaxed font-light">
                            <p>
                                We combine creative storytelling with strategic production and digital expertise to help brands build visibility, generate leads, and sustain growth.
                            </p>
                            <p>
                                We strengthen your digital presence via strategic social media, targeted campaigns, lead generation, and audience engagement—turning interest into loyalty and sustained growth.
                            </p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-8 md:gap-12">
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

            {/* Growth Mission Section */}
            <section className="bg-neutral-900/10 py-24 mb-32 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="flex flex-col items-center gap-6">
                        <div className="flex items-center gap-2 text-red-600 uppercase tracking-widest text-sm font-bold">
                            <svg className="w-5 h-5 text-red-600 fill-current" viewBox="0 0 24 24"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
                            Our Growth
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold font-outfit max-w-5xl leading-tight">
                            We&apos;re on a mission to become the go-to growth partner for ambitious <span className="text-red-600 italic font-medium">D2C brands worldwide.</span>
                        </h2>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <TimelineSlider />

            {/* Team Section */}
            <section className="max-w-7xl mx-auto px-6 mb-40">
                <div className="text-center mb-20 space-y-4">
                    <div className="flex items-center justify-center gap-2 text-red-600 uppercase tracking-widest text-sm font-bold">
                        <svg className="w-5 h-5 text-red-600 fill-current" viewBox="0 0 24 24"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
                        Team
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-outfit uppercase">
                        Meet the minds powering bold <span className="text-red-600 italic font-medium">D2C growth</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div key={index} className="group relative rounded-[32px] overflow-hidden bg-neutral-900 border border-white/5 transition-all duration-500 hover:border-red-600/30">
                            {/* Image Placeholder */}
                            <div className="aspect-[4/5] bg-neutral-800 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-neutral-700 uppercase tracking-widest font-bold text-sm">
                                    {member.name}
                                </div>
                                {/* Dark overlay that fades in */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Info Box */}
                            <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                                <div className="flex justify-between items-end">
                                    <div>
                                        <h3 className="text-xl font-bold font-outfit text-white mb-1">{member.name}</h3>
                                        <p className="text-neutral-400 text-sm font-light tracking-wide uppercase">{member.role}</p>
                                    </div>
                                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-neutral-200 transition-colors">
                                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
        </main>
    );
}
