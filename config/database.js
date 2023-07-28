const mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      "authSource": "admin",
      "user":"admin",
      "pass":"password"
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB, create database first:', error);
  }
};

module.exports = connectDB;