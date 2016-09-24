var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
	console.log('Server listening on port 3000...');
})