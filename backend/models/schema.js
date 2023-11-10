const { Pool } = require('pg');


const pool = new Pool({
  user: 'your_username',
  host: 'your_host',
  database: 'database',
  password: 'password',
  port: 5432, 
});


module.exports = pool;