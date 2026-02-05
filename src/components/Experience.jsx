import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Senior Fullstack Developer",
            company: "Tech Solutions Inc.",
            period: "2024 - Present",
            description: "Leading development of scalable web applications using React, Node.js, and MongoDB. Mentoring junior developers and implementing best practices.",
            technologies: ["React", "Node.js", "MongoDB", "AWS"]
        },
        {
            id: 2,
            title: "Fullstack Developer",
            company: "Digital Agency",
            period: "2022 - 2024",
            description: "Developed and maintained multiple client projects, focusing on responsive design and performance optimization.",
            technologies: ["Next.js", "Express", "PostgreSQL", "Tailwind"]
        },
        {
            id: 3,
            title: "Junior Developer",
            company: "StartUp Co.",
            period: "2021 - 2022",
            description: "Built frontend components and integrated APIs for various web applications. Collaborated with design team to implement UI/UX.",
            technologies: ["JavaScript", "React", "REST APIs", "Git"]
        }
    ];

    return (
        <section id="experience" className="py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden min-h-screen flex items-center justify-center">
            {/* Vertical Grid Lines */}
            <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-4 sm:px-8 md:px-12 lg:px-20">
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
            </div>

            {/* Glow Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-3xl -z-10"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16 md:mb-20"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white">
                        Experience
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl tracking-wide text-gray-400">
                        Professional Journey
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="space-y-8 sm:space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative pl-8 sm:pl-12 border-l-2 border-white/10 hover:border-primary/50 transition-colors duration-300"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-black"></div>

                            {/* Content */}
                            <div className="pb-8">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-0">
                                        {exp.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                                        <Calendar size={16} />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <Briefcase size={16} className="text-primary" />
                                    <p className="text-primary font-semibold">{exp.company}</p>
                                </div>

                                <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
                                    {exp.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
