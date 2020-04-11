const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 3333;

app.get('/projects', (req, res) => {

  const { title, owner } = req.query;

  console.log(title, owner);

  return res.json([
    'Projeto 1',
    'Projeto 2'
  ]);
});

app.post('/projects', (req, res) => {

  const { title, owner } = req.body;

  console.log(title, owner);

  return res.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3'  
  ]);
});

app.put('/projects/:id', (req, res) => {

  const { id } = req.params;

  console.log(id);

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