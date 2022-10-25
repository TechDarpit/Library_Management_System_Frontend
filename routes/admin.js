const express = require('express');

const userRoutes = require('./users');
const bookRoutes = require('./books');

const router = express.Router();

// /admin/add-product => GET
router.get('/dashboard', (req, res, next) => {
  res.render('dashboard', {
    pageTitle: 'Dashboard',
    path: '/admin/dashboard',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.use('/users', userRoutes.routes);

router.use('/books', bookRoutes.routes);

// /admin/add-product => POST
// router.post('/add-product', (req, res, next) => {
//   products.push({ title: req.body.title });
//   res.redirect('/');
// });

exports.routes = router;
