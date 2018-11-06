#!/usr/bin/node

const http = require('http');

http.createServer((req,res) => {
  if(req.url === '/') {
    var html = ''
        +'<!DOCTYPE html>'
        +'<html lang="en">'
        +'<head>'
        +'<meta charset="UTF-8">'
        +'<title>helloworld</title>'
        +'</head>'
        +'<body>'
          +'<h1>Hello World!</h1>'
        +'</body>'
        +'</html>';
    /*
    res.statusCode = 200;
    res.setHeader('Content-Type:','text/html');
    */
    res.writeHead(200,{
      'Content-Type':'text/html',
      'Content-Length':Buffer.byteLength(html)
    });
    res.end(html);
  } else {
    res.statusCode = 404;
    res.end('Resource Not Found!');
  }
}).listen(8080);
