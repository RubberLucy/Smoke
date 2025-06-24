console.log('Server is starting...');

//connecting dependencies via constants
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./server/db');

// Creating instances
const app = express();
const PORT = 1010;

// Coding in the functionality
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'register.html'));
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    if (row) {
      return res.json({ success: true, message: 'Login successful!' });
    }
    res.json({ success: false, message: 'Invalid username or password' });
  });
});

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  db.get('SELECT * FROM users WHERE username = ? OR email = ?', [username, email], (row) => {
    if (row) {
      return res.send({ success: false, message: 'Username or email already exists' });
    }
    db.run('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], function(err) {
      if (err) {
        return res.status(500).send({ success: false, message: 'Registration failed' });
      }
      res.send({ success: true, message: 'User registered!' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});