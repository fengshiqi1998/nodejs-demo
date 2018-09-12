#!/usr/bin/node

const log = console.log;

log('arch:',process.arch);
log('platform:%s\n',process.platform);

log('pig:',process.pid);
log('execPath',process.execPath);

//process.stdin.resume();//暂停

log('node.js version:',process.version);
log('uid:',process.getuid());
log('gid:',process.getgid());
log('path:%s\n',process.cwd);

log('rss:',process.memoryUsage().rss);
log('heapTotal:',process.memoryUsage().heapTotal);
log('heapUsed:',process.memoryUsage().heapUsed);
log('external:%d\n',process.memoryUsage().external);

//log('env:',process.env);
log('LOGNAME:',process.env.LOGNAME);
