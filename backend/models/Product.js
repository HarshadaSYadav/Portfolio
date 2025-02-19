const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  image_url: String,
  category: String,
  rating: Number,
  stock: Number,
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
