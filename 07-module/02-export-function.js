#!/usr/bin/node

function circle(radius) {
  return {
    diameter:function() { return 2*radius; },//直径
    circumference:function() { return 2*Math.PI*radius;  },//周长
    area:function(){ return Math.PI*radius*radius; }//面积
  };
}

module.exports = circle;
