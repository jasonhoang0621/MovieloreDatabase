const express = require('express');
const router = express.Router();

const userController = require('../Controller/userController');

router.post('/authenticate', userController.getUser);
router.post('/', userController.createUser);

module.exports = router;