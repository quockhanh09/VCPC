// Thêm luxon để xử lý múi giờ chuẩn
const { DateTime } = require('luxon');
const path = require('path');
// GOOGLE SHEETS SETUP
const { google } = require('googleapis');
const SHEET_ID = '1voH277cNQ5Dgtokcz7Y0tl8Y1pbFdWHWxl-tSGtlF-A';
// Đường dẫn file key mới (local)
let KEYFILEPATH = path.join(__dirname, 'fluent-justice-384908-178cf17361b9.json');
// Nếu chạy trên Render, lấy credentials từ biến môi trường và ghi ra file tạm
if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
  const tmpPath = '/tmp/service-account.json';
  try {
    // 1. Parse JSON từ biến môi trường
    let credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    // 2. Sửa lỗi: thay \n thành xuống dòng thực trong private_key
    if (typeof credentials.private_key === 'string') {
      credentials.private_key = credentials.private_key.replace(/\\n/g, '\n');
    }
    // 3. Ghi ra file tạm
    require('fs').writeFileSync(tmpPath, JSON.stringify(credentials));
    KEYFILEPATH = tmpPath;
    console.log("✅ Đã cấu hình Service Account thành công.");
  } catch (e) {
    console.error("❌ Lỗi cấu hình Service Account:", e.message);
  }
}
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];



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

// Hàm ghi vào sheet bất kỳ
async function appendToSheetGeneric(row, sheetName, header) {
  console.log(`appendToSheetGeneric - sheet: ${sheetName} - row:`, row);
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
      range: `${sheetName}!A1:A1`,
    });
    if (!getRes.data.values || getRes.data.values.length === 0) {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SHEET_ID,
        range: `${sheetName}!A1`,
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        resource: { values: [header] },
      });
    }
    const result = await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: `${sheetName}!A1`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      resource: {
        values: [row],
      },
    });
    console.log('appendToSheetGeneric - result:', result.data);
  } catch (err) {
    console.error('appendToSheetGeneric - error:', err);
    throw err;
  }
}

// Hàm cũ giữ nguyên để không ảnh hưởng logic cũ
async function appendToSheet(row) {
  return appendToSheetGeneric(row, 'Sheet1', [
    'Họ tên',
    'Số điện thoại',
    'Email',
    'Tiêu đề',
    'Nội dung',
    'Tên file ảnh',
    'Thời gian gửi'
  ]);
}
// Route ghi dữ liệu đăng ký dịch vụ step 1 vào Sheet2
app.post('/register/step1', async (req, res) => {
  // Nhận dữ liệu dạng JSON, kiểm tra từng trường như route /support
  const {
    classify, // Phân loại
    fullName, // Họ và tên
    nationality, // Quốc tịch
    idNumber, // Số CCCD/Hộ chiếu
    issueDate, // Ngày cấp
    issuePlace, // Nơi cấp
    phone, // Số điện thoại
    email, // Email
    address // Địa chỉ
  } = req.body;
  // Kiểm tra các trường bắt buộc
  if (!classify || !fullName || !nationality || !idNumber || !issueDate || !issuePlace || !phone || !email || !address) {
    return res.status(400).json({ message: 'Thiếu thông tin bắt buộc.' });
  }
  try {
    // Ghi vào Google Sheets Sheet2
    const hanoiTime = DateTime.now().setZone('Asia/Ho_Chi_Minh');
    const formattedTime = hanoiTime.toFormat('HH:mm:ss dd/MM/yyyy');
    // Ghi đầy đủ các trường vào row
    const row = [
      classify,
      fullName,
      nationality,
      idNumber,
      issueDate,
      issuePlace,
      phone,
      email,
      address,
      formattedTime
    ];
    // Header đầy đủ cho Sheet2
    const header = [
      'Phân loại',
      'Họ và tên',
      'Quốc tịch',
      'Số CCCD/Hộ chiếu',
      'Ngày cấp',
      'Nơi cấp',
      'Số điện thoại',
      'Email',
      'Địa chỉ',
      'Thời gian gửi'
    ];
    await appendToSheetGeneric(row, 'Sheet2', header);
    res.json({ message: 'Gửi đăng ký Step 1 thành công!' });
  } catch (err) {
    console.error('Lỗi ghi Sheet2:', err);
    res.status(500).json({ message: 'Lỗi ghi Sheet2.' });
  }
});

// Route ghi dữ liệu đăng ký dịch vụ step 2 vào Sheet3
app.post('/register/step2', async (req, res) => {
  // Nhận dữ liệu dạng JSON, kiểm tra từng trường như route /support
  const fullName = req.body.fullName || '';
  const phone = req.body.phone || '';
  const email = req.body.email || '';
  console.log('POST /register/step2 body:', req.body);
  if (!fullName || !phone || !email) {
    console.log('POST /register/step2: thiếu thông tin');
    return res.status(400).json({ message: 'Thiếu thông tin bắt buộc.' });
  }
  try {
    const hanoiTime = DateTime.now().setZone('Asia/Ho_Chi_Minh');
    const formattedTime = hanoiTime.toFormat('HH:mm:ss dd/MM/yyyy');
    const row = [fullName, phone, email, formattedTime];
    const header = ['Họ tên', 'Số điện thoại', 'Email', 'Thời gian gửi'];
    console.log('POST /register/step2: row:', row);
    await appendToSheetGeneric(row, 'Sheet3', header);
    res.json({ message: 'Gửi đăng ký Step 2 thành công!' });
  } catch (err) {
    console.error('Lỗi ghi Sheet3:', err);
    res.status(500).json({ message: 'Lỗi ghi Sheet3.', error: err.message });
  }
});




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
