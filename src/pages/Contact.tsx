import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    Send, Mail, Clock, Globe, ExternalLink, MapPin, Loader2, CheckCircle2
} from 'lucide-react';

const ContactPage: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        user_name: '',
        user_company: '',
        user_email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formRef.current) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');
        setErrorMessage('');

        // Strict Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.user_email)) {
            setSubmitStatus('error');
            setErrorMessage('Please enter a valid email address.');
            setIsSubmitting(false);
            return;
        }

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey || serviceId === 'YOUR_SERVICE_ID') {
            alert('EmailJS is not configured. Please check your .env file.');
            setIsSubmitting(false);
            return;
        }

        try {
            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );
            setSubmitStatus('success');
            setFormData({ user_name: '', user_company: '', user_email: '', message: '' });
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-background min-h-screen pt-16">
            <section className="hero-gradient py-20">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">Get In <span className="text-gradient">Touch</span></h1>
                    <p className="text-xl text-muted-foreground">
                        Ready to start your project? Let's discuss how we can help bring your vision to life.
                    </p>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="card-premium">
                            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                            <p className="text-muted-foreground mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

                            {submitStatus === 'success' && (
                                <div className="bg-green-500/10 border border-green-500/20 text-green-500 p-4 rounded-lg mb-6 flex items-center space-x-2">
                                    <CheckCircle2 size={20} />
                                    <span>Message sent successfully! We'll be in touch soon.</span>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-lg mb-6">
                                    {errorMessage || "Something went wrong. Please try again later or email us directly."}
                                </div>
                            )}

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="user_name" className="block text-sm font-medium mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            id="user_name"
                                            name="user_name"
                                            required
                                            value={formData.user_name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className="flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="user_company" className="block text-sm font-medium mb-2">Company Name</label>
                                        <input
                                            type="text"
                                            id="user_company"
                                            name="user_company"
                                            value={formData.user_company}
                                            onChange={handleChange}
                                            placeholder="Your company name"
                                            className="flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="user_email" className="block text-sm font-medium mb-2">Email Address *</label>
                                    <input
                                        type="email"
                                        id="user_email"
                                        name="user_email"
                                        required
                                        value={formData.user_email}
                                        onChange={handleChange}
                                        placeholder="your@email.com"
                                        className="flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">How can we help? *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your project, timeline, and any specific requirements..."
                                        className="flex w-full rounded-md border border-border bg-input px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 min-h-[120px]"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full inline-flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Mail className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <a href="mailto:vinitbhanushali99@gmail.com" className="text-primary hover:text-primary/80 transition-colors">
                                                vinitbhanushali99@gmail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Response Time</h3>
                                            <p className="text-muted-foreground">Within 24 hours</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                                            <Globe className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Languages</h3>
                                            <p className="text-muted-foreground">English, Hindi</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-premium">
                                <h3 className="text-xl font-semibold mb-4">Prefer to Schedule a Call?</h3>
                                <p className="text-muted-foreground mb-6">Book a free 30-minute consultation to discuss your project in detail.</p>
                                <a
                                    href="https://tidycal.com/vinitxatri"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center space-x-2"
                                >
                                    <span>Book a Free Consultation</span>
                                    <ExternalLink size={16} />
                                </a>
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

            <section className="py-20 bg-background">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                q: 'How quickly can you start my project?',
                                a: 'We typically start new projects within 1-2 weeks, depending on our current workload and your project requirements.'
                            },
                            {
                                q: 'Do you work with fixed pricing?',
                                a: 'Yes, we provide transparent, flat-rate pricing with no hidden fees after our initial discovery phase.'
                            },
                            {
                                q: 'What timezone do you work in?',
                                a: 'Our team is based in India (IST), but we work with overlapping hours to effectively serve our clients in North America, Europe, and Asia.'
                            },
                            {
                                q: 'Do you provide ongoing support?',
                                a: 'Absolutely. We offer comprehensive post-launch support including maintenance, updates, and feature enhancements.'
                            }
                        ].map((item, index) => (
                            <div key={index} className="card-premium">
                                <h3 className="font-semibold mb-3">{item.q}</h3>
                                <p className="text-muted-foreground">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
