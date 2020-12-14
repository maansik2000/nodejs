const fs = require('fs');
const path = require('path');

//make a file and read from it

fs.writeFile(path.join(__dirname,'/exmple.txt'), 'hello my name is mansi',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("sucesfully created");
        fs.readFile(path.join(__dirname,'exmple.txt'),'utf-8',(err,file) => {
            if(err){
                console.log(err)
            }else{
                console.log(file)
            }
        })
    }
})

//rename file
fs.rename(path.join(__dirname,'exmple.txt'), path.join(__dirname,'example.txt'),(err) => {
    if(err){
        console.log(err)
    }else{
        console.log("succefully renamed");
    }
})


//append data to file
fs.appendFile(path.join(__dirname,'example.txt'),"some data is inserted",(err) => {
    if(err){
        console.log(err)
    }else{
        console.log("successfully appended");
    }
})

//delete the file
fs.unlink('example.txt',(err) =>{
    if(err){
        console.log(err)
    }else{
        console.log("deleted");
    }
})