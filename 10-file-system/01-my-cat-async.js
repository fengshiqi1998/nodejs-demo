#!/usr/bin/node

const fs = require('fs');

var file = process.argv[2] || __filename;

fs.readFile(file,(err,data) => {
  // 回调异常处理
  if(err) {
    console.log('Sorry, Something Wrong!');
    process.exit(100);
  } else {
    console.log(data.toString('utf8'));
  }
});
