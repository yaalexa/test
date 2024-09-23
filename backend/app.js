
const express = require('express');
const app = express();
const itemRoutes = require('./routes/itemRoutes');

app.use(express.json());

// Usar las rutas para los Items
app.use('/api/items', itemRoutes);

app.get('/', (req, res) => {
  res.send('corriendo');
});


const PORT =  5000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

module.exports = app;
