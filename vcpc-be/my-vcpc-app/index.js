
const express = require("express");
const app = express();
const PORT = 3000;
const cors = require('cors');
const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

// Middleware để đọc JSON và cho phép CORS
app.use(express.json());
app.use(cors());

// Route đơn giản
app.get("/", (req, res) => {
  res.send("Hello Node.js + Express 🚀");
});

// Route nhận hỗ trợ và ghi vào Excel (dùng promise chain)
app.post('/support', (req, res) => {
  const { userId, email, title, content } = req.body;
  if (!userId || !email || !title || !content) {
    return res.status(400).json({ message: 'Thiếu thông tin bắt buộc.' });
  }

  const filePath = path.join(__dirname, 'support_requests.xlsx');
  const workbook = new ExcelJS.Workbook();

  workbook.xlsx.readFile(filePath)
    .then(() => {
      let worksheet = workbook.getWorksheet('SupportRequests');
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
      worksheet.addRow({
        userId,
        email,
        title,
        content,
        createdAt: new Date().toLocaleString('vi-VN', { hour12: false })
      });
      return workbook.xlsx.writeFile(filePath);
    })
    .then(() => {
      res.json({ message: 'Gửi yêu cầu thành công!' });
    })
    .catch(err => {
      // Nếu file chưa tồn tại thì tạo mới
      let worksheet = workbook.addWorksheet('SupportRequests');
      worksheet.columns = [
        { header: 'User ID', key: 'userId', width: 20 },
        { header: 'Email', key: 'email', width: 30 },
        { header: 'Tiêu đề', key: 'title', width: 30 },
        { header: 'Nội dung', key: 'content', width: 50 },
        { header: 'Thời gian', key: 'createdAt', width: 22 },
      ];
      worksheet.addRow({
        userId,
        email,
        title,
        content,
        createdAt: new Date().toLocaleString('vi-VN', { hour12: false })
      });
      workbook.xlsx.writeFile(filePath)
        .then(() => {
          res.json({ message: 'Gửi yêu cầu thành công!' });
        })
        .catch(error => {
          console.error(error);
          res.status(500).json({ message: 'Lỗi ghi file Excel.' });
        });
    });
});

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

// Route đếm và trả về lượt xem
app.post('/views', (req, res) => {
  const viewsFile = path.join(__dirname, 'views.json');
  let views = 0;
  try {
    if (fs.existsSync(viewsFile)) {
      const data = fs.readFileSync(viewsFile, 'utf8');
      views = JSON.parse(data).views || 0;
    }
  } catch (e) {
    views = 0;
  }
  views++;
  fs.writeFileSync(viewsFile, JSON.stringify({ views }), 'utf8');
  res.json({ views });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
