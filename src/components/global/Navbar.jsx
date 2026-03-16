import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAVIGATION } from '@/lib/constants';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <nav className="fixed top-[clamp(0.75rem,3vw,1.5rem)] left-0 w-full z-50 px-[clamp(1rem,4vw,1.5rem)] flex justify-center">
            {/* Added a slightly taller max-height clamp for breathing room */}
            <div className="w-full max-w-[1200px] h-[clamp(3.5rem,6vw,4.5rem)] bg-white/5 backdrop-blur-2xl border border-white/5 rounded-full px-[clamp(1.25rem,4vw,2rem)] flex items-center justify-between shadow-2xl relative z-50">
                
                {/* Logo - Added flex-shrink-0 to prevent it from ever being squished */}
                <Link to="/" className="flex items-center flex-shrink-0">
                    <img
                        src="/assets/nitty-gritty-logo.png"
                        alt="Nitty Gritty"
                        className="h-[clamp(1.75rem,4vw,2.25rem)] w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation Links - Changed md:flex to lg:flex to give the wide menu enough room to breathe */}
                <div className="hidden lg:flex items-center gap-[clamp(1rem,2vw,2.5rem)]">
                    {[{ name: 'Home', href: '/' }, ...NAVIGATION].map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            // Added whitespace-nowrap to prevent "ABOUT US" from breaking into two lines
                            className="text-[clamp(0.65rem,1vw,0.75rem)] font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest relative group whitespace-nowrap"
                        >
                            {link.name}
                            <span className="absolute -bottom-[0.25rem] left-0 w-0 h-[0.1rem] bg-[#f20c00] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Large Screen Action Button - Changed md:flex to lg:flex, added whitespace-nowrap and flex-shrink-0 */}
                <Link
                    to="/contact"
                    className="hidden lg:flex items-center justify-center bg-white text-black px-[clamp(1.5rem,2vw,2rem)] py-[clamp(0.6rem,1vw,0.75rem)] rounded-full text-[clamp(0.65rem,1vw,0.75rem)] font-bold uppercase tracking-widest hover:bg-neutral-200 transition-colors whitespace-nowrap flex-shrink-0"
                >
                    Let's Talk
                </Link>

                {/* Mobile Menu Toggle - Changed md:hidden to lg:hidden to match the new breakpoint */}
                <button
                    className="lg:hidden text-white p-[0.5rem] flex-shrink-0"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay - Changed md:hidden to lg:hidden */}
            <div
                className={`fixed inset-0 bg-black/95 backdrop-blur-3xl z-40 lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="h-full flex flex-col items-center justify-center gap-[clamp(1.5rem,5vw,2rem)] px-[1.5rem] text-center">
                    {[{ name: 'Home', href: '/' }, ...NAVIGATION].map((link, index) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            // Added whitespace-nowrap here as well for consistency
                            className={`text-[clamp(1.75rem,8vw,2.25rem)] font-bold text-white uppercase tracking-widest transition-all duration-500 whitespace-nowrap ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[2.5rem] opacity-0'
                                }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className={`mt-[1rem] bg-white text-black px-[clamp(2rem,6vw,2.5rem)] py-[clamp(0.875rem,3vw,1rem)] rounded-full text-[clamp(0.875rem,3vw,1rem)] font-bold uppercase tracking-widest transition-all duration-500 delay-300 whitespace-nowrap ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[2.5rem] opacity-0'
                            }`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Let's Talk
                    </Link>
                </div>
            </div>
        </nav>
    );
}