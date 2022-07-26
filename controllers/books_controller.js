const express = require('express');
const books = express.Router();
const Book = require('../model/books.js');

books.get('/books',(req,res) => {
    res.render("GET stub route")
})














module.exports = books;