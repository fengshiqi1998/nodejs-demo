#!/usr/bin/node

const http = require('http'),
      url = require('url'),
      log = console.log;

var addr = 'http://www.sian.com/';

function getOption(addr) {
  var options = url.parse(addr);
  options.headers = {'user-Agent':'curl/7.0'};

  return options;
}

function getURL(opt) {
  http.get(opt,(res)=>{
    log(`HTTP/${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    log(res.headers);
    log('');
    if(res.statusCode > 300 && res.statusCode < 400) {
      var newAddr = res.headers['location'];
      getURL(getOption(newAddr));
    } else {
      res.pipe(process.stdout);
    }
  });
}

getURL(getOption(addr));
