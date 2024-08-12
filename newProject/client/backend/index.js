const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const mysql = require("mysql2");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Create a connection to the MySQL database
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",  // Replace with your MySQL root password
  database: "clg_website",      // Replace with your database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nehalsalunke2000@gmail.com", // Replace with your Gmail address
    pass: "Swaraj1234@",        // Replace with your Gmail password or app-specific password
  },
});

// Email sending function
const sendEmail = (subject, text) => {
  const mailOptions = {
    from: "nehalsalunke2000@gmail.com",  
    to: "nehals@myospaz.in",    
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

// API endpoint to handle contact form submissions

app.post("/send-email", (req, res) => {
  const { name, email, mobile, message } = req.body;

  const query =
    "INSERT INTO contact_us (name, email, mobile_no, message) VALUES (?, ?, ?, ?)";
  db.query(query, [name, email, mobile, message], (err) => {
    if (err) {
      console.error("Error storing Enquiry data: ", err);
      return res.status(500).send("Error storing Enquiry data");
    }
    sendEmail(
      "New Enquiry Form Submission",
      `You have received a new enquiry form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${mobile}\nMessage: ${message}`
    );
    res.status(200).send("Enquiry email sent successfully");
  });
});

// app.post("/send-email", (req, res) => {
//   const name = "John Doe";
//   const email = "john.doe@example.com";
//   const mobile_no = "1234567890";
//   const message = "Test message";

//   const query =
//     "INSERT INTO contact_us (name, email, mobile_no, message) VALUES (?, ?, ?, ?)";
//   db.query(query, [name, email, mobile_no, message], (err) => {
//     if (err) {
//       console.error("Error storing Enquiry data: ", err.message);
//       return res.status(500).send("Error storing Enquiry data");
//     }
//     sendEmail(
//       "New Enquiry Form Submission",
//       `You have received a new enquiry form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${mobile_no}\nMessage: ${message}`
//     );
//     res.status(200).send("Enquiry email sent successfully");
//   });
// });


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
