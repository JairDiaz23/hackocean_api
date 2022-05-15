// Load express
const express = require('express');
const app = express();

// Load body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Mongo loading file
const mongoose = require('./config/db');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// Routers
var usersRouter = require('./routes/users.routes');


app.use('/hackocean', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(err.status || 404).json({
    message: "No such route exists"
  })
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: "Error Message"
  })
});

/*
app.get('/hackocean', (req, res) =>  {
	console.log('Get web service');
	res.send('Resultado final');
});
*/

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);