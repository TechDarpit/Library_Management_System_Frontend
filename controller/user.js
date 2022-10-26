exports.usersList = (req, res, next) => {
  res.render('users', {
    pageTitle: 'Usesrs',
    path: '/admin/users',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.userDetails = (req, res, next) => {
  res.render('user-details', {
    pageTitle: 'User Details',
    path: '/admin/users/:user_id',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.editUser = (req, res, next) => {
  res.render('edit-user', {
    pageTitle: 'Edit User',
    path: '/admin/users/:user_id/edit',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};
