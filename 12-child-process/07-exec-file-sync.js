#!/usr/bin/node

const cp = require('child_process');

console.log(cp.execFileSync('cat',['07-exec-file-sync.js']).toString('utf8'));
