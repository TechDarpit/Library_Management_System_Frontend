const models = require('../models/index');
const Book = models.Book;

exports.bookList = async (req, res, next) => {
  const booksList = await Book.findAll();

  res.render('books', {
    pageTitle: 'Books',
    path: '/admin/books',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    books: booksList,
  });
};

exports.addBook = (req, res, next) => {
  res.render('add-book', {
    pageTitle: 'Add Book',
    path: '/admin/add-book',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.bookDetails = async (req, res, next) => {
  const books_id = req.params.book_id;
  const bookData = await Books.findOne({
    where: { id: books_id },
  });

  res.render('book-details', {
    pageTitle: 'Book Deatils',
    path: '/admin/books/:book_id',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    book: bookData,
  });
};

exports.editBook = async (req, res, next) => {
  const books_id = req.params.book_id;
  const bookData = await Books.findOne({
    where: { id: books_id },
  });

  res.render('edit-book', {
    pageTitle: 'Edit Book',
    path: '/admin/books/:book_id',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    book: bookData,
  });
};
