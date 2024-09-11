const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Student routes
router.get('/home', studentController.getHome);
router.get('/attendance', studentController.getAttendance);

module.exports = router;
