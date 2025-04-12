import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Break Language Barriers with Local Student Translators</h1>
          <p className="text-lg mb-6">Connect with local bilingual students who can help you navigate foreign countries with ease. Get real-time translation help virtually or in-person.</p>
          <div className="flex gap-4">
            <Link to="/translators">
              <Button variant="primary" size="lg">Find Translators</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg">Become a Translator</Button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          {/* Hero image would go here */}
          <div className="bg-white rounded-lg p-4 h-64 flex items-center justify-center">
            [Hero Image Placeholder]
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;