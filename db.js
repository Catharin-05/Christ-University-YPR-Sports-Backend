const mongoose = require('mongoose');
require('dotenv').config(); // Ensure this is at the top

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI; // Use the correct environment variable name
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in the .env file');
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

