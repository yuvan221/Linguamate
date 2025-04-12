import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const TranslatorCard = ({ translator }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold mr-4">
            {translator.avatar || translator.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-xl font-bold">{translator.name}</h3>
            <p className="text-gray-600">{translator.location}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-2">
            <span className="text-yellow-400 mr-1">★</span>
            <span>{translator.rating} ({translator.reviewCount} reviews)</span>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-2">
            {translator.languages.map((lang, idx) => (
              <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                {lang}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {translator.services.map((service, idx) => (
              <span key={idx} className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                {service}
              </span>
            ))}
          </div>
          
          <p className="text-gray-700 mb-4">{translator.bio}</p>
          
          <div className="mb-4">
            <h4 className="font-bold mb-1">Availability</h4>
            <p className="text-gray-600">{translator.availability}</p>
          </div>
          
          <div className="mb-4">
            <h4 className="font-bold mb-1">Pricing</h4>
            <p className="text-gray-600">
              Virtual: ${translator.pricing.virtual}/hour<br />
              In-Person: ${translator.pricing.inPerson}/hour
            </p>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Link to={`/book?translator=${translator.id}`} className="w-full">
            <Button variant="primary" className="w-full">Book Now</Button>
          </Link>
          <Link to={`/translators/${translator.id}`} className="w-full">
            <Button variant="outline" className="w-full">View Profile</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TranslatorCard;