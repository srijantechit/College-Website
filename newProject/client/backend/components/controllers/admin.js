const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const login = async (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin') {
        db.query('SELECT * FROM admin WHERE username = ?', [username], async (err, results) => {
            if (err) throw err;
            if (results.length && await bcrypt.compare(password, results[0].password)) {
                const token = jwt.sign({ id: results[0].id }, 'your_jwt_secret', { expiresIn: '1h' });
                res.json({ token });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
};

const forgotPassword = (req, res) => {
    // Implement forgot password logic (e.g., sending a reset link via email)
};

const resetPassword = (req, res) => {
    // Implement reset password logic
};

module.exports = { login, forgotPassword, resetPassword };
