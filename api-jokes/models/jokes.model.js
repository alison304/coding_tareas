const { Schema, model } = require('mongoose');

const jokeSchema = new Schema({
    setup: {
        type: String,
        required: [true, 'Debe ingresar el setup de la broma.'], 
        minlength: [10, 'El setup no puede tener menos 10 caracteres.']
    },
    punchline: {
        type: String,
        required: [true, 'Debe ingresar el punchline de la broma.'],
        minlength: [3, 'El punchline no puede tener menos 3 caracteres.']
    }
}, { timestamps: true });

const Jokes = model('Jokes', jokeSchema);

module.exports = Jokes;   