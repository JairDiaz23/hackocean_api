const Multimedia = require('../models/multimedia');

const getMultimediaById = async (req, res) => {
	  Multimedia.find({}, function(err, result) {
	    if (err) {
	      res.send(err);
	    } else {
	      res.send(result);
	    }
	});
}

module.exports = {
	getMultimediaById
}