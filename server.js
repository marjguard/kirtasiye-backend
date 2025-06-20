import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());

// 1) Yeni talep alma
app.post('/api/talep', (req, res) => {
  // TODO: DB kayıt
  res.json({ message: 'Talep alındı', caseId: 'dummy-123' });
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
