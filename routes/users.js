const express = require('express');

const router = express.Router();

const userController = require('../controller/user');

router.get('/', userController.usersList);

router.get('/:user_id', userController.userDetails);

router.get('/:user_id/edit', userController.editUser);

exports.routes = router;
