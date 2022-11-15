const express = require('express');

const userRoutes = require('./users');
const bookRoutes = require('./books');

const dashboardController = require('../../controller/admin/dashboard');

const router = express.Router();

router.get('/login', dashboardController.loginPage);

router.post('/login', dashboardController.login);

router.get('/forgot-password', dashboardController.forgotPassword);

router.get('/dashboard', dashboardController.dashboard);

router.use('/users', userRoutes.routes);

router.use('/books', bookRoutes.routes);

router.use('/contact-us', dashboardController.contactUsQueriesPage);

router.get('/', (req, res, next) => {
  res.redirect('/admin/dashboard');
});

router.use((req, res, next) => {
  res
    .status(404)
    .render('./admin/404', { pageTitle: 'Page Not Found', path: '/404' });
});

exports.routes = router;
