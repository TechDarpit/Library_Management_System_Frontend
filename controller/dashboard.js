const connection = require('../database/connection');

exports.login = (req, res, next) => {
  try {
    res.render('login', {
      pageTitle: 'Admin Login',
      path: '/admin/login',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.dashboard = (req, res, next) => {
  try {
    res.render('dashboard', {
      pageTitle: 'Dashboard',
      path: '/admin/dashboard',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};
