import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Hand-carved Wooden Bowl',
      price: 45.00,
      image: 'https://picsum.photos/seed/meenakariearrings3/800/600',
      category: 'Handicrafts',
      region: 'Northern Highlands',
      rating: 4.8,
      reviews: 24
    },
    {
      id: 2,
      name: 'Traditional Woven Scarf',
      price: 38.50,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvAh0yVP75c37QEPHJv0g5qvlkIrNQd3_Pw&s',
      category: 'Textiles',
      region: 'Eastern Valley',
      rating: 4.7,
      reviews: 18
    },
    {
      id: 3,
      name: 'Artisanal Honey Set',
      price: 29.99,
      image: 'https://cdn.pixabay.com/photo/2021/11/03/08/24/baskets-6765014_1280.jpg',
      category: 'Local Foods',
      region: 'Southern Plains',
      rating: 4.9,
      reviews: 36
    },
    {
      id: 4,
      name: 'Hand-painted Ceramic Mug',
      price: 24.00,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgw9DlGuRUHr0cj9ONO3OepNsKBrj8W335aw&s',
      category: 'Handicrafts',
      region: 'Coastal Villages',
      rating: 4.6,
      reviews: 15
    },
    {
      id: 5,
      name: 'Organic Herbal Tea Bundle',
      price: 18.75,
      image: 'https://m.media-amazon.com/images/I/615tALgsbDS.jpg',
      category: 'Organic Products',
      region: 'Mountain Region',
      rating: 4.5,
      reviews: 27
    },
    {
      id: 6,
      name: 'Embroidered Table Runner',
      price: 52.00,
      image: 'https://t3.ftcdn.net/jpg/05/66/34/10/360_F_566341036_f2mCzWyHi9I4aMOSSiy1XUUhvEqdUKJ1.jpg',
      category: 'Home Decor',
      region: 'Central Province',
      rating: 4.7,
      reviews: 19
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <a href="/products" className="text-indigo-600 hover:text-indigo-800 flex items-center">
            View all products
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-center object-cover group-hover:opacity-75"
                />
                <div className="absolute top-2 right-2 flex space-x-2">
                  <button className="bg-white p-2 rounded-full shadow-sm hover:bg-gray-100 transition-colors">
                    <Heart size={18} className="text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    <a href={`/products/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-500">{product.category}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{product.region}</span>
                  </div>
                  <div className="flex items-center mt-1">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 15.585l-6.918 3.636 1.322-7.704L.489 7.24l7.754-1.127L10 0l2.757 6.113 7.754 1.127-5.915 5.277 1.322 7.704L10 15.585z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-sm text-gray-500">({product.reviews})</span>
                  </div>
                </div>
                <p className="text-lg font-medium text-gray-900">${product.price.toFixed(2)}</p>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md flex items-center justify-center hover:bg-indigo-700 transition-colors">
                <ShoppingCart size={18} className="mr-2" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;