#!/usr/bin/node

const cp = require('child_process');

console.log('I am child process. PID:',process.pid);

process.send('Child process is start! PID:' + process.pid);

process.on('message',(msg)=>{
  console.log('message from father:',msg);
});
