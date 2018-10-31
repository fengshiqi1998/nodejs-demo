#!/usr/bin/node

//console.log(process.argv.length);
//console.log(process.argv);
var argv = process.argv;
var arr = [];
if(argv.length>3) {
  for(let i=0;i<argv.length-2;i++) {
    arr[i] = argv[i+2];
  }
}else if(argv.length>2) {
  arr = argv[2].split(',');
}


trans(arr);
function trans(arr) {
  for(let i=0;i<arr.length;i++) {
    arr[i] = eval(arr[i]);
  }
}
function entropy(arr) {
  var sum=0;
  for(let i=0;i<arr.length;i++) {
    sum += -arr[i]*Math.log(arr[i])/Math.log(2);
  }
  return sum.toFixed(3);
}
console.log(arr);
console.log(entropy(arr),' bit');

