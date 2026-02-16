import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import TechStack from '../components/TechStack';
import CTA from '../components/CTA';

const Home: React.FC = () => {
    return (
        <>
            <Hero />
            <Stats />
            <Services />
            <TechStack />
            <CTA />
        </>
    );
};

export default Home;
