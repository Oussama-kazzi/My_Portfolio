import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden min-h-screen flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 text-white">
                        About Me
                    </h2>

                    {/* Subtitle/Description */}
                    <p className="text-base sm:text-lg md:text-xl tracking-wide mb-6 sm:mb-8 text-gray-400">
                        Software Developer | Open Web Contributor | Problem Solver
                    </p>

                    {/* Paragraphs */}
                    <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6 text-gray-300 leading-relaxed">
                        <p className="text-base md:text-lg">
                            Hi, I'm <span className="text-primary font-semibold">Oussama Kazzi</span>, a passionate fullstack developer specializing in React, Next.js, Node.js, and MongoDB.
                            With 2 years of professional experience, I aim to build high-performance, scalable, and beautiful web applications that solve real-world problems.
                        </p>
                        <p className="text-base md:text-lg">
                            My approach combines technical depth with a keen eye for design, ensuring that every project not only functions perfectly under the hood but also provides an exceptional user experience.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
