#!/usr/bin/node

const fs = require('fs');
/*
var src = process.argv[2];

if(fs.statSync(src).isFile())  fs.unlinkSync(src);
*/
var file = process.argv[2];

fs.unlinkSync(file);
