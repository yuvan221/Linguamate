// src/components/booking/BookingForm.jsx
import React, { useState } from 'react';
import Button from '../common/Button';
import Loader from '../common/Loader';

const BookingForm = ({ translator, onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const [bookingData, setBookingData] = useState({
    translatorId: translator?.id,
    translatorName: translator?.name,
    serviceType: 'virtual', // 'virtual' or 'inPerson'
    date: '',
    startTime: '',
    duration: 1,
    languages: translator?.languages?.[0] || '',
    notes: '',
  });

  // Create dates for the next 30 days
  const availableDates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return date.toISOString().split('T')[0];
  });

  // Create time slots
  const timeSlots = [];
  for (let hour = 8; hour <= 20; hour++) {
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const amPm = hour < 12 ? 'AM' : 'PM';
    timeSlots.push(`${formattedHour}:00 ${amPm}`);
    timeSlots.push(`${formattedHour}:30 ${amPm}`);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const formattedData = {
        ...bookingData,
        totalPrice: calculateTotal()
      };
      onSubmit(formattedData);
      setLoading(false);
    }, 1000);
  };

  const calculateTotal = () => {
    const hourlyRate = bookingData.serviceType === 'virtual' 
      ? translator?.pricing?.virtual 
      : translator?.pricing?.inPerson;
    return hourlyRate * bookingData.duration;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Book a Session</h2>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Service Type</label>
          <select
            name="serviceType"
            value={bookingData.serviceType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            {translator?.services?.includes('Virtual') && (
              <option value="virtual">Virtual Translation</option>
            )}
            {translator?.services?.includes('In-Person') && (
              <option value="inPerson">In-Person Translation</option>
            )}
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Language</label>
          <select
            name="languages"
            value={bookingData.languages}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            {translator?.languages?.map((lang, idx) => (
              <option key={idx} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Date</label>
          <select
            name="date"
            value={bookingData.date}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a date</option>
            {availableDates.map((date, idx) => {
              const formattedDate = new Date(date).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric'
              });
              return (
                <option key={idx} value={formattedDate}>
                  {formattedDate}
                </option>
              );
            })}
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Start Time</label>
          <select
            name="startTime"
            value={bookingData.startTime}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a time</option>
            {timeSlots.map((time, idx) => (
              <option key={idx} value={time}>{time}</option>
            ))}
          </select>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-1">Duration (hours)</label>
          <select
            name="duration"
            value={bookingData.duration}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            {[1, 2, 3, 4].map((hours) => (
              <option key={hours} value={hours}>
                {hours} {hours === 1 ? 'hour' : 'hours'}
              </option>
            ))}
          </select>
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-1">Additional Notes (optional)</label>
          <textarea
            name="notes"
            value={bookingData.notes}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="3"
            placeholder="Anything else the translator should know..."
          />
        </div>
        
        <div className="border-t border-gray-200 pt-4 mb-4">
          <h3 className="font-bold mb-2">Price Summary</h3>
          <div className="flex justify-between mb-1">
            <span>Rate:</span>
            <span>${bookingData.serviceType === 'virtual' ? translator?.pricing?.virtual : translator?.pricing?.inPerson}/hour</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Duration:</span>
            <span>{bookingData.duration} {bookingData.duration === 1 ? 'hour' : 'hours'}</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${calculateTotal()}</span>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button 
            type="submit" 
            variant="primary" 
            disabled={loading}
            className="w-full"
          >
            {loading ? <Loader size="sm" className="mr-2" /> : null}
            {loading ? 'Booking...' : 'Book Now'}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;