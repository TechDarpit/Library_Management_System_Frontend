const path = require('path');
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin/admin');

const LmsData = require('./routes/user/library-management-system');

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.use('/Images', express.static(path.join(__dirname, 'Images')));

// app.use(express.static('images'));
// app.use('/images', express.static('images'));

app.use('/admin', adminData.routes);

app.use('/library-management-system', LmsData.routes);

app.get('/', (req, res, next) => {
  res.redirect('library-management-system/');
});

// app.use((req, res, next) => {
//   res
//     .status(404)
//     .render('./user/404', { pageTitle: 'Page Not Found', path: '/404' });
// });

const port = process.env.PORT_NUMBER;
app.listen(port, (error) => {
  if (error) {
    console.log('Unable to start server. :( \n', error);
  } else {
    console.log(
      `\nLibrary managemene system started on http://localhost:${port}`
    );
  }
});
