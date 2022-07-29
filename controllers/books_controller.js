const express = require('express');
const books = express.Router();
const Book = require('../model/books.js');

books.get('/seed', (req, res) => {
    Book.insertMany([{
        "title": "The Shinobi Initiative",
        "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
        "year": 2014,
        "quantity": 10,
        "imageURL": "https://imgur.com/LEqsHy5.jpeg"
      },
      {
        "title": "Tess the Wonder Dog",
        "description": "The tale of a dog who gets super powers",
        "year": 2007,
        "quantity": 3,
        "imageURL": "https://imgur.com/cEJmGKV.jpg"
      },
      {
        "title": "The Annals of Arathrae",
        "description": "This anthology tells the intertwined narratives of six fairy tales.",
        "year": 2016,
        "quantity": 8,
        "imageURL": "https://imgur.com/VGyUtrr.jpeg"
      },
      {
        "title": "Wâˆ€RP",
        "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
        "year": 2010,
        "quantity": 4,
        "imageURL": "https://imgur.com/qYLKtPH.jpeg"
      }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})


//index
books.get('/', (req, res) => {
    Book.find()
        .then(books => {
            res.status(200).json(books);
        })
        .catch(err => {
            console.log(err);
            res.render(404).json({
                message: 'Error. Books not found.'
            })
        })
});

//show
books.get('/:id', (req, res) => {
    Book.findById()
        .then(currentBook => {
            res.status(200).json(currentBook);
        })
        .catch(err => {
            console.log(err);
            res.render(404).json({
                message: 'Error. Book not found.'
            })
        })
});

//edit
books.put('/:id', (req, res) => {
    Book.findByIdAndUpdate()
        .then(updatedBook => {
            console.log(req.body)
            res.status(200).json(updatedBook);
        })
        .catch(err => {
            console.log(err);
            res.render(400).json({
                message: 'Error. Unable to update book.'
            })
        })

});

//delete
books.delete('/:id', (req, res) => {
    Book.findByIdandDelete()
        .then(deletedBook => {
            res.status(200).json({
                message: 'Book deleted successfully.'
            })
            .catch(err => {
                console.log(err);
                res.render(400).json({
                    message: 'Error. Unable to delete book.'
                })
            })
        })
});

//create
books.post('/', (req, res) =>{
    Book.create(req.body)
    .then(newBook => {
        res.status(200).render.json(newBook);
    })
    .catch(err => {
        console.log(err);
        res.render(400).json({
            message: 'Error. Unable to create new book.'
        })
    })
});


module.exports = books;