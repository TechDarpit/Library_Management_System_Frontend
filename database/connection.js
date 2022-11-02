// const db = require('mysql2');
// const pool = db.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'library_vishal',
//   password: '',
// });

// pool.connect((result) => {
//   console.log('result: ', result);
//   console.log('Database connected successfully :)');
// });

// module.exports = pool;

const Sequelize = require('sequelize');

const sequelize = new Sequelize('lms', 'root', '', {
  dialect: 'mysql',
  host: 'localhost',
  pool: {
    max: 100,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
