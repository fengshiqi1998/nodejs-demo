#!/usr/bin/node

var fs = require('fs');

var width = 16;
var height = 16;

var pixeByteSize = width * height * 4;
var totalSize = pixeByteSize + 54;

var buf = new Buffer(totalSize);

buf.fill(0);

buf.write('BM');
buf.writeInt32LE(totalSize,0x02);
buf.writeInt32LE(54,0x0a);
buf.writeInt32LE(40,0x0e);
buf.writeInt16LE(1,0x1a);
buf.writeUInt32LE(32,0x1c);
buf.writeUInt32LE(pixeByteSize,0x22);
buf.writeInt32LE(width,0x12);
buf.writeInt32LE(height,0x16);


for(var i = 54;i < totalSize;i+=4) {
  buf.writeUInt32LE(0xff0000ff,i);
}

fs.writeFile('./out.bmp',buf,function(err){
  if(err != null) {
    console.error(err);
    process.exit(1);
  }
});
