import React, { useState, useEffect } from 'react';

const NewArrivals = () => {
  const [newProducts, setNewProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    // Simulating API fetch - replace with your actual API call
    const fetchNewArrivals = async () => {
      try {
        // Replace with actual API endpoint
        // const response = await fetch('/api/new-arrivals');
        // const data = await response.json();
        
        // Sample data - replace with actual API response
        const data = [
          {
            id: 101,
            name: "Bluetooth Fitness Tracker",
            category: "Electronics",
            price: 79.99,
            image: "/api/placeholder/200/200",
            dateAdded: "2025-02-20",
            tag: "New"
          },
          {
            id: 102,
            name: "Sustainable Bamboo Cutting Board",
            category: "Kitchen",
            price: 29.99,
            image: "/api/placeholder/200/200",
            dateAdded: "2025-02-22",
            tag: "Eco-Friendly"
          },
          {
            id: 103,
            name: "Aromatherapy Essential Oil Diffuser",
            category: "Home",
            price: 45.99,
            image: "/api/placeholder/200/200",
            dateAdded: "2025-02-23",
            tag: "Wellness"
          },
          {
            id: 104,
            name: "Lightweight Running Shoes",
            category: "Footwear",
            price: 89.99,
            image: "/api/placeholder/200/200",
            dateAdded: "2025-02-25",
            tag: "Athletic"
          },
          {
            id: 105,
            name: "Portable Solar Charger",
            category: "Electronics",
            price: 59.99,
            image: "/api/placeholder/200/200",
            dateAdded: "2025-02-26",
            tag: "Eco-Friendly"
          },
          {
            id: 106,
            name: "Minimalist Leather Wallet",
            category: "Accessories",
            price: 39.99,
            image: "/api/placeholder/200/200",
            dateAdded: "2025-02-27",
            tag: "Premium"
          }
        ];
        
        setNewProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  const categories = ['all', 'electronics', 'home', 'kitchen', 'accessories', 'footwear'];
  
  const filteredProducts = activeTab === 'all' 
    ? newProducts 
    : newProducts.filter(product => 
        product.category.toLowerCase() === activeTab
      );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">New Arrivals</h2>
        <p className="text-center text-gray-600 mb-10">
          Discover our latest products added to the marketplace
        </p>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`mx-2 mb-2 px-4 py-2 rounded-full capitalize ${
                activeTab === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="group relative bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Date badge */}
                  <div className="absolute bottom-0 left-0 bg-white px-3 py-1 m-3 rounded-md text-sm font-medium">
                    Added {formatDate(product.dateAdded)}
                  </div>
                  {/* Product tag */}
                  <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 m-3 rounded-md text-sm font-medium">
                    {product.tag}
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <h3 className="font-semibold text-lg mt-1">{product.name}</h3>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold text-lg">${product.price}</span>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                {/* Quick view overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
                    Quick View
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center">
          <a href="/all-new-arrivals" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            View All New Arrivals
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;