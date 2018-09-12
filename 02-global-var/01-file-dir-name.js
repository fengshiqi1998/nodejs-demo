#!/usr/bin/node


console.log('file name:',__filename);
console.log('dir name:',__filename);
/*
var file = __dirname + '/view/data.html';//method 1,bad,cross platform

console.log('data file:',file);
*/

/*
var file;
switch(process.platform) {
  case 'linux':
    file = __dirname + '/view/data.html';
    break;

  case 'win32':
    file = __dirname + '\\view\data.html';
    break;

  default:
    file = 'error';
}
*/


const path = require('path');
file = path.join(__dirname,'view','data.html');


console.log('data file:',file);
