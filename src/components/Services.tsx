import React from 'react';
import { Code, Smartphone, Database, Sparkles, Cloud, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Code,
        title: 'Full-Stack Development',
        description: 'End-to-end web applications with modern frameworks and scalable architecture.',
        link: '/services#fullstack',
    },
    {
        icon: Smartphone,
        title: 'Mobile Apps',
        description: 'Cross-platform mobile applications with native-like performance.',
        link: '/services#mobile',
    },
    {
        icon: Database,
        title: 'Custom APIs',
        description: 'Robust, scalable APIs and seamless third-party integrations.',
        link: '/services#apis',
    },
    {
        icon: Sparkles,
        title: 'AI Application Development',
        description: 'Intelligent applications with AI integration, automation, and machine learning capabilities.',
        link: '/services#ai-automation',
    },
    {
        icon: Cloud,
        title: 'Cloud & DevOps',
        description: 'Cloud-native architecture with automated deployment pipelines.',
        link: '/services#cloud',
    },
];

const Services: React.FC = () => {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background Gradients similar to index.css radial-gradient */}
            <div className="absolute inset-0 bg-background pointer-events-none -z-10">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl mix-blend-screen"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">Our Core Services</h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Comprehensive technology solutions designed to accelerate your business growth
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="card-premium text-center group"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <service.icon className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                            <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                            <a
                                href={service.link}
                                className="text-primary hover:text-primary/80 font-medium inline-flex items-center space-x-1"
                            >
                                <span>Learn More</span>
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
