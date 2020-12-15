const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

// const readStream = fs.createReadStream(path.join(__dirname,'example.txt'),'utf-8');
// const writeStream = fs.createWriteStream(path.join(__dirname,'example2.txt.gz'));
// readStream.on('data',(chunk) => {
//     writeStream.write(chunk);
// })

// readStream.pipe(writeStream);


const readStream = fs.createReadStream(path.join(__dirname,'example2.txt.gz'));
const writeStream = fs.createWriteStream(path.join(__dirname,'uncompressed.txt'));
readStream.pipe(gunzip).pipe(writeStream);