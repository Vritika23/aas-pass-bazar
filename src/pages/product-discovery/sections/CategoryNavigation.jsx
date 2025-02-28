import React, { useState, useEffect } from 'react';
import RajasthanHandicraftCategories from '../../../components/RajasthanHandicraftCategories';
import { useNavigate } from 'react-router-dom';


export const rajasthanHandicrafts = [
    {
      id: 1,
      name: "Jaipur Blue Pottery Vase",
      category: "pottery",
      subCategory: "Blue Pottery",
      price: 1200,
      rating: 4.7,
      region: "jaipur",
      features: ["handmade", "traditional"],
      image: "https://picsum.photos/seed/pottery/800/600",
      description: "Handcrafted blue pottery vase with traditional floral motifs, made using the centuries-old technique of Jaipur."
    },
    {
      id: 2,
      name: "Bandhani Silk Dupatta",
      category: "textiles",
      subCategory: "Bandhani",
      price: 850,
      rating: 4.5,
      region: "jodhpur",
      features: ["handmade", "traditional", "artisansupport"],
      image: "https://picsum.photos/seed/bandhanidupatta2/800/600",
      description: "Vibrant tie-dye silk dupatta featuring traditional Bandhani patterns from Western Rajasthan."
    },
    {
      id: 3,
      name: "Meenakari Gold-Plated Earrings",
      category: "jewelry",
      subCategory: "Meenakari",
      price: 2500,
      rating: 4.8,
      region: "jaipur",
      features: ["handmade", "traditional", "giftready"],
      image: "https://picsum.photos/seed/meenakariearrings3/800/600",
      description: "Gold-plated earrings adorned with intricate Meenakari enamel work in vibrant traditional colors."
    },
    {
      id: 4,
      name: "Wooden Carved Console Table",
      category: "furniture",
      subCategory: "Wooden Furniture",
      price: 12500,
      rating: 4.6,
      region: "jodhpur",
      features: ["handmade", "traditional"],
      image: "https://picsum.photos/seed/woodentable4/800/600",
      description: "Hand-carved Sheesham wood console table featuring traditional Rajasthani motifs and brass accents."
    },
    {
      id: 5,
      name: "Miniature Painting - Royal Court Scene",
      category: "paintings",
      subCategory: "Miniature Paintings",
      price: 3500,
      rating: 4.9,
      region: "udaipur",
      features: ["handmade", "traditional", "artisansupport"],
      image: "https://picsum.photos/seed/miniaturepainting5/800/600",
      description: "Detailed miniature painting depicting a royal court scene, created using natural pigments and fine brushwork."
    },
    {
      id: 6,
      name: "Leather Mojari Shoes",
      category: "leather",
      subCategory: "Mojari Shoes",
      price: 1800,
      rating: 4.4,
      region: "jaipur",
      features: ["handmade", "traditional"],
      image: "https://picsum.photos/seed/mojarishoes6/800/600",
      description: "Handcrafted traditional leather Mojari shoes with embroidered details and comfortable fit."
    },
    {
      id: 7,
      name: "Sanganer Block Print Bedsheet",
      category: "textiles",
      subCategory: "Block Prints",
      price: 1500,
      rating: 4.6,
      region: "jaipur",
      features: ["handmade", "traditional", "artisansupport"],
      image: "https://picsum.photos/seed/blockprintbedsheet7/800/600",
      description: "Cotton king-size bedsheet with traditional Sanganer block prints in vegetable dyes."
    },
    {
      id: 8,
      name: "Terracotta Wall Hanging Plates",
      category: "pottery",
      subCategory: "Terracotta",
      price: 650,
      rating: 4.3,
      region: "bikaner",
      features: ["handmade", "traditional", "giftready"],
      image: "https://picsum.photos/seed/terracottaplates8/800/600",
      description: "Set of 3 decorative terracotta plates with traditional motifs for wall decoration."
    },
    {
      id: 9,
      name: "Silver Filigree Necklace",
      category: "jewelry",
      subCategory: "Silver Jewelry",
      price: 4800,
      rating: 4.7,
      region: "jaisalmer",
      features: ["handmade", "traditional", "giftready"],
      image: "https://picsum.photos/seed/silvernecklace9/800/600",
      description: "Intricate silver filigree necklace with tribal-inspired design and traditional craftsmanship."
    },
    {
      id: 10,
      name: "Embroidered Camel Leather Bag",
      category: "leather",
      subCategory: "Bags",
      price: 2200,
      rating: 4.5,
      region: "jaisalmer",
      features: ["handmade", "traditional", "artisansupport"],
      image: "https://picsum.photos/seed/leatherbag10/800/600",
      description: "Genuine camel leather bag with colorful thread embroidery and traditional mirror work."
    },
    {
      id: 11,
      name: "Marble Inlay Tea Coasters",
      category: "pottery",
      subCategory: "Marble Inlay",
      price: 1200,
      rating: 4.8,
      region: "jaipur",
      features: ["handmade", "traditional", "giftready"],
      image: "https://picsum.photos/seed/marblecoasters11/800/600",
      description: "Set of 6 marble coasters with intricate floral inlay work inspired by Taj Mahal designs."
    },
    {
      id: 12,
      name: "Phad Painting Scroll",
      category: "paintings",
      subCategory: "Phad Paintings",
      price: 2800,
      rating: 4.6,
      region: "udaipur",
      features: ["handmade", "traditional", "artisansupport"],
      image: "https://picsum.photos/seed/phadpainting12/800/600",
      description: "Traditional scroll painting depicting folk tales and legends of Rajasthan in vibrant colors."
    },
    {
      id: 13,
      name: "Lac Bangles Set",
      category: "jewelry",
      subCategory: "Lac Jewelry",
      price: 450,
      rating: 4.2,
      region: "jaipur",
      features: ["handmade", "traditional", "giftready"],
      image: "https://picsum.photos/seed/lacbangles13/800/600",
      description: "Set of 6 colorful lac bangles with mirror and beadwork in assorted designs."
    },
    {
      id: 14,
      name: "Wooden Jharokha Mirror Frame",
      category: "furniture",
      subCategory: "Wall Hangings",
      price: 3500,
      rating: 4.7,
      region: "jodhpur",
      features: ["handmade", "traditional"],
      image: "https://picsum.photos/seed/jharokhamirror14/800/600",
      description: "Ornate wooden jharokha-style mirror frame with intricate hand carving and traditional design."
    },
    {
      id: 15,
      name: "Dhurrie Cotton Rug - 4x6 ft",
      category: "textiles",
      subCategory: "Carpets & Dhurries",
      price: 2200,
      rating: 4.5,
      region: "jodhpur",
      features: ["handmade", "traditional", "artisansupport"],
      image: "https://picsum.photos/seed/dhurrierug15/800/600",
      description: "Handwoven cotton dhurrie with geometric patterns in earthy tones traditional to Rajasthan."
    },
    {
      id: 16,
      name: "Pichwai Painting - Krishna Theme",
      category: "paintings",
      subCategory: "Pichwai Paintings",
      price: 8500,
      rating: 4.9,
      region: "udaipur",
      features: ["handmade", "traditional", "artisansupport"],
      image: "https://picsum.photos/seed/pichwaipainting16/800/600",
      description: "Detailed Pichwai painting depicting Krishna with cows, created with natural colors on cotton fabric."
    },
    {
      id: 17,
      name: "Metal Jali Work Lantern",
      category: "furniture",
      subCategory: "Metal Crafts",
      price: 1800,
      rating: 4.4,
      region: "jaipur",
      features: ["handmade", "traditional", "giftready"],
      image: "https://picsum.photos/seed/metallantern17/800/600",
      description: "Handcrafted brass lantern with intricate jali (lattice) work and antique finish."
    },
    {
      id: 18,
      name: "Kota Doria Saree",
      category: "textiles",
      subCategory: "Block Prints",
      price: 4500,
      rating: 4.8,
      region: "jaipur",
      features: ["handmade", "traditional", "artisansupport"],
      image: "https://picsum.photos/seed/kotasaree18/800/600",
      description: "Lightweight Kota Doria cotton-silk blend saree with traditional block printing in natural dyes."
    },
    {
      id: 19,
      name: "Thewa Art Pendant Set",
      category: "jewelry",
      subCategory: "Thewa Art",
      price: 6500,
      rating: 4.7,
      region: "jaipur",
      features: ["handmade", "traditional", "giftready"],
      image: "https://picsum.photos/seed/thewapendant19/800/600",
      description: "Gold pendant with Thewa art - intricate gold work on colored glass, with matching earrings."
    },
    {
      id: 20,
      name: "Clay Wind Chimes",
      category: "pottery",
      subCategory: "Clay Pottery",
      price: 380,
      rating: 4.1,
      region: "bikaner",
      features: ["handmade", "traditional", "giftready"],
      image: "https://picsum.photos/seed/claywindchimes20/800/600",
      description: "Handpainted terracotta wind chimes with traditional Rajasthani motifs and bell attachments."
    }
  ];

