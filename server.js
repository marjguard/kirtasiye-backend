import express from 'express';
import dotenv from 'dotenv';
import { supabase } from './supabaseClient.js';

dotenv.config();

const app = express();
app.use(express.json());

app.post('/api/talep', async (req, res) => {
  console.log('🔍 Gelen veri:', req.body);
  
  const { customer_name } = req.body;

  const { data, error } = await supabase
    .from('requests')
    .insert([{ customer_name }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: 'Talep alındı', data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Backend çalışıyor`);
});
