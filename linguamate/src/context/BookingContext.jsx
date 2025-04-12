import React, { createContext, useState } from 'react';

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  const [searchFilters, setSearchFilters] = useState({
    location: '',
    language: '',
    serviceType: 'all',
    dateRange: null
  });

  const addBooking = (booking) => {
    setBookings([...bookings, { ...booking, id: Date.now() }]);
  };

  const updateFilters = (filters) => {
    setSearchFilters({ ...searchFilters, ...filters });
  };

  return (
    <BookingContext.Provider value={{ bookings, addBooking, searchFilters, updateFilters }}>
      {children}
    </BookingContext.Provider>
  );
};