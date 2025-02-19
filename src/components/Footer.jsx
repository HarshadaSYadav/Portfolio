import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, CreditCard, Shield, Truck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-700">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ABOUT</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Corporate Information</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HELP</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Payments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Cancellation & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Policy Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">POLICY</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms Of Use</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-400">
                <Mail size={20} className="mr-2" />
                support@shopify.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={20} className="mr-2" />
                1800-000-000
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin size={20} className="mr-2" />
                123 Commerce St, NY
              </li>
            </ul>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-b border-gray-700">
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Truck size={24} className="text-yellow-500" />
            <span className="text-gray-400">Free Shipping</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <Shield size={24} className="text-yellow-500" />
            <span className="text-gray-400">Secure Payments</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <CreditCard size={24} className="text-yellow-500" />
            <span className="text-gray-400">Easy Returns</span>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Youtube size={24} />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Shopify. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}