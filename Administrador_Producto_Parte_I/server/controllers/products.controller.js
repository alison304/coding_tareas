const Products = require("../model/products.model")


module.exports.getAllProducts = async (req, res) => {
    let products = await Products.find({});
    res.send({result: products});
}

module.exports.getProduct = async (req, res) => {
    let product = await Products.findOne({_id: req.params.id});
    res.send({result: product});
}

module.exports.createProduct = async (req, res) => {
    let newProduct = await new Products(req.body).save();
    res.send({result: newProduct});
}