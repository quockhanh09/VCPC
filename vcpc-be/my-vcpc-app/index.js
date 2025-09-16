// index.js
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware để đọc JSON
app.use(express.json());

// Route đơn giản
app.get("/", (req, res) => {
  res.send("Hello Node.js + Express 🚀");
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
