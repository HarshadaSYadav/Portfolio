import React from 'react';
import { useStore } from '../store/useStore';
import { Heart, ShoppingCart, ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

export function Wishlist() {
  const { wishlist, removeFromWishlist, addToCart, user } = useStore();

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    toast.success('Added to cart!');
  };

  if (!user) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center bg-white rounded-lg shadow-sm p-16 max-w-2xl mx-auto">
          <Heart size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please login to view your wishlist</h2>
          <p className="text-gray-600 mb-8">Your wishlist is waiting for you!</p>
          <Link 
            to="/login" 
            className="inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Login Now
          </Link>
        </div>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center bg-white rounded-lg shadow-sm p-16 max-w-2xl mx-auto">
          <Heart size={64} className="mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8">Save items you love in your wishlist!</p>
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft size={20} className="mr-2" />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-blue-50 mb-8 p-4 rounded-lg">
        <h1 className="text-2xl font-bold text-blue-900">My Wishlist ({wishlist.length} items)</h1>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {wishlist.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all">
            <div className="relative">
              <img
                src={product.image_url}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
              <button
                onClick={() => removeFromWishlist(product.id)}
                className="absolute top-2 right-2 p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors"
              >
                <Heart size={20} className="fill-current" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
                <div className="flex items-center bg-green-50 px-2 py-1 rounded">
                  <span className="text-sm text-yellow-500">★</span>
                  <span className="text-sm ml-1 text-green-700">{product.rating}</span>
                </div>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors flex items-center justify-center"
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}