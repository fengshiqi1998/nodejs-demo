#!/usr/bin/node
//echo $?//查看退出码
var code = process.argv[2];

//if(process.argv.length < 3){
if(typeof(process.argv[2]) === 'undefined'){
  console.error('请给出命令行参数！');
  process.exit(1);
}

//if(typeof code !== 'number') {
if(isNaN(Number(process.argv[2]))){
  console.error('命令行参数类型应该是数值类型！');
  process.exit(1);
}

process.exit(code);
