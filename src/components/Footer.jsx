import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">AasPaasBaazar</h3>
            <p className="mb-4 text-white">
              Connecting you with authentic Rajasthan handicrafts from local artisans. Supporting traditional crafts and sustainable livelihoods.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Explore Crafts</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-600 transition-colors">Blue Pottery</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Bandhani Textiles</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Leather Crafts</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Marble Sculptures</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Wooden Handicrafts</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Lac Jewelry</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Artisan Stories</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Become a Seller</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">Return Policy</a></li>
              <li><a href="#" className="hover:text-amber-600 transition-colors">FAQs</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 flex-shrink-0 mt-1" size={18} />
                <span>1234 Craft Lane, Jaipur, Rajasthan, India - 302001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <span>hello@aaspaasbaazar.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-amber-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white">
              &copy; {new Date().getFullYear()} AasPaasBaazar. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-amber-600 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;