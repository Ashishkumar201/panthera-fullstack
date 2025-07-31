// routes/listings.js
const express = require('express');
const router = express.Router();
const { getListings } = require('../controllers/listingcontroller');

router.get('/', getListings);

module.exports = router;
