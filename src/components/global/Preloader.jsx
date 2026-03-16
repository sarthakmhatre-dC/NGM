"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const words = ["Creative", "Photography", "Shoot", "Media", "Video"];

export default function Preloader() {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const [index, setIndex] = useState(0);

    useLayoutEffect(() => {
        // Check if preloader has already run in this session
        const hasRun = sessionStorage.getItem("preloader-run");
        if (hasRun) {
            if (containerRef.current) containerRef.current.style.display = "none";
            return;
        }

        // Lock scroll immediately
        document.body.style.overflow = "hidden";

        const tl = gsap.timeline();

        // Math for perfect sync: 8 seconds total / 5 words = 1.6 seconds per word cycle
        const transitionDuration = 0.15;
        const holdDuration = 1.6 - (transitionDuration * 2); // 1.3 seconds holding time

        // Initial word appearance (Takes 0.2s to fade in)
        tl.fromTo(
            textRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }
        );

        // Sequence for words
        words.forEach((word, idx) => {
            if (idx === 0) return;

            tl.to(textRef.current, {
                opacity: 0,
                y: -15,
                duration: transitionDuration,
                // Deduct the initial 0.2s fade-in from the first word's hold time to maintain perfect 1.6s rhythm
                delay: idx === 1 ? holdDuration - 0.2 : holdDuration,
                onComplete: () => setIndex(idx),
            }).fromTo(
                textRef.current,
                { opacity: 0, y: 15 },
                { opacity: 1, y: 0, duration: transitionDuration }
            );
        });

        // Final exit animation timed perfectly with the end of the 8-second video
        tl.to(textRef.current, {
            opacity: 0,
            y: -10,
            duration: 0.2,
            delay: holdDuration,
            ease: "power2.inOut",
        }).to(containerRef.current, {
            yPercent: -100,
            duration: 0.6, // Slightly longer slide-up for a smooth, cinematic reveal
            ease: "power3.inOut",
            onComplete: () => {
                if (containerRef.current) containerRef.current.style.display = "none";
                document.body.style.overflow = "auto";
                sessionStorage.setItem("preloader-run", "true");

                // Refresh ScrollTrigger after preloader is gone to fix animation issues on first load
                gsap.registerPlugin(ScrollTrigger);
                ScrollTrigger.refresh();
            },
        }, "-=0.1"); // Overlap the slide up slightly with the text fading out

        return () => {
            tl.kill();
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <div
            id="preloader-overlay"
            ref={containerRef}
            className="fixed inset-0 z-[999999] flex items-center justify-center bg-black overflow-hidden"
            style={{ touchAction: 'none' }}
        >
            {/* Background Video */}
            {/* Bumped opacity to 70 since the dark gradient will naturally darken it */}
            <video
                autoPlay
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover opacity-70 pointer-events-none"
                src="/videos/WebsiteLoaderVideo.mp4"
            />

            {/* Radial Vignette Overlay */}
            {/* Starts transparent in the center and fades to 90% black at the edges */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_10%,rgba(0,0,0,0.9)_100%)]"></div>

            {/* Foreground Text */}
            <div
                ref={textRef}
                className="relative z-10 text-4xl md:text-6xl font-bold font-sans text-white tracking-tighter"
            >
                {words[index]}
            </div>
        </div>
    );
}