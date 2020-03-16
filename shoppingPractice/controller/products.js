const Product = require('../models/products');
const Cart = require('../models/cart');

exports.getProduct = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'products.html'));
    res.render('products.ejs', {
        'pageTitle': 'Products'
    })
};

exports.postProduct = (req, res, next) => {
    // console.log(req.body);
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const prod = new Product({
        title: title,
        imageUrl: imageUrl,
        price: price,
        description: description
    })
    console.log(prod)
    prod.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch(err => console.log(err))
    //console.log(Product.getAll());

};

exports.getAllProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            console.log(products);
            res.render('homepage.ejs', {
                'prods': products
                // 'pageTitle': "Homepage"
            })
        })
        .catch(err => console.log(err));
};

exports.getProductDetails = (req, res, next) => {
    //render detail page
    const prodId = req.params.prodId;
    Product.findById(prodId)
        .then(products => {
            res.render('product-detail.ejs', {
                'prod': products
            })
        })
        .catch(err => console.log(err))


}

exports.editProductPage = (req, res, next) => {
    const prodId = req.params.prodId;
    Product.findById(prodId)
        .then(product => {
            console.log(product)
            res.render('edit-product.ejs', {
                'prod': product
            })
        })
        .catch(err => console.log(err))

}

exports.editProductPost = (req, res, next) => {
    console.log(req.body.id);
    Product.findByIdAndUpdate(req.body.id)
        .then(product => {
            product.title = req.body.title;
            product.imageUrl = req.body.imageUrl;
            product.price = req.body.price;
            product.description = req.body.description;
            product.save()
        })
        .then(product => {
            res.redirect('/')
        })
        .catch(err => console.log(err))

}

exports.deleteProduct = (req, res, next) => {
    const prodId = req.body.id;
    Product.deleteOne({
            _id: prodId
        })
        .then(product => {
            res.redirect('/')
        })
        .catch(err => console.log(err));

}

exports.addToCart = (req, res, next) => {
    const addedItem = Product.findById(req.body.id)[0];
    Cart.save(addedItem);
    res.end('Saved Successfully......')

}