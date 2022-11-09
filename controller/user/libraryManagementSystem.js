const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const models = require('../../models/index');

const User = models.User;

exports.loginPage = (req, res, next) => {
  try {
    res.clearCookie('access_token');
    res.render('./user/login', {
      pageTitle: 'Login',
      path: '/library-management-system/login',
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
    console.log('req: ', req.body);
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email: email, role: 2, status: 1 },
    });

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

      // res.setHeader('Set-Cookie', `token=${token}`);
      res.cookie('access_token', token, { maxAge: 432000000 });
      res.redirect('/library-management-system/');
    } else {
      res.redirect('/');
    }
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
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};

exports.register = async (req, res, next) => {
  try {
    const { first_name, last_name, email, password, confirmPassword } =
      req.body;
    const hash_password = bcrypt.hashSync(password, 12);

    const userData = { first_name, last_name, email, password: hash_password };

    const userRegistered = await User.create(userData);

    res.redirect('/library-management-system/login');
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
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
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
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
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
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
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
      isAuthenticated: req.isLoggedIn,
      userName: req.userName,
    });
  } catch (error) {
    console.log('error: ', error);
  }
};
