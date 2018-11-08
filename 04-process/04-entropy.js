#!/usr/bin/node

//console.log(process.argv.length);
//console.log(process.argv);
var argv = process.argv;
var arr = [];
//以空格为分隔时
if(argv.length>3) {
  for(let i=0;i<argv.length-2;i++) {
    //检验每一项是否为数字
    if(/[^0-9.-]/.test(argv[2+i])) {
      console.error('请输入数字！');
      sysInput();
    }
    /*
    if(/,/.test(argv[i+2])) {
      console.error('请按照统一格式输入！');
      process.exit(100);
    }
    */
    arr[i] = argv[i+2];
  }
//以逗号为分隔时
}else if(argv.length>2) {
  if(/[^0-9.]/.test(argv[2])) {
    if(/,/.test(argv[2])) {//是否含有逗号
      console.error('请输入数字！');
    } else {
      console.error('命令行参数错误，没有分隔符！');
    }
    process.exit(100);
  }
  arr = argv[2].split(',');
}else {
  console.log('请输入参数！');
  process.exit(100);
}

console.log('字符串：',arr);
trans(arr);
console.log('数组：',arr);
testRange(arr);
console.log('判断范围后：',arr);
testAdd(arr);
console.log('判断和之后：',arr);
console.log(entropy(arr),' bit');



//字符串数组转换为数字数组
function trans(arr) {
  for(let i=0;i<arr.length;i++) {
    arr[i] = eval(arr[i]);
  }
  //console.log(arr);
}

//检验每一项范围是否在0到1之间
function testRange(arr) {
  for(let i=0;i<arr.length;i++) {
    if(!(arr[i]>0 && arr[i]<1)) {
      console.error('请输入范围在0到1之间的数字！');
      process.exit(100);
    }
  }
}

//检验概率和是否等于1
function testAdd(arr) {
  let sum = 0;
  for(let i=0;i<arr.length;i++) {
    sum += arr[i];
    console.log(sum);
  }
  sum = sum.toFixed(3);
  console.log('sum=',sum);
  if(sum>1) { console.error('概率和大于1！'); process.exit(100); }
  else if(sum<1) {console.error('概率和小于1，概率空间不封闭！'); process.exit(100);}
}

//交互输入模式
function sysInput() {
  let i = 0;
  console.log('p[' + i++ + '] = ');
  process.stdin.on('data',(data) => {
    arr[i-1] = data.slice(0,data.length-1).toString('utf8');
    console.log('p['+ i++ + '] = ');
  });
  process.stdin.on('end',() => {
    trans(arr);
    console.log('arr:',arr);
  });
}

//计算信源熵
function entropy(arr) {  let eSum=0;
  for(let i=0;i<arr.length;i++) {
    eSum += -arr[i]*Math.log(arr[i])/Math.log(2);
  }
  return eSum.toFixed(3);
}

