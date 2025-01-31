const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboaredController');
const {isLoggedIn} = require('../middleware/checkAuth')

//list your routes
router.get('/dashboard', isLoggedIn, dashboardController.dashboard);


module.exports = router;