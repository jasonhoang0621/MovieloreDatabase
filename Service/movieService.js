const movie = require('../Model/movie');

const getAll = async () => {
    const list = await movie.find({});
    return list;
}

const createNew = async (content) => {
    try {
        return await movie.create({ ...content });
    } catch (err) {
        console.log(err)
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