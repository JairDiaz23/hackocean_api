// Load express
const express = require('express');
const app = express();

// Load body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

app.get('/hackocean', (req, res) =>  {
	console.log('Get web service');
	res.send('Resultado final');
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);