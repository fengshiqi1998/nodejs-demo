#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2] || __filename;

var fid = fs.openSync(file,'r');

var len = fs.statSync(file).size;//size字节数，len长度
var buf = new Buffer(len);
fs.readSync(fid,buf,0,len);
console.log(buf.toString('utf8'));

fs.closeSync(fid);
