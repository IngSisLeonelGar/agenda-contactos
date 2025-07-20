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
      .select('*')
      .order('create_at', { ascending: false });

    if (error) {
      console.error('Error en Supabase:', error.message);
      return res.status(500).json({ error: 'Error al obtener contactos' });
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error('Error general:', err.message);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}
