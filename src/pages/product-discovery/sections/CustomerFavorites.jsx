import React, { useState, useEffect } from 'react';

const CustomerFavorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetch - replace with your actual API call
    const fetchFavorites = async () => {
      try {
        // Replace with actual API endpoint
        // const response = await fetch('/api/customer-favorites');
        // const data = await response.json();
        
        // Sample data - replace with actual API response
        const data = [
          {
            id: 1,
            name: "Premium Wireless Headphones",
            category: "Electronics",
            rating: 4.8,
            price: 129.99,
            image: "/api/placeholder/200/200",
            reviews: 342
          },
          {
            id: 2,
            name: "Organic Cotton T-Shirt",
            category: "Apparel",
            rating: 4.7,
            price: 24.99,
            image: "/api/placeholder/200/200",
            reviews: 187
          },
          {
            id: 3,
            name: "Smart Home Assistant",
            category: "Electronics",
            rating: 4.9,
            price: 99.99,
            image: "/api/placeholder/200/200",
            reviews: 563
          },
          {
            id: 4,
            name: "Stainless Steel Water Bottle",
            category: "Home & Kitchen",
            rating: 4.6,
            price: 34.99,
            image: "/api/placeholder/200/200",
            reviews: 275
          }
        ];
        
        setFavorites(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching customer favorites:", error);
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400">
            {i < fullStars ? (
              "★"
            ) : i === fullStars && hasHalfStar ? (
              "★"
            ) : (
              "☆"
            )}
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Customer Favorites</h2>
        <p className="text-center text-gray-600 mb-10">
          Our most loved products with the highest ratings across categories
        </p>
        
        {loading ? (
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {favorites.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-yellow-400 text-white px-2 py-1 m-2 rounded-md font-semibold">
                    Top Rated
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-sm text-gray-500">{product.category}</span>
                  <h3 className="font-semibold text-lg mt-1">{product.name}</h3>
                  <div className="flex items-center mt-2">
                    {renderStars(product.rating)}
                    <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="font-bold text-lg">${product.price}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-10 text-center">
          <a href="/all-favorites" className="inline-block px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition-colors">
            View All Customer Favorites
          </a>
        </div>
      </div>
    </section>
  );
};

export default CustomerFavorites;