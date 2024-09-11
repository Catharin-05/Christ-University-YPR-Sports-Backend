const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');  // Use bcrypt to hash and compare passwords
const User = require('../models/User');

// Function to handle login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });

    // Check if user exists and role is 'coach'
    if (!user || user.role !== 'coach') {
      return res.status(401).json({ message: 'Invalid credentials or not authorized' });
    }

    // Compare password using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, username: user.username, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    // Respond with token
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


