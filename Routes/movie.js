const express = require('express');
const router = express.Router();

const movieController = require('../Controller/movieController');

router.delete('/:id', movieController.deleteReview);
router.get('/', movieController.getListReview);

module.exports = router;