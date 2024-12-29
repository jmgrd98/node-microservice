const express = require('express');
const pool = require('./db');
const router = express.Router();

// Test endpoint
router.get('/test', async (req, res) => {
  res.json({ message: 'API is working!' });
});

// Example: Fetch all users
router.get('/users', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
