// VendorPortal.jsx
import React from 'react';

const VendorPortal = () => {
  return (
    <a href="/vendor" className="flex items-center text-gray-700 hover:text-blue-600">
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
      <span className="ml-2 hidden md:inline">Vendor Portal</span>
    </a>
  );
};

export default VendorPortal;