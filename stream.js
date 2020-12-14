const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const gzip = zlib.createGzip();

const readStream = fs.createReadStream(path.join(__dirname,'example.txt'),'utf-8');
const writeStream = fs.createWriteStream(path.join(__dirname,'example2.txt'));
// readStream.on('data',(chunk) => {
//     writeStream.write(chunk);
// })

// readStream.pipe(writeStream);

readStream.pipe(gzip).pipe(writeStream);d