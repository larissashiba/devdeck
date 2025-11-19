import React from 'react';
import { Link } from 'react-router-dom';
import home1 from '../assets/home1.png';

import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import StatsSection from '../components/StatsSection';

const Home = () => {
    return (
        <React.Fragment>
            <HeroSection home1={home1} />
            <FeaturesSection />
            <StatsSection />
        </React.Fragment>
    );
};

export default Home;