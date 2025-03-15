require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

// Connect Database
connectDB();

// API routes
app.use('/api/users', require('./SAT2/server/routes/users'));

// Serve static files
app.use(express.static(path.join(__dirname, 'SAT2/build')));

// Catchall handler
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'SAT2/build', 'index.html'));
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
