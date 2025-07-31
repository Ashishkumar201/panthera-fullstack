// controllers/communityController.js
const Community = require('../models/community');

// GET all communities
exports.getCommunities = async (req, res) => {
  try {
    const communities = await Community.find();
    res.json(communities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch communities' });
  }
};
