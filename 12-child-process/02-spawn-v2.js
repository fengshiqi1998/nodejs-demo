#!/usr/bin/node

const cp = require('child_process');

var cmd = cp.spawn('./02-child.js');

cmd.stdout.pipe(process.stdout);
cmd.stderr.pipe(process.stderr);
// spawn会在程序执行的15秒内将每次的结果依次输出（流stream）
