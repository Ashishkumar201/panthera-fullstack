const path = require('path');
const fs = require('fs');

const getListings = (req, res) => {
  const dataPath = path.join(__dirname, '../data/lennarData.json');

  try {
    const rawData = fs.readFileSync(dataPath);
    const rawJson = JSON.parse(rawData);


    const formatted = rawJson.data.map((item) => {
  const cleanPrice = parseFloat(item["Homesite Price"]) || 0;
  const cleanSqft = parseFloat(item["Homesite Sq.Ft."]) || 1;

  return {
    community: item["Community"] || "N/A",
    homesite: item["Homesite ID"] || "N/A",
    price: cleanPrice,
    sqft: cleanSqft
  };
});

  

    res.status(200).json(formatted);
  } catch (error) {
    console.error('Error reading listings data:', error);
    res.status(500).json({ message: 'Failed to fetch listings' });
  }
};

module.exports = {
  getListings,
};

