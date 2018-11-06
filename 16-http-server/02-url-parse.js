#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      qs = require('querystring');
      log = console.log;

var addr = 'http://wangding:123@www.baidu.com:8080/a/b/c?name=wangding&gender=M#/d/e/f';

log('url:',addr);
log('protocol:',url.parse(addr).protocol);
log('auth:',url.parse(addr).auth);

http.createServer((req,res) => {
  log('url:',req.url);
  log('pathname:',url.parse(req.url));
  log('query:',url.parse(req.url).query);
  log('querystring:',url.parse(req.url).qs);
    res.end('OK!');
}).listen(8080);


