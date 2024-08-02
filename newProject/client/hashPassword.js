const bcrypt = require('bcryptjs');
const mysql = require('mysql2');

// MySQL database connection setup
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


// Hash the admin password
const password = 'admin@1';
bcrypt.hash(password, 10, (err, hash) => {
    if (err) throw err;

    console.log('Hashed password:', hash);

    // Insert the hashed password into the database
    const username = 'admin';
    const query = 'INSERT INTO admin (username, password) VALUES (?, ?)';
    db.query(query, [username, hash], (err, results) => {
        if (err) throw err;
        console.log('Admin user inserted with hashed password');
        db.end();
    });
});
