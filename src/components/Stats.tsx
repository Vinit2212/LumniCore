import React from 'react';


const Stats: React.FC = () => {
    return (
        <section className="bg-card border-y border-border py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                    <div className="animate-counter">
                        <div className="text-4xl font-bold text-primary mb-2">6+ Years</div>
                        <div className="text-muted-foreground">Backed Experience</div>
                    </div>
                    <div className="animate-counter">
                        <div className="text-4xl font-bold text-primary mb-2">100+ Projects</div>
                        <div className="text-muted-foreground">Successfully Built</div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;
