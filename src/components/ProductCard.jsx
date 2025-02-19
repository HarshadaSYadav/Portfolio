import React from 'react';
import { Heart } from 'lucide-react';
import { useStore } from '../store/useStore';
import toast from 'react-hot-toast';

export function ProductCard({ product }) {
  const { addToCart, addToWishlist, user, wishlist } = useStore();
  const isInWishlist = wishlist.some(item => item.id === product.id);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity: 1 });
    toast.success('Added to cart!');
  };

  const handleAddToWishlist = () => {
    if (!user) {
      toast.error('Please login to add to wishlist');
      return;
    }

    addToWishlist(product);
    toast.success('Added to wishlist!');
  };

  return (
    <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1">
      <div className="relative">
        <img
          src={product.image_url}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <button
            onClick={handleAddToWishlist}
            className={`p-2 rounded-full ${
              isInWishlist ? 'bg-red-500 text-white' : 'bg-white hover:bg-gray-100'
            }`}
          >
            <Heart size={20} className={isInWishlist ? 'fill-current' : ''} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xl font-bold">₹{product.price.toLocaleString()}</span>
          <div className="flex items-center bg-green-50 px-2 py-1 rounded">
            <span className="text-sm text-yellow-500">★</span>
            <span className="text-sm ml-1 text-green-700">{product.rating}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
