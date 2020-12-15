const http = require('http');
const path = require('path');
const fs = require('fs');
const server = http.createServer((req,res) =>{
    // res.write("hello world from node js");
    // res.end();
    if(req.url === '/'){

    fs.readFile(path.join(__dirname,'index.html'),(err,data) => {
        res.writeHead(200, {'Content-Type' :'text/html' });
        res.write(data);
        res.end();

    }); 
    }
    
    // if(req.url === '/user'){

    //     res.write("<h1>welcome user</h1>");
    //     res.end();
    // }
});

server.listen(3000,() => console.log("server is up and running"));