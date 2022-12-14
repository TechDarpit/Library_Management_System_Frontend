const { sequelize } = require('../../models/index');
const models = require('../../models/index');
const Book = models.Book;
const User = models.User;
const Issued_Books = models.Issued_Books;

const { Op } = require('sequelize');

exports.bookList = async (req, res, next) => {
  try {
    const booksList = await Book.findAll({ where: { status: [0, 1] } });

    res.render('./admin/books', {
      pageTitle: 'Books',
      path: '/admin/books',
      formsCSS: true,
      productCSS: true,
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
      books: booksList,
    });
  } catch (error) {
    console.log('error bookList: ', error);
  }
};

exports.addBookPage = async (req, res, next) => {
  try {
    res.render('./admin/add-book', {
      pageTitle: 'Add Book',
      path: '/admin/books/add',
      formsCSS: true,
      productCSS: true,
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
    });
  } catch (error) {
    console.log('error addBookPage: ', error);
  }
};

exports.addBook = async (req, res, next) => {
  try {
    const { title, author_name, description, category, quantity, image } =
      req.body;

    const tempAddBook = {
      title,
      author_name,
      description,
      total_quantity: quantity,
      available_quantity: quantity,
      category: category,
      image: req.file.path,
    };
    console.log('\n\ntempAddBook: ', tempAddBook);

    const addBook = await Book.create(tempAddBook);
    console.log('\n\naddBook: ', addBook);
    res.redirect('/admin/books');
  } catch (error) {
    console.log('error addBook: ', error);
  }
};

exports.bookDetails = async (req, res, next) => {
  try {
    const books_id = req.params.book_id;
    const bookData = await Book.findOne({
      where: { id: books_id, status: [0, 1] },
    });

    const currentIssuedBooks = await Issued_Books.findAll({
      where: { book_id: books_id, return_date: null },
      order: [['createdAt', 'ASC']],
      include: {
        model: User,
      },
    });

    console.log('currentIssuedBooks: ', currentIssuedBooks);
    bookData.Issued_Books = currentIssuedBooks;

    console.log('\n\nbookData: ', JSON.stringify(bookData));

    res.render('./admin/book-details', {
      pageTitle: 'Book Deatils',
      path: '/admin/books/:book_id',
      formsCSS: true,
      productCSS: true,
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
      book: bookData,
    });
  } catch (error) {
    console.log('error bookDetails: ', error);
  }
};

exports.editBookPage = async (req, res, next) => {
  const books_id = req.params.book_id;
  const bookData = await Book.findOne({
    where: { id: books_id },
  });

  res.render('./admin/edit-book', {
    pageTitle: 'Edit Book',
    path: '/admin/books/:book_id',
    formsCSS: true,
    productCSS: true,
    isAuthenticated: req.isLoggedIn,
    userName: req.userName,
    book: bookData,
  });
};

exports.editBook = async (req, res, next) => {
  try {
    const books_id = req.params.book_id;

    const { title, author_name, description, category, quantity, image } =
      req.body;

    const tempUpdateBook = {
      title,
      author_name,
      description,
      total_quantity: quantity,
      available_quantity: quantity,
      category: category,
      image: req.file?.path ? req.file.path : undefined,
    };

    const updateBook = await Book.update(tempUpdateBook, {
      where: { id: books_id },
    });

    res.redirect('/admin/books');
  } catch (error) {
    console.log('error editBook: ', error);
  }
};

exports.bookDelete = async (req, res, next) => {
  try {
    const books_id = req.params.book_id;

    deleteStatus = {
      status: 2,
    };

    const deleteBook = await Book.update(deleteStatus, {
      where: {
        id: books_id,
        available_quantity: { [Op.eq]: sequelize.col('total_quantity') },
      },
    });

    // console.log('deleteBook: ', !!deleteBook[0]);

    res.redirect('/admin/books');
  } catch (error) {
    console.log('error bookDelete: ', error);
  }
};

exports.toggleStatus = async (req, res, next) => {
  try {
    const book_id = req.params.book_id;

    const bookData = await Book.findOne({
      where: { id: book_id },
    });

    toggleStatus = {
      status: bookData.status == 1 ? 0 : 1,
    };

    const updateStatus = await Book.update(toggleStatus, {
      where: {
        id: book_id,
      },
    });

    res.redirect(`/admin/books/${book_id}`);
  } catch (error) {
    console.log('error bookDelete: ', error);
  }
};
