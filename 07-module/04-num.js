#!/usr/bin/node

var n = 0;

function Num() {}//构造函数

Num.prototype.add = () => n++;
Num.prototype.getNum = () => n;

module.exports = Num;
