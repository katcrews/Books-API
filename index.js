require('dotenv').config();
const express = require('express');
const app = express();


//index
app.get('/', function(req, res){
    res.send('hello world')
});

//404
app.get('*', (req, res) => {
    res.status(404).send('404 Not Found')
})


app.listen(process.env.PORT, function () {
    console.log('I am awake!')
  })
  