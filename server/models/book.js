/**
 * Model Class Section 
* Name: Laxman Gothe 
* Student number: 301102988 
* Course Code: COMP229002_2021W 
* Course Name: Web Application Development
* Mid-Term Test
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