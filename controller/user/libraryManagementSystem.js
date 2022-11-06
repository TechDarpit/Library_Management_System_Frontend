// const User = require('../models/user');

const models = require('../../models/index');

const User = models.User;

exports.loginPage = (req, res, next) => {
  try {
    res.render('./user/login', {
      pageTitle: 'Login',
      path: '/library-management-system/login',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.login = (req, res, next) => {
  try {
    console.log('req: ', req.body);

    res.redirect('library-management-system/home');

    // res.render('./admin/admin-login', {
    //   pageTitle: 'Admin Login',
    //   path: '/admin/login',
    //   formsCSS: true,
    //   productCSS: true,
    //   activeAddProduct: true,
    // });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.registerPage = (req, res, next) => {
  try {
    res.render('./user/register', {
      pageTitle: 'Register',
      path: '/library-management-system/register',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.register = (req, res, next) => {
  try {
    console.log('req: ', req.body);

    res.redirect('/login');

    // res.render('./admin/admin-login', {
    //   pageTitle: 'Admin Login',
    //   path: '/admin/login',
    //   formsCSS: true,
    //   productCSS: true,
    //   activeAddProduct: true,
    // });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.forgotPasswordPage = (req, res, next) => {
  try {
    res.render('./user/forgot-password', {
      pageTitle: 'Admin Forgot Password',
      path: '/library-management-system/forgot-password',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.homePage = (req, res, next) => {
  try {
    res.render('./user/home', {
      pageTitle: 'Home',
      path: '/library-management-system/',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.aboutUsPage = (req, res, next) => {
  try {
    res.render('./user/about-us', {
      pageTitle: 'About Us',
      path: '/library-management-system/about-us',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.contactUsPage = (req, res, next) => {
  try {
    res.render('./user/contact-us', {
      pageTitle: 'Contact US',
      path: '/library-management-system/contact-us',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};
