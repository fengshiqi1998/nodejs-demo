#!/usr/bin/node

const http = require('http');

http.createServer((req,res)=>{
  console.log(req.headers);
  req.pipe(process.stdout);//获取请求体
}).listen(8080);
