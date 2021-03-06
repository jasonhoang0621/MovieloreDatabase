const express = require('express');
const router = express.Router();

const commentController = require('../Controller/commentController');

router.post('/update', commentController.updateComment);
router.get('/:id', commentController.getComment);
router.delete('/:id', commentController.deleteComment);
router.post('/', commentController.storeComment);

module.exports = router;