const mongoose = require('mongoose');
require('dotenv').config(); // Ensure this is at the top

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI; // Use the correct environment variable name
    if (!uri) {
      throw new Error('MONGODB_URI is not defined in the .env file');
    }

    // MongoDB v4.x.x no longer requires useNewUrlParser and useUnifiedTopology
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;

