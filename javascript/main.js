#! /usr/bin/env nodejs
var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
  }).listen(8080, 'localhost');

console.log('Server running at http://localhost:8080/');