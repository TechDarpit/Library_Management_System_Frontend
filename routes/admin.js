const express = require('express');

const userRoutes = require('./users');
const bookRoutes = require('./books');

const dashboardController = require('../controller/dashboard');

const router = express.Router();

// /admin/add-product => GET
router.get('/dashboard', dashboardController.dashboard);

router.use('/users', userRoutes.routes);

router.use('/books', bookRoutes.routes);

// /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   products.push({ title: req.body.title });
//   res.redirect('/');
// });

exports.routes = router;
