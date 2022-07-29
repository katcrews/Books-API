//dependencies
const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors')

//configuration
require('dotenv').config();
const PORT = process.env.PORT
const app = express();
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
  )


//middleware
app.use(express.json())
app.use(cors());

//controllers
const booksController = require('./controllers/books_controller.js')
app.use('/books', booksController)



app.get('/', (req, res) => {
    res.send('hello world')
});

//404
app.get('*', (req, res) => {
    res.status(404).send('404 Not Found')
})


app.listen(process.env.PORT, function () {
    console.log("It's ALIVE at",PORT + "!")
  })
  