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
  try {
    const book_id = req.params.book_id;
    const user_id = req.user?.user_id;

    const bookDetails = await Book.findOne({
      where: { id: book_id, status: 1 },
    });

    if (!bookDetails) {
      res.redirect('/library-management-system/books');
    }

    let alreayIssued = false;
    if (user_id && bookDetails) {
      alreayIssued = await Issued_Books.findOne({
        where: { book_id: book_id, user_id: user_id, return_date: null },
      });
    }

    res.render('./user/book-details', {
      pageTitle: 'Book Details',
      path: '/library-management-system/book/book-details',
      formsCSS: true,
      productCSS: true,
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
      book: bookDetails,
      isIssued: !!alreayIssued,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.issueBook = async (req, res, next) => {
  try {
    const user_id = req.user.user_id;
    const book_id = req.params.book_id;

    if (!user_id) {
      res.redirect('/library-management-system/login');
    }

    const bookData = await Book.findOne({
      where: { id: book_id, status: 1 },
    });

    if (!bookData) {
      res.redirect('/library-management-system/books');
    }

    const alreayIssued = await Issued_Books.findOne({
      where: { book_id: book_id, user_id: user_id, return_date: null },
    });

    if (alreayIssued) {
      res.redirect(`/library-management-system/books/${book_id}`);
    } else {
      const issueBook = Issued_Books.create({
        user_id,
        book_id,
        issue_date: Date.now(),
      });

      const updateQuantity = await Book.update(
        {
          available_quantity: bookData.available_quantity - 1,
        },
        { where: { id: book_id } }
      );

      res.redirect(`/library-management-system/books/${book_id}`);
    }
  } catch (error) {
    console.log('error issueBook: ', error);
  }
};

exports.returnBook = async (req, res, next) => {
  try {
    const user_id = req.user.user_id;
    const book_id = req.params.book_id;

    if (!user_id) {
      res.redirect('/library-management-system/login');
    }

    const bookData = await Book.findOne({
      where: { id: book_id, status: 1 },
    });

    if (!bookData) {
      res.redirect('/library-management-system/books');
    }

    const alreayIssued = await Issued_Books.findOne({
      where: { book_id: book_id, user_id: user_id, return_date: null },
    });

    if (!alreayIssued) {
      console.log('NO Return');
      res.redirect(`/library-management-system/books/${book_id}`);
    } else {
      console.log('Return');
      const issueBook = Issued_Books.update(
        {
          return_date: Date.now(),
        },
        { where: { book_id: book_id, user_id: user_id, return_date: null } }
      );

      const updateQuantity = await Book.update(
        {
          available_quantity: bookData.available_quantity + 1,
        },
        { where: { id: book_id } }
      );
      console.log('updateQuantity: ', updateQuantity);

      res.redirect(`/library-management-system/books/${book_id}`);
    }
  } catch (error) {
    console.log('error returnBook: ', error);
  }
};
