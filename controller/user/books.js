const models = require('../../models/index');
const Book = models.Book;
const Issued_Books = models.Issued_Books;

exports.booksPage = async (req, res, next) => {
  try {
    const books = await Book.findAll({
      where: { status: 1 },
      order: [['title', 'ASC']],
    });

    res.render('./user/books', {
      pageTitle: 'Books',
      path: '/library-management-system/books',
      formsCSS: true,
      productCSS: true,
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
      books,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.bookDetailsPage = async (req, res, next) => {
  const book_id = req.params.book_id;

  const bookDetails = await Book.findOne({ where: { id: book_id, status: 1 } });

  if (!bookDetails) {
    res.redirect('/library-management-system/books');
  }

  try {
    res.render('./user/book-details', {
      pageTitle: 'Book Details',
      path: '/library-management-system/book/book-details',
      formsCSS: true,
      productCSS: true,
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
      book: bookDetails,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.bookDetails = async (req, res, next) => {
  try {
    const books_id = req.params.book_id;
    const bookData = await Book.findOne({
      where: { id: books_id, status: 1 },
    });

    console.log('\n\nbookData: ', JSON.stringify(bookData));

    // res.render('./admin/book-details', {
    //   pageTitle: 'Book Deatils',
    //   path: '/admin/books/:book_id',
    //   formsCSS: true,
    //   productCSS: true,
    //   isAuthenticated: req.isLoggedIn,
    // userName: req.userName,
    //   book: bookData,
    // });
  } catch (error) {
    console.log('error bookDetails: ', error);
  }
};
