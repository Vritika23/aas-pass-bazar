import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* Background pattern */}
      <div className="hidden sm:block sm:absolute sm:inset-0">
        <svg className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/4" width="404" height="404" fill="none" viewBox="0 0 404 404">
          <defs>
            <pattern id="pattern-squares" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="rgba(79, 70, 229, 0.1)" />
            </pattern>
          </defs>
          <rect width="404" height="404" fill="url(#pattern-squares)" />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block">Discover Authentic</span>
              <span className="block text-indigo-600">Regional Treasures</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Explore a curated collection of handcrafted products from local artisans. From traditional handicrafts to regional delicacies, find authentic items that celebrate heritage and craftsmanship.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-3 justify-center lg:justify-start">
                <a href="/products" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  Shop Now
                </a>
                <a href="/regions" className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Explore Regions <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img 
                  className="w-full" 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsu8Yds4EV11uebrpPFc3KRa8O6YDFwC-iTA&s" 
                  alt="Collection of regional handicrafts" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    type="button" 
                    className="flex items-center justify-center bg-white rounded-full p-2 text-indigo-500 hover:text-indigo-600 hover:bg-gray-100 transition-colors"
                  >
                    <span className="sr-only">View featured products</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;