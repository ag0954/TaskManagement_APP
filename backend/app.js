const express = require('express');
const passport = require('passport');
const cors = require('cors');
require('dotenv').config();

// JWT strategy setup - require authorization
require('./auth_jwt');

const authRoutes = require('./authRoutes');
const taskRoutes = require('./taskRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Root endpoint (optional)
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Task Management API!' });
});

module.exports = app;

