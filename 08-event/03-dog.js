#!/usr/bin/node

//模块


function Dog(name, energy) {// 构造函数
  //var _name = name;
  //var _energy = energy;
  var _listeners = {};
  this.name = name;
  this.energy = energy;
  

  
  var timer = global.setInterval(()=>{
    if(this.energy > 0){
      emit('bark');
      this.energy--;
    }else{
      global.clearInterval(timer);
    }
  },500);

  function emit(e,arg) {
    _listeners[e].forEach((fn) => {
      fn.call(this,arg);
    });
  }
  //this.name = () => _name;
  //this.energy = () => _energy;
  this.on = (e,fn) => {
    if(typeof(_listeners[e])==='undefined'){
      _listeners[e] = [];
      _listeners[e].push(fn);
    }
  };
}


module.exports = Dog;//函数暴露
