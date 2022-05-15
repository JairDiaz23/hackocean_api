const Disaster = require('../models/disaster');

const insertDisasterRecord = async (req, res) => {
	  Disaster.create(req.body, function(err, result) {
	    if (err) {
	      res.send(err);
	    } else {
	      res.send(result);
	    }
	});
}

const findAll = async (req, res) => {
	  Disaster.find({}, function(err, result) {
	    if (err) {
	      res.send(err);
	    } else {
	      res.send(result);
	    }
	});
}


module.exports = {
	insertDisasterRecord,
	findAll
}
