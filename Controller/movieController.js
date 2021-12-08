const movieService = require('../Service/movieService');

class movieController {
    async getListReview(req, res) {
        const list = await movieService.getAll();
        res.send(list);
    }

    async deleteReview(req, res) {
        const id = req.body;
        await movieService.deleteReview(id);
        res.end(); // ????
    }
}

module.exports = new movieController