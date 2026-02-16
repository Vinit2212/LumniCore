import React from 'react';
import {
    Search, FileText, Zap, CircleCheckBig, Headphones,
    Clock, DollarSign, Users, ExternalLink
} from 'lucide-react';

const ProcessPage: React.FC = () => {
    return (
        <div className="bg-background min-h-screen pt-16">
            <section className="relative py-20 overflow-hidden">
                {/* Background Gradients */}
                <div className="absolute inset-0 bg-background pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/5 blur-[100px] rounded-full mix-blend-screen"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Our <span className="text-gradient">Process</span></h1>
                    <p className="text-xl text-muted-foreground">
                        A refined agile methodology designed for transparency, efficiency, and exceptional results
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {/* Step 1: Discovery & Strategy */}
                        <div className="relative">
                            <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-secondary"></div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                <div className="flex items-start space-x-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">1</div>
                                    </div>
                                    <div>
                                        <div className="flex items-center mb-3">
                                            <Search className="w-6 h-6 text-primary mr-2" />
                                            <h3 className="text-2xl font-bold">Discovery & Strategy</h3>
                                        </div>
                                        <p className="text-muted-foreground text-lg mb-4">
                                            We start with a comprehensive analysis of your business needs, target audience, and technical requirements.
                                        </p>
                                        <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                            <Clock size={16} className="mr-1" />
                                            1-2 weeks
                                        </div>
                                    </div>
                                </div>
                                <div className="card-premium">
                                    <h4 className="font-semibold mb-4">What's Included:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            'Stakeholder interviews and requirement gathering',
                                            'Technical architecture planning',
                                            'User experience and interface design strategy',
                                            'Technology stack selection and optimization'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start space-x-3">
                                                <CircleCheckBig size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Flat-Rate Proposal */}
                        <div className="relative">
                            <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-secondary"></div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                <div className="flex items-start space-x-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">2</div>
                                    </div>
                                    <div>
                                        <div className="flex items-center mb-3">
                                            <FileText className="w-6 h-6 text-primary mr-2" />
                                            <h3 className="text-2xl font-bold">Flat-Rate Proposal</h3>
                                        </div>
                                        <p className="text-muted-foreground text-lg mb-4">
                                            Based on our discovery, we provide a transparent, fixed-price proposal with clear deliverables and timelines.
                                        </p>
                                        <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                            <Clock size={16} className="mr-1" />
                                            3-5 days
                                        </div>
                                    </div>
                                </div>
                                <div className="card-premium">
                                    <h4 className="font-semibold mb-4">What's Included:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            'Detailed project scope and deliverables',
                                            'Fixed pricing with no hidden costs',
                                            'Clear milestones and payment schedule',
                                            'Risk assessment and mitigation strategies'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start space-x-3">
                                                <CircleCheckBig size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 3: Agile Sprints & Milestones */}
                        <div className="relative">
                            <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-secondary"></div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                <div className="flex items-start space-x-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">3</div>
                                    </div>
                                    <div>
                                        <div className="flex items-center mb-3">
                                            <Zap className="w-6 h-6 text-primary mr-2" />
                                            <h3 className="text-2xl font-bold">Agile Sprints & Milestones</h3>
                                        </div>
                                        <p className="text-muted-foreground text-lg mb-4">
                                            We execute your project using proven agile methodologies with regular check-ins and deliverable milestones.
                                        </p>
                                        <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                            <Clock size={16} className="mr-1" />
                                            Project dependent
                                        </div>
                                    </div>
                                </div>
                                <div className="card-premium">
                                    <h4 className="font-semibold mb-4">What's Included:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            'Sprint planning and daily standups',
                                            'Regular demo sessions and feedback loops',
                                            'Continuous integration and testing',
                                            'Transparent progress tracking and reporting'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start space-x-3">
                                                <CircleCheckBig size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 4: Quality Assurance & Launch */}
                        <div className="relative">
                            <div className="hidden lg:block absolute left-8 top-20 w-0.5 h-32 bg-gradient-to-b from-primary to-secondary"></div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                <div className="flex items-start space-x-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">4</div>
                                    </div>
                                    <div>
                                        <div className="flex items-center mb-3">
                                            <CircleCheckBig className="w-6 h-6 text-primary mr-2" />
                                            <h3 className="text-2xl font-bold">Quality Assurance & Launch</h3>
                                        </div>
                                        <p className="text-muted-foreground text-lg mb-4">
                                            Rigorous testing, performance optimization, and seamless deployment to ensure a flawless launch.
                                        </p>
                                        <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                            <Clock size={16} className="mr-1" />
                                            1-2 weeks
                                        </div>
                                    </div>
                                </div>
                                <div className="card-premium">
                                    <h4 className="font-semibold mb-4">What's Included:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            'Comprehensive testing across all devices and browsers',
                                            'Performance optimization and security audits',
                                            'Deployment to production environments',
                                            'Post-launch monitoring and immediate support'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start space-x-3">
                                                <CircleCheckBig size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step 5: Ongoing Support */}
                        <div className="relative">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                <div className="flex items-start space-x-6">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl relative z-10">5</div>
                                    </div>
                                    <div>
                                        <div className="flex items-center mb-3">
                                            <Headphones className="w-6 h-6 text-primary mr-2" />
                                            <h3 className="text-2xl font-bold">Ongoing Support</h3>
                                        </div>
                                        <p className="text-muted-foreground text-lg mb-4">
                                            Continued maintenance, updates, and feature enhancements to keep your solution running at peak performance.
                                        </p>
                                        <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                            <Clock size={16} className="mr-1" />
                                            Ongoing
                                        </div>
                                    </div>
                                </div>
                                <div className="card-premium">
                                    <h4 className="font-semibold mb-4">What's Included:</h4>
                                    <ul className="space-y-3">
                                        {[
                                            'Regular security updates and maintenance',
                                            'Performance monitoring and optimization',
                                            'Feature enhancements and improvements',
                                            'Post-Deployment Support and troubleshooting'
                                        ].map((item, index) => (
                                            <li key={index} className="flex items-start space-x-3">
                                                <CircleCheckBig size={20} className="text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-muted-foreground">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-20 bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Why Our Process Works</h2>
                        <p className="text-xl text-muted-foreground">
                            Built on years of experience and refined through hundreds of successful projects
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card-premium text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                                <DollarSign className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Transparent Pricing</h3>
                            <p className="text-muted-foreground">Fixed-rate pricing with no hidden costs or surprise fees. You know exactly what you're paying upfront.</p>
                        </div>
                        <div className="card-premium text-center" style={{ animationDelay: '0.1s' }}>
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Predictable Timeline</h3>
                            <p className="text-muted-foreground">Clear milestones and realistic timelines ensure your project is delivered on schedule.</p>
                        </div>
                        <div className="card-premium text-center" style={{ animationDelay: '0.2s' }}>
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Collaborative Approach</h3>
                            <p className="text-muted-foreground">Regular communication and feedback sessions keep you involved throughout the entire process.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-background">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <div className="card-premium">
                        <h2 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
                        <p className="text-lg text-muted-foreground mb-8">
                            We stand behind our process with a commitment to quality, transparency, and results. If you're not satisfied with our work, we'll make it right.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                                <div className="text-muted-foreground">Satisfaction Guarantee</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-primary mb-2">Post</div>
                                <div className="text-muted-foreground">Deployment Support</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-primary mb-2">0</div>
                                <div className="text-muted-foreground">Hidden Fees</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Process?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Start with a free discovery call and see how our proven methodology can bring your vision to life.
                    </p>
                    <a
                        href="https://tidycal.com/vinitxatri"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors inline-flex items-center space-x-2"
                    >
                        <span>Schedule Your Discovery Call</span>
                        <ExternalLink size={20} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default ProcessPage;
