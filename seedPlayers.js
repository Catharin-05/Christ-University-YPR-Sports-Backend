const mongoose = require('mongoose');
const Player = require('./models/Player'); // Adjust the path as necessary
require('dotenv').config(); // Load environment variables from .env

mongoose.set('debug', true); // Enable Mongoose debugging

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected for seeding...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process with failure
  }
};

const seedPlayers = [
  {
    playerId: new mongoose.Types.ObjectId(),
    playerName: 'John Doe',
    sport: 'football',
    sportId: new mongoose.Types.ObjectId(),
    role: 'player',
    attendedHours: 10,
    competitionsParticipated: ['Championship 2024', 'Summer League'],
    pointsAllotted: 15,
  },
  {
    playerId: new mongoose.Types.ObjectId(),
    playerName: 'Jane Smith',
    sport: 'basketball',
    sportId: new mongoose.Types.ObjectId(),
    role: 'player',
    attendedHours: 8,
    competitionsParticipated: ['Winter Cup'],
    pointsAllotted: 12,
  },
  // Add more players as needed...
];

const seedDB = async () => {
  try {
    console.log('Seeding data...');
    await Player.deleteMany(); // Clear the existing data (optional)
    console.log('Old data cleared.');
    
    await Player.insertMany(seedPlayers); // Insert new seed data
    console.log('Players seeded successfully!');
  } catch (err) {
    console.error('Error seeding players:', err);
  } finally {
    mongoose.connection.close(); // Close the connection after seeding
    console.log('Database connection closed.');
  }
};

connectDB().then(seedDB);

