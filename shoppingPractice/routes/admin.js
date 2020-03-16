const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const productController = require('../controller/products');
// const options = {
//     'caseSensitive': false,
//     'strict': false
// }

const router = express.Router();

router.get('/user/products', productController.getProduct);
router.post('/user/products', productController.postProduct);
router.get('/', productController.getAllProducts)
router.get('/edit-product/:prodId', productController.editProductPage)
router.post('/edit-product', productController.editProductPost);
router.post('/delete-product', productController.deleteProduct);



module.exports = router;