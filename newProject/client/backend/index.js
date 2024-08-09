const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//contact us form data submission :-
  // Create a route to handle the form submission
  app.post('/send-email', (req, res) => {
    const { name, mobile, message } = req.body;

    // Create a transporter for sending email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'nehalsalunke2000@gmail.com',  // Replace with your Gmail address
          pass: 'Swaraj1234@'    // Replace with your Gmail password or App Password
      }
  });

    // Set up email data
    let mailOptions = {
        from: 'nehalsalunke2000@gmail.com',
        to: 'nehals@myospaz.in',
        subject: 'New Contact Us Message',
        text: `Name: ${name}\nMobile: ${mobile}\nMessage: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        }
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully');
    });
  });
// end contact us form data submission

//admim login 
  const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  db.connect((err) => {
    if (err) {
      console.error('Database connection failed:', err.stack);
      return;
    }
    console.log('Connected to database.');
  });

  app.post('/admin/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM admins WHERE username = ?';
    db.query(query, [username], (err, results) => {
      if (err) {
        return res.status(500).send('Server error');
      }
      if (results.length === 0) {
        return res.status(401).send('Invalid username or password');
      }

      const admin = results[0];
      bcrypt.compare(password, admin.password, (err, isMatch) => {
        if (err) {
          return res.status(500).send('Server error');
        }
        if (!isMatch) {
          return res.status(401).send('Invalid username or password');
        }

        res.send('Login successful');
      });
    });
  });
// end admin login



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
