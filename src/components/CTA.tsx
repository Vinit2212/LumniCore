import React from 'react';
import { ExternalLink } from 'lucide-react';

const CTA: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
            <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Something Great?</h2>
                <p className="text-xl mb-8 opacity-90">
                    Let's discuss your project and create a custom solution that drives your business forward.
                </p>
                <a
                    href="https://tidycal.com/vinitxatri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-white/90 transition-colors inline-flex items-center space-x-2"
                >
                    <span>Schedule Your Project Discovery Call</span>
                    <ExternalLink size={20} />
                </a>
            </div>
        </section>
    );
};

export default CTA;
