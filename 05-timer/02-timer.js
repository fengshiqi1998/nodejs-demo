#!/usr/bin/node

console.log('start...');

var timerID = global.setInterval(loop,500);
var count = 0;
function loop() {
  console.log('I will loop forever');
  if(++count == 10) {
    global.clearInterval(timerID);
    console.log('end');
  }
}

/*
global.setTimeout(()=>{
  global.clearInterval(timerID);
  console.log('end');
},3000);
*/
