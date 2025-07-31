// models/Community.js
const mongoose = require('mongoose');

const communitySchema = new mongoose.Schema({
  mpc: String,
  mpcUrl: String,
  community: String,
  sold: Number,
  total: Number,
  city: String,
  state: String,
  zipcode: String,
  latitude: Number,
  longitude: Number
}, { timestamps: true });

module.exports = mongoose.model('Community', communitySchema);
