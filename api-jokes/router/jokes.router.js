const express = require('express');
const { getAllJokes, createJoke, updateJoke, deleteJoke, getJokeById, getRandomJoke } = require('../controllers/jokes.controllers');
const router = express.Router()

router.get('/' , getAllJokes );
router.get('/random' , getRandomJoke );
router.get('/:id' , getJokeById );
router.post('/new' , createJoke );
router.put('/update/:id' , updateJoke );
router.delete('/delete/:id' , deleteJoke );

module.exports.jokeRouter = router

