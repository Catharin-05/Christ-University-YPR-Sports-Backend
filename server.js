const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

// Import and use routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/student', require('./routes/student'));
app.use('/api/coach', require('./routes/coach'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/attendance', require('./routes/attendance'));
// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

