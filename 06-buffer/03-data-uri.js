#!/usr/bin/node

const http = require('http'),
      fs = require('fs');
var fileName = process.argv[2];
var buf = fs.readFileSync(fileName);
var dataURI = 'data:image/png;base64,' + buf.toString('base64');
var html = '<!DOCTYPE html><html><head><title>hello world</title></head><body><h1>hello world</h1><img src = "'+ dataURI +'"></body></html>';
http.createServer((req,res)=> {
  //res.end('<!DOCTYPE html><html><head><title>hello world</title></head><body><h1>hello world</h1><img src = "'+ dataURI +'"></body></html>');
  res.end(html);
}).listen(8080);
