exports.loginPage = (req, res, next) => {
  try {
    res.render('./admin/admin-login', {
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

exports.login = (req, res, next) => {
  try {
    console.log('req: ', req.body);

    res.redirect('/admin/dashboard');

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

exports.forgotPassword = (req, res, next) => {
  try {
    res.render('./admin/admin-forgot-password', {
      pageTitle: 'Admin Forgot Password',
      path: '/admin/forgot-password',
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
    res.render('./admin/dashboard', {
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
