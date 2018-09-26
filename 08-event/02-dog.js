#!/usr/bin/node

//模块
const EventEmitter = require('events').EventEmitter,
      util = require('util');

function Dog(name, energy) {// 构造函数
  var _name = name;
  var _energy = energy;

  var self = this;//保留指针

  EventEmitter.call(this);//调用原型方法init,on

  var timer = global.setInterval(()=>{
    if(_energy > 0){
      self.emit('bark');
      _energy--;
    }else{
      global.clearInterval(timer);
    }
  },500);

  this.name = () => _name;
  this.energy = () => _energy;
}

/*
Dog.prototype = EventEmitter.prototype;//原型继承
*/

util.inherits(Dog,EventEmitter);//Dog继承EventEmitter

module.exports = Dog;//函数暴露
