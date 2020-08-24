let ProductModel = require('../models/Product')

exports.homepage = (req, res) => {
    ProductModel.all()
        .then((data) => {
            let products = data;
            res.render('pages/homepage', { products: products });
        });
}


exports.products = (req, res) => {
    ProductModel.all()
        .then((data) => {
            let products = data;
            res.render('pages/products', { products: products });
        });
}
exports.about = (req, res) => {
    res.send('About us');
}