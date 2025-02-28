import React from 'react';
import { useParams } from 'react-router-dom';
import { rajasthanHandicrafts } from './sections/CategoryNavigation';


// Dummy reviews data
const reviews = [
  {
    id: 1,
    productId: 1,
    user: "Priya Singh",
    avatar: "https://picsum.photos/seed/user1/100/100",
    rating: 5,
    date: "January 15, 2025",
    comment: "The blue pottery vase is absolutely stunning! The craftsmanship is exquisite and it's now the centerpiece of my living room."
  },
  {
    id: 2,
    productId: 1,
    user: "Rahul Verma",
    avatar: "https://picsum.photos/seed/user2/100/100",
    rating: 4,
    date: "December 3, 2024",
    comment: "Beautiful piece of art. The color is slightly lighter than shown in the picture, but still gorgeous."
  },
  {
    id: 3,
    productId: 2,
    user: "Ananya Sharma",
    avatar: "https://picsum.photos/seed/user3/100/100",
    rating: 5,
    date: "February 10, 2025",
    comment: "This Bandhani dupatta is a work of art! The colors are vibrant and the craftsmanship is exceptional."
  },
  {
    id: 4,
    productId: 2,
    user: "Vikram Patel",
    avatar: "https://picsum.photos/seed/user4/100/100",
    rating: 4,
    date: "January 28, 2025",
    comment: "Love the intricate patterns. Shipping was fast and the product was well packaged."
  }
];

// Dummy vendors data
const vendors = {
  1: {
    id: 101,
    name: "Jaipur Heritage Crafts",
    owner: "Lakshmi Devi",
    location: "Old City, Jaipur",
    established: 1987,
    rating: 4.8,
    products: 32,
    avatar: "https://picsum.photos/seed/vendor1/100/100",
    story: "Lakshmi Devi's family has been creating traditional blue pottery for five generations. Their workshop still uses techniques passed down through centuries, combining traditional craftsmanship with contemporary designs."
  },
  2: {
    id: 102,
    name: "Jodhpur Textile Collective",
    owner: "Anil Choudhary",
    location: "Sardar Market, Jodhpur",
    established: 2005,
    rating: 4.6,
    products: 48,
    avatar: "https://picsum.photos/seed/vendor2/100/100",
    story: "The Jodhpur Textile Collective brings together 15 families of traditional Bandhani artisans, ensuring fair wages and preserving ancient tie-dye techniques that have been part of Rajasthan's cultural heritage for centuries."
  }
};

// Cultural significance information
const culturalSignificance = {
  "Blue Pottery": {
    origin: "16th century, introduced via Persia",
    significance: "Jaipur Blue Pottery is one of the most recognizable craft forms of Rajasthan. The technique was brought to India by Mongol artisans, later patronized by the royal courts of Jaipur. Unlike traditional pottery, it is made from crushed quartz stone, making it unique in its composition.",
    process: "The process involves molding the quartz dough, drying, glazing with blue dye derived from oxide of cobalt, and then firing at low temperatures. Each piece takes several days to complete.",
    culturalImportance: "Blue pottery represents the cultural exchange between Persia and India, and stands as a symbol of Jaipur's royal patronage of the arts. Today, it's being revitalized through government initiatives to preserve this traditional craft."
  },
  "Bandhani": {
    origin: "Over 5,000 years old, mentioned in ancient texts",
    significance: "Bandhani is one of the oldest tie-dye techniques in India, particularly associated with Rajasthan and Gujarat. The word comes from the Sanskrit 'bandhan', meaning 'to tie'.",
    process: "The fabric is tied tightly with thread at several points to create patterns, then dyed. When the threads are removed, they reveal intricate patterns of dots where the dye couldn't penetrate.",
    culturalImportance: "Bandhani has deep cultural significance in Rajasthani traditions. Different patterns and colors have specific meanings and are worn during important life events like weddings and festivals. Red and yellow bandhani are particularly auspicious for marriage ceremonies."
  }
};

const ProductDetails = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  
  // Find the product based on the ID
  const product = rajasthanHandicrafts.find(product => product.id === productId);
  
  // If product not found
  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600">Product Not Found</h2>
          <p className="mt-2">The product you're looking for does not exist.</p>
        </div>
      </div>
    );
  }
  
  // Get the vendor for this product
  const vendor = vendors[product.id];
  
  // Get reviews for this product
  const productReviews = reviews.filter(review => review.productId === product.id);
  
  // Get cultural significance
  const culturalInfo = culturalSignificance[product.subCategory];
  
  // Function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-500">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-500">★</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">★</span>);
    }
    
    return stars;
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Product Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-96 object-cover"
          />
        </div>
        
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-4">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
                {product.category}
              </span>
              <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {product.subCategory}
              </span>
            </div>
            
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-gray-600">({product.rating})</span>
            </div>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Features:</h3>
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Region:</h3>
              <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded">
                {product.region.charAt(0).toUpperCase() + product.region.slice(1)}
              </span>
            </div>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl font-bold">₹{product.price}</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cultural Significance Section */}
      <div className="mb-12 bg-amber-50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-amber-900">Cultural Significance</h2>
        {culturalInfo && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-800">Origin</h3>
                <p className="text-gray-700">{culturalInfo.origin}</p>
                
                <h3 className="text-lg font-semibold mb-2 mt-4 text-amber-800">Traditional Process</h3>
                <p className="text-gray-700">{culturalInfo.process}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2 text-amber-800">Historical Significance</h3>
                <p className="text-gray-700">{culturalInfo.significance}</p>
                
                <h3 className="text-lg font-semibold mb-2 mt-4 text-amber-800">Cultural Importance</h3>
                <p className="text-gray-700">{culturalInfo.culturalImportance}</p>
              </div>
            </div>
          </div>
        )}
        {!culturalInfo && (
          <p className="text-gray-700">Cultural information for this product is not available.</p>
        )}
      </div>
      
      {/* Vendor Card Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">About the Artisan</h2>
        {vendor && (
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6">
            <div className="flex items-start gap-4">
              <img 
                src={vendor.avatar} 
                alt={vendor.name} 
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">{vendor.name}</h3>
                <p className="text-gray-600">Owned by {vendor.owner} since {vendor.established}</p>
                <div className="flex items-center mt-1 mb-2">
                  <div className="flex mr-2">
                    {renderStars(vendor.rating)}
                  </div>
                  <span className="text-gray-600">({vendor.rating})</span>
                </div>
                <p className="text-sm text-gray-600">
                  {vendor.products} products • Based in {vendor.location}
                </p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Artisan's Story</h4>
              <p className="text-gray-700">{vendor.story}</p>
            </div>
            <div className="mt-6">
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-2">
                View All Products
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                Contact Seller
              </button>
            </div>
          </div>
        )}
        {!vendor && (
          <p className="text-gray-700">Vendor information is not available for this product.</p>
        )}
      </div>
      
      {/* Reviews Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Customer Reviews</h2>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Write a Review
          </button>
        </div>
        
        {productReviews.length > 0 ? (
          <div className="space-y-6">
            {productReviews.map(review => (
              <div key={review.id} className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <img 
                    src={review.avatar} 
                    alt={review.user} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{review.user}</h3>
                      <span className="text-gray-600 text-sm">{review.date}</span>
                    </div>
                    <div className="flex mt-1 mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
          </div>
        )}
      </div>
      
      {/* Related Products Suggestion - Could be expanded in a real app */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">You Might Also Like</h2>
        <p className="text-gray-600">Related products would be displayed here...</p>
      </div>
    </div>
  );
};

export default ProductDetails;