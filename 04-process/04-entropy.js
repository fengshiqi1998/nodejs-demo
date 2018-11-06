#!/usr/bin/node

//console.log(process.argv.length);
//console.log(process.argv);
var argv = process.argv;
var arr = [];
if(argv.length>3) {
  for(let i=0;i<argv.length-2;i++) {
    if(/[^0-9.]/.test(argv[2+i])) {
      console.error('请输入数字！');
      process.exit(100);
    }
    /*
    if(/,/.test(argv[i+2])) {
      console.error('请按照统一格式输入！');
      process.exit(100);
    }
    */
    arr[i] = argv[i+2];
  }
}else if(argv.length>2) {
  if(/[^0-9.,]/.test(argv[2])) {
    console.error('请输入数字！');
    process.exit(100);
  }
  arr = argv[2].split(',');
}else {
  
}


trans(arr);
testAdd(arr);
console.log(arr);
console.log(entropy(arr),' bit');




function testAdd(arr) {//检验概率和是否等于1
  let sum = 0;
  for(let i=0;i<arr.length;i++) {
    sum += arr[i];
  }
  if(sum>1) { console.error('概率和大于1！'); process.exit(100); }
  else if(sum<1) {console.error('概率和小于1，空间不封闭！'); process.exit(100);}
}
function trans(arr) {//字符串数组转换为数字数组
  for(let i=0;i<arr.length;i++) {
    arr[i] = eval(arr[i]);
  }
}
function entropy(arr) {//计算信源熵
  let eSum=0;
  for(let i=0;i<arr.length;i++) {
    eSum += -arr[i]*Math.log(arr[i])/Math.log(2);
  }
  return eSum.toFixed(3);
}

