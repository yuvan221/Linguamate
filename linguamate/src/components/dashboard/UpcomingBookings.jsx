import React from 'react';
import Button from '../common/Button';

const UpcomingBookings = ({ bookings }) => {
  if (bookings.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">You have no upcoming bookings.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {bookings.map(booking => (
        <div key={booking.id} className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-bold text-lg">{booking.serviceName}</h4>
              <p className="text-gray-600">
                with {booking.translatorName} • {booking.serviceType === 'virtual' ? 'Virtual' : 'In-Person'}
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold">${booking.totalPrice}</p>
              <p className="text-sm text-gray-500">{booking.duration} {booking.duration === 1 ? 'hour' : 'hours'}</p>
            </div>
          </div>
          
          <div className="mt-3 flex items-center text-gray-600">
            <span className="mr-4">
              📅 {booking.date} at {booking.startTime}
            </span>
          </div>
          
          <div className="mt-4 flex gap-2">
            <Button variant="outline" size="sm">Reschedule</Button>
            <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">Cancel</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingBookings;