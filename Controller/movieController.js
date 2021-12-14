const movieService = require('../Service/movieService');

class movieController {
    async getListReview(req, res) {
        const list = await movieService.getAll();
        res.send(list);
    }

    async createNewReview(req, res) {
        try {
            const newMovie = await movieService.createNew(req.body);
            res.send({ newMovie }); //success
        } catch (err) {
            console.log(err);
            res.send({ error: 1 }) //fail
        }

    }

    async deleteReview(req, res) {
        const id = req.body;
        await movieService.deleteReview(id);
        res.end(); // ????
    }
}

module.exports = new movieController