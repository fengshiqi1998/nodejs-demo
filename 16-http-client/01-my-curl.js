#!/usr/bin/node

const http = require('http'),
      url = require('url');

var address = process.argv[2] || 'http://sample.wangding.in/web/one-div.html';
console.log('URL:',address);
address = global.encodeURI(address);
console.log('encodeURL:',address);

const options = {
  hostname: url.parse(address).hostname,
  port:url.parse(address).port,
  path:url.parse(address).pathname,
  headers:{
    'User-Agent':'01-my-curl.js'
    //'User-Agent':'curl/7.0'
  }
};

http.get(options,(res)=>{
  console.log(`${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);// 起始行
  console.log(res.headers);// 响应头
  console.log();

  res.pipe(process.stdout);// 获取响应体
});
