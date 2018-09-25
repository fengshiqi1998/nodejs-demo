#!/usr/bin/node
// buffer类似数组
var buf1 = new Buffer(256);
buf1[0] = 23;

const log = console.log;
log('buffer length:',buf1.length);
log('buffer content:',buf1)

for(var i = 0; i<256;i++) buf1[i] = i;
log('\nbuffer content:',buf1);

// 切片
var buf2 = buf1.slice(250,256);//250到256的七个
log('\nbuffer content:',buf2);

// 填充
buf2.fill(0);
log('\nbuffer content:',buf2);

// 初始化
var arr = ['a',0xBA,0xDF,0x00,0x00,255,10];
var buf3 = new Buffer(arr);
log('\nbuffer3 content:',buf3);

// 字符串进行初始化
var buf4 = new Buffer('hello world','utf8');
log('\nbuffer4 content:',buf4);

// 复制
buf3.copy(buf4);// 将buf3的内容拷贝至buf4
log('\nbuffer4 content:',buf4);
