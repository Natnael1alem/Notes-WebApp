const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboaredController');

//list your routes
router.get('/dashboard', dashboardController.dashboard);


module.exports = router;