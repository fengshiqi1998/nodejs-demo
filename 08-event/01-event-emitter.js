#!/usr/bin/node

const EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

//事件响应
emitter.on('hello', ()=>{
  console.log('hello event');
});//订阅者

emitter.on('hello',()=>{
  console.log('HELLO EVENT');
});//订阅者

console.log(emitter.listeners('hello'));

emitter.on('bye', ()=>{
  console.log('bye event');
});

//事件触发
global.setInterval(()=>{
  emitter.emit('hello');
},1000);//触发两个订阅

global.setTimeout(()=>{
  emitter.emit('bye');
  process.exit();
},5000);
