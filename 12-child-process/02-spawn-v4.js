#!/usr/bin/node

const cp = require('child_process');

var cat = cp.spawn('cat',['./a.txt']);
var sort = cp.spawn('sort');
var uniq = cp.spawn('uniq');

cat.stdout.pipe(sort.stdin);// cat的输出作为sort的输入
sort.stdout.pipe(uniq.stdin);// sort的输出作为uniq的输入
uniq.stdout.pipe(process.stdout);// uniq的输出作为标准流的输入
