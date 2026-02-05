import React from 'react';
import { motion } from 'framer-motion';

import skillsData from '../content/skills.json';

const Skills = () => {
    const { skills } = skillsData;

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

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
                        Skills
                    </h2>

                    {/* Skills Grid */}
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-4xl mx-auto">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="px-6 py-3 text-sm md:text-base font-medium text-gray-300 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 hover:text-white transition-all duration-300"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
