import React from 'react';
import {
    Award, Users, TrendingUp, MapPin, Calendar, Code, Globe,
    Linkedin, Github, Mail, ExternalLink
} from 'lucide-react';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-background min-h-screen pt-16">
            <section className="hero-gradient py-20">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">About <span className="text-gradient">LumniCore</span></h1>
                    <p className="text-xl text-muted-foreground">
                        A fresh perspective on client success, powered by a veteran engineering team
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                            <div className="space-y-4 text-lg text-muted-foreground">
                                <p>
                                    LumniCore was born from a realization: while technical talent is abundant, true client partnership is rare. Founded in 2026 by Vinit Bhanushali, our mission is to bring a fresh, customer-obsessed approach to software development.
                                </p>
                                <p>
                                    We aren't just a startup; we are the strategic front of <strong>Atri Technocrat</strong>, a powerhouse with 6+ years of experience and over 100 successful projects. This unique structure allows us to offer the personalized attention of a boutique agency with the delivery capabilities of an established enterprise.
                                </p>
                                <p>
                                    Vinit serves as your dedicated advocate, ensuring your vision is understood and respected, while Atri's veteran engineering team ensures it is built to perfection.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            {[
                                {
                                    icon: Award,
                                    title: '6+ Years Backed Experience',
                                    desc: 'Powered by Atri Technocrat\'s proven track record in delivering complex software solutions.',
                                    delay: '0s'
                                },
                                {
                                    icon: Users,
                                    title: '100+ Projects Delivered',
                                    desc: 'Successfully completed projects for startups, SMEs, and Fortune 500 companies.',
                                    delay: '0.1s'
                                },
                                {
                                    icon: TrendingUp,
                                    title: '50+ Happy Clients',
                                    desc: 'Delivering exceptional results for startups and enterprises globally.',
                                    delay: '0.2s'
                                }
                            ].map((item, index) => (
                                <div key={index} className="card-premium flex items-start space-x-4" style={{ animationDelay: item.delay }}>
                                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground text-sm">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-card">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
                        <p className="text-xl text-muted-foreground">Key milestones in our growth and evolution</p>
                    </div>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary to-secondary hidden lg:block"></div>
                        <div className="space-y-12">
                            {[
                                { year: '2020', title: 'The Engine: Atri Founded', desc: 'Atri Technocrat establishes its core engineering team, focusing on scalable architecture.' },
                                { year: '2023', title: 'Proven Scale', desc: 'The technical team delivers 50+ projects globally, building a reputation for reliability.' },
                                { year: '2026', title: 'The Vision: LumniCore', desc: 'Vinit launches the new entity to revolutionize client experience, backed by Atri\'s execution power.' },
                                { year: 'Future', title: 'The Evolution', desc: 'Continuing to set new standards in client satisfaction and innovative software delivery.' }
                            ].map((item, index) => (
                                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`} style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                                        <div className={`card-premium ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                                            <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                            <p className="text-muted-foreground">{item.desc}</p>
                                        </div>
                                    </div>
                                    <div className="hidden lg:block w-4 h-4 bg-primary rounded-full border-4 border-background relative z-10"></div>
                                    <div className="flex-1"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Meet Our Founder</h2>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="card-premium">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="lg:col-span-1">
                                    <div className="w-48 h-48 rounded-full mx-auto mb-6 overflow-hidden bg-muted flex items-center justify-center">
                                        {/* Placeholder for Vinit's image - using initials or icon if no image available */}
                                        <span className="text-6xl font-bold text-muted-foreground">VB</span>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold mb-2">Vinit Bhanushali</h3>
                                        <p className="text-primary font-semibold mb-4">Founder & Strategy Lead</p>
                                        <div className="flex justify-center space-x-4">
                                            <a href="https://www.linkedin.com/in/vinit-bhanushali-0760851b5/" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                                                <Linkedin size={20} />
                                            </a>
                                            <a href="https://github.com/Vinit2212" target="_blank" rel="noopener noreferrer" className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                                                <Github size={20} />
                                            </a>
                                            <a href="mailto:vinitbhanushali99@gmail.com" className="p-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                                                <Mail size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-2">
                                    <p className="text-lg text-muted-foreground mb-6">
                                        Vinit is the visionary behind LumniCore. With a relentless focus on customer success and a passion for innovation, he bridges the gap between your ideas and our engineering excellence.
                                    </p>
                                    <p className="text-lg text-muted-foreground mb-6">
                                        While he brings a fresh perspective to the industry, his strategic partnership with Atri Technocrat ensures every project is built on a foundation of proven expertise. Vinit orchestrates the project strategy, ensuring that the 50+ developer strong team delivers exactly what your business needs.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex items-center space-x-2">
                                            <MapPin size={16} className="text-primary" />
                                            <span>Based in India</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Calendar size={16} className="text-primary" />
                                            <span>6+ Years Backed Exp.</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Code size={16} className="text-primary" />
                                            <span>Full-Stack Specialist</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Globe size={16} className="text-primary" />
                                            <span>Global Client Base</span>
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
                        <h2 className="text-4xl font-bold mb-6">Our Headquarters</h2>
                        <p className="text-xl text-muted-foreground">Strategic location to serve clients globally</p>
                    </div>
                    <div className="max-w-md mx-auto">
                        <div className="card-premium text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Maharashtra, India</h3>
                            <p className="text-muted-foreground mb-4">Our engineering hub and creative studio, delivering excellence to the world.</p>
                            <div className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">IST (UTC+5:30)</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
                    <p className="text-xl mb-8 opacity-90">
                        Let's discuss how our experience and expertise can help bring your project to life.
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

export default AboutPage;
