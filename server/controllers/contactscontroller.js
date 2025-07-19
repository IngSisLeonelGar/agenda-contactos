const pool = require('../models/db');

// Obtener todos los contactos
exports.getContacts = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Añadir contacto
exports.addContact = async (req, res) => {
  const { name, email, phone, company } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO contacts (name, email, phone, company) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, phone, company]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Editar contacto
exports.updateContact = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, company } = req.body;
  try {
    const result = await pool.query(
      'UPDATE contacts SET name = $1, email = $2, phone = $3, company = $4 WHERE id = $5 RETURNING *',
      [name, email, phone, company, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Eliminar contacto
exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
