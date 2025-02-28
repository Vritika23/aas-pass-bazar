// UserAccount.jsx
import React from 'react';

const UserAccount = () => {
  return (
    <div className="relative group">
      <button className="flex items-center text-gray-700 hover:text-blue-600">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span className="ml-2 hidden md:inline">Account</span>
      </button>
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
        <a href="/login" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</a>
        <a href="/signup" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Up</a>
        <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Profile</a>
        <a href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Orders</a>
      </div>
    </div>
  );
};

export default UserAccount;