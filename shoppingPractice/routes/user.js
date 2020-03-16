const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const userController = require('../controller/user')
const productController = require('../controller/products');

const options = {
    'caseSensitive': false,
    'strict': false
}

const router = express.Router(options);


router.get('/products/:prodId', productController.getProductDetails)
router.post('/add-to-cart', productController.addToCart);
router.get('/user', userController.getloginForm)
router.post('/user', userController.saveUser)

module.exports = router;