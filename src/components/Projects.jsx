import React from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";

const FONT_STACK =
  "'Inter', 'Helvetica Neue', 'Arial Black', Arial, sans-serif";

const projectFiles = import.meta.glob("/src/content/projects/*.json", {
  eager: true,
});

const projects = Object.values(projectFiles).map((file, index) => {
  const data = file.default || file;
  return { id: index + 1, ...data };
});

const Projects = () => {
  return (
    <section id="projects" className="relative bg-white overflow-hidden">
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

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-28 sm:py-36 md:py-44 w-full">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-400 mb-8"
        >
          Work
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
          className="text-[clamp(42px,8vw,110px)] mb-16"
        >
          Selected Works
        </motion.h2>

        {/* Projects Grid — 3 cols on desktop like the reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white border border-[#e5e5e5] rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image — fills top ~60% */}
              <div
                className="relative overflow-hidden bg-neutral-100"
                style={{ paddingBottom: "62%" }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 px-5 pt-4 pb-5">
                {/* Title */}
                <h3
                  className="text-base font-black text-[#111111] mb-1 leading-tight"
                  style={{ fontFamily: FONT_STACK, letterSpacing: "-0.02em" }}
                >
                  {project.title}
                </h3>

                {/* Subtitle / category */}
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-neutral-400 mb-3">
                  {project.subtitle}
                </p>

                {/* Spacer pushes action row to bottom */}
                <div className="flex-1" />

                {/* Divider */}
                <div className="w-full h-px bg-[#f0f0f0] mb-3" />

                {/* Action row — matches screenshot layout */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.githubLink}
                    className="text-xs font-bold tracking-[0.12em] uppercase text-[#111111] hover:text-neutral-500 transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="w-8 h-8 rounded-full bg-[#111111] flex items-center justify-center text-white hover:bg-neutral-700 transition-colors active:scale-95"
                    aria-label={`Open ${project.title}`}
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
