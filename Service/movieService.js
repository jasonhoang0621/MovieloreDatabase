const movie = require('../Model/movie');
const user = require('../Model/user');
const mongoose = require('mongoose');
const cloudinary = require('../utils/cloudinary');

const getAll = async () => {
    const list = await movie.find({});
    return list;
}

const createNew = async (content) => {
    try {
        const _id = mongoose.Types.ObjectId();
        content.plot = content.plot.trim();
        for (let i = 0; i < content.review.length; i++) {
            content.review[i].section = content.review[i].section;
            content.review[i].content = content.review[i].content;
        }
        await movie.create({ _id, ...content });
        return { _id, ...content }
    } catch (err) {
        console.log(err)
        return null;
    }
}

const deleteReview = async (id) => {
    try {
        const review = await movie.findOne({ _id: id });
        await cloudinary.uploader.destroy(review.poster.public_id);
        await movie.deleteOne({ _id: id })
    } catch (err) {
        console.log(err);
    }
}

const updateReview = async (id, newInfo) => {
    try {
        const oldMovie = await movie.findOne({ _id: id });
        if (oldMovie.poster.public_id !== newInfo.poster.public_id) {
            await cloudinary.uploader.destroy(oldMovie.poster.public_id);
        }
        await movie.updateOne({ _id: id }, { ...newInfo });
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getAll,
    deleteReview,
    createNew,
    updateReview,
}