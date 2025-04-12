import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">LingoConnect</h3>
            <p>Connecting travelers with local student translators for authentic experiences.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul>
              <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link to="/translators" className="hover:text-blue-300">Find Translators</Link></li>
              <li><Link to="/register" className="hover:text-blue-300">Become a Translator</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p>Email: info@lingoconnect.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <div className="mt-4 flex gap-4">
              {/* Social media icons would go here */}
              <span>FB</span>
              <span>TW</span>
              <span>IG</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} LingoConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;