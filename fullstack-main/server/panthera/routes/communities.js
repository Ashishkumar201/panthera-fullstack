// routes/communities.js
const express = require('express');
const router = express.Router();
const { getCommunities } = require('../controllers/communitycontroller');

router.get('/', getCommunities);

module.exports = router;
