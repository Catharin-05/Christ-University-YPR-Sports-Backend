const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

// Admin routes
router.get('/home', adminController.getHome);
router.get('/competitions', adminController.getCompetitions);
router.get('/manage', adminController.manage);

module.exports = router;

