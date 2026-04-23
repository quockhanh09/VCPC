// Script tạo file Excel support_requests.xlsx từ Google Sheets, định dạng số điện thoại có dấu cách
const { google } = require('googleapis');
const ExcelJS = require('exceljs');
const path = require('path');
const fs = require('fs');

const SHEET_ID = '1voH277cNQ5Dgtokcz7Y0tl8Y1pbFdWHWxl-tSGtlF-A';
const KEYFILEPATH = path.join(__dirname, 'fluent-justice-384908-949be833f84a.json');

function formatPhone(phone) {
  // Tách đầu số quốc tế (bắt đầu bằng +, theo sau là 1-3 số), phần còn lại là số
  const match = phone.match(/^([+][0-9]{1,3})([0-9]+)$/);
  if (match) {
    return `${match[1]} ${match[2]}`;
  }
  return phone;
}

async function exportSupportExcel() {
  const auth = new google.auth.GoogleAuth({
    keyFile: KEYFILEPATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const client = await auth.getClient();
  const sheets = google.sheets({ version: 'v4', auth: client });
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: 'Sheet1',
  });
  const rows = res.data.values;
  if (!rows || rows.length === 0) {
    console.log('No data found.');
    return;
  }
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Support');
  worksheet.addRow(rows[0]); // header
  for (let i = 1; i < rows.length; i++) {
    const row = [...rows[i]];
    // Định dạng số điện thoại ở cột 2 (index 1)
    if (row[1]) row[1] = formatPhone(row[1]);
    worksheet.addRow(row);
  }
  const filePath = path.join(__dirname, 'support_requests.xlsx');
  await workbook.xlsx.writeFile(filePath);
  console.log('Exported:', filePath);
}

if (require.main === module) {
  exportSupportExcel();
}
