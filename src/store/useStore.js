import { create } from 'zustand';

// Sample product data with more categories
const sampleProducts = [
  // Electronics
  {
    id: '1',
    title: 'Wireless Earbuds',
    description: 'High-quality wireless earbuds with noise cancellation',
    price: 2499,
    image_url: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500',
    category: 'Electronics',
    rating: 4.5,
    stock: 50,
  },
  {
    id: '2',
    title: 'Smart Watch',
    description: 'Feature-rich smartwatch with health tracking',
    price: 3999,
    image_url: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500',
    category: 'Electronics',
    rating: 4.3,
    stock: 30,
  },
  {
    id: '3',
    title: 'Gaming Laptop',
    description: 'Powerful gaming laptop with RTX graphics',
    price: 89999,
    image_url: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500',
    category: 'Electronics',
    rating: 4.8,
    stock: 15,
  },
  {
    id: '4',
    title: '4K Smart TV',
    description: '55-inch 4K Ultra HD Smart LED TV',
    price: 45999,
    image_url: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500',
    category: 'Electronics',
    rating: 4.6,
    stock: 20,
  },
  {
    id: '5',
    title: 'DSLR Camera',
    description: 'Professional DSLR camera with 24MP sensor',
    price: 54999,
    image_url: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500',
    category: 'Electronics',
    rating: 4.7,
    stock: 25,
  },

  // Fashion
  {
    id: '6',
    title: 'Men\'s Casual Shirt',
    description: 'Cotton casual shirt for men',
    price: 1299,
    image_url: 'https://images.unsplash.com/photo-1596755094514-f87e3f96b47c?w=500',
    category: 'Fashion',
    rating: 4.2,
    stock: 100,
  },
  {
    id: '7',
    title: 'Women\'s Dress',
    description: 'Elegant floral summer dress',
    price: 1899,
    image_url: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
    category: 'Fashion',
    rating: 4.4,
    stock: 80,
  },
  {
    id: '8',
    title: 'Sports Shoes',
    description: 'Comfortable running shoes',
    price: 2999,
    image_url: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
    category: 'Fashion',
    rating: 4.6,
    stock: 60,
  },

  // Home & Furniture
  {
    id: '9',
    title: 'Sofa Set',
    description: '3-seater comfortable sofa set',
    price: 29999,
    image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500',
    category: 'Home & Furniture',
    rating: 4.5,
    stock: 10,
  },
  {
    id: '10',
    title: 'Study Table',
    description: 'Modern wooden study table',
    price: 7999,
    image_url: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500',
    category: 'Home & Furniture',
    rating: 4.3,
    stock: 25,
  },
  {
    id: '11',
    title: 'Queen Size Bed',
    description: 'Elegant queen size bed with storage',
    price: 24999,
    image_url: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?w=500',
    category: 'Home & Furniture',
    rating: 4.7,
    stock: 15,
  },

  // Beauty & Personal Care
  {
    id: '12',
    title: 'Face Cream',
    description: 'Hydrating face cream for all skin types',
    price: 599,
    image_url: 'https://images.unsplash.com/photo-1556229010-6c3f59c42d76?w=500',
    category: 'Beauty & Personal Care',
    rating: 4.4,
    stock: 200,
  },
  {
    id: '13',
    title: 'Hair Dryer',
    description: 'Professional hair dryer with multiple settings',
    price: 1999,
    image_url: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=500',
    category: 'Beauty & Personal Care',
    rating: 4.2,
    stock: 45,
  },

  // Sports & Fitness
  {
    id: '14',
    title: 'Yoga Mat',
    description: 'Anti-slip yoga mat with carrying strap',
    price: 999,
    image_url: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
    category: 'Sports & Fitness',
    rating: 4.5,
    stock: 150,
  },
  {
    id: '15',
    title: 'Dumbbells Set',
    description: '5kg pair of rubber coated dumbbells',
    price: 1499,
    image_url: 'https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=500',
    category: 'Sports & Fitness',
    rating: 4.6,
    stock: 75,
  }
];

export const useStore = create((set) => ({
  user: null,
  products: sampleProducts,
  selectedCategory: 'All',
  cart: [],
  wishlist: [],
  setUser: (user) => set({ user }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.cart.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          cart: state.cart.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      }
      return { cart: [...state.cart, item] };
    }),
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),
  addToWishlist: (item) =>
    set((state) => {
      const existingItem = state.wishlist.find((i) => i.id === item.id);
      if (existingItem) {
        toast.error('This product is already in your wishlist!');
        return state; // Don't add if already in wishlist
      }
      const updatedWishlist = [...state.wishlist, item];
      console.log('Updated Wishlist:', updatedWishlist); // Check if product is added
      return { wishlist: updatedWishlist };
    }),
  removeFromWishlist: (productId) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== productId),
    })),
  clearCart: () => set({ cart: [] }),
}));