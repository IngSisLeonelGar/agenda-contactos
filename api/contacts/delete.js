import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { id } = req.body;

  const { error } = await supabase
    .from('contacts')
    .delete()
    .eq('id', id);

  if (error) return res.status(500).json({ error: error.message });

  return res.status(204).end();
}
