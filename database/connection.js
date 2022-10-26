const db = require('mysql2');
const pool = db.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'library_vishal',
  password: '',
});

pool.connect((result) => {
  console.log('result: ', result);
  console.log('Database connected successfully :)');
});

module.exports = pool;
