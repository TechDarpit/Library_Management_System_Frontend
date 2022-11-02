const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const User = require('./Model/User');
const Books = require('./Model/Books');
const Register = require('./Model/Register');
const sequelize = require('./database/connection');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
// app.use(shopRoutes);

app.get('/', (req, res, next) => {
  res.redirect('/admin/dashboard');
});

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found', path: '/404' });
});

app.listen(5000);

// <------------------------------ Assosiation -------------------------------------------------------------->

User.hasMany(Register, { foreingKey: 'userId' });
Books.hasMany(Register, { foreingKey: 'BookId' });
Register.belongsTo(User, { foreingKey: 'userId' });
Register.belongsTo(Books, { foreingKey: 'BookId' });

// <------------------------------- Sequelize setting and starting ---------------------------------------->
sequelize
  .sync({ alter: false })
  .then(() => {
    console.log('Connection has been established successfully.');
    console.log('\nLibrary managemene system started on http://localhost:5000');
  })
  .catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });
