const Jokes = require('../models/jokes.model');

module.exports.getAllJokes = async (req, res) => {
    try {
        const jokes = await Jokes.find(); 
        res.json({
            message: "Se obtuvieron exitosamente todas las bromas.",
            jokes,
        });   
    } catch (error) {
        res.status(500).json({
            message: "¡Oh no! No se pudieron obtener las bromas.",
            error,
        });
    }
}

module.exports.createJoke = async (req, res) => {
    try {
        const newJoke = await Jokes.create(req.body);
        console.log(newJoke)
        res.json({
            message: "Se creó exitosamente la broma.",
            newJoke,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "¡Oh no! No se pudo crear la broma.",
            error,
        })
    }
}

module.exports.updateJoke = async (req, res) => {
    try {
        const { params, body } = req;
        const { id } = params;
        
        const jokeUpdate = await Jokes.findByIdAndUpdate(id, body, { new: true  });
        res.json({
            message: "Se actualizó exitosamente la broma.",
            jokeUpdate,
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Oh no! No se pudo actualizar la broma.",
            error,
        });
    }
}

module.exports.deleteJoke = async (req, res) => {
    try {
        const { id } = req.params;
        const removeJoke = await Jokes.deleteOne({ _id: id });
        res.json({
            message: "Se eliminó exitosamente la broma.",
            removeJoke,
        });
    } catch (error) {
        res.status(500).json({
            message: "¡Oh no! No se pudo eliminar la broma.",
            error,
        });
    }
}

module.exports.getJokeById = async (req, res) => {
    try {
        const { id } = req.params;
        const oneJoke = await Jokes.findOne({ _id: id });
        res.json({
            message: "Se obtuvo exitosamente la broma.",
            oneJoke,
        });
    } catch(error) {
        res.status(500).json({
            message: "¡Oh no! No se pudo obtener la broma.",
            error,
        });
    }
}

module.exports.getRandomJoke = async (req, res) => {
    try {
        const oneJoke = await Jokes.aggregate([{ $sample: { size: 1 } }]);
        res.json({
            message: "Se obtuvo exitosamente la broma.",
            oneJoke,
        });
    } catch(error) {
        res.status(500).json({
            message: "¡Oh no! No se pudo obtener la broma.",
            error,
        });
    }
}