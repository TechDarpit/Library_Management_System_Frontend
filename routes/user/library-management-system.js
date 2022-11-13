const express = require('express');

const router = express.Router();

const booksRoutes = require('./books');

const LMSController = require('../../controller/user/libraryManagementSystem');
const { auth } = require('../../util/auth');

router.get('/login', LMSController.loginPage);

router.post('/login', LMSController.login);

router.get('/register', LMSController.registerPage);

router.post('/register', LMSController.register);

router.get('/forgot-password', LMSController.forgotPasswordPage);

router.get('/', auth, LMSController.homePage);

router.get('/about-us', auth, LMSController.aboutUsPage);

router.get('/contact-us', auth, LMSController.contactUsPage);

router.use('/books', booksRoutes.routes);

// router.use((req, res, next) => {
//   res
//     .status(404)
//     .render('./user/404', { pageTitle: 'Page Not Found', path: '/404' });
// });

exports.routes = router;
