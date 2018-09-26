#!/usr/bin/node

const Dog = require('./02-dog.js');//调用模块

var taidi = new Dog('taidi',5);
var zangao = new Dog('zangao',10);

taidi.on('bark',onBark);
zangao.on('bark',onBark);

function onBark() {
  console.log('%s is Barked! energy:%d',this.name(),this.energy());
}
