const express = require('express');

const userRoutes = require('./users');
const bookRoutes = require('./books');

const dashboardController = require('../controller/dashboard');

const router = express.Router();

// /admin/add-product => GET
router.get('/login', dashboardController.loginPage);

router.post('/login', dashboardController.login);

router.get('/forgot-password', dashboardController.forgotPassword);

router.get('/dashboard', dashboardController.dashboard);

router.use('/users', userRoutes.routes);

router.use('/books', bookRoutes.routes);

exports.routes = router;
