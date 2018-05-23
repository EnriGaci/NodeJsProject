var http = require('http');
var fs = require('fs');
var express = require('express');
var insertionSort = require('./algorithms/Sorting/insertionSort');
var app = express();

app.use(express.static('../Front_End'));

// app.use(express.static('libs/angular'));
// app.use(express.static('libs/angular/jquery'));
// app.use(express.static('libs/bootstrap-3.3.7-dist/css'));
// app.use(express.static('libs/bootstrap-3.3.7-dist/js'));

// http.createServer(function (req, res) {
// 	fs.readFile('main.html', function(err, data) {
// 		res.writeHead(200, {'Content-Type': 'text/html'});
// 		res.write(data);
// 		res.end();
// 	});
// }).listen(8080)

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
	// console.log("Got a GET request for the homepage");
	// res.send('Hello GET');
	fs.readFile('../Front_End/main.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
	// console.log("Got a POST request for the homepage");
	// res.send('Hello POST');
	fs.readFile('main.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
	console.log("Got a DELETE request for /del_user");
	res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
	console.log("Got a GET request for /list_user");
	res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {
	console.log("Got a GET request for /ab*cd");
	res.send('Page Pattern Match');
})

var server = app.listen(8080, function () {

	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
})
