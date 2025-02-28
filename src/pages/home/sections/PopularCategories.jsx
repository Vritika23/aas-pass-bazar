import React from 'react';
import { ArrowRight, ShoppingBag, Utensils, Scissors, Palette, Gift, Leaf } from 'lucide-react';

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Handicrafts',
      description: 'Handmade local artisan crafts',
      icon: <Palette size={24} />,
      color: 'bg-amber-100 text-amber-800',
      border: 'border-amber-200',
      count: 245
    },
    {
      id: 2,
      name: 'Local Foods',
      description: 'Traditional & regional cuisine',
      icon: <Utensils size={24} />,
      color: 'bg-red-100 text-red-800',
      border: 'border-red-200',
      count: 189
    },
    {
      id: 3,
      name: 'Textiles',
      description: 'Handwoven fabrics & garments',
      icon: <Scissors size={24} />,
      color: 'bg-blue-100 text-blue-800',
      border: 'border-blue-200',
      count: 156
    },
    {
      id: 4,
      name: 'Organic Products',
      description: 'Locally-sourced natural goods',
      icon: <Leaf size={24} />,
      color: 'bg-green-100 text-green-800',
      border: 'border-green-200',
      count: 132
    },
    {
      id: 5,
      name: 'Gift Items',
      description: 'Unique presents with local charm',
      icon: <Gift size={24} />,
      color: 'bg-purple-100 text-purple-800',
      border: 'border-purple-200',
      count: 98
    },
    {
      id: 6,
      name: 'All Categories',
      description: 'Browse our complete collection',
      icon: <ShoppingBag size={24} />,
      color: 'bg-gray-100 text-gray-800',
      border: 'border-gray-200',
      count: 1200
    }
  ];

  return (
    <div className="w-full py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Popular Categories</h2>
          <a href="/categories" className="text-indigo-600 hover:text-indigo-800 flex items-center group">
            View all categories
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <a 
              href={`/category/${category.id}`} 
              key={category.id}
              className={`p-6 rounded-lg border ${category.border} ${category.color} hover:shadow-md transition-shadow flex items-start group`}
            >
              <div className="p-3 rounded-full bg-white mr-4">
                {category.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1 flex items-center">
                  {category.name}
                  <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={16} />
                </h3>
                <p className="text-sm opacity-80 mb-2">{category.description}</p>
                <p className="text-xs font-medium">{category.count} items</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;