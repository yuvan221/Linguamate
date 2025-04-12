import React from 'react';
import Button from '../common/Button';

const BookingHistory = ({ bookings }) => {
  if (bookings.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">You have no past bookings.</p>
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
            <span className={`px-2 py-1 rounded text-xs ${booking.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {booking.status}
            </span>
          </div>
          
          {!booking.reviewed && booking.status === 'completed' && (
            <div className="mt-4">
              <Button variant="outline" size="sm">Leave a Review</Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookingHistory;