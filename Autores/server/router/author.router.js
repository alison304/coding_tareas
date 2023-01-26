const express = require('express');
const { getAllAuthors, getOneAuthor, createAuthor, updateAuthor, removeAuthor } = require("../controllers/authors.controllers");
const router = express.Router();

module.exports = (app) => {
    app.get('/', getAllAuthors)
    app.get('/:id', getOneAuthor);
    app.post('/', createAuthor);
    app.put('/:id', updateAuthor);
    app.delete('/:id', removeAuthor);
};

module.exports.authorRouter = router;