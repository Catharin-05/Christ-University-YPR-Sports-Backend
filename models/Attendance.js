const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  attendanceId: { type: String, required: true, unique: true },
  sport: { type: String, required: true },
  date: { type: Date, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  totalHours: { type: Number, required: true },
  players: [
    {
      playerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
      status: { type: Boolean, required: true }, // True for present, False for absent
    },
  ],
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
