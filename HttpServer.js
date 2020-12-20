const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req,res) =>{
    // res.write("hello world from node js");
    // res.end();

    //     fs.readFile('./public/index.html',(err,data) => {
    //     res.writeHead(200, {'Content-Type' :'text/html' });
    //     res.write(data);
    //     res.end();

    // }); 


    const readStream = fs.createReadStream(path.join(__dirname,'public','index.html'));
    res.writeHead(200,{'Content-type' : 'text/html'});
    readStream.pipe(res);

    
    // if(req.url === '/user'){

    //     res.write("<h1>welcome user</h1>");
    //     res.end();
    // }
});

server.listen(3000,() => console.log("server is up and running"));