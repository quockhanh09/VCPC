// index.js
const express = require("express");
const app = express();
const PORT = 3000;
const cors = require('cors');
const ExcelJS = require('exceljs');
const path = require('path');

// Middleware để đọc JSON và cho phép CORS
app.use(express.json());
app.use(cors());


// Route đơn giản
app.get("/", (req, res) => {
  res.send("Hello Node.js + Express 🚀");
});

// Route nhận hỗ trợ và ghi vào Excel
app.post('/support', async (req, res) => {
  const { userId, email, title, content } = req.body;
  if (!userId || !email || !title || !content) {
    return res.status(400).json({ message: 'Thiếu thông tin bắt buộc.' });
  }

  const filePath = path.join(__dirname, 'support_requests.xlsx');
  const workbook = new ExcelJS.Workbook();
  let worksheet;

  try {
    // Nếu file đã tồn tại thì đọc, không thì tạo mới
    let fileExists = false;
    try {
      await workbook.xlsx.readFile(filePath);
      fileExists = true;
    } catch (err) {
      fileExists = false;
    }

    if (fileExists) {
      worksheet = workbook.getWorksheet('SupportRequests');
      if (!worksheet) {
        worksheet = workbook.addWorksheet('SupportRequests');
        worksheet.columns = [
          { header: 'User ID', key: 'userId', width: 20 },
          { header: 'Email', key: 'email', width: 30 },
          { header: 'Tiêu đề', key: 'title', width: 30 },
          { header: 'Nội dung', key: 'content', width: 50 },
          { header: 'Thời gian', key: 'createdAt', width: 22 },
        ];
      }
    } else {
      worksheet = workbook.addWorksheet('SupportRequests');
      worksheet.columns = [
        { header: 'User ID', key: 'userId', width: 20 },
        { header: 'Email', key: 'email', width: 30 },
        { header: 'Tiêu đề', key: 'title', width: 30 },
        { header: 'Nội dung', key: 'content', width: 50 },
        { header: 'Thời gian', key: 'createdAt', width: 22 },
      ];
    }

    worksheet.addRow({
      userId,
      email,
      title,
      content,
      createdAt: new Date().toLocaleString('vi-VN', { hour12: false })
    });

    await workbook.xlsx.writeFile(filePath);
    res.json({ message: 'Gửi yêu cầu thành công!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Lỗi ghi file Excel.' });
  }
});

// Khởi động server
// Route trả về file Excel chứa dữ liệu support
app.get('/support/excel', (req, res) => {
  const filePath = path.join(__dirname, 'support_requests.xlsx');
  res.download(filePath, 'support_requests.xlsx', (err) => {
    if (err) {
      console.error('Lỗi gửi file Excel:', err);
      res.status(500).send('Không thể gửi file Excel.');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
