import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { name, email, phone, company } = req.body;

  const { data, error } = await supabase
    .from('contacts')
    .insert([{ name, email, phone, company }])
    .select()
    .single();

  if (error) return res.status(500).json({ error: error.message });

  return res.status(201).json(data);
}
