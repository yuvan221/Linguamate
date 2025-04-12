import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <BookingProvider>
          <div>
            <nav className="navbar">
              <a href="/">Home</a>
              <a href="/about">About</a>
              <a href="/find-translators">Find Translators</a>
              <a href="/login">Login</a>
              <a href="/register">Register</a>
            </nav>

            <section className="hero">
              <h1>Break Language Barriers with Local Student Translators</h1>
              <p>Connect with local bilingual students who can help you navigate foreign countries with ease.</p>
              <a href="/find-translators" className="hero-btn">Find Translators</a>
            </section>

            <section className="quick-links">
              <h2>Quick Links</h2>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/find-translators">Find Translators</a></li>
                <li><a href="/become-translator">Become a Translator</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </section>

            <section className="how-it-works">
              <h2>How It Works</h2>
              <div className="steps">
                <div className="step">
                  <h3>Step 1</h3>
                  <p>Create an Account</p>
                </div>
                {/* Add other steps */}
              </div>
            </section>

            {/* Optionally integrate AppRoutes here if it defines additional routed content */}
            <AppRoutes />
          </div>
        </BookingProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;