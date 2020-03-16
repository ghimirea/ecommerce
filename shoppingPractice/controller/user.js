const User = require('../models/user');

exports.getloginForm = (req, res, next) => {
    // res.sendFile(path.join(rootDir, 'views', 'user.html'))
    res.render('user.ejs', {
        "pageTitle": "Login"
    })
}

exports.saveUser = (req, res, next) => {
    new User({
            email: req.body.email,
            password: req.body.password
        }).save()
        .then((result) => {
            res.redirect('/')
        })
        .catch(err => {
            throw new Error('Failed to Save User')
        })



}