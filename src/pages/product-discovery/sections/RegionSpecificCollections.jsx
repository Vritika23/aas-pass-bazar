import React, { useState } from 'react';

const RegionSpecificCollections = () => {
  const [activeRegion, setActiveRegion] = useState('asia');
  
  // Sample regions and countries data
  const regions = [
    {
      id: 'asia',
      name: 'Asia',
      countries: ['Japan', 'India', 'Thailand', 'Vietnam', 'Nepal'],
      description: 'Discover unique handicrafts, teas, spices, and textiles from across Asia, featuring centuries-old techniques passed down through generations.',
      image: '/api/placeholder/800/400',
      highlight: 'Hand-painted ceramics from Japan',
      featured: [
        { id: 1, name: 'Premium Matcha Green Tea', price: '$28.99', image: '/api/placeholder/200/200' },
        { id: 2, name: 'Hand-Carved Wooden Box', price: '$54.50', image: '/api/placeholder/200/200' },
        { id: 3, name: 'Silk Embroidered Scarf', price: '$38.75', image: '/api/placeholder/200/200' },
        { id: 4, name: 'Spice Collection Set', price: '$32.99', image: '/api/placeholder/200/200' }
      ]
    },
    {
      id: 'africa',
      name: 'Africa',
      countries: ['Morocco', 'Ghana', 'Kenya', 'Ethiopia', 'South Africa'],
      description: 'Explore vibrant fabrics, unique jewelry, baskets, and authentic coffee from diverse African regions, all celebrating rich cultural heritage.',
      image: '/api/placeholder/800/400',
      highlight: 'Handwoven baskets from Ghana',
      featured: [
        { id: 5, name: 'Ethiopian Coffee Beans', price: '$22.50', image: '/api/placeholder/200/200' },
        { id: 6, name: 'Moroccan Ceramic Plate', price: '$45.99', image: '/api/placeholder/200/200' },
        { id: 7, name: 'Beaded Jewelry Set', price: '$34.75', image: '/api/placeholder/200/200' },
        { id: 8, name: 'Woven Table Runner', price: '$29.99', image: '/api/placeholder/200/200' }
      ]
    },
    {
      id: 'latinamerica',
      name: 'Latin America',
      countries: ['Mexico', 'Peru', 'Brazil', 'Colombia', 'Guatemala'],
      description: 'Sample exceptional coffee, colorful textiles, handmade pottery, and unique home decor from the diverse cultures of Latin America.',
      image: '/api/placeholder/800/400',
      highlight: 'Colombian single-origin coffee',
      featured: [
        { id: 9, name: 'Peruvian Alpaca Blanket', price: '$89.99', image: '/api/placeholder/200/200' },
        { id: 10, name: 'Mexican Talavera Pottery', price: '$42.50', image: '/api/placeholder/200/200' },
        { id: 11, name: 'Colombian Coffee Set', price: '$34.99', image: '/api/placeholder/200/200' },
        { id: 12, name: 'Handwoven Panama Hat', price: '$56.75', image: '/api/placeholder/200/200' }
      ]
    },
    {
      id: 'europe',
      name: 'Europe',
      countries: ['Italy', 'France', 'Spain', 'Portugal', 'Greece'],
      description: 'Indulge in fine olive oils, artisanal cheeses, luxury linens, and handcrafted goods from Europe\'s storied traditions of craftsmanship.',
      image: '/api/placeholder/800/400',
      highlight: 'Italian olive oil collection',
      featured: [
        { id: 13, name: 'French Lavender Products', price: '$32.50', image: '/api/placeholder/200/200' },
        { id: 14, name: 'Italian Olive Oil Set', price: '$48.99', image: '/api/placeholder/200/200' },
        { id: 15, name: 'Portuguese Ceramic Tiles', price: '$36.75', image: '/api/placeholder/200/200' },
        { id: 16, name: 'Greek Honey Collection', price: '$29.99', image: '/api/placeholder/200/200' }
      ]
    },
    {
      id: 'oceania',
      name: 'Oceania',
      countries: ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea'],
      description: 'Discover unique Aboriginal art, premium wool products, natural skincare, and exotic food products from the Pacific islands and Australasia.',
      image: '/api/placeholder/800/400',
      highlight: 'New Zealand Manuka honey',
      featured: [
        { id: 17, name: 'Australian Bush Spices', price: '$26.50', image: '/api/placeholder/200/200' },
        { id: 18, name: 'Manuka Honey Skincare', price: '$42.99', image: '/api/placeholder/200/200' },
        { id: 19, name: 'Merino Wool Throw', price: '$78.50', image: '/api/placeholder/200/200' },
        { id: 20, name: 'Aboriginal Art Coasters', price: '$34.99', image: '/api/placeholder/200/200' }
      ]
    }
  ];
  
  // Get the currently active region data
  const currentRegion = regions.find(region => region.id === activeRegion);
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-2">Explore Our Regional Collections</h2>
      <p className="text-gray-600 text-center mb-8">Discover authentic products from around the world</p>
      
      {/* Region Selection Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {regions.map(region => (
          <button
            key={region.id}
            onClick={() => setActiveRegion(region.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeRegion === region.id
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
            }`}
          >
            {region.name}
          </button>
        ))}
      </div>
      
      {/* Active Region Content */}
      {currentRegion && (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Hero Banner */}
          <div className="relative">
            <img 
              src={currentRegion.image} 
              alt={`${currentRegion.name} products banner`} 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{currentRegion.name}</h3>
                <p className="max-w-2xl">{currentRegion.description}</p>
              </div>
            </div>
          </div>
          
          {/* Countries List */}
          <div className="border-b">
            <div className="px-6 py-4 flex flex-wrap gap-2">
              <span className="font-medium text-gray-700">Explore by country:</span>
              {currentRegion.countries.map(country => (
                <a 
                  key={country} 
                  href="#" 
                  className="text-blue-600 hover:text-blue-800 hover:underline"
                >
                  {country}
                </a>
              ))}
            </div>
          </div>
          
          {/* Featured Products */}
          <div className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h4 className="text-xl font-bold text-gray-800">Featured Products</h4>
                <p className="text-gray-600">Highlighting: {currentRegion.highlight}</p>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 mt-2 md:mt-0">
                View all {currentRegion.name} products →
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {currentRegion.featured.map(product => (
                <div key={product.id} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    <button className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 py-2 text-center text-gray-800 font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      Quick View
                    </button>
                  </div>
                  <h5 className="font-medium text-gray-800">{product.name}</h5>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Collections & Stories */}
          <div className="p-6 bg-gray-50">
            <h4 className="text-xl font-bold text-gray-800 mb-4">Collections & Stories</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="#" className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-40 bg-gray-200">
                  <img src="/api/placeholder/400/300" alt="Collection thumbnail" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h5 className="font-medium mb-1">{currentRegion.name}'s Finest Artisans</h5>
                  <p className="text-sm text-gray-600">Meet the craftspeople behind our products</p>
                </div>
              </a>
              <a href="#" className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-40 bg-gray-200">
                  <img src="/api/placeholder/400/300" alt="Collection thumbnail" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h5 className="font-medium mb-1">Traditional Techniques</h5>
                  <p className="text-sm text-gray-600">Ancient crafts for modern living</p>
                </div>
              </a>
              <a href="#" className="block bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="h-40 bg-gray-200">
                  <img src="/api/placeholder/400/300" alt="Collection thumbnail" className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h5 className="font-medium mb-1">Sustainable Sourcing</h5>
                  <p className="text-sm text-gray-600">How we work with local communities</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegionSpecificCollections;