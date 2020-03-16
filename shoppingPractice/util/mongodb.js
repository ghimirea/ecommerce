const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017')
    .then(client => {
            console.log('connected......');
            const db = client.db('test');
            db.collection('products').insertMany([{
                "name": "Samsung S7",
                "category": "Phone",
                "manufacturer": "Samsung",
                "Price": 600
            }, {
                "name": "LG",
                "category": "Phone",
                "manufacturer": "LG",
                "Price": 700
            }]);
            db.collection('products').find().each(function (err, doc) {
                console.log(doc);
                client.close();
            });

        }

    )
    .catch(err => console.log(err));