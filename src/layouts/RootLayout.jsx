import React from 'react';
import Navbar from '@/components/global/Navbar';
import Footer from '@/components/global/Footer';
import Preloader from '@/components/global/Preloader';
import GlobalContact from '@/components/global/GlobalContact';
import '../styles/fonts.css';

export default function RootLayout({ children }) {
    return (
        <div className="antialiased font-sans">
            <div className="absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none z-0">
                <div className="red-glow" />
            </div>
            <Preloader />
            <Navbar />
            <main className="relative z-10">
                {children}
            </main>
            <GlobalContact />
            <Footer />
        </div>
    );
}
