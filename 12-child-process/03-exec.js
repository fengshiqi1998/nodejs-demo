#!/usr/bin/node

const cp = require('child_process');

cp.exec('cat a.txt | sort | uniq',(err,out)=>{
  if(err) {
    console.error(err.message);
    process.exit(100);
  }

  console.log(out);
});
