const express = require('express');

const router = express.Router();

const bookController = require('../../controller/user/books');

router.get('/', bookController.booksPage);

router.get('/:book_id', bookController.bookDetailsPage);

router.get('/issue-book/:book_id', bookController.bookDetailsPage);

router.get('/return-book/:book_id', bookController.bookDetailsPage);

exports.routes = router;
