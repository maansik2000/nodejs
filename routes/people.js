const express = require('express');
const route = express.Router();


route.use((req, res,next) =>{
    console.log('middle ware being used');
    next();
});
route.get('/',(req,res) =>{
    res.send('rouiety');
});
route.get('/example',(req,res) =>{
    res.send('bening hit');
});

module.exports = route;