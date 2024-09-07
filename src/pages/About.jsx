import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext'; // Adjust path as necessary

const AboutUs = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Assuming toggleTheme function is provided to switch themes

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 ${theme === 'light' ? 'bg-gray-100 text-gray-900' : 'bg-gray-900 text-gray-100'}`}>
      <div className="max-w-2xl mx-auto text-center">
        <h1 className={`text-4xl font-bold mb-4 ${theme === 'light' ? 'text-gray-900' : 'text-gray-100'}`}>About Us</h1>
        <p className="text-lg mb-6">
          Welcome to our website! We are dedicated to providing the best service and products to our customers.
          Our team is passionate about what we do and we strive to exceed your expectations. Thank you for visiting!
        </p>
      
      </div>
    </div>
  );
};

export default AboutUs;
