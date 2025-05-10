'use client';
import React from 'react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
            <a href="#benefits" className="text-gray-600 hover:text-indigo-600 transition">Benefits</a>
            <a href="#use-cases" className="text-gray-600 hover:text-indigo-600 transition">Use Cases</a>
            <a href="#waitlist" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
              Join Waitlist
            </a>
          </div>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
