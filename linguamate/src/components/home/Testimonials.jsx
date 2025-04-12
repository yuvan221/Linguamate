import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Having a local student translator made my business trip to Tokyo so much smoother. My translator not only helped with meetings but also showed me authentic local spots I would've never found!",
      author: "Michael R.",
      role: "Business Traveler",
      location: "from USA to Japan",
      avatar: "MR"
    },
    {
      text: "I used the virtual translation service while exploring markets in Morocco. Being able to video call a local student to help negotiate prices saved me money and enhanced my experience.",
      author: "Sarah L.",
      role: "Tourist",
      location: "from UK to Morocco",
      avatar: "SL"
    },
    {
      text: "Working as a translator on this platform has been rewarding. I get to practice languages, meet people from around the world, and earn money while studying.",
      author: "Carlos M.",
      role: "Student Translator",
      location: "Barcelona, Spain",
      avatar: "CM"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Testimonials</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Hear what travelers and translators are saying about their experiences with our platform.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;