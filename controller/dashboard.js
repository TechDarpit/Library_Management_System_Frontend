const connection = require('../database/connection');

exports.dashboard = (req, res, next) => {
  try {
    const users = connection.query('SELECT * FROM `users`;', (err, data) => {
      console.log('\nusers: ', JSON.stringify(data));
      if (err) {
        console.log('err: ', err);
      }
      return data;
    });

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
