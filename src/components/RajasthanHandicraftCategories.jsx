import React, { useState } from 'react';

const RajasthanHandicraftCategories = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  
  const categories = [
    {
      id: 'textiles',
      name: 'Textiles & Fabrics',
      icon: '🧵',
      description: 'Vibrant Bandhani, Block Printing, and traditional Rajasthani textiles',
      popularItems: ['Bandhani Sarees', 'Block Print Bedsheets', 'Bagru Print Fabrics'],
      regions: ['Jaipur', 'Jodhpur', 'Barmer', 'Udaipur']
    },
    {
      id: 'pottery',
      name: 'Blue Pottery',
      icon: '🏺',
      description: 'Famous blue glazed pottery from Jaipur with Persian influences',
      popularItems: ['Blue Pottery Plates', 'Decorative Vases', 'Ceramic Tiles'],
      regions: ['Jaipur']
    },
    {
      id: 'jewelry',
      name: 'Traditional Jewelry',
      icon: '💍',
      description: 'Intricate Meenakari, Kundan, and Thewa jewelry craftsmanship',
      popularItems: ['Meenakari Earrings', 'Kundan Sets', 'Lac Bangles'],
      regions: ['Jaipur', 'Bikaner', 'Nathdwara']
    },
    {
      id: 'leather',
      name: 'Leather Crafts',
      icon: '👜',
      description: 'Authentic camel and goat leather goods with embroidery and mirror work',
      popularItems: ['Mojari Shoes', 'Embroidered Bags', 'Leather Journals'],
      regions: ['Jaisalmer', 'Bikaner', 'Jodhpur']
    },
    {
      id: 'wooden',
      name: 'Wooden Handicrafts',
      icon: '🪑',
      description: 'Intricately carved furniture and decorative items with traditional motifs',
      popularItems: ['Carved Boxes', 'Sheesham Furniture', 'Wooden Puppets'],
      regions: ['Jodhpur', 'Shekhawati']
    },
    {
      id: 'metal',
      name: 'Metal Crafts',
      icon: '⚱️',
      description: 'Brass, copper, and silver items with detailed engravings',
      popularItems: ['Brass Utensils', 'Decorative Items', 'Silver Jewelry'],
      regions: ['Jaipur', 'Jodhpur']
    },
    {
      id: 'stone',
      name: 'Marble & Stone Art',
      icon: '🗿',
      description: 'Delicate marble sculptures and inlay work from centuries-old traditions',
      popularItems: ['Marble Statues', 'Jali Work', 'Stone Inlay Tables'],
      regions: ['Jaipur', 'Makrana', 'Jaisalmer']
    },
    {
      id: 'paintings',
      name: 'Folk Paintings',
      icon: '🎨',
      description: 'Traditional Pichwai, Phad, and Miniature paintings depicting legends and myths',
      popularItems: ['Pichwai Art', 'Miniature Paintings', 'Phad Scrolls'],
      regions: ['Udaipur', 'Nathdwara', 'Jaipur']
    }
  ];

  return (
    <div className="bg-amber-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-800 mb-3">Rajasthan's Treasured Handicrafts</h2>
          <p className="text-lg text-orange-700 max-w-3xl mx-auto">
            Discover centuries-old craftsmanship passed down through generations, each piece telling a story of Rajasthan's rich cultural heritage.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {categories.map((category) => (
            <div 
              key={category.id}
              className={`cursor-pointer rounded-lg p-6 text-center transition-all ${
                activeCategory === category.id 
                  ? 'bg-orange-600 text-white shadow-lg transform scale-105' 
                  : 'bg-white hover:bg-orange-100 shadow'
              }`}
              onClick={() => setActiveCategory(category.id === activeCategory ? null : category.id)}
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-bold text-lg mb-1">{category.name}</h3>
              <p className="text-sm">
                {activeCategory === category.id ? category.description : `From ${category.regions.slice(0, 2).join(', ')}${category.regions.length > 2 ? '...' : ''}`}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Category Details */}
        {activeCategory && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-10 border-l-4 border-orange-600">
            <div className="selected-category">
              {(() => {
                const category = categories.find(c => c.id === activeCategory);
                return (
                  <div className="md:flex gap-6">
                    <div className="mb-6 md:mb-0 md:w-1/3">
                      <div className="aspect-square bg-orange-100 rounded-lg flex items-center justify-center">
                        <img 
                          src={`/api/placeholder/400/400`} 
                          alt={category.name}
                          className="rounded-lg" 
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-bold text-orange-800 mb-3">{category.name}</h3>
                      <p className="text-gray-700 mb-4">{category.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-orange-700 mb-2">Popular Items</h4>
                        <ul className="list-disc pl-5 text-gray-700">
                          {category.popularItems.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-orange-700 mb-2">Regions</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.regions.map((region, index) => (
                            <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                              {region}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <button className="mt-4 bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                        Explore {category.name}
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* Artisan Connection */}
        <div className="bg-orange-100 rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold text-orange-800 mb-3">Connect with Master Artisans</h3>
          <p className="text-orange-700 mb-4">
            Want to learn more about these crafts or request custom pieces? Our platform connects you directly with Rajasthan's skilled craftspeople.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Meet Our Artisans
          </button>
        </div>
      </div>
    </div>
  );
};

export default RajasthanHandicraftCategories;