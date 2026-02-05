import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden min-h-screen flex items-center justify-center">
            {/* Vertical Grid Lines */}
            <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-4 sm:px-8 md:px-12 lg:px-20">
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
            </div>

            {/* Glow Effect */}
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/10 to-transparent blur-3xl -z-10"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Title */}
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-10 md:mb-12 text-white">
                        Get In Touch
                    </h2>

                    {/* Contact Links */}
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-14 md:mb-16">
                        <motion.a
                            href="mailto:oussamakazzi@example.com"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-primary/50 hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white"
                        >
                            <Mail className="w-5 h-5" />
                            <span className="text-sm md:text-base">Email</span>
                        </motion.a>

                        <motion.a
                            href="#"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-white/50 hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white"
                        >
                            <Github className="w-5 h-5" />
                            <span className="text-sm md:text-base">GitHub</span>
                        </motion.a>

                        <motion.a
                            href="#"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white"
                        >
                            <Linkedin className="w-5 h-5" />
                            <span className="text-sm md:text-base">LinkedIn</span>
                        </motion.a>

                        <motion.a
                            href="https://wa.me/1234567890"
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-lg hover:border-green-400/50 hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white"
                        >
                            <Phone className="w-5 h-5" />
                            <span className="text-sm md:text-base">WhatsApp</span>
                        </motion.a>
                    </div>

                    {/* Footer */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="text-gray-500 text-sm"
                    >
                        © {new Date().getFullYear()} Oussama Kazzi. All rights reserved.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
