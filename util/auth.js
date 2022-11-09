const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.auth = (req, res, next) => {
  try {
    const access_token = req.get('Cookie')?.trim().split('=')[1];

    if (access_token) {
      const reqUserData = jwt.verify(access_token, process.env.JWT_SECRET_KEY);
      req.user = reqUserData;
      req.isLoggedIn = true;
      req.userName = reqUserData.userName;
    }

    next();
  } catch (error) {
    console.log('error: ', error);
    return res.redirect('/');
  }
};
