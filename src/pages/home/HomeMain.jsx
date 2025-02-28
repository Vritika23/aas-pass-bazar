import React from 'react';
import HeroSection from './sections/HeroSection';
import FeaturedProducts from './sections/FeaturedProducts';
import PopularCategories from './sections/PopularCategories';
import RegionExplorer from './sections/RegionExplorer';

const HomeMain = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturedProducts />
      <PopularCategories />
      <RegionExplorer />
    </div>
  );
};

export default HomeMain;