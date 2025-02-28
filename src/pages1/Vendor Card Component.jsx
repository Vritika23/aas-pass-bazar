// VendorCard.jsx
import React from 'react';

const VendorCard = ({ vendor }) => {
  // Sample vendor data if not provided
  const defaultVendor = {
    id: 1,
    name: "Artisans Collective",
    location: "Montillo, Northern Region",
    rating: 4.8,
    reviewCount: 156,
    image: "/api/placeholder/100/100",
    shortDescription: "A cooperative of 25 skilled artisans preserving traditional craft techniques.",
    joinedDate: "Member since 2020",
    productCount: 38
  };

  // Use provided vendor or default
  const vendorData = vendor || defaultVendor;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden my-6 p-4">
      <h2 className="text-lg font-bold mb-4">About the Vendor</h2>
      
      <div className="flex items-start">
        <div className="mr-4">
          <img 
            src={vendorData.image} 
            alt={vendorData.name} 
            className="w-16 h-16 object-cover rounded-full"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-gray-800">{vendorData.name}</h3>
          <div className="text-sm text-gray-600 mb-2">{vendorData.location}</div>
          
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400 mr-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" fill={i < Math.floor(vendorData.rating) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">{vendorData.rating} ({vendorData.reviewCount} reviews)</span>
          </div>
          
          <p className="text-sm text-gray-600 mb-3">{vendorData.shortDescription}</p>
          
          <div className="flex justify-between text-xs text-gray-500">
            <span>{vendorData.joinedDate}</span>
            <span>{vendorData.productCount} products</span>
          </div>
          
          <div className="mt-3">
            <a 
              href={`/vendors/${vendorData.id}`} 
              className="text-blue-600 text-sm font-medium hover:text-blue-800"
            >
              View full profile →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;