const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');
const { RSA_PKCS1_OAEP_PADDING } = require('constants');

// app.use('/public',express.static(path.join(__dirname,'public')));
app.use('/static',express.static('public'));


//attach the data to the request body
app.use(bodyParser.urlencoded({extended:false}));


// app.get('/',(req,res) => {
//     res.send("hello world");
// });

// app.get('/example/:name/:age',(req,res) => {
//     console.log(req.params);
//     console.log(req.query);
//     res.send(req.params.name + " : " + req.params.age);
// })

// app.listen(3000,() => console.log("server is up"));


//server static files with express

app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname,'/public','index.html'));
});

//we get the data from the req body

app.post('/',(req,res) => {
    
    console.log(req.body);


    const schema = Joi.object({
        email : Joi.string().email().min(5).max(50).required(),
        password : Joi.string().min(5).max(10).required()
    });


    const validation = schema.validate(req.body);
    if(validation.error){
        res.send("error occurred");
        console.log(validation.error);
    }
    console.log(validation);


    //database work here
    // res.send("succesfully posted data");
});


app.listen(3000,() =>console.log("server is up"))