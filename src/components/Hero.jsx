import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import logo from "../assets/logo.png";
const Hero = () => {
    return (
        <section id="hero" className="relative min-h-screen h-screen flex flex-col justify-between overflow-hidden pt-16 sm:pt-20">
            {/* Vertical Grid Lines */}
            <div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-4 sm:px-8 md:px-12 lg:px-20">
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
                <div className="w-px h-full bg-white/5"></div>
            </div>

            {/* Glow Effect */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/10 to-transparent blur-3xl -z-10"></div>

            <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 mt-8 sm:mt-10 md:mt-0">



                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-4xl text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
                        Web <br className="hidden sm:block" />
                        <span className="text-gray-400">Developer</span>
                        <span className="animate-pulse text-primary ml-2">|</span>
                    </h2>

                    <div className="flex justify-center">
                        <a href="#projects" className="inline-flex items-center text-base sm:text-lg font-semibold text-white hover:text-primary transition-colors group mt-4 sm:mt-6">
                            Discover <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </a>
                    </div>
                </motion.div>
            </div>


        </section>
    );
};

export default Hero;
