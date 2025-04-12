import React from 'react';
import Hero from '../components/home/Hero';
import HowItWorks from '../components/home/HowItWorks';
import ServiceModes from '../components/home/ServiceModes';
import Testimonials from '../components/home/Testimonials';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <HowItWorks />
      <ServiceModes />
      <Testimonials />
    </div>
  );
};

export default HomePage;