const express = require('express');
const app = express();
const PORT = 3000;

// Allow frontend access (CORS)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// Dummy data
const users = [
  { id: 1, name: 'Faisal Malik' },
  { id: 2, name: 'John Doe' },
];

// API endpoint
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
