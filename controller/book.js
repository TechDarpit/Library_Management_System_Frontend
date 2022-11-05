const models = require('../models/index');
const Book = models.Book;
const Issued_Books = models.Issued_Books;

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

exports.addBookPage = async (req, res, next) => {
  try {
    res.render('add-book', {
      pageTitle: 'Add Book',
      path: '/admin/add-book',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.addBook = async (req, res, next) => {
  try {
    const { title, author_name, description, quantity, image } = req.body;

    const tempAddBook = {
      title,
      author_name,
      description,
      total_quantity: quantity,
      available_quantity: quantity,
      image,
    };

    const addBook = await Book.create(tempAddBook);
    console.log('\n\naddBook: ', addBook);
    res.redirect('/admin/books');
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.bookDetails = async (req, res, next) => {
  const books_id = req.params.book_id;
  const bookData = await Book.findOne({
    where: { id: books_id },
    include: {
      model: Issued_Books,
    },
  });

  console.log('\n\nbookData: ', JSON.stringify(bookData));

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
  const bookData = await Book.findOne({
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
