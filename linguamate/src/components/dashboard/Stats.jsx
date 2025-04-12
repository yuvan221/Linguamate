import React from 'react';

const Stats = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h4 className="text-gray-500 text-sm">Total Bookings</h4>
        <p className="text-2xl font-bold">{stats.totalBookings}</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h4 className="text-gray-500 text-sm">Upcoming Sessions</h4>
        <p className="text-2xl font-bold">{stats.upcomingSessions}</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h4 className="text-gray-500 text-sm">Languages Used</h4>
        <p className="text-2xl font-bold">{stats.languagesUsed}</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h4 className="text-gray-500 text-sm">Countries Explored</h4>
        <p className="text-2xl font-bold">{stats.countriesExplored}</p>
      </div>
    </div>
  );
};

export default Stats;