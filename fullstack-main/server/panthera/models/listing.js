// models/Listing.js
const mongoose = require('mongoose');

const listingSchema = new mongoose.Schema({
  mpc: String,
  community: String,
  city: String,
  state: String,
  zipcode: String,
  latitude: Number,
  longitude: Number,
  planUrl: String,
  homesite: String,
  price: Number,
  sqft: Number
}, { timestamps: true });

module.exports = mongoose.model('Listing', listingSchema);
