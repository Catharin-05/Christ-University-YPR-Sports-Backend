const express = require('express');
const router = express.Router();
const Attendance = require('../models/Attendance');
const User = require('../models/User');
const Player = require('../models/Player'); // Import the Player model

// Fetch players based on selected sport
router.get('/players/:sport', async (req, res) => {
  const { sport } = req.params;

  try {
    const players = await Player.find({ sport, role: 'player' }); // Query the Player collection
    res.json(players);
  } catch (error) {
    console.error('Error fetching players:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Submit attendance
router.post('/markAttendance', async (req, res) => {
  console.log('Marking attendance:', req.body);
  const { sport, startTime, endTime, players } = req.body;
  
  // Calculate total hours
  const totalHours = new Date(endTime).getHours() - new Date(startTime).getHours();

  // Create a unique attendance ID based on the date and sport
  const attendanceId = `${sport}-${new Date().toISOString().split('T')[0]}`;

  try {
    // Prepare the attendance data
    const attendanceData = {
      attendanceId,
      sport,
      date: new Date(),
      startTime,
      endTime,
      totalHours,
      players: players.map(player => ({
        playerId: player.playerId,
        status: player.status, // Status will be true (present) or false (absent)
      })),
    };

    // Save attendance to the database
    const newAttendance = new Attendance(attendanceData);
    await newAttendance.save();

    res.status(201).json({ message: 'Attendance marked successfully' });
  } catch (error) {
    console.error('Error marking attendance:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
