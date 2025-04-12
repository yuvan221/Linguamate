import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: "Create an Account",
      description: "Sign up as a traveler seeking language assistance or a student offering translation services.",
      icon: "👤",
    },
    {
      title: "Find Your Match",
      description: "Search for translators based on language, location, and service type you need.",
      icon: "🔍",
    },
    {
      title: "Book a Session",
      description: "Choose between virtual assistance or in-person support and schedule a time.",
      icon: "📆",
    },
    {
      title: "Connect & Communicate",
      description: "Meet your translator and enjoy smooth communication during your travels.",
      icon: "🌐",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-4 font-bold text-blue-600">{`Step ${index + 1}`}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;