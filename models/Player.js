const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the User model
  playerName: { type: String, required: true },
  sport: { type: String, required: true },
  sportId: { type: mongoose.Schema.Types.ObjectId, ref: 'Sport' }, // Optional, if you have a Sport collection
  role: { type: String, default: 'player' }, // Defaults to 'player'
  attendedHours: { type: Number, default: 0 },
  competitionsParticipated: [{ type: String }], // List of competition names or IDs
  pointsAllotted: { type: Number, default: 0 },
  // Add more fields as needed...
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
