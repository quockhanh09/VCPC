
// index.js
const express = require("express");
const fs = require("fs");
const path = require("path");
const ExcelJS = require("exceljs");
const app = express();
const PORT = 3000;

// Middleware để đọc JSON
app.use(express.json());

// Route đơn giản
app.get("/", (req, res) => {
  res.send("Hello Node.js + Express 🚀");
});

// API nhận yêu cầu hỗ trợ và ghi vào file Excel
app.post("/support-request", async (req, res) => {
  const { userId, email, title, content } = req.body;
  if (!userId || !email || !title || !content) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc." });
  }

  const filePath = path.join(__dirname, "support-requests.xlsx");
  let workbook;
  let worksheet;

  // Nếu file chưa tồn tại, tạo mới và thêm header
  if (!fs.existsSync(filePath)) {
    workbook = new ExcelJS.Workbook();
    worksheet = workbook.addWorksheet("SupportRequests");
    worksheet.columns = [
      { header: "User ID", key: "userId", width: 20 },
      { header: "Email", key: "email", width: 30 },
      { header: "Tiêu đề", key: "title", width: 30 },
      { header: "Nội dung", key: "content", width: 50 },
      { header: "Thời gian gửi", key: "createdAt", width: 24 },
    ];
  } else {
    workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    worksheet = workbook.getWorksheet("SupportRequests");
  }

  worksheet.addRow({
    userId,
    email,
    title,
    content,
    createdAt: new Date().toLocaleString("vi-VN", { hour12: false })
  });

  await workbook.xlsx.writeFile(filePath);

  res.json({ message: "Gửi yêu cầu thành công!" });
});

// Khởi động server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
