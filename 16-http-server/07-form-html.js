#!/usr/bin/node

const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const log = console.log;

var items = [];

http.createServer((req,res) => {
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
      log(list);
      if(list.item !== '') items.push(list.item);
      showPage(req,res);
    });
  } else {
    res.statusCode = 404;
    res.end('Error!');
  }
}).listen(8080);

function showPage(req,res) {
  var html = fs.readFileSync('todo-list-template.html').toString('utf8');
  
  var content = items.map(function(item){ return '<li>' + item + '</li>'; }).join('\n');
  log(content);
  html = html.replace('%',content);
  res.end(html);
}
