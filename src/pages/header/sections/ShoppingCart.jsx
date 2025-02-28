// ShoppingCart.jsx
import React from 'react';

const ShoppingCart = ({ cartCount = 0 }) => {
  return (
    <a href="/cart" className="flex items-center text-gray-700 hover:text-blue-600">
      <div className="relative">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </div>
      <span className="ml-2 hidden md:inline">Cart</span>
    </a>
  );
};

export default ShoppingCart;