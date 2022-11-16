// const User = require('../models/user');

const models = require('../../models/index');

const User = models.User;
const Book = models.Book;
const Issued_Books = models.Issued_Books;

exports.usersList = async (req, res, next) => {
  const usersList = await User.findAll({ where: { role: 2 } });

  res.render('./admin/users', {
    pageTitle: 'Usesrs',
    path: '/admin/users',
    formsCSS: true,
    productCSS: true,
    isAuthenticated: req.isLoggedIn,
    userName: req.userName,
    users: usersList,
  });
};

exports.userDetails = async (req, res, next) => {
  const user_id = req.params.user_id;
  const userData = await User.findOne({
    where: { id: user_id, role: 2 },
  });

  const currentIssuedBooks = await Issued_Books.findAll({
    where: { user_id: user_id },
    order: [['createdAt', 'ASC']],
    include: {
      model: Book,
    },
  });

  userData.books = currentIssuedBooks;
  console.log('currentIssuedBooks: ', JSON.stringify(currentIssuedBooks));

  console.log('\n\nuserData: ', JSON.stringify(userData));

  res.render('./admin/user-details', {
    pageTitle: 'User Details',
    path: '/admin/users/:user_id',
    formsCSS: true,
    productCSS: true,
    isAuthenticated: req.isLoggedIn,
    userName: req.userName,
    user: userData,
  });
};

exports.editUser = async (req, res, next) => {
  const user_id = req.params.user_id;
  const userData = await User.findOne({
    where: { id: user_id, role: 2 },
  });
  console.log('\n\nuserData: ', JSON.stringify(userData));

  res.render('./admin/edit-user', {
    pageTitle: 'Edit User',
    path: '/admin/users/:user_id/edit',
    formsCSS: true,
    productCSS: true,
    isAuthenticated: req.isLoggedIn,
    userName: req.userName,
    user: userData,
  });
};

exports.toggleStatus = async (req, res, next) => {
  try {
    const user_id = req.params.user_id;

    const userData = await User.findOne({
      where: { id: user_id },
    });

    toggleStatus = {
      status: userData.status == 1 ? 0 : 1,
    };

    const updateStatus = await User.update(toggleStatus, {
      where: {
        id: user_id,
      },
    });

    res.redirect(`/admin/users/${user_id}`);
  } catch (error) {
    console.log('error bookDelete: ', error);
  }
};
