#!/usr/bin/node

/*
console.log('argv length:',process.argv.length);
for(var i=0;i<process.argv.length;i++) {
  console.log(`${i} argv: ${process.argv[i]}`);
}
*/

console.log('%s = %d',process.argv[2],eval(process.argv[2]));
