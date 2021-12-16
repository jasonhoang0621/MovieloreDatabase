const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const comment = new Schema({
    reviewID: { type: String, required: true },
    userID: { type: String, required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
    parentID: { type: String, default: null }
});

module.exports = mongoose.model('comment', comment);