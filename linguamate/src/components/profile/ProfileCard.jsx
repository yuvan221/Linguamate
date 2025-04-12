// src/components/profile/ProfileCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const ProfileCard = ({ user, isDetailed = false }) => {
  // Calculate average rating
  const avgRating = user.reviews && user.reviews.length > 0
    ? user.reviews.reduce((sum, review) => sum + review.rating, 0) / user.reviews.length
    : 0;

  // Format the rating to have one decimal place
  const formattedRating = avgRating.toFixed(1);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Profile Header */}
      <div className="bg-blue-50 p-6 flex flex-col items-center sm:flex-row sm:items-start">
        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 overflow-hidden">
          {user.profileImage ? (
            <img 
              src={user.profileImage} 
              alt={`${user.name} profile`} 
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-blue-500 text-2xl font-bold">
              {user.name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        
        <div className="text-center sm:text-left flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
            {user.isTranslator && (
              <div className="flex items-center mt-2 sm:mt-0">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="ml-1 font-semibold">{formattedRating}</span>
                <span className="text-gray-500 ml-1">
                  ({user.reviews ? user.reviews.length : 0} reviews)
                </span>
              </div>
            )}
          </div>
          
          <div className="mt-2 text-gray-600">
            <p>{user.location || 'Location not specified'}</p>
          </div>
          
          {user.isTranslator && (
            <div className="mt-3">
              <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                Translator
              </span>
              {user.isVerified && (
                <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded ml-2">
                  Verified
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      
      {/* Profile Content */}
      <div className="p-6">
        {/* About Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">About</h3>
          <p className="text-gray-600">
            {user.bio || 'No bio provided.'}
          </p>
        </div>
        
        {/* Languages Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Languages</h3>
          {user.languages && user.languages.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {user.languages.map((language, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {language}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No languages specified.</p>
          )}
        </div>
        
        {/* Translator Specific Information */}
        {user.isTranslator && (
          <>
            {/* Services Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Services</h3>
              <div className="space-y-3">
                {user.services?.includes('Virtual') && (
                  <div className="flex justify-between">
                    <span>Virtual Translation</span>
                    <span className="font-medium">${user.pricing?.virtual}/hour</span>
                  </div>
                )}
                {user.services?.includes('In-Person') && (
                  <div className="flex justify-between">
                    <span>In-Person Translation</span>
                    <span className="font-medium">${user.pricing?.inPerson}/hour</span>
                  </div>
                )}
                {(!user.services || user.services.length === 0) && (
                  <p className="text-gray-500">No services specified.</p>
                )}
              </div>
            </div>
            
            {/* Availability Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Availability</h3>
              <p className="text-gray-600">
                {user.availability || 'Availability not specified.'}
              </p>
            </div>
            
            {/* Reviews Section (Only shown in detailed view) */}
            {isDetailed && user.reviews && user.reviews.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-3">Reviews</h3>
                <div className="space-y-4">
                  {user.reviews.slice(0, 3).map((review, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <div className="font-medium">{review.userName}</div>
                          <div className="text-gray-500 text-sm ml-2">
                            {new Date(review.date).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          <span className="ml-1 text-sm font-medium">{review.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{review.comment}</p>
                    </div>
                  ))}
                </div>
                {user.reviews.length > 3 && (
                  <div className="mt-4 text-center">
                    <Link 
                      to={`/translator/${user.id}/reviews`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      See all {user.reviews.length} reviews
                    </Link>
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>
      
      {/* Profile Footer */}
      <div className="border-t border-gray-100 px-6 py-4 bg-gray-50">
        {user.isTranslator ? (
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-gray-500">Member since </span>
              <span className="ml-1 font-medium">
                {new Date(user.joinDate).toLocaleDateString('en-US', { 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
            </div>
            {!isDetailed && (
              <Link 
                to={`/translator/${user.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
              >
                View Profile
              </Link>
            )}
            {isDetailed && (
              <Link 
                to={`/booking/${user.id}`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
              >
                Book Session
              </Link>
            )}
          </div>
        ) : (
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-gray-500">Member since </span>
              <span className="ml-1 font-medium">
                {new Date(user.joinDate).toLocaleDateString('en-US', { 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </span>
            </div>
            {!isDetailed && (
              <Link 
                to={`/profile/edit`}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md"
              >
                Edit Profile
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;