import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
        { name: 'Work', href: '#projects' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center border border-primary/50 group-hover:bg-primary/30 transition-colors">
                        <span className="text-primary font-bold text-xl">O</span>
                    </div>
                    <span className="text-2xl font-bold tracking-wider text-white">
                        USSAMA
                    </span>
                </a>

                {/* Right Side Actions */}
                <div className="flex items-center gap-8">
                    {/* Desktop Menu Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-white transition-colors text-sm font-bold tracking-wide"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Resume Button */}
                    <a
                        href="/path-to-resume.pdf"
                        target="_blank"
                        className="hidden md:flex items-center gap-2 px-6 py-2 border border-white/20 rounded-lg text-white font-medium hover:bg-white/10 transition-all active:scale-95"
                    >
                        Resume <FileText size={16} />
                    </a>

                    {/* Mobile Menu Toggle (or extra menu icon as per design) */}
                    <button
                        className="md:hidden text-white hover:text-primary transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-black border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col items-center py-8 space-y-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-white text-lg font-bold hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="/path-to-resume.pdf"
                                className="flex items-center gap-2 px-6 py-3 border border-white/20 rounded-lg text-white font-medium hover:bg-white/10"
                            >
                                Resume <FileText size={18} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
