const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'clg_website'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

module.exports = db;