'use client';
import React, { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6">
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md z-20 animate-fade-in">
          <div className="px-4 py-4 space-y-4">
            <a href="#features" onClick={toggleMenu} className="block text-gray-600 hover:text-indigo-600 transition">Features</a>
            <a href="#benefits" onClick={toggleMenu} className="block text-gray-600 hover:text-indigo-600 transition">Benefits</a>
            <a href="#use-cases" onClick={toggleMenu} className="block text-gray-600 hover:text-indigo-600 transition">Use Cases</a>
            <a href="#waitlist" onClick={toggleMenu} className="block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-center">
              Join Waitlist
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
