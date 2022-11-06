const express = require('express');

const router = express.Router();

const bookController = require('../controller/book');

router.get('/', bookController.bookList);

router.get('/add', bookController.addBookPage);

router.post('/add', bookController.addBook);

router.get('/:book_id', bookController.bookDetails);

router.post('/:book_id/delete', bookController.bookDelete);

router.get('/:book_id/edit', bookController.editBookPage);

router.post('/:book_id/edit', bookController.editBook);

exports.routes = router;
