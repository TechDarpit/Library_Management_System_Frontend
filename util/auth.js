const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req, res, next) => {
  try {
    const access_token = req.get('Cookie')?.trim().split('=')[1];

    const adminURL = req.originalUrl.includes('admin');

    if (access_token) {
      const reqUserData = jwt.verify(access_token, process.env.JWT_SECRET_KEY);

      if (adminURL && reqUserData.role !== 1) {
        res.redirect('/admin/login');
      }

      req.user = reqUserData;
      req.isLoggedIn = true;
      req.userName = reqUserData.userName;
    } else if (adminURL) {
      res.redirect('/admin/login');
    }

    next();
  } catch (error) {
    console.log('error: ', error);
    return res.redirect('/');
  }
};
