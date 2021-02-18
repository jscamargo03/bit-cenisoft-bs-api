const mongoose = require('mongoose')


const clientSchema = new mongoose.Schema({
    name: String,
    address: String,
    mobile: String,
    email: String,
    password: String,
    created: {
        type: Date,
        default: Date.now
    }
})

const Client = mongoose.model('clients', clientSchema)

module.exports = Client
