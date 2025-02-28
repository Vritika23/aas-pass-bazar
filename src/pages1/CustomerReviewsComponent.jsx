// CustomerReviews.jsx
import React, { useState } from 'react';

const CustomerReviews = ({ reviews, averageRating, totalReviews }) => {
  const [sortOption, setSortOption] = useState('newest');
  
  // Sample review data if not provided
  const defaultReviews = [
    {
      id: 1,
      userName: "Maria L.",
      rating: 5,
      date: "2023-12-15",
      title: "Beautiful craftsmanship",
      comment: "This vase exceeded my expectations. The details are incredible and it's obvious that it's handmade with care. It's become the centerpiece of my dining room.",
      helpful: 12,
      images: ["/api/placeholder/100/100"]
    },
    {
      id: 2,
      userName: "Thomas K.",
      rating: 4,
      date: "2023-11-30",
      title: "Lovely piece with minor imperfections",
      comment: "The vase is beautiful and exactly as described. The only reason I'm giving 4 stars instead of 5 is because there was a small chip on the rim. Still, it adds character and I'm very happy with my purchase.",
      helpful: 8,
      images: []
    },
    {
      id: 3,
      userName: "Sarah J.",
      rating: 5,
      date: "2023-11-15",
      title: "Shipped quickly and packed well",
      comment: "Not only is the vase gorgeous, but I was impressed with how carefully it was packed. Excellent service and a wonderful product.",
      helpful: 5,
      images: ["/api/placeholder/100/100", "/api/placeholder/100/100"]
    }
  ];

  // Default rating stats
  const defaultAverageRating = 4.7;
  const defaultTotalReviews = 42;
  
  // Calculate rating distribution
  const calculateRatingDistribution = (reviewsArray) => {
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviewsArray.forEach(review => {
      distribution[review.rating] += 1;
    });
    return distribution;
  };

  // Use provided data or defaults
  const reviewsData = reviews || defaultReviews;
  const avgRating = averageRating || defaultAverageRating;
  const reviewCount = totalReviews || defaultTotalReviews;
  const ratingDistribution = calculateRatingDistribution(reviewsData);

  // Sort reviews based on selected option
  const sortedReviews = [...reviewsData].sort((a, b) => {
    if (sortOption === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === 'highest') {
      return b.rating - a.rating;
    } else if (sortOption === 'lowest') {
      return a.rating - b.rating;
    } else if (sortOption === 'helpful') {
      return b.helpful - a.helpful;
    }
    return 0;
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden my-6 p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Customer Reviews</h2>
      
      <div className="md:flex">
        {/* Rating Summary */}
        <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
          <div className="flex items-center mb-4">
            <div className="text-3xl font-bold text-gray-900 mr-2">{avgRating.toFixed(1)}</div>
            <div>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill={i < Math.floor(avgRating) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm text-gray-500">{reviewCount} reviews</div>
            </div>
          </div>
          
          {/* Rating Distribution */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map(rating => (
              <div key={rating} className="flex items-center">
                <div className="w-8 text-sm text-gray-600">{rating} ★</div>
                <div className="flex-1 mx-2">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-yellow-400 h-2 rounded-full" 
                      style={{ width: `${(ratingDistribution[rating] / reviewCount) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-8 text-xs text-gray-500 text-right">
                  {ratingDistribution[rating]}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <a 
              href="#write-review" 
              className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
            >
              Write a Review
            </a>
          </div>
        </div>
        
        {/* Reviews List */}
        <div className="md:w-2/3">
          <div className="flex justify-end mb-4">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 border border-gray-300 rounded-md text-sm"
            >
              <option value="newest">Newest</option>
              <option value="highest">Highest Rated</option>
              <option value="lowest">Lowest Rated</option>
              <option value="helpful">Most Helpful</option>
            </select>
          </div>
          
          <div className="space-y-6">
            {sortedReviews.map(review => (
              <div key={review.id} className="border-b pb-6">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-medium text-gray-800">{review.userName}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                  </div>
                  
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" fill={i < review.rating ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                <h3 className="font-medium text-gray-800 mt-2">{review.title}</h3>
                <p className="text-gray-600 mt-1">{review.comment}</p>
                
                {review.images.length > 0 && (
                  <div className="flex mt-3 space-x-2">
                    {review.images.map((img, index) => (
                      <img 
                        key={index} 
                        src={img} 
                        alt={`Review by ${review.userName}`} 
                        className="w-16 h-16 object-cover rounded"
                      />
                    ))}
                  </div>
                )}
                
                <div className="mt-3 flex items-center text-sm">
                  <button className="text-gray-500 hover:text-gray-700 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                    </svg>
                    <span>Helpful ({review.helpful})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {reviewCount > reviewsData.length && (
            <div className="mt-6 text-center">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-50">
                Load More Reviews
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;