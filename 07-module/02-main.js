#!/usr/bin/node
/*
var pi = require('./02-export-var.js');

console.log('pi:',pi);
console.log(module);
*/

/*
var circle = require('./02-export-function.js');

console.log(circle(20).diameter());
console.log(circle(20).circumference());
console.log(circle(20).area());
*/

var circle = require('./02-export-object.js');

console.log(circle.diameter(20));
console.log(circle.circumference(20));
console.log(circle.area(20));
