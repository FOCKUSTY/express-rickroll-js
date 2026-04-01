const express = require('express');
const app = express();

const REDIRECT_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

app.get('{/*path}', (req, res) => {
  res.redirect(301, REDIRECT_URL);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});