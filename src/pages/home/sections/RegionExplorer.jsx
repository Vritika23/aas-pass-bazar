import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const RegionExplorer = () => {
  const [activeRegion, setActiveRegion] = useState(null);
  
  const regions = [
    {
      id: 1,
      name: 'Northern Highlands',
      description: 'Known for traditional wooden crafts and woolen textiles.',
      specialty: 'Hand-carved wooden items',
      mapPosition: { top: '15%', left: '30%' },
      products: ['Wooden Bowls', 'Carved Figurines', 'Wool Blankets']
    },
    {
      id: 2,
      name: 'Eastern Valley',
      description: 'Famous for its vibrant textiles and intricate weaving patterns.',
      specialty: 'Traditional woven fabrics',
      mapPosition: { top: '35%', left: '70%' },
      products: ['Embroidered Scarves', 'Tapestries', 'Traditional Garments']
    },
    {
      id: 3,
      name: 'Southern Plains',
      description: 'Rich agricultural region producing unique food specialties.',
      specialty: 'Organic honey and preserves',
      mapPosition: { top: '75%', left: '40%' },
      products: ['Artisanal Honey', 'Fruit Preserves', 'Herbal Teas']
    },
    {
      id: 4,
      name: 'Coastal Villages',
      description: 'Seaside communities known for pottery and ceramic art.',
      specialty: 'Hand-painted ceramics',
      mapPosition: { top: '60%', left: '80%' },
      products: ['Ceramic Plates', 'Decorative Vases', 'Coffee Mugs']
    },
    {
      id: 5,
      name: 'Central Province',
      description: 'Cultural hub with diverse crafts and artistic traditions.',
      specialty: 'Mixed media art and home décor',
      mapPosition: { top: '45%', left: '45%' },
      products: ['Table Runners', 'Wall Art', 'Decorative Baskets']
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore Regions</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            Discover unique products from different regions, each with their own distinct cultural heritage and craftsmanship.
          </p>
        </div>

        <div className="">
          <div className="col-span-2 relative h-96 bg-gray-100 rounded-lg overflow-hidden">
            {/* This would be a map in a real application */}
            <div className="w-full h-full bg-indigo-50 relative">
              {/* Map placeholder */}
              <img 
                src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" 
                alt="Region map" 
                className="w-full h-full object-cover mx-auto"
              />
              
              {/* Region pins */}
              {regions.map((region) => (
                <button
                  key={region.id}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                    activeRegion === region.id ? 'text-indigo-600 scale-125' : 'text-indigo-500 hover:text-indigo-600'
                  } transition-all duration-200`}
                  style={{ top: region.mapPosition.top, left: region.mapPosition.left }}
                  onClick={() => setActiveRegion(region.id)}
                >
                  <MapPin size={activeRegion === region.id ? 32 : 28} />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium bg-white px-2 py-1 rounded shadow">
                    {region.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              {activeRegion ? (
                <div className="p-6">
                  {regions
                    .filter((region) => region.id === activeRegion)
                    .map((region) => (
                      <div key={region.id}>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{region.name}</h3>
                        <p className="text-gray-600 mb-4">{region.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                            Regional Specialty
                          </h4>
                          <p className="text-indigo-600 font-medium">{region.specialty}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                            Popular Products
                          </h4>
                          <ul className="space-y-2">
                            {region.products.map((product, index) => (
                              <li key={index} className="flex items-center">
                                <span className="h-2 w-2 bg-indigo-400 rounded-full mr-2"></span>
                                <span>{product}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="mt-6">
                          <a 
                            href={`/regions/${region.id}`}
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                          >
                            Explore {region.name} Products
                          </a>
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                null
                // <div className="p-6 text-center">
                //   {/* <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
                //   <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Region</h3>
                //   <p className="text-gray-500">
                //     Click on a pin on the map to learn about the region and its unique products.
                //   </p> */}
                // </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionExplorer;