const express = require('express');
const multimediaControllers = require('../controllers/multimedia.controller');
const router = express.Router(); 

router.get('/multimedia', multimediaControllers.getMultimediaById); 

module.exports = router