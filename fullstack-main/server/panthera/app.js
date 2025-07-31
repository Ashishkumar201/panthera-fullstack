// app.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use('/api/listings', require('./routes/listings'));
app.use('/api/communities', require('./routes/communities'));

module.exports = app;
