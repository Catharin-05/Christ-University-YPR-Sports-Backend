const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['faculty', 'coach', 'player', 'admin'], required: true }
});

module.exports = mongoose.model('User', UserSchema);
