/**
 * Name: Laxman Gothe
 * create your model here
 * 
 */

let mongoose = require('mongoose');

// create a model class

    let booksModel = mongoose.Schema({
        name: String,
        author: String,
        published: String,
        description: String,
        price: Number
        },
        {
        collection: "books"
        });
    
module.exports = mongoose.model('Book', booksModel);