const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Import routes
const authRoute = require('./routes/auth');
const cartRoute = require('./routes/cart');
const wishlistRoute = require('./routes/wishlist');

// Routes
app.use('/api/auth', authRoute);
app.use('/api/cart', cartRoute);
app.use('/api/wishlist', wishlistRoute);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
