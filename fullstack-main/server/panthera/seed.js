// seed.js
const mongoose = require('mongoose');
const fs = require('fs');
const dotenv = require('dotenv');
const Community = require('./models/community');

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB');
  importData();
}).catch((err) => console.error('❌ MongoDB connection error:', err));

// Seed function
async function importData() {
  try {
    const jsonData = fs.readFileSync('./data/lennarData.json', 'utf-8');
    const data = JSON.parse(jsonData);

    await Community.deleteMany(); // Optional: clear old data
    await Community.insertMany(data);

    console.log('🌱 Data imported successfully');
    process.exit();
  } catch (error) {
    console.error('❌ Error while seeding:', error);
    process.exit(1);
  }
}
