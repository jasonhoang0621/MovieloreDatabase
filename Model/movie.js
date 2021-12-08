const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const movie = new Schema({
    id: ObjectId,
    name: { type: String },
    releaseDate: { type: String },
    time: { type: String },
    director: { type: String },
    author: { type: String },
    cast: { type: String },
    gerne: { type: Array },
    plot: { type: String },
    review: { type: Array },
    rate: { type: Number },
    poster: { type: String },
    country: { type: String },
    type: { type: String },
    trailer: { type: String }
});

module.exports = mongoose.model('movie', movie);