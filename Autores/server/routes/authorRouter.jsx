const { getAllAuthors, getOneAuthor, createAuthor, updateAuthor, removeAuthor } = require("../controllers/authors.controllers");

module.exports = (app) => {
    app.get('/api/Author', getAllAuthors)
    app.get('/api/author/:id', getOneAuthor);
    app.post('/api/author', createAuthor);
    app.put('/api/author/:id', updateAuthor);
    app.delete('/api/author/:id', removeAuthor);
};