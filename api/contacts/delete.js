// /api/contacts/delete.js
const pool = require('../_utils/db');
const url = require('url');

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const queryObject = url.parse(req.url, true).query;
  const { id } = queryObject;

  try {
    await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
