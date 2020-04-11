const express = require('express');

const app = express();

const port = 3333;

app.get('/projects', (req, res) => {
  return res.json([
    'Projeto 1',
    'Projeto 2'
  ]);
});

app.post('/projects', (req, res) => {
  return res.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'  
  ]);
});

app.put('/projects/:id', (req, res) => {
  return res.json([
    'Projeto 4',
    'Projeto 2',
    'Projeto 3'  
  ]);
});

app.delete('/projects/:id', (req, res) => {
  return res.json([
    'Projeto 2',
    'Projeto 3'  
  ]);
});

app.listen(port, () => {
  console.log(`⚡️ Back-end is running on port ${port}!`);
});