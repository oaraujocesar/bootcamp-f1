const express = require('express');

const app = express();

const port = 3333;

app.get('/', (req, res) => {
  return res.json({ message: 'Hello, world' });
});

app.listen(port, () => {
  console.log(`⚡️ Back-end is running on port ${port}!`);
});