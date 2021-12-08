const movie = require('../Model/movie');

const getAll = async () => {
    const list = await movie.find({});
    return list;
}

const deleteReview = async (id) => {
    const review = await movie.findOne({ _id: id });

    //xóa ảnh trên cloudianry

    await review.destroy();
}
module.exports = {
    getAll,
    deleteReview,
}