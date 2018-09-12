#!/usr/bin/node


function longTask() {
  var n = 0
  for(var i=0;i<10000;i++) {
    for(var j=0;j<10000;j++) {
      n = n + i*j;
    }
  }

  return n;
}

console.time('TEST');
longTask();
console.timeEnd('TEST');
