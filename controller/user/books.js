const models = require('../../models/index');
const Book = models.Book;
const Issued_Books = models.Issued_Books;

exports.booksPage = (req, res, next) => {
  try {
    res.render('./user/books', {
      pageTitle: 'Books',
      path: '/library-management-system/books',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.bookDetailsPage = (req, res, next) => {
  try {
    res.render('./user/book-details', {
      pageTitle: 'Book Details',
      path: '/library-management-system/book/book-details',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
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
    //   activeAddProduct: true,
    //   book: bookData,
    // });
  } catch (error) {
    console.log('error bookDetails: ', error);
  }
};
