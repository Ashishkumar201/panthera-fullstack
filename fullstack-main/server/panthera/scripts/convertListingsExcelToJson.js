const xlsx = require('xlsx');
const path = require('path');
const fs = require('fs');

const excelPath = path.join(__dirname, '../data/lennarData.xlsx');

const workbook = xlsx.readFile(excelPath);

const sheets = workbook.SheetNames;

const jsonData = {};

sheets.forEach((sheetName) => {
  const sheet = workbook.Sheets[sheetName];
  jsonData[sheetName] = xlsx.utils.sheet_to_json(sheet);
});

fs.writeFileSync(
  path.join(__dirname, '../data/lennarData.json'),
  JSON.stringify(jsonData, null, 2)
);

console.log("✅ Excel converted to JSON with multiple sheets!");
