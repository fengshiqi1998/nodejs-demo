#!/usr/bin/node

const stdin = process.stdin;
stdin.resume();
stdin.setEncoding('utf8');


stdin.on('data',(data)=>{
  process.stdout.write(data.toUpperCase());
});

global.setTimeout(()=>{
  stdin.removeAllListeners();
},3000);

stdin.on('end',()=>{
  process.exit();
});


//stdin.pipe(process.stdout);
