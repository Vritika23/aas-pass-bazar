// LocationSelector.jsx
import React, { useState } from 'react';

const LocationSelector = () => {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  
  // Sample locations - replace with your actual locations
  const locations = ['All Locations', 'New York', 'Los Angeles', 'Chicago', 'Miami', 'Dallas'];
  
  return (
    <div className="relative">
      <select 
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="appearance-none bg-gray-100 border border-gray-300 rounded-md py-2 px-4 pr-8 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {locations.map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
        </svg>
      </div>
    </div>
  );
};

export default LocationSelector;