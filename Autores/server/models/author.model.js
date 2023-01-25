const { Schema, model } = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

const authorSchema = new Schema({
    Name: {
        type: String,
        required: [true, 'Debe ingresar un nombre'],
        minlength: [2, 'No puede tener menos de 3 caracteres']
    }

}, { timestamps: true });

authorSchema.plugin(uniqueValidator, { message: '{PATH} ya existe, favor intentar con uno nuevo' });

const Author = model('Author', authorSchema);

module.exports = Author;