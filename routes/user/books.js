const express = require('express');

const router = express.Router();

const { auth } = require('../../util/auth');
const bookController = require('../../controller/user/books');

router.get('/', bookController.booksPage);

router.get('/:book_id', auth, bookController.bookDetailsPage);

router.post('/issue-book/:book_id', auth, bookController.issueBook);

router.post('/return-book/:book_id', auth, bookController.returnBook);

exports.routes = router;
