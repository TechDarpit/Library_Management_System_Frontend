const path = require('path');
require('dotenv').config();

const express = require('express');
// const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
// app.use(shopRoutes);

app.get('/', (req, res, next) => {
  res.redirect('/admin/dashboard');
});

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
});

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
