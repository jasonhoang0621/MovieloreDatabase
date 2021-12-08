const express = require('express');
const router = express.Router();

const userController = require('../Controller/userController');

router.get('/:email', userController.getUser);
router.post('/', userController.createUser);

module.exports = router;