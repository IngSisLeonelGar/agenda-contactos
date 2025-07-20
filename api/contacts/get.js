// /api/contacts/get.js
const pool = require('../_utils/db');

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY create_at DESC');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error('Error al obtener contactos:', err);
    res.status(500).json({ error: err.message });
  }
}
