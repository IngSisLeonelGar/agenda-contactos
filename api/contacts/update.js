// /api/contacts/update.js
const pool = require('../_utils/db');
const url = require('url');

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const queryObject = url.parse(req.url, true).query;
  const { id } = queryObject;
  const { name, email, phone, company } = req.body;

  try {
    const result = await pool.query(
      'UPDATE contacts SET name = $1, email = $2, phone = $3, company = $4 WHERE id = $5 RETURNING *',
      [name, email, phone, company, id]
    );
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
