console.log('Server is starting...');

//connecting dependencies via constants
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Creating instances
const app = express();
const PORT = 1010;

// Coding in the functionality
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// ...existing code...

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});