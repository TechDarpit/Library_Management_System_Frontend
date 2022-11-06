const models = require('../../models/index');
const Book = models.Book;
const Issued_Books = models.Issued_Books;

exports.bookList = async (req, res, next) => {
  try {
    const booksList = await Book.findAll({ where: { status: [0, 1] } });

    res.render('./admin/books', {
      pageTitle: 'Books',
      path: '/admin/books',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
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
      activeAddProduct: true,
    });
  } catch (error) {
    console.log('error addBookPage: ', error);
  }
};

exports.addBook = async (req, res, next) => {
  try {
    const { title, author_name, description, quantity, book_image } = req.body;

    const book_image_path = req.file;
    console.log('book_image_path: ', book_image_path);

    const tempAddBook = {
      title,
      author_name,
      description,
      total_quantity: quantity,
      available_quantity: quantity,
      image: book_image_path,
    };

    // const addBook = await Book.create(tempAddBook);
    // console.log('\n\naddBook: ', addBook);
    // res.redirect('/admin/books');
  } catch (error) {
    console.log('error addBook: ', error);
  }
};

exports.bookDetails = async (req, res, next) => {
  try {
    const books_id = req.params.book_id;
    const bookData = await Book.findOne({
      where: { id: books_id, status: [0, 1] },
      include: {
        model: Issued_Books,
      },
    });

    console.log('\n\nbookData: ', JSON.stringify(bookData));

    res.render('./admin/book-details', {
      pageTitle: 'Book Deatils',
      path: '/admin/books/:book_id',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
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
    activeAddProduct: true,
    book: bookData,
  });
};

exports.editBook = async (req, res, next) => {
  try {
    const books_id = req.params.book_id;

    const { title, author_name, description, quantity, book_image } = req.body;

    const tempUpdateBook = {
      title,
      author_name,
      description,
      total_quantity: quantity,
      available_quantity: quantity,
      image: book_image,
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
    console.log('books_id: ', books_id);

    deleteStatus = {
      status: 2,
    };

    const deleteBook = await Book.update(deleteStatus, {
      where: { id: books_id },
    });

    res.redirect('/admin/books');
  } catch (error) {
    console.log('error bookDelete: ', error);
  }
};