const CategoryNavigation = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [activeFilters, setActiveFilters] = useState({});
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('relevance');

  const navigate=useNavigate()
  
  // Sample categories for Rajasthan handicrafts
  const categories = [
    { id: 'all', name: 'All Handicrafts' },
    { id: 'textiles', name: 'Textiles & Fabrics', 
      subCategories: ['Bandhani', 'Block Prints', 'Embroidery', 'Quilts (Razai)', 'Carpets & Dhurries'] },
    { id: 'pottery', name: 'Pottery & Ceramics',
      subCategories: ['Blue Pottery', 'Terracotta', 'Marble Inlay', 'Clay Pottery'] },
    { id: 'jewelry', name: 'Jewelry & Ornaments',
      subCategories: ['Kundan', 'Meenakari', 'Silver Jewelry', 'Lac Jewelry', 'Thewa Art'] },
    { id: 'furniture', name: 'Furniture & Decor',
      subCategories: ['Wooden Furniture', 'Marble Items', 'Metal Crafts', 'Wall Hangings'] },
    { id: 'paintings', name: 'Paintings & Art',
      subCategories: ['Miniature Paintings', 'Phad Paintings', 'Mandana Art', 'Pichwai Paintings'] },
    { id: 'leather', name: 'Leather Products',
      subCategories: ['Mojari Shoes', 'Bags', 'Accessories', 'Camel Leather Items'] }
  ];
  
  // Sample filters for Rajasthan handicrafts
  const filters = {
    price: [
      { id: 'under500', name: 'Under ₹500' },
      { id: '500to1500', name: '₹500 to ₹1,500' },
      { id: '1500to5000', name: '₹1,500 to ₹5,000' },
      { id: 'over5000', name: 'Over ₹5,000' }
    ],
    region: [
      { id: 'jaipur', name: 'Jaipur' },
      { id: 'jodhpur', name: 'Jodhpur' },
      { id: 'udaipur', name: 'Udaipur' },
      { id: 'bikaner', name: 'Bikaner' },
      { id: 'jaisalmer', name: 'Jaisalmer' }
    ],
    rating: [
      { id: '4plus', name: '4+ Stars' },
      { id: '3plus', name: '3+ Stars' }
    ],
    features: [
      { id: 'handmade', name: 'Handmade' },
      { id: 'traditional', name: 'Traditional Techniques' },
      { id: 'giftready', name: 'Gift Ready' },
      { id: 'artisansupport', name: 'Supports Artisans' }
    ]
  };
  
  // Sample product data for Rajasthan handicrafts
  

  // Apply filters and sorting to products
  useEffect(() => {
    let result = [...rajasthanHandicrafts];
    
    // Filter by category
    if (activeCategory !== 'all') {
      result = result.filter(product => product.category === activeCategory);
    }
    
    // Filter by subcategory if selected
    if (activeSubCategory) {
      result = result.filter(product => product.subCategory === activeSubCategory);
    }
    
    // Apply active filters
    Object.entries(activeFilters).forEach(([filterType, selectedIds]) => {
      if (selectedIds.length > 0) {
        switch (filterType) {
          case 'price':
            result = result.filter(product => {
              return selectedIds.some(id => {
                if (id === 'under500') return product.price < 500;
                if (id === '500to1500') return product.price >= 500 && product.price <= 1500;
                if (id === '1500to5000') return product.price > 1500 && product.price <= 5000;
                if (id === 'over5000') return product.price > 5000;
                return false;
              });
            });
            break;
          case 'region':
            result = result.filter(product => 
              selectedIds.includes(product.region)
            );
            break;
          case 'rating':
            result = result.filter(product => {
              return selectedIds.some(id => {
                if (id === '4plus') return product.rating >= 4;
                if (id === '3plus') return product.rating >= 3;
                return false;
              });
            });
            break;
          case 'features':
            result = result.filter(product => 
              selectedIds.some(id => product.features.includes(id))
            );
            break;
        }
      }
    });
    
    // Apply sorting
    if (sortOption === 'priceLow') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'priceHigh') {
      result.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }
    
    setFilteredProducts(result);
  }, [activeCategory, activeSubCategory, activeFilters, sortOption]);
  
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setActiveSubCategory(null);
  };
  
  const handleSubCategoryChange = (subCategory) => {
    setActiveSubCategory(activeSubCategory === subCategory ? null : subCategory);
  };
  
  const toggleFilter = (type, filterId) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (!newFilters[type]) {
        newFilters[type] = [];
      }
      
      if (newFilters[type].includes(filterId)) {
        newFilters[type] = newFilters[type].filter(id => id !== filterId);
        if (newFilters[type].length === 0) {
          delete newFilters[type];
        }
      } else {
        newFilters[type] = [...newFilters[type], filterId];
      }
      
      return newFilters;
    });
  };
  
  const clearAllFilters = () => {
    setActiveFilters({});
    setActiveSubCategory(null);
  };
  
  // Get active category
  const currentCategory = categories.find(cat => cat.id === activeCategory);

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-6">Rajasthan Handicraft Collection</h2>
      
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => handleCategoryChange(category.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === category.id
                ? 'bg-amber-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-medium">Filters</h3>
            {(Object.keys(activeFilters).length > 0 || activeSubCategory) && (
              <button 
                onClick={clearAllFilters}
                className="text-sm text-amber-600 hover:text-amber-800"
              >
                Clear All
              </button>
            )}
          </div>
          
          {/* Subcategories if available */}
          {currentCategory && currentCategory.subCategories && (
            <div className="border-b pb-4">
              <h4 className="font-medium mb-2">Sub-Categories</h4>
              <div className="space-y-2">
                {currentCategory.subCategories.map(sub => (
                  <label key={sub} className="flex items-center">
                    <input 
                      type="checkbox" 
                      checked={activeSubCategory === sub}
                      onChange={() => handleSubCategoryChange(sub)}
                      className="rounded text-amber-600 mr-2" 
                    />
                    <span className="text-gray-700">{sub}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
          
          {/* Filter sections */}
          {Object.entries(filters).map(([filterType, filterOptions]) => (
            <div key={filterType} className="border-b pb-4">
              <h4 className="font-medium mb-2 capitalize">{filterType}</h4>
              <div className="space-y-2">
                {filterOptions.map(option => (
                  <label key={option.id} className="flex items-center">
                    <input 
                      type="checkbox" 
                      checked={activeFilters[filterType]?.includes(option.id) || false}
                      onChange={() => toggleFilter(filterType, option.id)}
                      className="rounded text-amber-600 mr-2" 
                    />
                    <span className="text-gray-700">{option.name}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Main content area with products */}
        <div className="lg:col-span-3">
          <div className="bg-white p-4 rounded-lg shadow-sm mb-4 flex justify-between items-center">
            <div>
              <span className="font-medium">Current Category:</span> {currentCategory.name}
              {activeSubCategory && ` › ${activeSubCategory}`}
            </div>
            <div className="flex items-center space-x-4">
              <label className="flex items-center text-sm">
                <span className="mr-2">Sort by:</span>
                <select 
                  className="border rounded-md p-1"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="relevance">Relevance</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </label>
            </div>
          </div>
          
          {/* Active filters display */}
          {(Object.keys(activeFilters).length > 0 || activeSubCategory) && (
            <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
              <div className="flex flex-wrap gap-2">
                {activeSubCategory && (
                  <div className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                    <span className="mr-1">Subcategory:</span> {activeSubCategory}
                    <button 
                      onClick={() => setActiveSubCategory(null)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                )}
                {Object.entries(activeFilters).map(([type, selectedIds]) => 
                  selectedIds.map(id => {
                    const filterName = filters[type].find(f => f.id === id)?.name;
                    return (
                      <div key={`${type}-${id}`} className="bg-gray-100 px-3 py-1 rounded-full flex items-center text-sm">
                        <span className="capitalize mr-1">{type}:</span> {filterName}
                        <button 
                          onClick={() => toggleFilter(type, id)}
                          className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}
          
          {/* Product grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.length > 0 ? (
  filteredProducts.map(product => (
    <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="h-48 bg-gray-200 relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://picsum.photos/seed/fallback/800/600";
            e.target.alt = "Image could not be loaded";
          }}
        />
      </div> 
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <p className="text-gray-600 text-sm my-1">{product.subCategory}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-bold text-amber-600">₹{product.price}</span>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-sm ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1">
                      {product.features.map(feature => (
                        <span key={feature} className="px-2 py-1 bg-amber-50 text-amber-800 text-xs rounded-full">
                          {filters.features.find(f => f.id === feature)?.name}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <button onClick={()=>navigate(`/product/${product.id}`)} className="w-full bg-amber-600 text-white py-2 rounded-md hover:bg-amber-700 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No products found</h3>
                <p className="mt-1 text-gray-500">Try changing your filters or selecting a different category.</p>
                <button 
                  onClick={clearAllFilters}
                  className="mt-4 text-amber-600 hover:text-amber-800"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryNavigation;