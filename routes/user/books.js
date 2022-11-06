const express = require('express');

const router = express.Router();

const bookController = require('../../controller/user/books');

router.get('/', bookController.booksPage);

router.get('/book-details', bookController.bookDetailsPage);

exports.routes = router;
