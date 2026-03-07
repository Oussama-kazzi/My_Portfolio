import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, FileText } from "lucide-react";

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Switch to dark-bg / white-text once we scroll past the hero (≈ viewport height)
  const onHero =
    scrollY < (typeof window !== "undefined" ? window.innerHeight * 0.82 : 700);
  const isScrolled = scrollY > 50;

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Work", href: "#projects" },
  ];

  // Dynamic class tokens
  const textCls = onHero ? "text-[#111111]" : "text-white";
  const mutedTextCls = onHero
    ? "text-neutral-500 hover:text-[#111111]"
    : "text-gray-300 hover:text-white";
  const borderCls = onHero ? "border-[#111111]/20" : "border-white/20";
  const bgCls = isScrolled
    ? onHero
      ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-black/5"
      : "bg-black/85 backdrop-blur-md border-b border-white/5"
    : "bg-transparent";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "py-4" : "py-6"} ${bgCls}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div
            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-300 ${onHero ? "bg-[#111111]" : "bg-white/10 border border-white/20"}`}
          >
            <span
              className={`font-black text-lg leading-none ${onHero ? "text-white" : "text-white"}`}
            >
              O
            </span>
          </div>
          <span
            className={`text-xl font-black tracking-widest transition-colors duration-300 ${textCls}`}
          >
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
                className={`text-sm font-bold tracking-wide transition-colors duration-300 ${mutedTextCls}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href="/path-to-resume.pdf"
            target="_blank"
            className={`hidden md:flex items-center gap-2 px-5 py-2 border rounded-full text-sm font-semibold transition-all duration-300 active:scale-95 ${borderCls} ${textCls} hover:bg-[#111111] hover:text-white hover:border-[#111111]`}
          >
            Resume <FileText size={14} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden transition-colors duration-300 ${textCls}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`absolute top-full left-0 w-full overflow-hidden border-t ${onHero ? "bg-white/95 backdrop-blur-md border-black/5" : "bg-black border-white/10"}`}
          >
            <div className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-bold transition-colors ${onHero ? "text-[#111111] hover:text-neutral-500" : "text-white hover:text-gray-300"}`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/path-to-resume.pdf"
                className={`flex items-center gap-2 px-6 py-3 border rounded-full font-medium transition-all ${onHero ? "border-[#111111]/20 text-[#111111] hover:bg-[#111111]/5" : "border-white/20 text-white hover:bg-white/10"}`}
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
