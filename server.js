// Import required packages
const express = require('express');
require('dotenv').config();

// Set up express app
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Define a route to render the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
