// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <div className="w-16 h-1 bg-blue-600 mx-auto my-4"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-600">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
        </div>
        
        <div className="space-y-4">
          <div>
            <Link to="/">
              <Button variant="primary" className="w-full">
                Return to Homepage
              </Button>
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <Link to="/translators" className="flex-1">
              <Button variant="outline" className="w-full">
                Find Translators
              </Button>
            </Link>
            
            <Link to="/contact" className="flex-1">
              <Button variant="outline" className="w-full">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-gray-500">
          <p>Still having trouble? <Link to="/help" className="text-blue-600 hover:text-blue-800">Visit our help center</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;