
import React, { useState, useEffect } from 'react';

const columns = [
  { label: '#', key: 'index', width: 40 },
  { label: 'Phân loại', key: 'classify' },
  { label: 'Họ tên chủ sở hữu', key: 'fullName' },
  { label: 'Quốc tịch', key: 'nationality' },
  { label: 'Số CCCD/Hộ chiếu', key: 'idNumber' },
  { label: 'Ngày cấp', key: 'issueDate' },
  { label: 'Nơi cấp', key: 'issuePlace' },
  { label: 'Số điện thoại', key: 'phone' },
  { label: 'Email', key: 'email' },
  { label: 'Địa chỉ', key: 'address' },
  { label: 'Tên tác phẩm', key: 'tenTacPham' },
  { label: 'Ngày hình thành', key: 'ngayHinhThanh' },
  { label: 'Mô tả', key: 'moTa' },
  { label: 'Tình trạng GCN', key: 'tinhTrangGCN' },
  { label: 'Số GCN', key: 'soGCN' },
  { label: 'Họ tên tác giả', key: 'tacgia_hoten' },
  { label: 'Quốc tịch TG', key: 'tacgia_quoctich' },
  { label: 'Bút danh', key: 'tacgia_butdanh' },
  { label: 'Số CCCD/Hộ chiếu TG', key: 'tacgia_cccd' },
  { label: 'Ngày cấp TG', key: 'tacgia_ngaycap' },
  { label: 'Nơi cấp TG', key: 'tacgia_noicap' },
  { label: 'SĐT TG', key: 'tacgia_sdt' },
  { label: 'Email TG', key: 'tacgia_email' },
  { label: 'Địa chỉ TG', key: 'tacgia_diachi' },
  { label: 'Thời gian gửi', key: 'createdAt' },
];


const API_URL = 'https://vcpc.onrender.com/register/copyright';


const ServiceManagement = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error('Lỗi khi lấy dữ liệu');
        const json = await res.json();
        // Map dữ liệu về đúng key columns
        const mapped = (Array.isArray(json) ? json : []).map(item => ({
          classify: item.owner_phanloai || item.classify || '',
          fullName: item.owner_hoten || item.fullName || '',
          nationality: item.owner_quoctich || item.nationality || '',
          idNumber: item.owner_cccd || item.idNumber || '',
          issueDate: item.owner_ngaycap || item.issueDate || '',
          issuePlace: item.owner_noicap || item.issuePlace || '',
          phone: item.owner_sdt || item.phone || '',
          email: item.owner_email || item.email || '',
          address: item.owner_diachi || item.address || '',
          tenTacPham: item.tenTacPham || item.phanLoaiYeuCau || '',
          ngayHinhThanh: item.ngayHinhThanh || '',
          moTa: item.moTa || '',
          tinhTrangGCN: item.tinhTrangGCN || '',
          soGCN: item.soGCN || '',
          tacgia_hoten: item.tacgia_hoten || '',
          tacgia_quoctich: item.tacgia_quoctich || '',
          tacgia_butdanh: item.tacgia_butdanh || '',
          tacgia_cccd: item.tacgia_cccd || '',
          tacgia_ngaycap: item.tacgia_ngaycap || '',
          tacgia_noicap: item.tacgia_noicap || '',
          tacgia_sdt: item.tacgia_sdt || '',
          tacgia_email: item.tacgia_email || '',
          tacgia_diachi: item.tacgia_diachi || '',
          createdAt: item.createdAt || '',
        }));
        setData(mapped);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleEdit = (idx) => {
    alert('Chức năng Edit cho dòng #' + (idx + 1));
  };
  const handleDelete = (idx) => {
    if (window.confirm('Xóa dòng này?')) {
      setData(d => d.filter((_, i) => i !== idx));
    }
  };

  return (
    <div style={{ padding: '32px 0', minHeight: '100vh', background: '#f6f7fa', width: '100%' }}>
      <h2 style={{ marginBottom: 24, textAlign: 'center' }}>Quản lý dịch vụ bản quyền</h2>
      {loading ? (
        <div style={{ textAlign: 'center', marginTop: 40 }}>Đang tải dữ liệu...</div>
      ) : error ? (
        <div style={{ color: 'red', textAlign: 'center', marginTop: 40 }}>Lỗi: {error}</div>
      ) : (
        <div style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
          <div style={{
            width: '100%',
            maxWidth: 1550,
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            padding: 0,
            margin: '0 24px',
            overflow: 'hidden',
          }}>
            <div style={{ width: '100%', overflowX: 'auto', borderRadius: 12 }}>
              <table style={{ width: '100%', minWidth: 1200, borderCollapse: 'collapse' }}>
                <thead style={{ background: '#F7F8FE' }}>
                  <tr>
                    {columns.map((col, i) => (
                      <th key={col.key} style={{ padding: '12px 8px', borderBottom: '2px solid #E0E6F7', fontWeight: 700, color: '#2852BB', fontSize: 15, textAlign: 'left', minWidth: col.width || 120, background: '#F7F8FE', position: 'sticky', top: 0, zIndex: 1 }}>{col.label}</th>
                    ))}
                    <th style={{ padding: '12px 8px', borderBottom: '2px solid #E0E6F7', fontWeight: 700, color: '#2852BB', fontSize: 15, textAlign: 'left', minWidth: 120, background: '#F7F8FE', position: 'sticky', top: 0, zIndex: 1 }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.length === 0 ? (
                    <tr><td colSpan={columns.length + 1} style={{ textAlign: 'center', padding: 32 }}>Không có dữ liệu</td></tr>
                  ) : data.map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid #F0F0F0', background: idx % 2 === 0 ? '#fff' : '#F7F8FE' }}>
                      <td style={{ padding: '10px 8px', color: '#888', fontWeight: 600 }}>{idx + 1}</td>
                      {columns.slice(1).map(col => (
                        <td key={col.key} style={{ padding: '10px 8px', color: '#222', fontSize: 15 }}>{row[col.key]}</td>
                      ))}
                      <td style={{ padding: '10px 8px' }}>
                        <button onClick={() => handleEdit(idx)} style={{ color: '#2852BB', background: 'none', border: 'none', fontWeight: 600, marginRight: 12, cursor: 'pointer' }}>Edit</button>
                        <button onClick={() => handleDelete(idx)} style={{ color: '#F25C4C', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer' }}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceManagement;
