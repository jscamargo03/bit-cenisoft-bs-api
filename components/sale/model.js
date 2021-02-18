const mongoose = require('mongoose')

const detailSchema = new mongoose.Schema({
    bookId : {
        type: mongoose.Schema.ObjectId,
        ref: 'Book'
    },
    bookName: String,
    bookPrice: Number,
    quantity: Number
});

const saleSchema = new mongoose.Schema({
    created : {
        type: Date,
        default: Date.now
    },
    total: Number,
    clientId : {
        type: mongoose.Schema.ObjectId,
        ref: 'Client'
    },
    details : [{type: detailSchema}]
});

const Sale = mongoose.model('sales', saleSchema)

module.exports = Sale