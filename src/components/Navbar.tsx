import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search } from 'lucide-react';
import { useStore } from '../store/useStore';

export function Navbar() {
  const { user, cart } = useStore();

  return (
    <nav className="bg-blue-500 text-white py-4 px-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-4xl font-bold">Flipkart</Link>
        
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-full py-2 px-4 rounded-md text-gray-800 focus:outline-none"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        <div className="flex items-center space-x-6">
          {user ? (
            <Link to="/profile" className="flex items-center">
              <User size={20} className="mr-1" />
              <span>Profile</span>
            </Link>
          ) : (
            <Link to="/login" className="flex items-center">
              <User size={20} className="mr-1" />
              <span>Login</span>
            </Link>
          )}
          
          <Link to="/wishlist" className="flex items-center">
            <Heart size={20} className="mr-1" />
            <span>Wishlist</span>
          </Link>
          
          <Link to="/cart" className="flex items-center">
            <div className="relative">
              <ShoppingCart size={20} className="mr-1" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-blue-500 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  {cart.length}
                </span>
              )}
            </div>
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}