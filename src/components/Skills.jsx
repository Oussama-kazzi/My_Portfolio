import React from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import skillsData from "../content/skills.json";

const FONT_STACK =
  "'Inter', 'Helvetica Neue', 'Arial Black', Arial, sans-serif";

const SkillIcon = ({ name }) => {
  const LucideIcon = Icons[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={16} />;
};

const Skills = () => {
  const { categories } = skillsData;

  return (
    <section id="skills" className="relative bg-[#f7f7f7] overflow-hidden">
      {/* Grid decoration */}
      <div
        className="absolute inset-0 pointer-events-none select-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ebebeb 1px, transparent 1px), linear-gradient(to bottom, #ebebeb 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          opacity: 0.6,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8 py-28 sm:py-36 md:py-44">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[0.25em] uppercase text-neutral-400 mb-8"
        >
          Skills
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
          What I Use
        </motion.h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(
            (category, catIndex) =>
              category.skills.length > 0 && (
                <motion.div
                  key={catIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: catIndex * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white border border-[#e5e5e5] rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
                >
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-neutral-400 mb-5">
                    {category.category}
                  </p>
                  <div className="flex flex-col gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        whileHover={{ x: 4 }}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-neutral-50 border border-[#efefef] hover:bg-[#111111] hover:border-[#111111] transition-all duration-200 group cursor-default"
                      >
                        <div className="text-neutral-500 group-hover:text-white transition-colors">
                          <SkillIcon name={skill.icon} />
                        </div>
                        <span
                          className="text-sm font-semibold text-neutral-700 group-hover:text-white transition-colors"
                          style={{ fontFamily: FONT_STACK }}
                        >
                          {skill.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
