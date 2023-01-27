const express = require('express');
const { getAllAuthors, getOneAuthor, createAuthor, updateAuthor, removeAuthor } = require("../controllers/authors.controllers");
const router = express.Router();

router.get('/', getAllAuthors);
router.get('/:id', getOneAuthor);
router.post('/', createAuthor);
router.put('/:id', updateAuthor);
router.delete('/:id', removeAuthor);

module.exports.authorRouter = router;