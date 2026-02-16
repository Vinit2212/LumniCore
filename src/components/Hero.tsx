import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-background pointer-events-none">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] mix-blend-screen animate-pulse"
                    style={{ animationDuration: '4s' }}
                ></div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] mix-blend-screen animate-pulse"
                    style={{ animationDuration: '7s' }}
                ></div>
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
                        Global Software Consultancy
                    </span>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
                        Engineering <span className="text-gradient">Digital Excellence</span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    We build scalable, high-performance web & mobile applications for ambitious companies. From concept to code, delivered with precision.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="https://tidycal.com/vinitxatri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center space-x-2 justify-center"
                    >
                        <span>Book a Free Consultation</span>
                        <ExternalLink size={20} />
                    </a>
                    <a
                        href="/services"
                        className="btn-secondary inline-flex items-center space-x-2 justify-center"
                    >
                        <span>View Our Solutions</span>
                        <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
