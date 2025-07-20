import { createClient } from '@supabase/supabase-js';

// Inicializa Supabase con las variables de entorno
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const { data, error } = await supabase
  .from('contacts')
  .select('*');

console.log('Data obtenida:', data);
console.log('Error:', error);

if (error) {
  return res.status(500).json({ error: error.message });
}

res.status(200).json(data);
  } catch (err) {
    console.error('Error general:', err.message);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
