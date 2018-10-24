#!/usr/bin/node

const http = require('http'),
      path = require('path'),
      fs = require('fs'),
      util = require('util'),
      log = util.debuglog('wd');
var file;// request file in URL

http.createServer((req,res)=>{
  log(req.headers);
  log();
  log(req.url);
  log();

  file = path.join(__dirname,req.url);
  log(file);
/*
  try{
    res.end(fs.readFileSync(file).toString('utf8'));
  }catch(err){
    res.end(err.message);
  }
*/
  

  var read = fs.createReadStream(file);
  read.on('error',(err)=>{
    res.end(err.message);
    return;
  });
  read.pipe(res);

}).listen(8080);
