const path = require('path');
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
console.log('multer: ', multer);

const app = express();

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  },
});

const imageFileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin/admin');

const LmsData = require('./routes/user/library-management-system');

app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(
  multer({ deat: 'book_images', fileFilter: imageFileFilter }).single(
    'book_image'
  )
);

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

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
