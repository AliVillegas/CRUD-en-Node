let ProductModel = require('../models/Product')


exports.store = (req, res) => {
    console.log(req.body.description);
    if (req.body.description == undefined) {
        let product = {
            name: req.body.name,
            price: req.body.price,
            description: ""
        };
        ProductModel.create(product)
            .then((id) => {

                res.redirect('/products/');
            });
    } else {
        let product = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        };
        ProductModel.create(product)
            .then((id) => {

                res.redirect('/products/');
            });
    }

}

exports.edit = (req, res) => {
    let id = req.params.id;
    ProductModel.find(id).then((product) => {
        if (product == null) {
            res.status(404).send('Not found');
            return;
        }
        res.render('products/', { product: product });
    });
}
exports.update = (req, res) => {
    let id = req.params.id;
    ProductModel.find(id).then((product) => {
        if (product == null) {
            res.status(404).send('Not found');
            return;
        }

        let updateProduct = {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description
        }

        ProductModel.update(product.id, updateProduct)
            .then((id) => {
                res.redirect('/products/');
            });
    });
}

exports.delete = (req, res) => {
    let id = req.params.id;
    ProductModel.find(id).then((product) => {
        if (product == null) {
            res.status(404).send('Not found');
            return;
        }
        ProductModel.delete(product.id)
            .then((id) => {
                res.redirect('/products/');
            });
    });
}
exports.show = (req, res) => {
    let id = req.params.id;
    ProductModel.find(id).then((product) => {
        if (product == null) {
            res.status(404).send('Not found');
            return;
        }
        res.render('pages/singleProductView', { product: product });
    });
}