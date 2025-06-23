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

app.post('/api/register', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  db.run('INSERT INTO users (firstName, lastName, email, password) VALUES (?, ?, ?, ?)', [firstName, lastName, email, password], function(err) {
    if (err) {
      return res.json({ success: false, message: 'Registration failed' });
    }
    res.json({ success: true, message: 'User registered!' });
  });
  res.json({ success: true, message: 'User registered!' });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});