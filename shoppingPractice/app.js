const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const homeRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const rootDir = require('./util/path');
//const mongoconnect = require('./util/database').mongoconnect;
const app = express();





app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(express.static(path.join(__dirname, 'public/mycss')));
app.use('/mycss', express.static(path.join(__dirname, 'public', 'css')));


//Routes
app.use(homeRoutes);
app.use(userRoutes);





//404 Page not found
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
});


//Error handling
// app.use((err, req, res, next) => {
//     res.status(500).send("The file is broken, something is wrong here")
// });

//PORT listening
mongoose.connect('mongodb://localhost:27017/shoppingPractice', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`listening to port ${PORT}`);
        })
    })
    .catch(err => console.log(err));