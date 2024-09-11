const express = require('express');
const router = express.Router();
const coachController = require('../controllers/coachController');

// Coach routes
router.get('/home', coachController.getHome);
router.get('/attendance', coachController.getAttendance);
router.get('/competitions', coachController.getCompetitions);

module.exports = router;
