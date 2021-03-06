var express = require('express');
var fs = require('fs');

var app = express();
var index = fs.readFileSync('index.html', 'utf8');

app.use('/css', express.static(__dirname + '/css'));

app.get('/', function(request, response) {
	response.set('Content-Type', 'text/html');
	response.send(index);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});