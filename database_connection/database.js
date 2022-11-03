require('dotenv').config();
const Sequelize = require('sequelize');
const Chalk = require('chalk');

const DB_CREDENTIAL = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  // port    : process.env.DB_PORT,
  logging: process.env.DB_LOGGING === 'true' ? console.log : false,
  dialect: 'mysql',
  dialectOptions: {
    decimalNumbers: true,
  },
  connectionLimit: 100, //important
  pool: {
    max: 100,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
  seederStorage: 'sequelize',
  seederStorageTableName: 'SequelizeMetaSeeders',
};

var sequelize = new Sequelize(DB_CREDENTIAL);
sequelize
  .authenticate()
  .then(() => {
    console.log(
      Chalk.greenBright(`Database connection established successfully :)`)
    );
  })
  .catch((err) => {
    console.log('Failed to connect to Database  :( \n', err);
    process.exit();
  });

let db = { Sequelize, sequelize };

module.exports = db;

// module.exports = {
//   development: DB_CREDENTIAL,
//   database: sequelize,
// };

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

// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('lms', 'root', '', {
//   dialect: 'mysql',
//   host: 'localhost',
//   pool: {
//     max: 100,
//     min: 0,
//     acquire: 30000,
//     idle: 10000,
//   },
// });

// module.exports = sequelize;
