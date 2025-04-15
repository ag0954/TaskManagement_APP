const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('./user');  
const router = express.Router();

// Sign up
router.post('/signup', async (req, res) => {
  try {
    const { name, username, password } = req.body;
    const user = new User({ name, username, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ message: 'Username already exists' });
    } else {
      res.status(500).json({ message: 'Server error', error: err });
    }
  }
});

// Sign in
router.post('/signin', async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).json({ message: 'Invalid username' });

    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) return res.status(401).json({ message: 'Incorrect password' });

    const payload = { id: user._id, username: user.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token: 'Bearer ' + token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
});

module.exports = router;
