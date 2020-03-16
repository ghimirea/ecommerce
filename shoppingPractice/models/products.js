const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    imageUrl: String,

    price: {
        type: Number,
        required: true
    },

    description: String
});


module.exports = mongoose.model("Product", productSchema);