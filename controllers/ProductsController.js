let ProductModel = require('../models/Product')


exports.store = (req, res) => {
    console.log(req.body.description);

    if (req.body.name == undefined || req.body.description == '') {
        ProductModel.all()
            .then((data) => {
                let products = data;
                res.render('pages/products', { products: products, error: '*Falta ingresar nombre' });
            });

    } else {
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

exports.productsNameAsc = (req, res) => {
    ProductModel.productsNameAsc()
        .then((data) => {
            let products = data;
            res.render('pages/products', { products: products });
        });
}

exports.productsNameDes = (req, res) => {
    ProductModel.productsNameDes()
        .then((data) => {
            let products = data;
            res.render('pages/products', { products: products });
        });
}


exports.productsPriceAsc = (req, res) => {
    ProductModel.productsPriceAsc()
        .then((data) => {
            let products = data;
            res.render('pages/products', { products: products });
        });
}

exports.productsPriceDes = (req, res) => {
    ProductModel.productsPriceDes()
        .then((data) => {
            let products = data;
            res.render('pages/products', { products: products });
        });
}

exports.productsDescripAsc = (req, res) => {
    ProductModel.productsDescripAsc()
        .then((data) => {
            let products = data;
            res.render('pages/products', { products: products });
        });
}

exports.productsDescripDes = (req, res) => {
    ProductModel.productsDescripDes()
        .then((data) => {
            let products = data;
            res.render('pages/products', { products: products });
        });
}