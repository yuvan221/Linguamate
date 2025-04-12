import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import ProfileForm from '../components/profile/ProfileForm';

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  
  // Redirect if not logged in
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);
  
  if (!currentUser) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Edit Profile</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ProfileForm />
      </div>
    </div>
  );
};

export default ProfilePage;