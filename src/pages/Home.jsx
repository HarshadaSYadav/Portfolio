import React, { useState, useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { useStore } from '../store/useStore';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CATEGORIES = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Furniture',
  'Beauty & Personal Care',
  'Sports & Fitness',
];

const BANNER_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200',
    title: 'Special Offers',
    description: 'Up to 50% off on selected items',
  },
  {
    url: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=1200',
    title: 'New Electronics',
    description: 'Latest gadgets and devices',
  },
  {
    url: 'https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?w=1200',
    title: 'Fashion Sale',
    description: 'Trendy collections at best prices',
  },
];

export function Home() {
  const { products, selectedCategory, setSelectedCategory } = useStore();
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BANNER_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % BANNER_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + BANNER_IMAGES.length) % BANNER_IMAGES.length);
  };

  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      {/* Categories */}
      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8 overflow-x-auto pb-4">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm md:text-base rounded-md whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-white shadow-sm hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Image Slider */}
      <div className="relative mb-8 rounded-lg overflow-hidden shadow-lg h-[250px] sm:h-[300px] md:h-[400px]">
        {BANNER_IMAGES.map((banner, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={banner.url}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
              <div className="p-4 sm:p-8 text-white max-w-2xl h-full flex flex-col justify-center">
                <h2 className="text-xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4">
                  {banner.title}
                </h2>
                <p className="text-sm sm:text-lg md:text-2xl mb-4 sm:mb-8">
                  {banner.description}
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 sm:px-8 sm:py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors w-fit">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronLeft size={20} sm:size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 p-1 sm:p-2 rounded-full hover:bg-white transition-colors"
        >
          <ChevronRight size={20} sm:size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 sm:space-x-2">
          {BANNER_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Category Title */}
      <h2 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-6">
        {selectedCategory === 'All' ? 'All Products' : selectedCategory}
        <span className="text-gray-500 text-sm sm:text-lg ml-2">
          ({filteredProducts.length} items)
        </span>
      </h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
