import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FONT_STACK =
  "'Inter', 'Helvetica Neue', 'Arial Black', Arial, sans-serif";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-white flex flex-col items-center justify-center overflow-x-hidden"
    >
      {/* Subtle grid decoration */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.5,
        }}
      />

      {/* ── Main content ── */}
      <div className="relative w-full flex flex-col items-center px-4 pt-24 pb-20">
        {/* Typography + Portrait block */}
        <div className="relative w-full flex flex-col items-center">
          {/* ① Main headline — topmost text layer */}
          <motion.h1
            initial={{ opacity: 0, y: -28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative text-center select-none"
            style={{
              fontFamily: FONT_STACK,
              fontSize: "clamp(52px, 13.5vw, 210px)",
              fontWeight: 900,
              color: "#111111",
              letterSpacing: "-0.03em",
              lineHeight: 0.9,
              zIndex: 5,
            }}
          >
            Web Developer
          </motion.h1>

          {/* ② Background outline text — lowest layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.18 }}
            aria-hidden="true"
            className="relative w-full flex justify-center overflow-hidden"
            style={{ zIndex: 0 }}
          >
            <span
              className="block text-center whitespace-nowrap"
              style={{
                fontFamily: FONT_STACK,
                fontSize: "clamp(42px, 11vw, 185px)",
                fontWeight: 800,
                WebkitTextStroke: "1.5px #D9D9D9",
                MozTextStroke: "1.5px #D9D9D9",
                color: "transparent",
                letterSpacing: "-0.03em",
                lineHeight: 0.9,
                opacity: 0.4,
              }}
            >
              &amp; Product Builder
            </span>
          </motion.div>
        </div>

        {/* ── CTA Buttons ── */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.52 }}
          className="relative flex flex-col sm:flex-row items-center gap-4 mt-14 md:mt-16"
          style={{ zIndex: 30 }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center justify-center gap-3 px-9 py-4 bg-[#111111] text-white text-xs font-bold tracking-[0.18em] uppercase rounded-full hover:bg-neutral-800 transition-all duration-300 active:scale-95"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-9 py-4 border-2 border-[#111111] text-[#111111] text-xs font-bold tracking-[0.18em] uppercase rounded-full hover:bg-[#111111] hover:text-white transition-all duration-300 active:scale-95"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
