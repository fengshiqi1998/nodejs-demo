#!/usr/bin/node

const http = require('http');
const url = require('url');
const qs = require('querystring');
const log = console.log;

var items = [];

http.createServer((req,res) => {
  /*
  if(req.url !== '/') {
    res.statusCode = 404;
    res.end('Error!');
  } esle if(req.method !== 'POST') {

  }
  */
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  if(url.parse(req.url).pathname == '/' && req.method == 'GET') {
    showPage(req,res);
  } else if(req.url === '/' && req.method === 'POST'){
    var data='';
    req.on('data',(chunk) => {
      data +=chunk;
    });
    req.on('end',()=>{
      var list = qs.parse(data);

      if(list.item != '') items.push(list.item);
      showPage(req,res);
    });
  } else {
    res.statusCode = 404;
    res.end('Error!');
  }
}).listen(8080);

function showPage(req,res) {
  var html = ''
        +'<!DOCTYPE html>'
        +'<html lang="en">'
        +'<head>'
          +'<meta charset="UTF-8">'
          +'<title>Todo List</title>'
        +'</head>'
        +'<body>'
          +'<h1>Todo List</h1>'
          +'<form method="POST" action="/">'
            +'<input type="text" name="item">'
            +'<input type="submit" value="Add Item">'
          +'</form>'
          +'<ul>'
          +items.map(function(item){ return '<li>' + item + '</li>'; }).join('\n')
          +'</ul>'
        +'</body>'
        +'</html>';
  res.end(html);
}
