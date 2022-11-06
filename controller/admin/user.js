// const User = require('../models/user');

const models = require('../../models/index');

const User = models.User;

exports.usersList = async (req, res, next) => {
  const usersList = await User.findAll({ where: { role: 2 } });

  res.render('./admin/users', {
    pageTitle: 'Usesrs',
    path: '/admin/users',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
    users: usersList,
  });
};

exports.userDetails = async (req, res, next) => {
  const user_id = req.params.user_id;
  const userData = await User.findOne({
    where: { id: user_id, role: 2 },
  });
  console.log('\n\nuserData: ', JSON.stringify(userData));

  res.render('./admin/user-details', {
    pageTitle: 'User Details',
    path: '/admin/users/:user_id',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
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
    activeAddProduct: true,
    user: userData,
  });
};
