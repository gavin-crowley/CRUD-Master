const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// List of columns for Employee schema
let Item = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
}, {
    collection: 'items'
});

module.exports = mongoose.model('Item', Item);