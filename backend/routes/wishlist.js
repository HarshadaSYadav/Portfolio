const express = require('express');
const User = require('../models/User');
const Product = require('../models/Product');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Middleware to authenticate user
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).send('Invalid token');
  }
};

// Add to wishlist
router.post('/add', authenticate, async (req, res) => {
  const { productId } = req.body;
  const user = await User.findById(req.user);
  const product = await Product.findById(productId);

  if (!product) return res.status(404).send('Product not found');
  if (user.wishlist.includes(productId)) return res.status(400).send('Product already in wishlist');

  user.wishlist.push(productId);
  await user.save();
  res.status(200).send('Product added to wishlist');
});

// Remove from wishlist
router.delete('/remove', authenticate, async (req, res) => {
  const { productId } = req.body;
  const user = await User.findById(req.user);

  user.wishlist = user.wishlist.filter(item => item.toString() !== productId);
  await user.save();
  res.status(200).send('Product removed from wishlist');
});

module.exports = router;
