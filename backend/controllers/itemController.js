const db = require('../models');

exports.getItems = async (req, res) => {
  try {
    const items = await db.Item.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
};

exports.addItem = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ m: 'obligatorio' });
  }
  
  try {
    await db.Item.create({ name });
    res.status(201).json({ m: 'agregado' });
  } catch (error) {
    res.status(500).json({ error: 'error' });
  }
};
