# Kırtasiye Teklif Backend (Starter)

Bu repo Render.com üzerinde ücretsiz planla çalışacak şekilde hazırlanmıştır.

## Hızlı Başlangıç

1. `.env.example` dosyasını `.env` olarak kopyala ve anahtarlarını doldur.
2. `npm install`
3. `npm start`

### API Endpoints

| Yöntem | URL | Açıklama |
|---|---|---|
| POST | /api/talep | Yeni talep kaydeder |
| POST | /api/extract-products | Mesaj/Excel'den ürün listesi çıkarır |
| POST | /api/logo-match | Logo stok eşleşmesi yapar |
| GET | /api/pdf-generate/:caseId | PDF teklif üretir |
