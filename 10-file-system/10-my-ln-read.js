#!/usr/bin/node

const fs = require('fs');

var src = process.argv[2];

var lnk = fs.readlinkSync(src);

console.log(src,'->',lnk);
