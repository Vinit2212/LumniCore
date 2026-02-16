import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Our Process', path: '/process' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <footer className="bg-card border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="md:col-span-2">
                        <Link to="/" className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">LC</span>
                            </div>
                            <span className="text-xl font-heading font-bold text-foreground">LumniCore</span>
                        </Link>
                        <p className="text-muted-foreground mb-4 max-w-md">
                            Engineering the future of digital business. We build secure, scalable, and high-performance software solutions for enterprises worldwide.
                        </p>
                        <p className="text-sm text-muted-foreground">
                            <strong>Precision. Performance. Scale.</strong>
                        </p>
                    </div>

                    <div>
                        <h3 className="font-heading font-semibold text-foreground mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-heading font-semibold text-foreground mb-4">Connect</h3>
                        <div className="space-y-2">
                            <p className="text-muted-foreground">
                                <Link to="/contact" className="hover:text-primary transition-colors">Get in Touch</Link>
                            </p>

                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-muted-foreground text-sm">
                            &copy; {new Date().getFullYear()} LumniCore. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <span className="text-sm text-muted-foreground">Maharashtra • Global</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
