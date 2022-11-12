const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

const adminBookController = require('../../controller/admin/book');

const storage = multer.diskStorage({
  //destination:'Images'
  destination: (req, file, cb) => {
    cb(null, 'Images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.get('/', adminBookController.bookList);

router.get('/add', adminBookController.addBookPage);

router.post('/add', upload.single('image'), adminBookController.addBook);

router.get('/:book_id', adminBookController.bookDetails);

router.post('/:book_id/delete', adminBookController.bookDelete);

router.get('/:book_id/edit', adminBookController.editBookPage);

router.post(
  '/:book_id/edit',
  upload.single('image'),
  adminBookController.editBook
);

exports.routes = router;
