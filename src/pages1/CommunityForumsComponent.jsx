// CommunityForums.jsx
import React, { useState } from 'react';

const CommunityForums = () => {
  const [forums] = useState([
    {
      id: 1,
      title: "Handmade Jewelry Techniques",
      author: "SilverArtisan",
      replies: 24,
      views: 342,
      lastActivity: "2 hours ago",
      link: 'https://whatsapp.com/channel/0029Vaic6PSGpLHLvRkL6v2d',
    },
    {
      id: 2,
      title: "Where to source sustainable materials?",
      author: "EcoCreator",
      replies: 18,
      views: 205,
      lastActivity: "Yesterday",
      link: 'https://whatsapp.com/channel/0029Vaic6PSGpLHLvRkL6v2d',

    },
    {
      id: 3,
      title: "Tips for selling at farmer's markets",
      author: "MarketVendor",
      replies: 32,
      views: 456,
      lastActivity: "3 days ago",
      link: 'https://whatsapp.com/channel/0029Vaic6PSGpLHLvRkL6v2d',

    },
    {
      id: 4,
      title: "Pricing handmade goods fairly",
      author: "CraftEconomist",
      replies: 45,
      views: 612,
      lastActivity: "1 week ago",
      link: 'https://whatsapp.com/channel/0029Vaic6PSGpLHLvRkL6v2d',

    }
  ]);

  const [categories] = useState([
    "All Topics",
    "Crafting Techniques",
    "Materials & Supplies",
    "Marketing & Sales",
    "Event Discussions",
    "Community Projects"
  ]);

  return (
    <section id="forums" className="mb-16">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-3xl font-semibold mb-6">Community Forums</h2>
        <p className="text-gray-600 mb-8">Join discussions about local products, crafting techniques, and community initiatives.</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`px-4 py-2 rounded-full text-sm ${index === 0 ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="text-left p-3 border-b">Topic</th>
                <th className="text-left p-3 border-b">Author</th>
                <th className="text-center p-3 border-b">Replies</th>
                <th className="text-center p-3 border-b">Views</th>
                <th className="text-left p-3 border-b">Last Activity</th>
              </tr>
            </thead>
            <tbody>
              {forums.map(forum => (
                <tr key={forum.id} className="hover:bg-gray-50">
                  <td className="p-3 border-b">
                    <a href={forum.link} className="text-indigo-600 hover:text-indigo-800 font-medium">{forum.title}</a>
                  </td>
                  <td className="p-3 border-b">{forum.author}</td>
                  <td className="p-3 border-b text-center">{forum.replies}</td>
                  <td className="p-3 border-b text-center">{forum.views}</td>
                  <td className="p-3 border-b">{forum.lastActivity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 flex justify-between items-center">
          <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            Start New Discussion
          </button>
          <button className="border border-indigo-600 text-indigo-600 px-6 py-2 rounded hover:bg-indigo-50 transition-colors">
            View All Topics
          </button>
        </div>
      </div>
    </section>
  );
};

export default CommunityForums;