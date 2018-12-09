const express = require('express');
const app = express();

app.get('/',function(req,res) {
  res.end('hello world!');
});

function c1(req,res,next) {
  console.log('c1');
}

function c2(req,res,next) {
  console.log('c2');
}

app.get('/abc',[c1,c2],function(req,res,next) {
  console.log('abc');
  next();
},(req,res) => {
  console.log('def');
  res.end('OK!');
});

app.listen(8080);
