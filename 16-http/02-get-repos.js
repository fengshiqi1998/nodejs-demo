#!/usr/bin/node

const http = require('http'),
      url = require('url');

var address = process.argv[2] || 'https://github.com/fengshiqi1998?tab=repositories';

const options = {
  hostname: url.parse(address).hostname,
  port:url.parse(address).port,
  path:url.parse(address).pathname,
  headers:{
    'User-Agent':'01-my-curl.js'
  }
};

http.get(options,(res)=>{
  console.log(`${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
  console.log(res.headers);
  console.log();

  res.pipe(process.stdout);
});
