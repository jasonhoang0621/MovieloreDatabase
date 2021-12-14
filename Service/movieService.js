const movie = require('../Model/movie');
const mongoose = require('mongoose');

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
    const review = await movie.findOne({ _id: id });

    //xóa ảnh trên cloudianry

    await review.destroy();
}
module.exports = {
    getAll,
    deleteReview,
    createNew
}