import { useEffect, useState } from 'react';

// Dummy data for vendors
const vendorData = [
  {
    id: 1,
    name: "Sunrise Bakery",
    location: "New York",
    specialization: "Food",
    domain: "Bakery",
    rating: 4.8,
    reviews: 156,
    contact: "info@sunrisebakery.com",
    description: "Artisanal bakery specializing in sourdough breads and pastries."
  },
  {
    id: 2,
    name: "Green Thumb Nursery",
    location: "San Francisco",
    specialization: "Home & Garden",
    domain: "Plants",
    rating: 4.6,
    reviews: 89,
    contact: "hello@greenthumb.com",
    description: "Wide selection of indoor and outdoor plants with expert advice."
  },
  {
    id: 3,
    name: "Tech Solutions",
    location: "Seattle",
    specialization: "Technology",
    domain: "IT Services",
    rating: 4.9,
    reviews: 212,
    contact: "support@techsolutions.com",
    description: "Professional IT services for small businesses and startups."
  },
  {
    id: 4,
    name: "Coastal Seafood",
    location: "Boston",
    specialization: "Food",
    domain: "Seafood",
    rating: 4.7,
    reviews: 178,
    contact: "orders@coastalseafood.com",
    description: "Fresh seafood delivered daily from local fishermen."
  },
  {
    id: 5,
    name: "Urban Threads",
    location: "Los Angeles",
    specialization: "Fashion",
    domain: "Clothing",
    rating: 4.5,
    reviews: 145,
    contact: "shop@urbanthreads.com",
    description: "Boutique clothing store featuring local designers and sustainable fashion."
  },
  {
    id: 6,
    name: "Mountain Gear",
    location: "Denver",
    specialization: "Outdoors",
    domain: "Equipment",
    rating: 4.8,
    reviews: 203,
    contact: "info@mountaingear.com",
    description: "High-quality outdoor equipment for hiking, camping, and mountaineering."
  },
  {
    id: 7,
    name: "Comfort Homes",
    location: "Chicago",
    specialization: "Home & Garden",
    domain: "Furniture",
    rating: 4.4,
    reviews: 98,
    contact: "sales@comforthomes.com",
    description: "Contemporary and classic furniture for every room in your home."
  },
  {
    id: 8,
    name: "Cloud Computing Partners",
    location: "Seattle",
    specialization: "Technology",
    domain: "Cloud Services",
    rating: 4.9,
    reviews: 167,
    contact: "info@cloudcomputing.com",
    description: "Expert cloud migration and management services for businesses of all sizes."
  }
];

// Extract unique filter options
const locations = [...new Set(vendorData.map(vendor => vendor.location))];
const specializations = [...new Set(vendorData.map(vendor => vendor.specialization))];
const domains = [...new Set(vendorData.map(vendor => vendor.domain))];

const VendorSearch = () => {
  const [filters, setFilters] = useState({
    location: '',
    specialization: '',
    domain: '',
    searchQuery: ''
  });
  
  // Apply filters to vendor data
  const filteredVendors = vendorData.filter(vendor => {
    return (
      (filters.location === '' || vendor.location === filters.location) &&
      (filters.specialization === '' || vendor.specialization === filters.specialization) &&
      (filters.domain === '' || vendor.domain === filters.domain) &&
      (filters.searchQuery === '' || 
        vendor.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
        vendor.description.toLowerCase().includes(filters.searchQuery.toLowerCase()))
    );
  });

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle search input
  const handleSearchChange = (e) => {
    setFilters(prev => ({
      ...prev,
      searchQuery: e.target.value
    }));
  };
  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

const showLocation = async () => {
    try {
        const position = await getCurrentLocation();
        console.log("Latitude:", position.coords.latitude);
        console.log("Longitude:", position.coords.longitude);

    } catch (error) {
        console.error("Error getting location:", error.message);
    }
};

useEffect(()=>{
    showLocation();
})


  // Reset all filters
  const resetFilters = () => {
    setFilters({
      location: '',
      specialization: '',
      domain: '',
      searchQuery: ''
    });
  };

  const handleContact=()=>{
    window.open("tel:+919352005086")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Find Local Vendors</h1>
          <p className="mt-2 text-blue-100">Discover top-rated businesses in your area</p>
        </div>
      </header>

      {/* Search and Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search vendors..."
                className="w-full py-3 px-4 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                value={filters.searchQuery}
                onChange={handleSearchChange}
              />
              <svg className="absolute right-3 top-3 h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Dropdown Filters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select
                name="location"
                value={filters.location}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Specialization Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
              <select
                name="specialization"
                value={filters.specialization}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Specializations</option>
                {specializations.map(spec => (
                  <option key={spec} value={spec}>{spec}</option>
                ))}
              </select>
            </div>

            {/* Domain Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Domain</label>
              <select
                name="domain"
                value={filters.domain}
                onChange={handleFilterChange}
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Domains</option>
                {domains.map(domain => (
                  <option key={domain} value={domain}>{domain}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Reset Filters Button */}
          <div className="flex justify-end">
            <button
              onClick={resetFilters}
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
            >
              <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset Filters
            </button>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-4 text-gray-600">
          Showing {filteredVendors.length} vendors
        </div>

        {/* Vendors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVendors.map(vendor => (
            <div key={vendor.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <div className="h-48 overflow-hidden">
             
                <img 
                src='https://i.pinimg.com/736x/22/49/83/224983d373821db2e71320582c0129e0.jpg'
                //   src={`https://source.unsplash.com/random/600x400/?${encodeURIComponent(vendor.domain.toLowerCase())}`}
                  alt={vendor.name}
                  className="w-full h-full object-cover object-top transition duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{vendor.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{vendor.domain}</span>
                </div>
                <p className="text-sm text-gray-500 mb-3">
                  <span className="inline-flex items-center mr-3">
                    <svg className="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {vendor.location}
                  </span>
                  <span className="inline-flex items-center">
                    <svg className="h-4 w-4 text-gray-400 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    {vendor.specialization}
                  </span>
                </p>
                <p className="text-gray-600 mb-4 text-sm">{vendor.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="font-medium">{vendor.rating}</span>
                    <span className="text-gray-400 text-sm ml-1">({vendor.reviews} reviews)</span>
                  </div>
                  <button onClick={handleContact} className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredVendors.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No vendors found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search filters or try a different search term.</p>
            <div className="mt-6">
              <button 
                onClick={resetFilters} 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Local Vendor Directory</h2>
              <p className="text-gray-400 text-sm mt-1">Find the best local businesses in your area</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">About</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Contact</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition">Terms</a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
            © 2025 Local Vendor Directory. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VendorSearch;