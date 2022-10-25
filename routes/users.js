const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('users', {
    pageTitle: 'Usesrs',
    path: '/admin/users',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.get('/:user_id', (req, res, next) => {
  res.render('user-details', {
    pageTitle: 'User Details',
    path: '/admin/users/:user_id',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.get('/:user_id/edit', (req, res, next) => {
  res.render('edit-user', {
    pageTitle: 'Edit User',
    path: '/admin/users/:user_id/edit',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

exports.routes = router;
