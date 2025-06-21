import express from 'express';
import dotenv from 'dotenv';
import { supabase } from './supabaseClient.js';

dotenv.config();

const app = express();
app.use(express.json());

// 🔍 Tüm gelen istekleri logla (debug için)
app.use((req, res, next) => {
  console.log('🟡 Gelen istek:', req.method, req.url);
  console.log('🟠 Body:', req.body);
  next();
});

// 🟢 1) Yeni müşteri talebi alma
app.post('/api/talep', async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'name alanı eksik' });
  }

  const { data, error } = await supabase
    .from('customers')
    .insert([{ name }]);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  res.json({ message: 'Talep alındı', data });
});

// 🟡 2) AI ürün çıkarımı (şu an pasif)
app.post('/api/extract-products', (req, res) => {
  res.json({ products: [] });
});

// 🟡 3) Logo eşleşmesi (şu an pasif)
app.post('/api/logo-match', (req, res) => {
  res.json({ matches: [] });
});

// 🟡 4) PDF üretimi (şu an pasif)
app.get('/api/pdf-generate/:caseId', (req, res) => {
  res.json({ pdfUrl: 'https://example.com/dummy.pdf' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Backend çalışıyor → http://localhost:${PORT}`);
});
