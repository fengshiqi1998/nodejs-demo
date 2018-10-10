#!/usr/bin/node
// 流的操作
const fs = require('fs');

var file = process.argv[2] || __filename;

var src = fs.createReadStream(file);
// 订阅事件
src.on('error',(err) => {
  console.error(err.message);
  process.exit(1);
});

src.on('open', function() {// 箭头函数时this指向全局global，function方法this指向调用函数的window
  this.pipe(process.stdout);
});
/*
fs.createReadStream(file).pipe(process.stdout);
process.on()
*/
