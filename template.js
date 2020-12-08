const express = require('express');
const app = express();
const path = require('path');

app.use('/public',express.static(path.join(__dirname,'static')));
app.set('view engine','ejs');
app.get('/:userQuery',(req,res) =>{
    res.render('index',{data : {
        userQuery :req.params.userQuery,
        searchResult : ['book1','book2','book3'],
        loggedIN : true,
        username : 'mansisarakr@dfgds'
    }});
});

app.listen('3000');