exports.bookList = (req, res, next) => {
  res.render('books', {
    pageTitle: 'Books',
    path: '/admin/books',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
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

exports.bookDetails = (req, res, next) => {
  res.render('book-details', {
    pageTitle: 'Book Deatils',
    path: '/admin/books/:book_id',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.editBook = (req, res, next) => {
  res.render('edit-book', {
    pageTitle: 'Edit Book',
    path: '/admin/books/:book_id',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
