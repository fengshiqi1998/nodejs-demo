#!/usr/bin/node

const cp = require('child_process');

cp.execFile('./02-child.js',(err,out)=>{
  if(err) {
    console.err(err.message);
    process.exit(100);
  }// exec会在运行15秒之后将所有的结果全部输出

  console.log(out);
});
