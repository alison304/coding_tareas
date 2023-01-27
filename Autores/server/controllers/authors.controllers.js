const Author = require("../models/author.model");

module.exports.getAllAuthors = async (req, res) => {
    try {
        const authorList = await Author.find();
        res.json({
            message: 'Se entregan de manera exitosa todos los autores',
            authorList,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    };
}

module.exports.createAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create(req.body.author);
        res.json({
            message: 'Se creo de manera exitosa el nuevo autor',
            newAuthor,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.updateAuthor = async (req, res) => {
    try {
        const { params, body } = req;
        const { id } = params;
        const updatedAuthor = await Author.findByIdAndUpdate(id, body.author, { new: true });
        res.json({
            message: 'Se actualiza de manera exitosa la información',
            updatedAuthor,
        });
        
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.removeAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAuthor = await Author.deleteOne({ _id: id });
        res.json({
            message: 'Se actualiza de manera exitosa la información del autor',
            deletedAuthor,
        });
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}

module.exports.getOneAuthor = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await Author.findById(id);
        res.json({
            message: 'Se trae de manera exitosa la información del autor',
            author,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Ups! no hemos podido hacer lo que nos solicitaste',
            error,
        });
    }
}