// LogoNavigation.jsx
import React from 'react';

const LogoNavigation = () => {
  return (
    <div className="flex items-center space-x-10">
      {/* Logo */}
      <div className="logo">
        <img src="" alt="" />
        <a href="/" className="text-2xl font-bold text-blue-600">AasPaasBazaar</a>
      </div>
      
      {/* Navigation Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li><a href="/home" className="text-gray-700 hover:text-blue-600">Home</a></li>
          <li><a href="/vendors" className="text-gray-700 hover:text-blue-600">Vendors</a></li>
          <li><a href="/forums" className="text-gray-700 hover:text-blue-600">Forums</a></li>
          <li><a href="/product-discovery" className="text-gray-700 hover:text-blue-600">Products</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default LogoNavigation;