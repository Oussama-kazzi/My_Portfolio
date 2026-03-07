import React from "react";
import { motion } from "framer-motion";
import profileData from "../content/profile.json";

const FONT_STACK =
  "'Inter', 'Helvetica Neue', 'Arial Black', Arial, sans-serif";

const About = () => {
  const { about_paragraph } = profileData;
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* Grid decoration */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.5,
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8 py-28 sm:py-36 md:py-44">
        {/* Outline section label */}
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-400 mb-8"
        >
          About
        </motion.p>

        {/* Large headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          style={{
            fontFamily: FONT_STACK,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            lineHeight: 0.92,
            color: "#111111",
          }}
          className="text-[clamp(42px,8vw,110px)] mb-12"
        >
          Who I Am
        </motion.h2>

        {/* Divider */}
        <div className="w-12 h-px bg-[#111111] mb-12" />

        {/* Body text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p
            className="text-lg md:text-xl leading-relaxed text-neutral-600"
            style={{ fontFamily: FONT_STACK }}
          >
            {about_paragraph}
          </p>
        </motion.div>

        {/* Tags row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mt-12"
        >
          {["Web Developer", "Open Source", "Problem Solver"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 border border-[#D9D9D9] rounded-full text-xs font-bold tracking-[0.15em] uppercase text-neutral-500"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
