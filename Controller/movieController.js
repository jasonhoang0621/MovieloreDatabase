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
        try {
            const id = req.params.id;
            await movieService.deleteReview(id);
            res.send({ error: 0 }); //success
        }
        catch (err) {
            console.log(err);
            res.send({ error: 1 }) //fail
        }
    }

    async updateReview(req, res) {
        try {
            const id = req.params.id;
            const newInfo = req.body;
            await movieService.updateReview(id, newInfo);
            res.send({ error: 0 }); //success
        } catch (err) {
            console.log(err);
            res.send({ error: 1 }); //fail
        }
    }
}

module.exports = new movieController