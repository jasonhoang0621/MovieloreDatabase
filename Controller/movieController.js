const movieService = require('../Service/movieService');

class movieController {
    async getListMovie(req, res) {
        const list = await movieService.getAll();
        res.send(list);
    }
}

module.exports = new movieController