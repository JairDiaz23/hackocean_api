const express = require('express');
const multimediaControllers = require('../controllers/multimedia.controller');
const disasterControllers = require('../controllers/disaster.controller');

const router = express.Router(); 

router.get('/multimedia', multimediaControllers.getMultimediaById); 
router.get('/disaster', disasterControllers.findAll); 
router.post('/disaster', disasterControllers.insertDisasterRecord); 

module.exports = router