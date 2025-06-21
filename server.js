const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(bodyParser.json());

// Test endpoint
app.get("/", (req, res) => {
  console.log("🟡 Gelen istek: GET /");
  res.send("Kırtasiye Backend Çalışıyor");
});

// POST endpoint (örnek)
app.post("/requests", (req, res) => {
  console.log("🟡 Gelen istek: POST /requests");
  console.log("🟠 Body:", req.body);

  const { customer_name } = req.body;

  if (!customer_name) {
    return res.status(400).json({ error: "customer_name is required" });
  }

  // Örnek Supabase insert isteği burada yapılabilir

  res.status(201).json({ message: "İstek başarıyla alındı", customer_name });
});

app.listen(PORT, () => {
  console.log(`✅ Backend çalışıyor → http://localhost:${PORT}`);
});
