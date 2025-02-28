// Header.jsx
import React, { useState } from 'react';
import LogoNavigation from './sections/LogoNavigation';
import LocationSelector from './sections/LocationSelector';
import SearchBar from './sections/SearchBar';
import UserAccount from './sections/UserAccount';
import VendorPortal from './sections/VendorPortal';
import ShoppingCart from './sections/ShoppingCart';

const HeaderMain = () => {
  const [cartCount, setCartCount] = useState(0);
  
  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <LogoNavigation />
          
          {/* Location Selector */}
          <div className="mx-4">
            <LocationSelector />
          </div>
          
          {/* Search Bar */}
          <div className="mx-4">
            <SearchBar />
          </div>
          
          {/* User Actions */}
          <div className="flex items-center space-x-6">
            <UserAccount />
            <VendorPortal />
            <ShoppingCart cartCount={cartCount} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMain;