import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Button from '../common/Button';
import LanguageSelector from './LanguageSelector';

const ProfileForm = () => {
  const { currentUser } = useContext(AuthContext);
  const isTranslator = currentUser?.role === 'translator';
  
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    phone: '',
    location: '',
    bio: '',
    languages: [],
    services: isTranslator ? {
      virtual: true,
      inPerson: false
    } : {},
    pricing: isTranslator ? {
      virtual: 15,
      inPerson: 25
    } : {},
    availability: ''
  });
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle checkboxes
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked
        }
      }));
      return
    }
    
    // Handle nested objects for pricing
    if (name.startsWith('pricing.')) {
      const pricingField = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        pricing: {
          ...prev.pricing,
          [pricingField]: parseInt(value, 10) || 0
        }
      }));
      return;
    }
    
    // Handle regular inputs
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleLanguagesChange = (selectedLanguages) => {
    setFormData(prev => ({
      ...prev,
      languages: selectedLanguages
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would make an API call to update the profile
    alert('Profile updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1">Phone Number (optional)</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            placeholder="City, Country"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-gray-700 mb-1">Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows="4"
          placeholder="Tell us about yourself..."
        />
      </div>
      
      <div>
        <label className="block text-gray-700 mb-1">Languages</label>
        <LanguageSelector
          selectedLanguages={formData.languages}
          onChange={handleLanguagesChange}
        />
        <p className="text-sm text-gray-500 mt-1">
          Select languages you speak fluently
        </p>
      </div>
      
      {isTranslator && (
        <>
          <div>
            <label className="block text-gray-700 mb-2">Services Offered</label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="virtual"
                  checked={formData.services.virtual}
                  onChange={handleChange}
                  className="mr-2"
                />
                Virtual Translation
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="inPerson"
                  checked={formData.services.inPerson}
                  onChange={handleChange}
                  className="mr-2"
                />
                In-Person Translation
              </label>
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-2">Pricing (USD/hour)</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {formData.services.virtual && (
                <div>
                  <label className="block text-gray-600 text-sm mb-1">Virtual Translation</label>
                  <input
                    type="number"
                    name="pricing.virtual"
                    value={formData.pricing.virtual}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    min="0"
                  />
                </div>
              )}
              
              {formData.services.inPerson && (
                <div>
                  <label className="block text-gray-600 text-sm mb-1">In-Person Translation</label>
                  <input
                    type="number"
                    name="pricing.inPerson"
                    value={formData.pricing.inPerson}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    min="0"
                  />
                </div>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">Availability</label>
            <textarea
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              rows="3"
              placeholder="e.g., Weekdays 4PM-8PM, Weekends 10AM-6PM"
            />
          </div>
        </>
      )}
      
      <div className="flex justify-end">
        <Button type="submit" variant="primary">
          Save Changes
        </Button>
      </div>
    </form>
  );
};

export default ProfileForm;