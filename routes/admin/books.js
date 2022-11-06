const express = require('express');

const router = express.Router();

const adminBookController = require('../../controller/admin/book');

router.get('/', adminBookController.bookList);

router.get('/add', adminBookController.addBookPage);

router.post('/add', adminBookController.addBook);

router.get('/:book_id', adminBookController.bookDetails);

router.post('/:book_id/delete', adminBookController.bookDelete);

router.get('/:book_id/edit', adminBookController.editBookPage);

router.post('/:book_id/edit', adminBookController.editBook);

exports.routes = router;
