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

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html')); 
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'profile.html'));
});
app.get('/creators', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'creators.html'));
});

app.post('/api/user/:id/update', (req, res) => {
  const userId = req.params.id;
  const { username, specialty, bio, experience, availability } = req.body;

  db.run(
    `UPDATE users SET username = ?, specialty = ?, bio = ?, experience = ?, availability = ? WHERE id = ?`,
    [username, specialty, bio, experience, availability, userId],
    function(err) {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: 'Failed to update user' });
      }
      res.json({ success: true });
    }
  );
});

app.get('/api/creators', (req, res) => {
  db.all(`
    SELECT users.id, users.username, users.email, contact.fullname, contact.message
    FROM users
    LEFT JOIN contact ON users.email = contact.email
  `, (err, rows) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    res.json({ success: true, creators: rows });
  });
});

app.get('/api/user/:id', (req, res) => {
  const userId = req.params.id;

  db.get('SELECT * FROM users WHERE id = ?', [userId], (err, row) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    if (!row) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({
      success: true,
      message: 'Login successful!',
      user: {
        id: row.id,
        username: row.username,
        email: row.email,
        specialty: row.specialty,
        experience: row.experience,
        availability: row.availability
      }
    });
  });
});



app.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (err, row) => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Database error' });
    }
    if (row) {
      return res.json({ success: true, message: 'Login successful!', userId: row.id }); 
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

app.post('/add-project', (req, res) => {
  const { user_id, title, description, category, status, tags, link, image } = req.body;
  if (!user_id || !title) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }
  db.run(
    `INSERT INTO projects (user_id, title, description, category, status, tags, link, image)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [user_id, title, description, category, status, tags, link, image],
    function(err) {
      if (err) {
        return res.status(500).json({ success: false, message: 'Failed to add project' });
      }
      res.json({ success: true, project_id: this.lastID });
    }
  );
});

app.post('/contact', (req, res) => {
  const { fullname, email, message } = req.body;   

  if (!fullname || !email || !message) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }
  db.run('INSERT INTO contact (fullname, email, message) VALUES (?, ?, ?)', [fullname, email, message], function(err) {
    if (err) {
      return res.status(500).json({ success: false, message: 'Failed to send message' });
    }
    res.json({ success: true, message: 'Message sent successfully!' });
  });

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});