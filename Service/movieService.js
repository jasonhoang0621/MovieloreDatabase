const movie = require('../Model/movie');

const getAll = async () => {
    const list = await movie.find({});
    return list;
}

module.exports = {
    getAll,

}