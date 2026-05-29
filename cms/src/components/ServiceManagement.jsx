
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

  // State cho panel edit
  const [editPanelOpen, setEditPanelOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleEdit = (idx) => {
    setEditData(data[idx]);
    setEditPanelOpen(true);
  };

  const handleClosePanel = () => {
    setEditPanelOpen(false);
    setEditData(null);
  };
  const handleDelete = (idx) => {
    if (window.confirm('Xóa dòng này?')) {
      setData(d => d.filter((_, i) => i !== idx));
    }
  };

  return (
    <div style={{ padding: '32px 0', minHeight: '100vh', background: '#f6f7fa', width: '100%', position: 'relative' }}>
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

      {/* Panel trượt phải khi edit */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: 540,
          background: '#fff',
          boxShadow: '-2px 0 16px rgba(0,0,0,0.12)',
          zIndex: 1000,
          transform: editPanelOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(.4,0,.2,1)',
          overflowY: 'auto',
          padding: 0,
        }}
      >
        <div style={{ padding: 24, borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 700, fontSize: 20 }}>Chi tiết đăng ký</span>
          <button onClick={handleClosePanel} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#888' }}>&times;</button>
        </div>
        {editData && (
          <div style={{ padding: 24, minWidth: 400 }}>
            {/* FORM 1: Chủ sở hữu / Bên được ủy quyền */}
            <form style={{ background: '#f7f8fe', borderRadius: 12, padding: 18, marginBottom: 24 }}>
              <div style={{ fontWeight: 600, color: '#2852BB', marginBottom: 12 }}>Chủ sở hữu / Bên được ủy quyền</div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Phân loại</label>
                  <select value={editData.classify} disabled style={{ width: '100%', padding: 8, borderRadius: 6 }}>
                    <option value="Cá nhân">Cá nhân</option>
                    <option value="Tổ chức">Tổ chức</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Họ và tên</label>
                  <input value={editData.fullName} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Quốc tịch</label>
                  <select value={editData.nationality} disabled style={{ width: '100%', padding: 8, borderRadius: 6 }}>
                    <option>Việt Nam</option>
                    <option>Khác</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Số CCCD / Hộ chiếu</label>
                  <input value={editData.idNumber} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Ngày cấp</label>
                  <input value={editData.issueDate} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Nơi cấp</label>
                <input value={editData.issuePlace} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Số điện thoại</label>
                  <input value={editData.phone} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Email</label>
                  <input value={editData.email} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
              </div>
              <div style={{ marginBottom: 0 }}>
                <label>Địa chỉ</label>
                <input value={editData.address} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
              </div>
            </form>

            {/* FORM 2: Thông tin yêu cầu */}
            <form style={{ background: '#f7f8fe', borderRadius: 12, padding: 18, marginBottom: 24 }}>
              <div style={{ fontWeight: 600, color: '#2852BB', marginBottom: 12 }}>Thông tin yêu cầu</div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Phân loại</label>
                  <input value={editData.tenTacPham} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Tên tác phẩm / Tên cuộc biểu diễn</label>
                  <input value={editData.tenTacPham} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Ngày hình thành</label>
                  <input value={editData.ngayHinhThanh} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
              </div>
              <div style={{ marginBottom: 12 }}>
                <label>Mô tả về tác phẩm / cuộc biểu diễn</label>
                <textarea value={editData.moTa} readOnly style={{ width: '100%', padding: 8, borderRadius: 6, minHeight: 60 }} />
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Tình trạng chứng nhận</label>
                  <input value={editData.tinhTrangGCN} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Giấy chứng nhận số</label>
                  <input value={editData.soGCN} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
              </div>
            </form>

            {/* FORM 3: Thông tin tác giả/đồng tác giả */}
            <form style={{ background: '#f7f8fe', borderRadius: 12, padding: 18, marginBottom: 24 }}>
              <div style={{ fontWeight: 600, color: '#2852BB', marginBottom: 12 }}>Thông tin tác giả/đồng tác giả</div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Họ tên tác giả</label>
                  <input value={editData.tacgia_hoten} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Quốc tịch</label>
                  <select value={editData.tacgia_quoctich} disabled style={{ width: '100%', padding: 8, borderRadius: 6 }}>
                    <option>Việt Nam</option>
                    <option>Khác</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Bút danh thể hiện trên tác phẩm (nếu có)</label>
                  <input value={editData.tacgia_butdanh} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Số CCCD / Hộ chiếu</label>
                  <input value={editData.tacgia_cccd} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Ngày cấp</label>
                  <input value={editData.tacgia_ngaycap} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Nơi cấp</label>
                  <input value={editData.tacgia_noicap} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Số điện thoại</label>
                  <input value={editData.tacgia_sdt} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Email</label>
                  <input value={editData.tacgia_email} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
              </div>
              <div style={{ marginBottom: 0 }}>
                <label>Địa chỉ tác giả</label>
                <input value={editData.tacgia_diachi} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
              </div>
            </form>

            {/* FORM 4: Thông tin chủ sở hữu/đồng chủ sở hữu (giả định giống form 1) */}
            <form style={{ background: '#f7f8fe', borderRadius: 12, padding: 18, marginBottom: 12 }}>
              <div style={{ fontWeight: 600, color: '#2852BB', marginBottom: 12 }}>Thông tin chủ sở hữu/đồng chủ sở hữu</div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Phân loại</label>
                  <select value={editData.classify} disabled style={{ width: '100%', padding: 8, borderRadius: 6 }}>
                    <option value="Cá nhân">Cá nhân</option>
                    <option value="Tổ chức">Tổ chức</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Họ tên chủ sở hữu</label>
                  <input value={editData.fullName} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Quốc tịch</label>
                  <select value={editData.nationality} disabled style={{ width: '100%', padding: 8, borderRadius: 6 }}>
                    <option>Việt Nam</option>
                    <option>Khác</option>
                  </select>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Số CCCD / Hộ chiếu</label>
                  <input value={editData.idNumber} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Ngày cấp</label>
                  <input value={editData.issueDate} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Nơi cấp</label>
                  <input value={editData.issuePlace} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <label>Số điện thoại</label>
                  <input value={editData.phone} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                <div style={{ flex: 1 }}>
                  <label>Email</label>
                  <input value={editData.email} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
                </div>
              </div>
              <div style={{ marginBottom: 0 }}>
                <label>Địa chỉ tác giả</label>
                <input value={editData.address} readOnly style={{ width: '100%', padding: 8, borderRadius: 6 }} />
              </div>
            </form>

            <div style={{ color: '#888', fontSize: 13, marginTop: 8 }}>Ngày tạo: {editData.createdAt}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceManagement;
