#!/usr/bin/node

const cp = require('child_process');

console.log('I am father process. PID:',process.pid);

var cmd = cp.spawn('./02-child.js',[],{detached: true,stdio: ['ignore', 1, 2]});// 默认的配置为attach,需要添加第二个参数键值对detached为true，另外对子进程的io安排

//cmd.stdout.pipe(process.stdout);

global.setTimeout(()=>{
  console.log('I am father process,goodbye!');
  process.exit();
},6000);
