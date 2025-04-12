import React from 'react';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const ServiceModes = () => {
  const services = [
    {
      title: "Virtual Assistance",
      description: "Connect with translators remotely through chat, audio, or video calls. Perfect for quick translations of menus, signs, or short conversations.",
      features: [
        "Real-time text/voice/video translation",
        "Available 24/7",
        "On-demand or scheduled sessions",
        "Budget-friendly option"
      ],
      icon: "💻",
      linkPath: "/translators?mode=virtual"
    },
    {
      title: "In-Person Support",
      description: "Book a local student translator to accompany you physically. Ideal for guided tours, meetings, medical visits, or immersive experiences.",
      features: [
        "Face-to-face translation assistance",
        "Local cultural insights",
        "Personalized travel companion",
        "Enhanced travel experience"
      ],
      icon: "🧍",
      linkPath: "/translators?mode=inperson"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Choose the translation service that best fits your needs, whether you need quick assistance remotely or a local companion for in-depth experiences.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="border rounded-lg overflow-hidden shadow-md bg-white">
              <div className="p-6">
                <div className="text-4xl mb-4 text-center">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center mb-2">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <Link to={service.linkPath}>
                    <Button variant="primary">Find {service.title}</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceModes;