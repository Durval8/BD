const express = require('express');
const path = require('path');

const app = express();
const port = 3001;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route parameter for dynamic page routes

app.get('/', (req, res) => {
  console.log("LSLS")
  res.sendFile(path.join(__dirname, 'public/html', 'index.html'));
});

app.get('/:page', (req, res) => {
  console.log("EE")
  const page = req.params.page;
  res.sendFile(path.join(__dirname, 'public/html', `${page}`));

  // res.sendFile(filePath, (err) => {
  //   if (err) {
  //     // Handle file not found or other errors
  //     res.status(404).send('Page not found');
  //   }
  // });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
