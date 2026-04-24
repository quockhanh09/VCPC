// Thêm luxon để xử lý múi giờ chuẩn
const { DateTime } = require('luxon');
const path = require('path');
// GOOGLE SHEETS SETUP
const { google } = require('googleapis');
const SHEET_ID = '1voH277cNQ5Dgtokcz7Y0tl8Y1pbFdWHWxl-tSGtlF-A';
let KEYFILEPATH = path.join(__dirname, 'fluent-justice-384908-949be833f84a.json');
// Nếu chạy trên Render, lấy credentials từ biến môi trường và ghi ra file tạm
if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
  const tmpPath = '/tmp/service-account.json';
  if (!require('fs').existsSync(tmpPath)) {
    require('fs').writeFileSync(tmpPath, process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
  }
  KEYFILEPATH = tmpPath;
}
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];

async function appendToSheet(row) {
  console.log('appendToSheet - row:', row);
  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: SCOPES,
  });
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });
  try {
    // Kiểm tra nếu sheet trống thì thêm dòng tiêu đề
    const getRes = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A1:A1',
    });
    if (!getRes.data.values || getRes.data.values.length === 0) {
      const header = [
        'Họ tên',
        'Số điện thoại',
        'Email',
        'Tiêu đề',
        'Nội dung',
        'Tên file ảnh',
        'Thời gian gửi'
      ];
      await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: 'Sheet1!A1',
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: { values: [header] },
      });
    }
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: 'Sheet1!A1',
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [row],
      },
    });
    console.log('appendToSheet - result:', result.data);
  } catch (err) {
    console.error('appendToSheet - error:', err);
    throw err;
  }
}


const express = require("express");
const app = express();
const PORT = 3000;
const cors = require('cors');
const ExcelJS = require('exceljs');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Middleware để đọc JSON và cho phép CORS
app.use(express.json());
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://localhost:3000',
    'https://vcpc.vercel.app',
    'https://vcpc.onrender.com'
  ],
  credentials: true
}));

// Route đơn giản
app.get("/", (req, res) => {
  res.send("Hello Node.js + Express 🚀");
});

// Route nhận hỗ trợ và ghi vào Excel (dùng promise chain)
app.post('/support', upload.single('image'), async (req, res) => {
  const { fullName, phone, email, title, content } = req.body;
  // image: req.file nếu có
  console.log('--- POST /support ---');
  console.log('POST /support body:', req.body);
  console.log('POST /support file:', req.file);
  if (!fullName || !phone || !email || !title || !content) {
    console.log('POST /support: thiếu thông tin');
    return res.status(400).json({ message: 'Thiếu thông tin bắt buộc.' });
  }
  try {
    // Ghi vào Google Sheets
    // Lấy thời gian thực tại Hà Nội (Asia/Ho_Chi_Minh là tên IANA chuẩn cho Việt Nam)
    const hanoiTime = DateTime.now().setZone('Asia/Ho_Chi_Minh');
    const formattedTime = hanoiTime.toFormat('HH:mm:ss dd/MM/yyyy');
    await appendToSheet([
      fullName,
      phone,
      email,
      title,
      content,
      req.file ? req.file.filename : '',
      formattedTime
    ]);
    console.log('POST /support: gửi thành công');
    res.json({ message: 'Gửi yêu cầu thành công!' });
  } catch (err) {
    console.error('Lỗi ghi Google Sheets:', err);
    res.status(500).json({ message: 'Lỗi ghi Google Sheets.' });
  }
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

// ...existing code...

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
