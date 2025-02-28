// SimilarProducts.jsx
import React from 'react';

const SimilarProducts = ({ vendorProducts, categoryProducts }) => {
  // Sample product data if not provided
  const defaultVendorProducts = [
    { id: 2, name: "Ceramic Bowl Set", price: 45.99, image: "/api/placeholder/200/200", rating: 4.7 },
    { id: 3, name: "Decorative Plate", price: 32.50, image: "/api/placeholder/200/200", rating: 4.5 },
    { id: 4, name: "Coffee Mug", price: 18.99, image: "/api/placeholder/200/200", rating: 4.8 }
  ];
  
  const defaultCategoryProducts = [
    { id: 5, name: "Modern Ceramic Vase", price: 58.99, vendor: "Modern Home", image: "/api/placeholder/200/200", rating: 4.6 },
    { id: 6, name: "Minimalist Vase", price: 49.99, vendor: "Craft House", image: "/api/placeholder/200/200", rating: 4.4 },
    { id: 7, name: "Painted Ceramic Vase", price: 62.50, vendor: "ArtisanWorks", image: "/api/placeholder/200/200", rating: 4.9 }
  ];

  // Use provided products or defaults
  const vendorProductsData = vendorProducts || defaultVendorProducts;
  const categoryProductsData = categoryProducts || defaultCategoryProducts;

  // Product card component for reuse
  const ProductCard = ({ product, showVendor = false }) => (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="p-2">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 mb-1 truncate">{product.name}</h3>
        
        {showVendor && (
          <p className="text-xs text-gray-500 mb-1">{product.vendor}</p>
        )}
        
        <div className="flex items-center mb-2">
          <div className="flex text-yellow-400 mr-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-3 h-3" fill={i < Math.floor(product.rating) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            ))}
          </div>
          <span className="text-xs text-gray-500">{product.rating}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-gray-900">${product.price}</span>
          <a 
            href={`/products/${product.id}`} 
            className="text-blue-600 text-xs hover:text-blue-800"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="my-6">
      {/* More from same vendor */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-4">More from this Vendor</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {vendorProductsData.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      {/* Similar products in category */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">Similar Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categoryProductsData.map(product => (
            <ProductCard key={product.id} product={product} showVendor={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;