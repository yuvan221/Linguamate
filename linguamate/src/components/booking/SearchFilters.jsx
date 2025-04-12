import React, { useContext } from 'react';
import { BookingContext } from '../../context/BookingContext';
import Button from '../common/Button';

const SearchFilters = () => {
  const { searchFilters, updateFilters } = useContext(BookingContext);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFilters({ [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would trigger the search
    console.log('Search with filters:', searchFilters);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">Find Your Translator</h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={searchFilters.location}
              onChange={handleChange}
              placeholder="City or Country"
              className="w-full p-2 border rounded"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">Language</label>
            <select
              name="language"
              value={searchFilters.language}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Any Language</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
              <option value="japanese">Japanese</option>
              <option value="mandarin">Mandarin</option>
              <option value="arabic">Arabic</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">Service Type</label>
            <select
              name="serviceType"
              value={searchFilters.serviceType}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="all">All Services</option>
              <option value="virtual">Virtual Only</option>
              <option value="inperson">In-Person Only</option>
            </select>
          </div>
          
          <div>
            <label className="block text-gray-700 mb-1">Date</label>
            <input
              type="date"
              name="date"
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        
        <Button type="submit" variant="primary" className="w-full">Search Translators</Button>
      </form>
    </div>
  );
};

export default SearchFilters;