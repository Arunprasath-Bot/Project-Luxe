import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold tracking-wider uppercase mb-4">LUXE</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Curated collections of premium apparel for those who appreciate quality, craftsmanship, and timeless style.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-white">Shop</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">Men's T-Shirts</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">Women's Innerwear</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">New Arrivals</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">Sale</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">Returns</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider mb-6 text-white">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
                <span className="text-gray-400 text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gray-500" strokeWidth={1.5} />
                <span className="text-gray-400 text-sm">hello@luxe.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" strokeWidth={1.5} />
                <span className="text-gray-400 text-sm">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-xs uppercase tracking-wider">
            &copy; 2024 LUXE. All rights reserved. | 
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 mx-2">Privacy</a> | 
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 mx-2">Terms</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
