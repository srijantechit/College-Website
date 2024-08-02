const express = require('express');
const { login, forgotPassword, resetPassword } = require('../../controllers/adminllers/admin');

const router = express.Router();

router.post('/login', login);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;
