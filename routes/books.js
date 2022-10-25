const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('books', {
    pageTitle: 'Books',
    path: '/admin/books',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.get('/add', (req, res, next) => {
  res.render('add-book', {
    pageTitle: 'Add Book',
    path: '/admin/add-book',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.get('/:book_id', (req, res, next) => {
  res.render('book-details', {
    pageTitle: 'Book Deatils',
    path: '/admin/books/:book_id',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.get('/:book_id/edit', (req, res, next) => {
  res.render('edit-book', {
    pageTitle: 'Edit Book',
    path: '/admin/books/:book_id',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

exports.routes = router;
