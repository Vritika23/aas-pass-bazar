import React, { useState } from 'react';

const VisualProductGrid = ({ products }) => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  // Sample products data if none provided
  const sampleProducts = products || [
    { id: 1, name: 'Premium Coffee Beans', price: '$24.99', image: '/api/placeholder/300/300', rating: 4.8 },
    { id: 2, name: 'Handcrafted Mug', price: '$18.50', image: '/api/placeholder/300/300', rating: 4.6 },
    { id: 3, name: 'Organic Tea Sampler', price: '$22.00', image: '/api/placeholder/300/300', rating: 4.7 },
    { id: 4, name: 'Artisan Chocolate Box', price: '$29.99', image: '/api/placeholder/300/300', rating: 4.9 },
    { id: 5, name: 'Spice Collection', price: '$32.50', image: '/api/placeholder/300/300', rating: 4.5 },
    { id: 6, name: 'Wooden Serving Board', price: '$45.00', image: '/api/placeholder/300/300', rating: 4.8 }
  ];

  const handleQuickView = (product) => {
    setQuickViewProduct(product);
  };

  const closeQuickView = () => {
    setQuickViewProduct(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Discover Our Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <div key={product.id} className="group relative bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative pb-3/4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="absolute h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-700 mt-1">{product.price}</p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
              </div>
            </div>
            
            <button
              onClick={() => handleQuickView(product)}
              className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Quick View
            </button>
          </div>
        ))}
      </div>
      
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-screen overflow-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">{quickViewProduct.name}</h3>
              <button onClick={closeQuickView} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2">
                <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full rounded-lg" />
              </div>
              
              <div className="md:w-1/2">
                <p className="text-2xl font-bold text-gray-800 mb-4">{quickViewProduct.price}</p>
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`w-5 h-5 ${i < Math.floor(quickViewProduct.rating) ? 'fill-current' : 'fill-gray-300'}`} viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 ml-2">{quickViewProduct.rating} Rating</span>
                </div>
                
                <p className="text-gray-600 mb-6">
                  This is a detailed description of the product. It highlights the key features, materials, 
                  and benefits of the product to help customers make an informed purchase decision.
                </p>
                
                <div className="space-y-4">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300">
                    Add to Cart
                  </button>
                  <button className="w-full border border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-2 px-4 rounded-lg transition duration-300">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisualProductGrid;