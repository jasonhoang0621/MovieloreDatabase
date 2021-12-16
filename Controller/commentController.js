const commentService = require('../Service/commentService')

class commentController {
    async getComment(req, res) {
        try {
            const reviewID = req.params.id;
            const comments = await commentService.getAllComments(reviewID);
            res.send(comments)
        } catch (err) {
            console.log(err);
            res.send({ error: 1 }) //fail
        }
    }

    async storeComment(req, res) {
        try {
            const newComment = req.body;
            await commentService.storeNewCommnet(newComment);
            res.send(newComment)
        } catch (err) {
            console.log(err);
            res.send({ error: 1 }); //fail
        }
    }

    async deleteComment(req, res) {
        try {
            const commentID = req.params.id;
            await commentService.deleteAComment(commentID)
            res.send({ error: 0 }); //fail
        } catch (err) {
            console.log(err);
            res.send({ error: 1 }); //fail
        }
    }
}

module.exports = new commentController;