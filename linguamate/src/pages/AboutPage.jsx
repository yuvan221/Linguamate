// src/pages/AboutPage.jsx
import React from 'react';
import Header from '../components/common/Header';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Header 
        title="About LocalLingo"
        description="Connecting travelers with student translators for authentic local experiences."
      />
      
      <div className="bg-white rounded-lg shadow-md p-8">
        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            LocalLingo was founded with a simple but powerful vision: to break down language barriers 
            and foster meaningful cultural exchange through person-to-person connections.
          </p>
          <p className="text-gray-700 mb-4">
            We believe that true cultural understanding comes from authentic interactions with locals. 
            At the same time, we recognize that many students around the world have valuable language 
            skills and local knowledge, along with a desire to earn income while studying.
          </p>
          <p className="text-gray-700">
            Our platform connects these two groups—travelers seeking authentic experiences and student 
            translators looking for flexible work opportunities—creating value for both sides while 
            promoting global understanding and friendship.
          </p>
        </section>
        
        {/* How It Works Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">How LocalLingo Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-blue-600 font-bold text-xl mb-2">For Travelers</div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Search for translators in your destination</li>
                <li>Book virtual or in-person translation sessions</li>
                <li>Get help with navigation, shopping, dining, and more</li>
                <li>Gain insights into local culture and customs</li>
                <li>Create meaningful connections with locals</li>
              </ul>
              <div className="mt-4">
                <Link to="/translators" className="text-blue-600 hover:text-blue-800 font-medium">
                  Find a Translator →
                </Link>
              </div>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="text-green-600 font-bold text-xl mb-2">For Student Translators</div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Create a profile showcasing your language skills</li>
                <li>Set your own availability and rates</li>
                <li>Choose between virtual and in-person sessions</li>
                <li>Earn money while practicing languages</li>
                <li>Meet people from around the world</li>
              </ul>
              <div className="mt-4">
                <Link to="/become-translator" className="text-green-600 hover:text-green-800 font-medium">
                  Become a Translator →
                </Link>
              </div>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-purple-600 font-bold text-xl mb-2">Our Guarantee</div>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Verified student translators</li>
                <li>Secure payment processing</li>
                <li>Clear cancellation policies</li>
                <li>Review system for quality assurance</li>
                <li>24/7 customer support</li>
              </ul>
              <div className="mt-4">
                <Link to="/faq" className="text-purple-600 hover:text-purple-800 font-medium">
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Jamie Chen",
                role: "Founder & CEO",
                bio: "Former exchange student with a passion for languages and cultural exchange."
              },
              {
                name: "Marcus Rodriguez",
                role: "CTO",
                bio: "Computer science graduate and polyglot who built the first version of LocalLingo."
              },
              {
                name: "Sofia Petrov",
                role: "Head of Operations",
                bio: "Experienced in international education with a background in study abroad programs."
              },
              {
                name: "Aiden Park",
                role: "Head of Community",
                bio: "Previously managed translator communities at a major tech company."
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                <div className="text-center">
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Story Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            LocalLingo began in 2023 when our founder, Jamie Chen, found herself lost in a small 
            town in Italy without speaking a word of Italian. A local university student helped her 
            navigate, translate, and even showed her hidden gems that weren't in any guidebook.
          </p>
          <p className="text-gray-700 mb-4">
            This experience sparked an idea: what if travelers could easily connect with student 
            translators wherever they went? Jamie partnered with tech expert Marcus Rodriguez to 
            build the first version of LocalLingo.
          </p>
          <p className="text-gray-700 mb-4">
            We launched with a pilot program in five European cities, connecting 50 students with 
            over 200 travelers. The feedback was overwhelmingly positive, with travelers reporting 
            richer experiences and students earning meaningful income while practicing languages.
          </p>
          <p className="text-gray-700">
            Today, LocalLingo operates in over 50 cities worldwide, with thousands of student 
            translators and travelers using our platform every month. We're proud to be creating 
            value for both sides while fostering cross-cultural understanding in an increasingly 
            connected world.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;