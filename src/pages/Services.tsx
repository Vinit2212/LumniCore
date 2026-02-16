import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Code, Smartphone, Database, Cloud, Bot, Building2,
    ExternalLink, TrendingUp, Shield, ShoppingBag, Stethoscope
} from 'lucide-react';

const ServicesPage: React.FC = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <div className="bg-background min-h-screen pt-16">
            <section className="relative py-20 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute inset-0 bg-background pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[100px] rounded-full mix-blend-screen"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-gradient">Services</span></h1>
                    <p className="text-xl text-muted-foreground">
                        Comprehensive technology solutions designed to accelerate your business growth
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {/* Full-Stack Development */}
                        <div id="fullstack" className="scroll-mt-24">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                                            <Code className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold">Full-Stack Development</h2>
                                            <p className="text-muted-foreground mt-2">Complete web application development from concept to deployment</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="card-premium">
                                        <h3 className="text-xl font-semibold mb-3">Frontend Development</h3>
                                        <p className="text-muted-foreground mb-4">Building responsive, interactive UIs with React, Next.js, and TypeScript. Focused on performance and exceptional user experiences.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'].map(tech => (
                                                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="card-premium">
                                        <h3 className="text-xl font-semibold mb-3">Backend Development</h3>
                                        <p className="text-muted-foreground mb-4">Developing robust RESTful & GraphQL APIs with Node.js, Express, and Python. Expert in microservices and scalable systems.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Node.js', 'Express', 'Python', 'FastAPI', 'GraphQL'].map(tech => (
                                                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mobile Development */}
                        <div id="mobile" className="scroll-mt-24">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                                <div className="lg:order-2">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                                            <Smartphone className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold">Mobile Development</h2>
                                            <p className="text-muted-foreground mt-2">Cross-platform mobile applications with native-like performance</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:order-1 space-y-8">
                                    <div className="card-premium">
                                        <h3 className="text-xl font-semibold mb-3">Native iOS & Android Apps</h3>
                                        <p className="text-muted-foreground mb-4">High-performance native applications built specifically for iOS and Android platforms using Swift and Kotlin/Java.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Swift', 'Kotlin', 'Java', 'iOS SDK', 'Android SDK'].map(tech => (
                                                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="card-premium">
                                        <h3 className="text-xl font-semibold mb-3">Hybrid (Flutter) Apps</h3>
                                        <p className="text-muted-foreground mb-4">Building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using Flutter.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Flutter', 'Dart', 'Cross-Platform', 'Material Design', 'Cupertino'].map(tech => (
                                                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Custom API Development */}
                        <div id="apis" className="scroll-mt-24">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                                            <Database className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold">Custom API Development & Integration</h2>
                                            <p className="text-muted-foreground mt-2">Robust, scalable APIs and seamless third-party integrations</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="card-premium">
                                        <h3 className="text-xl font-semibold mb-3">API Design & Development</h3>
                                        <p className="text-muted-foreground mb-4">We build and integrate robust, scalable custom APIs to connect your services, power your applications, and drive your business.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['REST APIs', 'GraphQL', 'WebSockets', 'gRPC', 'OAuth'].map(tech => (
                                                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="card-premium">
                                        <h3 className="text-xl font-semibold mb-3">Third-party Integrations</h3>
                                        <p className="text-muted-foreground mb-4">Seamless integration with payment gateways, CRM systems, marketing tools, and other business-critical services.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Stripe', 'PayPal', 'Salesforce', 'HubSpot', 'Zapier'].map(tech => (
                                                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cloud & DevOps */}
                        <div id="cloud" className="scroll-mt-24">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                                <div className="lg:order-2">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                                            <Cloud className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold">Cloud Architecture & DevOps</h2>
                                            <p className="text-muted-foreground mt-2">Scalable cloud infrastructure and automated deployment pipelines</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:order-1 space-y-8">
                                    <div className="card-premium">
                                        <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
                                        <p className="text-muted-foreground mb-4">Designing and deploying cloud-native applications on AWS. Implementing scalable, secure, and cost-effective architectures.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CloudFormation'].map(tech => (
                                                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="card-premium">
                                        <h3 className="text-xl font-semibold mb-3">DevOps & CI/CD</h3>
                                        <p className="text-muted-foreground mb-4">Implementing CI/CD pipelines, containerization with Docker & Kubernetes for high availability and scalability.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['GitHub Actions', 'Jenkins', 'Docker', 'Kubernetes', 'Monitoring'].map(tech => (
                                                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AI & Automation */}
                        <div id="ai-automation" className="scroll-mt-24">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                                            <Bot className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold">AI & Automation Solutions</h2>
                                            <p className="text-muted-foreground mt-2">Intelligent automation and AI-powered solutions to streamline your business</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="card-premium">
                                        <h3 className="text-xl font-semibold mb-3">Automated Workflows</h3>
                                        <p className="text-muted-foreground mb-4">Custom automation solutions using n8n, Zapier, and custom-built workflow engines to eliminate repetitive tasks and optimize business processes.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['n8n', 'Zapier', 'Make.com', 'Custom APIs', 'Python Scripts'].map(tech => (
                                                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="card-premium">
                                        <h3 className="text-xl font-semibold mb-3">AI Integration & Development</h3>
                                        <p className="text-muted-foreground mb-4">Implementing AI-powered features including chatbots, data analysis, content generation, and intelligent decision-making systems using modern AI models.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['OpenAI GPT', 'LangChain', 'Vector Databases', 'Machine Learning', 'NLP'].map(tech => (
                                                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SaaS & CRM */}
                        <div id="saas-crm" className="scroll-mt-24">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
                                <div className="lg:order-2">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4">
                                            <Building2 className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold">SaaS & Custom CRM Development</h2>
                                            <p className="text-muted-foreground mt-2">Scalable SaaS platforms and custom CRM systems to manage your business operations</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:order-1 space-y-8">
                                    <div className="card-premium">
                                        <h3 className="text-xl font-semibold mb-3">SaaS Platform Development</h3>
                                        <p className="text-muted-foreground mb-4">Full-featured SaaS applications with subscription management, multi-tenancy, user authentication, and comprehensive admin dashboards.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Multi-tenant', 'Stripe Integration', 'User Management', 'Analytics', 'API Management'].map(tech => (
                                                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="card-premium">
                                        <h3 className="text-xl font-semibold mb-3">Custom CRM Systems</h3>
                                        <p className="text-muted-foreground mb-4">Tailored CRM solutions to manage customer relationships, sales pipelines, and business processes with advanced reporting and automation.</p>
                                        <div className="flex flex-wrap gap-2">
                                            {['Lead Management', 'Sales Pipeline', 'Email Integration', 'Reporting', 'Task Automation'].map(tech => (
                                                <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-20 bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Specialized Expertise</h2>
                        <p className="text-xl text-muted-foreground">
                            Industry-specific solutions tailored to your business needs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="card-premium text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Real Estate</h3>
                            <p className="text-muted-foreground">Property management systems, listing platforms, and real estate analytics tools.</p>
                        </div>
                        <div className="card-premium text-center" style={{ animationDelay: '0.1s' }}>
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">FinTech</h3>
                            <p className="text-muted-foreground">Secure payment processing, financial dashboards, and trading platforms.</p>
                        </div>
                        <div className="card-premium text-center" style={{ animationDelay: '0.2s' }}>
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                                <ShoppingBag className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">FMCG</h3>
                            <p className="text-muted-foreground">Digital solutions for supply chain optimization, inventory management, and consumer engagement.</p>
                        </div>
                        <div className="card-premium text-center" style={{ animationDelay: '0.3s' }}>
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Stethoscope className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Pharma & Healthcare</h3>
                            <p className="text-muted-foreground">Compliance-focused applications, telemedicine platforms, and pharmaceutical supply chain tracking.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Let's discuss your requirements and create a custom solution for your business.
                    </p>
                    <a
                        href="https://tidycal.com/vinitxatri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors inline-flex items-center space-x-2"
                    >
                        <span>Book a Free Consultation</span>
                        <ExternalLink size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
