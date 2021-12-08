const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const user = new Schema({
    id: ObjectId,
    name: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: Boolean, default: false }
});

module.exports = mongoose.model('user', user);