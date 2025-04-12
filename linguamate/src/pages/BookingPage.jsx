import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import BookingForm from '../components/booking/BookingForm';
import { BookingContext } from '../context/BookingContext';
import { AuthContext } from '../context/AuthContext';

const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const translatorId = searchParams.get('translator');
  const [translator, setTranslator] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addBooking } = useContext(BookingContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  // Mock data - in a real app, this would fetch from an API
  useEffect(() => {
    if (!translatorId) {
      navigate('/translators');
      return;
    }

    // Simulate API call to get translator details
    setTimeout(() => {
      // This would be an API fetch in a real app
      setTranslator({
        id: parseInt(translatorId),
        name: "Sofia Martinez",
        location: "Barcelona, Spain",
        languages: ["Spanish", "English", "Catalan"],
        services: ["Virtual", "In-Person"],
        bio: "International Business student with 3 years of translation experience. I love helping travelers discover the real Barcelona!",
        rating: 4.9,
        reviewCount: 27,
        availability: "Weekdays: 4PM-8PM, Weekends: 10AM-6PM",
        pricing: { virtual: 15, inPerson: 25 }
      });
      setLoading(false);
    }, 1000);
  }, [translatorId, navigate]);

  // Check if user is logged in
  useEffect(() => {
    if (!currentUser && !loading) {
      // Redirect to login if not logged in
      navigate('/login?redirect=booking');
    }
  }, [currentUser, loading, navigate]);

  const handleBookingSubmit = (bookingData) => {
    addBooking(bookingData);
    // Show success message and redirect
    alert('Booking successful!');
    navigate('/dashboard');
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Book a Translation Session</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Translator Details</h2>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold mr-4">
                {translator.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold">{translator.name}</h3>
                <p className="text-gray-600">{translator.location}</p>
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-1">★</span>
                  <span>{translator.rating} ({translator.reviewCount} reviews)</span>
                </div>
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-bold mb-1">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {translator.languages.map((lang, idx) => (
                  <span key={idx} className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h4 className="font-bold mb-1">Bio</h4>
              <p className="text-gray-700">{translator.bio}</p>
            </div>
            
            <div className="mb-4">
              <h4 className="font-bold mb-1">Availability</h4>
              <p className="text-gray-600">{translator.availability}</p>
            </div>
          </div>
        </div>
        
        <div>
          <BookingForm translator={translator} onSubmit={handleBookingSubmit} />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;