import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import skillsData from '../content/skills.json';

const SkillIcon = ({ name, className }) => {
    const LucideIcon = Icons[name];
    if (!LucideIcon) return null;
    return <LucideIcon className={className} size={18} />;
};

const Skills = () => {
    const { categories } = skillsData;

    return (
        <section id="skills" className="py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden min-h-screen flex items-center justify-center">
            {/* Vertical Grid Lines */}
            <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-4 sm:px-8 md:px-12 lg:px-20">
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
            </div>

            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl -z-10"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 sm:mb-16 text-center text-white">
                        Skills
                    </h2>

                    {/* Skill Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {categories.map((category, catIndex) => (
                            category.skills.length > 0 && (
                                <motion.div
                                    key={catIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                                    viewport={{ once: true }}
                                    className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-primary/30 transition-colors"
                                >
                                    <h3 className="text-lg font-bold mb-4 text-primary tracking-wide uppercase text-xs">
                                        {category.category}
                                    </h3>
                                    <div className="grid grid-cols-1 gap-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.div
                                                key={skillIndex}
                                                whileHover={{ x: 5 }}
                                                className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all group"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                                                    <SkillIcon name={skill.icon} />
                                                </div>
                                                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                                                    {skill.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
