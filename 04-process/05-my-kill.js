#!/usr/bin/node

const pid = process.argv[2],
      sig = process.argv[3];

// check pid and sig

process.kill(pid,sig);
