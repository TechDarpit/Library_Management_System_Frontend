const express = require('express');

const router = express.Router();

const bookController = require('../controller/book');

router.get('/', bookController.bookList);

router.get('/add', bookController.addBookPage);

router.post('/add', bookController.addBook);

router.get('/:book_id', bookController.bookDetails);

router.get('/:book_id/edit', bookController.editBook);

exports.routes = router;
