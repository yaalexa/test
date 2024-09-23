// backend/index.js

const express = require('express');
const app = express();
const cors = require('cors');
const { Item } = require('./models');  // El modelo Sequelize
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

// Ruta para obtener todos los items
app.get('/items', async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

// Ruta para agregar un nuevo item
app.post('/items', async (req, res) => {
  const { name } = req.body;
  const newItem = await Item.create({ name });
  res.json(newItem);
});

app.listen(PORT, () => {
  console.log('Servidor corriendo en el puerto 5000');
});
