const { Pool } = require('pg');


const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'database',
  password: 'password',
  port: process.env.DBPORT, 
});


module.exports = pool;