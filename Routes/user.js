const express = require('express');
const router = express.Router();

const userController = require('../Controller/userController');

//favorite
router.post('/favorite/delete/:id', userController.removeFavorite);
router.post('/favorite/:id', userController.addFavorite);

//notification
router.post('/notification/:id', userController.addNotification);
router.get('/notification/:id', userController.getNotification);

//profile
router.post('/update/:id', userController.updateInfo);
router.post('/password/:id', userController.updatePassword);
router.post('/authenticate', userController.getUser);
router.post('/', userController.createUser);

module.exports = router;