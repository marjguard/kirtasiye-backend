import express from 'express';
import dotenv from 'dotenv';
import { supabase } from './supabaseClient.js';

dotenv.config();

const app = express();
app.use(express.json());

// 1) Yeni talep alma
app.post('/api/talep', async (req, res) => {
  const { name } = req.body;

  const { data, error } = await supabase
    .from('customers')
    .insert([{ name }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: 'Talep alındı', data });
});

// 2) AI ürün çıkarımı (stub)
app.post('/api/extract-products', (req, res) => {
  // TODO: OpenAI entegrasyonu
  res.json({ products: [] });
});

// 3) Logo eşleşmesi (stub)
app.post('/api/logo-match', (req, res) => {
  res.json({ matches: [] });
});

// 4) PDF üretimi
app.get('/api/pdf-generate/:caseId', (req, res) => {
  res.json({ pdfUrl: 'https://example.com/dummy.pdf' });
});

// 5) Supabase test endpoint
app.post('/api/customers', async (req, res) => {
  const { name } = req.body;

  const { data, error } = await supabase
    .from('customers')
    .insert([{ name }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: 'Müşteri kaydedildi', data });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
