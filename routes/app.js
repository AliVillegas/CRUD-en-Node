let router = require('express').Router();
let PagesController = require('../controllers/PagesController');
let ProductsController = require('../controllers/ProductsController');

router.get('/', PagesController.homepage);



router.get('/about', PagesController.about);
router.get('/products/create', PagesController.products);
router.post('/products/', ProductsController.store);
router.get('/products/', PagesController.products);
router.get('/products/:id/', ProductsController.show);
router.put('/products/:id/edit', ProductsController.update);
router.delete('/products/:id', ProductsController.delete);

//router.get('/products/create', ProductsController.create);


module.exports = router;