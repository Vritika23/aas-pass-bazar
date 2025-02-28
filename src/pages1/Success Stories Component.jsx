// SuccessStories.jsx
import React, { useState } from 'react';

const SuccessStories = () => {
  const [stories] = useState([
    {
      id: 1,
      title: "From Hobby to Business",
      author: "Emma Richardson",
      role: "Candle Maker",
      image: "/api/placeholder/80/80",
      content: "What started as a weekend hobby turned into a thriving business. Through the connections I made at community events, I was able to get my handmade candles into local shops and build a loyal customer base.",
      date: "February 15, 2025"
    },
    {
      id: 2,
      title: "Finding Unique Pieces for My Home",
      author: "James Wilson",
      role: "Community Member",
      image: "/api/placeholder/80/80",
      content: "I've furnished most of my apartment with pieces from local artisans I discovered through this community hub. Not only do I have one-of-a-kind furniture and decor, but I love knowing the stories behind each piece.",
      date: "January 28, 2025"
    },
    {
      id: 3,
      title: "Growing My Pottery Business",
      author: "Maria Sanchez",
      role: "Ceramic Artist",
      image: "/api/placeholder/80/80",
      content: "The workshops I've hosted through the community hub have connected me with dozens of students and fellow artists. My classes are now booked months in advance, and I've been able to quit my day job to pursue pottery full-time.",
      date: "December 10, 2024"
    }
  ]);

  return (
    <section id="success" className="mb-16">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-semibold mb-6">Success Stories</h2>
        <p className="text-gray-600 mb-8">Read about the experiences of both vendors and buyers in our community.</p>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map(story => (
            <div key={story.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-medium mb-3">{story.title}</h3>
                <div className="flex items-center mb-4">
                  <img 
                    src={story.image} 
                    alt={story.author} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <p className="font-medium">{story.author}</p>
                    <p className="text-gray-600 text-sm">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{story.content}</p>
                <div className="flex justify-between items-center mt-6 pt-4 border-t text-sm text-gray-500">
                  <span>{story.date}</span>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800">Read Full Story</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="mb-4 text-gray-700">Have a success story to share with our community?</p>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition-colors">
            Submit Your Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;