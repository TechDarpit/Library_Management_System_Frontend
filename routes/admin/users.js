const express = require('express');

const router = express.Router();

const adminUsersController = require('../../controller/admin/user');

router.get('/', adminUsersController.usersList);

router.get('/:user_id', adminUsersController.userDetails);

router.get('/:user_id/edit', adminUsersController.editUser);

router.post('/:user_id/change-status', adminUsersController.toggleStatus);

exports.routes = router;
