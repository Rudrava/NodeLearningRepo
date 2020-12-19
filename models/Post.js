const mongoose = require('mongoose');

// the data model
const post = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date : {
        type: Date,
        default: Date.now
    }
})

// exporting as a mongodb model
module.exports = mongoose.model('Posts', post);