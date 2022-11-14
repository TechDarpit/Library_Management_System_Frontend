const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const models = require('../../models/index');

const Book = models.Book;
const User = models.User;
const Issued_Books = models.Issued_Books;

exports.loginPage = async (req, res, next) => {
  try {
    res.render('./admin/admin-login', {
      pageTitle: 'Admin Login',
      path: '/admin/login',
      formsCSS: true,
      productCSS: true,
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email: email, role: 1, status: 1 },
    });

    if (!user) {
      res.redirect('/admin/login');
    }

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (passwordMatch) {
      const token = jwt.sign(
        {
          user_id: user.id,
          user_email: user.email,
          role: user.role,
          userName: user.first_name + ' ' + user.last_name,
        },
        process.env.JWT_SECRET_KEY
      );

      res.cookie('access_token', token, { maxAge: 432000000 });
      res.redirect('/admin/');
    } else {
      res.redirect('/');
    }
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.forgotPassword = (req, res, next) => {
  try {
    res.render('./admin/admin-forgot-password', {
      pageTitle: 'Admin Forgot Password',
      path: '/admin/forgot-password',
      formsCSS: true,
      productCSS: true,
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.dashboard = (req, res, next) => {
  try {
    res.render('./admin/dashboard', {
      pageTitle: 'Dashboard',
      path: '/admin/dashboard',
      formsCSS: true,
      productCSS: true,
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};
