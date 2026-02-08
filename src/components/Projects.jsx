import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projectFiles = import.meta.glob('/src/content/projects/*.json', { eager: true });
console.log('Project Files found by glob:', Object.keys(projectFiles));

const projects = Object.values(projectFiles).map((file, index) => {
    const data = file.default || file;
    return {
        id: index + 1,
        ...data
    };
});

const Projects = () => {
    console.log('Processed Projects:', projects);

    return (
        <section id="projects" className="py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden min-h-screen flex flex-col justify-center">
            {/* Vertical Grid Lines */}
            <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-4 sm:px-8 md:px-12 lg:px-20">
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
            </div>

            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-8 sm:mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">Projects</h2>
                    <p className="text-gray-400 text-sm">Selected works</p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-40 sm:h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <p className="text-primary text-[10px] font-bold uppercase mb-1">{project.subtitle}</p>
                                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 text-xs mb-3 line-clamp-2">{project.description}</p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.liveLink}
                                        className="flex items-center gap-1.5 text-xs text-white hover:text-primary transition-colors"
                                    >
                                        <ExternalLink size={14} />
                                        <span>Live Demo</span>
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        className="flex items-center gap-1.5 text-xs text-white hover:text-primary transition-colors"
                                    >
                                        <Github size={14} />
                                        <span>Code</span>
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
