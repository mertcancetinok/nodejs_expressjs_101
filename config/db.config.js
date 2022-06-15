const { createPool } = require('mysql');

const db = createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodejs',
    connectionLimit: 10,
    port: 3306
});

module.exports = db;