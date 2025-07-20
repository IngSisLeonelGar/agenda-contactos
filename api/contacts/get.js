// /api/contacts/get.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { data, error } = await supabase
    .from('contacts')
    .select('*')
    .order('create_at', { ascending: false });

  if (error) {
    console.error('Error al obtener contactos:', error.message);
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
}