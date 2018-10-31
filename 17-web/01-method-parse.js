#!/usr/bin/node

const http = require('http');

http.createServer((req,res) => {
  console.log(req.method);
  switch(req.method) {
    case 'GET':
      select(req,res);
      break;

    case 'POST':
      add(req,res);
      break;

    case 'PUT':
      update(req,res);
      break;

    case 'DELETE':
      remove(req,res);
      break;

    default:
      res.end('error!');
  }
  res.end('OK!');
}).listen(8080);

function select(req,res) {
  res.end(req.method);
}

function remove(req,res) {
  res.end(req.method);
}

function add(req,res) {
  res.end(req.method);
}

function update(req,res) {
  res.end(req.method);
}
