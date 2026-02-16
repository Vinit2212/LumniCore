import React from 'react';

const technologies = [
    'React', 'Next.js', 'Node.js', 'TypeScript',
    'Python', 'PostgreSQL', 'AWS', 'Docker',
    'GraphQL', 'Kubernetes', '.NET', 'Flutter',
    'AngularJS', 'Java', 'Redis'
];

const TechStack: React.FC = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">Technology Mastery</h2>
                    <p className="text-xl text-muted-foreground">
                        Cutting-edge technologies for modern, scalable solutions
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {technologies.map((tech, index) => (
                        <div
                            key={tech}
                            className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="font-semibold text-foreground">{tech}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
