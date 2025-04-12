import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { BookingContext } from '../context/BookingContext';
import UpcomingBookings from '../components/dashboard/UpcomingBookings';
import BookingHistory from '../components/dashboard/BookingHistory';
import Stats from '../components/dashboard/Stats';
import Button from '../components/common/Button';

const DashboardPage = () => {
  const { currentUser } = useContext(AuthContext);
  const { bookings } = useContext(BookingContext);
  const navigate = useNavigate();
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [pastBookings, setPastBookings] = useState([]);
  const [stats, setStats] = useState({
    totalBookings: 0,
    upcomingSessions: 0, 
    languagesUsed: 0,
    countriesExplored: 0
  });

  // Redirect if not logged in
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  // Mock data initialization - in a real app, this would come from an API
  useEffect(() => {
    if (currentUser) {
      // Simulate API call to get user's bookings
      const mockUpcomingBookings = [
        {
          id: 1,
          serviceName: "City Tour Translation",
          translatorName: "Sofia Martinez",
          serviceType: "inperson",
          date: "April 15, 2025",
          startTime: "10:00 AM",
          duration: 3,
          totalPrice: 75
        },
        {
          id: 2,
          serviceName: "Restaurant Menu Translation",
          translatorName: "Hiroshi Tanaka",
          serviceType: "virtual",
          date: "April 20, 2025",
          startTime: "7:30 PM",
          duration: 1,
          totalPrice: 18
        }
      ];
      
      const mockPastBookings = [
        {
          id: 3,
          serviceName: "Business Meeting Translation",
          translatorName: "Lucas Schmidt",
          serviceType: "virtual",
          date: "March 25, 2025",
          startTime: "2:00 PM",
          duration: 2,
          totalPrice: 32,
          status: "completed",
          reviewed: true
        },
        {
          id: 4,
          serviceName: "Museum Tour Translation",
          translatorName: "Amina Khalid",
          serviceType: "inperson",
          date: "March 10, 2025",
          startTime: "11:00 AM",
          duration: 4,
          totalPrice: 80,
          status: "completed",
          reviewed: false
        },
        {
          id: 5,
          serviceName: "Shopping Translation",
          translatorName: "Sofia Martinez",
          serviceType: "inperson",
          date: "February 28, 2025",
          startTime: "3:00 PM",
          duration: 2,
          totalPrice: 50,
          status: "canceled",
          reviewed: false
        }
      ];
      
      setUpcomingBookings([...mockUpcomingBookings, ...bookings]);
      setPastBookings(mockPastBookings);
      
      setStats({
        totalBookings: mockUpcomingBookings.length + mockPastBookings.length + bookings.length,
        upcomingSessions: mockUpcomingBookings.length + bookings.length,
        languagesUsed: 3,
        countriesExplored: 2
      });
    }
  }, [currentUser, bookings]);

  if (!currentUser) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button variant="primary" onClick={() => navigate('/translators')}>Find Translators</Button>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Upcoming Bookings</h2>
            <UpcomingBookings bookings={upcomingBookings} />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Booking History</h2>
            <BookingHistory bookings={pastBookings} />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Stats</h2>
          <Stats stats={stats} />
          
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Profile Overview</h3>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mr-4">
                {currentUser.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-lg">{currentUser.name}</h4>
                <p className="text-gray-600">{currentUser.role === 'traveler' ? 'Traveler' : 'Translator'}</p>
              </div>
            </div>
            <Button variant="outline" className="w-full" onClick={() => navigate('/profile')}>
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;