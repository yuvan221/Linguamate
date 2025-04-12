import React, { useState, useEffect } from 'react';
import SearchFilters from '../components/booking/SearchFilters';
import TranslatorCard from '../components/booking/TranslatorCard';

const TranslatorsPage = () => {
  const [translators, setTranslators] = useState([]);
  const [loading, setLoading] = useState(true);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTranslators([
        {
          id: 1,
          name: "Sofia Martinez",
          location: "Barcelona, Spain",
          languages: ["Spanish", "English", "Catalan"],
          services: ["Virtual", "In-Person"],
          bio: "International Business student with 3 years of translation experience. I love helping travelers discover the real Barcelona!",
          rating: 4.9,
          reviewCount: 27,
          availability: "Weekdays: 4PM-8PM, Weekends: 10AM-6PM",
          pricing: { virtual: 15, inPerson: 25 }
        },
        {
          id: 2,
          name: "Hiroshi Tanaka",
          location: "Tokyo, Japan",
          languages: ["Japanese", "English", "Korean"],
          services: ["Virtual", "In-Person"],
          bio: "Computer Science student and language enthusiast. I can help you navigate Tokyo and translate technical terminology.",
          rating: 4.8,
          reviewCount: 34,
          availability: "Weekdays: 6PM-9PM, Weekends: All day",
          pricing: { virtual: 18, inPerson: 30 }
        },
        {
          id: 3,
          name: "Amina Khalid",
          location: "Marrakech, Morocco",
          languages: ["Arabic", "French", "English"],
          services: ["Virtual", "In-Person"],
          bio: "Tourism Management student. I can help you with both language translation and cultural insights during your stay in Morocco.",
          rating: 4.7,
          reviewCount: 19,
          availability: "Flexible schedule, available most days",
          pricing: { virtual: 12, inPerson: 20 }
        },
        {
          id: 4,
          name: "Lucas Schmidt",
          location: "Berlin, Germany",
          languages: ["German", "English", "French"],
          services: ["Virtual"],
          bio: "Economics student offering virtual translation services. I specialize in business-related translations and conversations.",
          rating: 4.6,
          reviewCount: 14,
          availability: "Weekdays: 5PM-10PM, Weekends: 2PM-6PM",
          pricing: { virtual: 16, inPerson: 0 }
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Find a Translator</h1>
      
      <SearchFilters />
      
      {loading ? (
        <div className="text-center py-8">Loading translators...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {translators.map(translator => (
            <TranslatorCard key={translator.id} translator={translator} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TranslatorsPage;