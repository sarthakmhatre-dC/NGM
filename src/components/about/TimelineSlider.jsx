import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const timelineData = [
    {
        year: "2015",
        title: "The Beginning",
        description: "Nitty Gritty was born with a bold vision to redefine how brands communicate and grow in the digital world.",
        images: ["/about/timeline-1.jpg"],
        labels: ["The Beginning"]
    },
    {
        year: "2017",
        title: "Building the Foundation",
        description: "Expanded our team and service offerings across Film, Digital Marketing, and Web — serving 50+ brands.",
        images: ["/about/timeline-2.jpg"],
        labels: ["Building the Foundation"]
    },
    {
        year: "2025",
        title: "250+ Brands & Counting",
        description: "A decade of grit. We've partnered with 250+ brands, produced 300+ films, and built 100+ websites worldwide.",
        images: ["/about/timeline-3.jpg"],
        labels: ["250+ Brands & Counting"]
    },
    {
        year: "2030",
        title: "The Vision Ahead",
        description: "Our mission is to become the go-to growth partner for ambitious D2C brands everywhere — and we're just getting started.",
        images: ["/about/timeline-1.jpg"],
        labels: ["The Vision Ahead"]
    }
];

const TimelineSlider = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(3);

    // Responsive logic to determine how many items show on the timeline
    useEffect(() => {
        const handleResize = () => {
            let newItemsPerPage = 3;
            if (window.innerWidth < 768) {
                newItemsPerPage = 1; // Mobile: 1 item
            } else if (window.innerWidth < 1024) {
                newItemsPerPage = 2; // Tablet: 2 items
            }
            
            setItemsPerPage(newItemsPerPage);
            // Prevent blank screens if resizing from mobile back to desktop
            setStartIndex((prev) => Math.min(prev, timelineData.length - newItemsPerPage));
        };

        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        if (startIndex < timelineData.length - itemsPerPage) {
            setStartIndex(startIndex + 1);
        } else {
            setStartIndex(0); // Wrap around
        }
    };

    const prevSlide = () => {
        if (startIndex > 0) {
            setStartIndex(startIndex - 1);
        } else {
            setStartIndex(timelineData.length - itemsPerPage); // Wrap around
        }
    };

    return (
        <div className="w-full max-w-7xl mx-auto px-[clamp(1.5rem,4vw,3rem)] py-[clamp(4rem,10vw,6rem)] bg-black overflow-hidden border-t border-white/5">
            
            {/* Header with Navigation */}
            <div className="relative flex items-center justify-center mb-[clamp(3rem,8vw,5rem)]">
                <div className="flex items-center gap-2 text-red-600 uppercase tracking-widest text-[clamp(0.75rem,2vw,0.875rem)] font-bold">
                    <svg className="w-[clamp(1rem,2vw,1.25rem)] h-[clamp(1rem,2vw,1.25rem)] text-red-600 fill-current" viewBox="0 0 24 24"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
                    Our Journey
                </div>
                {/* Ensure buttons don't overlap the title on tiny screens */}
                <div className="flex gap-[clamp(0.5rem,2vw,1rem)] absolute right-0">
                    <button
                        onClick={prevSlide}
                        className="p-[clamp(0.5rem,2vw,0.75rem)] rounded-full border border-white/10 text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300"
                    >
                        <ChevronLeft size={20} className="md:w-6 md:h-6" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-[clamp(0.5rem,2vw,0.75rem)] rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                    >
                        <ChevronRight size={20} className="md:w-6 md:h-6" />
                    </button>
                </div>
            </div>

            {/* Timeline Track */}
            <div className="relative mb-[clamp(3rem,8vw,6rem)]">
                {/* Connecting Line: Top position clamped to align behind sparkles regardless of font size */}
                <div className="absolute top-[clamp(2.5rem,5vw,3.25rem)] left-0 w-full h-px bg-white/10"></div>

                {/* Switched fixed grid-cols-3 to responsive grid to match itemsPerPage */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">
                    {timelineData.map((item, index) => {
                        const isVisible = index >= startIndex && index < startIndex + itemsPerPage;
                        return (
                            <div
                                key={item.year}
                                className={`flex flex-col items-center transition-all duration-500 transform ${isVisible ? 'opacity-100 scale-100 pointer-events-auto' : 'hidden opacity-0 scale-95 pointer-events-none'
                                    }`}
                                style={{ gridColumn: (index - startIndex) + 1 }}
                            >
                                <span className="text-[clamp(2.5rem,6vw,3rem)] font-serif italic text-white mb-[clamp(1rem,3vw,1.5rem)] tracking-tighter">
                                    {item.year}
                                </span>

                                <div className="relative z-10 bg-black px-4">
                                    <div className="w-[clamp(2rem,4vw,2.5rem)] h-[clamp(2rem,4vw,2.5rem)] flex items-center justify-center">
                                        <svg width="100%" height="100%" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 0L19.3333 12.6667L32 16L19.3333 19.3333L16 32L12.6667 19.3333L0 16L12.6667 12.6667L16 0Z" fill="#f20c00" className="drop-shadow-[0_0_8px_rgba(242,12,0,0.6)]" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Polaroid Content Grid */}
            {/* Switched fixed grid-cols-3 to responsive grid to match itemsPerPage */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[clamp(1.5rem,4vw,2rem)]">
                {timelineData.map((item, index) => {
                    const isVisible = index >= startIndex && index < startIndex + itemsPerPage;
                    const displayIndex = index - startIndex;

                    return (
                        <div
                            key={`${item.year}-content`}
                            className={`transition-all duration-700 ease-in-out transform flex justify-center ${isVisible
                                ? 'opacity-100 translate-y-0 translate-x-0'
                                : 'hidden opacity-0 translate-y-10'
                                }`}
                        >
                            <div
                                // Changed fixed max-w to relative min(100%, 340px) so it doesn't bleed out of small phone screens
                                className={`bg-white p-[clamp(1rem,3vw,1.25rem)] shadow-2xl border border-white/10 w-full max-w-[min(100%,340px)] transition-transform duration-500 hover:scale-105 group ${displayIndex === 0 ? '-rotate-2' : displayIndex === 2 ? 'rotate-2' : '-rotate-1'
                                    }`}
                            >
                                <div className="aspect-[4/5] overflow-hidden mb-[clamp(1rem,3vw,1.25rem)] bg-neutral-100 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <div className="w-full h-full flex items-center justify-center text-neutral-300 text-[clamp(0.65rem,1.5vw,0.75rem)] italic tracking-widest font-bold">
                                        [CONTENT {item.year}]
                                    </div>
                                    <div className="absolute inset-0 bg-red-600/5 group-hover:bg-transparent transition-colors duration-500"></div>
                                </div>
                                <p className="text-black font-extrabold font-outfit text-center text-[clamp(0.75rem,2vw,0.875rem)] uppercase leading-tight tracking-wide border-t border-black/5 pt-[clamp(0.75rem,2vw,1rem)]">
                                    {item.labels[0] || item.title}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TimelineSlider;