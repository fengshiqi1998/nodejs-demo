#!/usr/bin/node

var http = require('http');

http.createServer(function(req,res) {
  console.log(req.headers);
  res.end('hello world');
}).listen(8080);
