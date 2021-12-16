const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notification = new Schema({
    userID: { type: String, required: true },
    item: { type: Array, default: [] }
});

module.exports = mongoose.model('notification', notification);