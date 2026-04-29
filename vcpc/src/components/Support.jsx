import React from 'react';
import '../style/App.css';
import '../style/signup-in.css';
import vcpcHeader from '../assets/img/vcpc-header.png';

import { useState } from 'react';

const Support = () => {
  // Danh sách mã vùng quốc tế phổ biến (có thể mở rộng thêm nếu cần)
  const countryCodes = [
    '+1', '+7', '+20', '+27', '+30', '+31', '+32', '+33', '+34', '+36', '+39',
    '+40', '+41', '+43', '+44', '+45', '+46', '+47', '+48', '+49', '+51', '+52',
    '+53', '+54', '+55', '+56', '+57', '+58', '+60', '+61', '+62', '+63', '+64',
    '+65', '+66', '+81', '+82', '+84', '+86', '+90', '+91', '+92', '+93', '+94',
    '+95', '+98', '+211', '+212', '+213', '+216', '+218', '+220', '+221', '+222',
    '+223', '+224', '+225', '+226', '+227', '+228', '+229', '+230', '+231', '+232',
    '+233', '+234', '+235', '+236', '+237', '+238', '+239', '+240', '+241', '+242',
    '+243', '+244', '+245', '+246', '+248', '+249', '+250', '+251', '+252', '+253',
    '+254', '+255', '+256', '+257', '+258', '+260', '+261', '+262', '+263', '+264',
    '+265', '+266', '+267', '+268', '+269', '+290', '+291', '+297', '+298', '+299',
    '+350', '+351', '+352', '+353', '+354', '+355', '+356', '+357', '+358', '+359',
    '+370', '+371', '+372', '+373', '+374', '+375', '+376', '+377', '+378', '+380',
    '+381', '+382', '+383', '+385', '+386', '+387', '+389', '+420', '+421', '+423',
    '+500', '+501', '+502', '+503', '+504', '+505', '+506', '+507', '+508', '+509',
    '+590', '+591', '+592', '+593', '+594', '+595', '+596', '+597', '+598', '+599',
    '+670', '+672', '+673', '+674', '+675', '+676', '+677', '+678', '+679', '+680',
    '+681', '+682', '+683', '+685', '+686', '+687', '+688', '+689', '+690', '+691',
    '+692', '+850', '+852', '+853', '+855', '+856', '+870', '+871', '+872', '+873',
    '+874', '+878', '+880', '+881', '+882', '+883', '+886', '+888', '+960', '+961',
    '+962', '+963', '+964', '+965', '+966', '+967', '+968', '+970', '+971', '+972',
    '+973', '+974', '+975', '+976', '+977', '+992', '+993', '+994', '+995', '+996',
    '+998', '+1242', '+1246', '+1264', '+1268', '+1284', '+1340', '+1345', '+1441',
    '+1473', '+1649', '+1664', '+1670', '+1671', '+1684', '+1758', '+1767', '+1784',
    '+1787', '+1809', '+1868', '+1869', '+1876', '+1939',
  ];

  const [form, setForm] = useState({
    fullName: '',
    phonePrefix: '+84',
    phoneNumber: '',
    email: '',
    title: '',
    content: '',
    image: null,
  });
  const [prefixInput, setPrefixInput] = useState('+84');
  const [showPrefixDropdown, setShowPrefixDropdown] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else if (name === 'phonePrefix') {
      setForm({ ...form, phonePrefix: value });
      setPrefixInput(value);
    } else {
      setForm({ ...form, [name]: value });
    }
    setError('');
  };

  // Xử lý autocomplete cho mã vùng
  const handlePrefixInputChange = (e) => {
    const value = e.target.value;
    setPrefixInput(value);
    setForm({ ...form, phonePrefix: value });
    setShowPrefixDropdown(true);
  };

  const handlePrefixSelect = (code) => {
    setForm({ ...form, phonePrefix: code });
    setPrefixInput(code);
    setShowPrefixDropdown(false);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!form.fullName.trim() || !form.phonePrefix.trim() || !form.phoneNumber.trim() || !form.email.trim() || !form.title.trim() || !form.content.trim()) {
      setError('Vui lòng nhập đầy đủ thông tin bắt buộc.');
      return;
    }
    const formData = new FormData();
    formData.append('fullName', form.fullName);
    formData.append('phone', form.phonePrefix + form.phoneNumber);
    formData.append('email', form.email);
    formData.append('title', form.title);
    formData.append('content', form.content);
    if (form.image) formData.append('image', form.image);

    try {
      const res = await fetch('https://vcpc.onrender.com/support', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        setSuccess('Gửi yêu cầu thành công!');
        setForm({ fullName: '', phonePrefix: '+84', phoneNumber: '', email: '', title: '', content: '', image: null });
      } else {
        setError(data.message || 'Gửi yêu cầu thất bại.');
      }
    } catch (err) {
      setError('Không thể kết nối máy chủ.');
    }
  };

  return (
    <div
      className="support-page"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh',
        width: '100%',
        background: 'none',
         fontFamily: 'Inter, Arial, Helvetica, sans-serif',
      }}
    >
      {/* Left: Form */}
      <div
        className="support-form-container"
        style={{
          width: 520,
          background: 'linear-gradient(180deg, #85a2e9c9 0%, #e9edf738 100%)',
          color: '#222',
          padding: 36,
          borderRadius: 24,
          margin: '0 32px 0 0',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
          backdropFilter: 'blur(24px) saturate(180%)',
          WebkitBackdropFilter: 'blur(24px) saturate(180%)',
          border: '1.5px solid rgba(255,255,255,0.35)',
          outline: '1.5px solid rgba(180,210,255,0.12)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: 480,
           fontFamily: 'Inter, Arial, Helvetica, sans-serif',
        }}
      >
          {/* Overlay trắng mờ tăng hiệu ứng glassmorphism */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(120deg, rgba(255,255,255,0.22) 60%, rgba(180,210,255,0.10) 100%)',
            pointerEvents: 'none',
            zIndex: 1,
          }} />
          <h1 style={{ fontWeight: 600, fontSize: 36, marginBottom: 8, color: '#224394', letterSpacing: 0.5, position: 'relative', zIndex: 2 }}>HỖ TRỢ NGƯỜI DÙNG</h1>
        <p style={{ color: '#224394', marginBottom: 8 }}>
            Để được hỗ trợ nhanh chóng, vui lòng cung cấp thông tin và nội dung bạn cần hỗ trợ tại đây.<br />
          Ngoài ra, bạn cũng có thể gửi email trực tiếp cho chúng tôi theo địa chỉ: cuongvcpc@gmail.com<br />
          
        </p>
        <form style={{ marginTop: 24 }} onSubmit={handleSubmit} encType="multipart/form-data">
          {error && <div style={{ color: 'red', marginBottom: 12, fontWeight: 600 }}>{error}</div>}
          {success && <div style={{ color: 'green', marginBottom: 12, fontWeight: 600 }}>{success}</div>}
          <div style={{ marginBottom: 16 }}>
            <label>Họ và tên <span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              name="fullName"
              placeholder="Nhập họ và tên"
              value={form.fullName}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px 18px',
                border: '2px solid #d2d8e6',
                borderRadius: 12,
                fontSize: 18,
                background: '#fff',
                outline: 'none',
                color: '#222',
                fontWeight: 400,
                 fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                marginBottom: 0,
                boxSizing: 'border-box',
                transition: 'border 0.2s',
              }}
              onFocus={e => e.target.style.border = '2px solid #a3b6d9'}
              onBlur={e => e.target.style.border = '2px solid #d2d8e6'}
              required
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
            <div style={{ display: 'flex', gap: 8, position: 'relative' }}>
              <div style={{ minWidth: 90, maxWidth: 120, position: 'relative' }}>
                <input
                  type="text"
                  name="phonePrefix"
                  autoComplete="off"
                  value={prefixInput}
                  onChange={handlePrefixInputChange}
                  onFocus={() => setShowPrefixDropdown(true)}
                  onBlur={() => setTimeout(() => setShowPrefixDropdown(false), 150)}
                  placeholder="+84"
                  style={{
                    width: '100%',
                    padding: '10px 8px',
                    border: '2px solid #d2d8e6',
                    borderRadius: 12,
                    fontSize: 15,
                    background: '#fff',
                    outline: 'none',
                    color: '#222',
                    fontWeight: 400,
                    fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                    marginBottom: 0,
                    boxSizing: 'border-box',
                    transition: 'border 0.2s',
                  }}
                  required
                />
                {showPrefixDropdown && (
                  <div style={{
                    position: 'absolute',
                    top: 40,
                    left: 0,
                    right: 0,
                    maxHeight: 180,
                    overflowY: 'auto',
                    background: '#fff',
                    border: '1.5px solid #d2d8e6',
                    borderRadius: 10,
                    zIndex: 10,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  }}>
                    {countryCodes.filter(code => code.startsWith(prefixInput.replace('+', '')) || code.startsWith(prefixInput)).slice(0, 20).map(code => (
                      <div
                        key={code}
                        onMouseDown={() => handlePrefixSelect(code)}
                        style={{
                          padding: '8px 12px',
                          cursor: 'pointer',
                          background: code === form.phonePrefix ? '#e6f0ff' : '#fff',
                          color: '#224394',
                          fontWeight: 500,
                        }}
                      >
                        {code}
                      </div>
                    ))}
                    {countryCodes.filter(code => code.startsWith(prefixInput.replace('+', '')) || code.startsWith(prefixInput)).length === 0 && (
                      <div style={{ padding: '8px 12px', color: '#888' }}>Không tìm thấy</div>
                    )}
                  </div>
                )}
              </div>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Nhập số điện thoại"
                value={form.phoneNumber}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  border: '2px solid #d2d8e6',
                  borderRadius: 12,
                  fontSize: 18,
                  background: '#fff',
                  outline: 'none',
                  color: '#222',
                  fontWeight: 400,
                  fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                  marginBottom: 0,
                  boxSizing: 'border-box',
                  transition: 'border 0.2s',
                }}
                onFocus={e => e.target.style.border = '2px solid #a3b6d9'}
                onBlur={e => e.target.style.border = '2px solid #d2d8e6'}
                required
              />
            </div>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Email <span style={{ color: 'red' }}>*</span></label>
            <input
              type="email"
              name="email"
              placeholder="Nhập email"
              value={form.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px 18px',
                border: '2px solid #d2d8e6',
                borderRadius: 12,
                fontSize: 18,
                background: '#fff',
                outline: 'none',
                color: '#222',
                fontWeight: 400,
                 fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                marginBottom: 0,
                boxSizing: 'border-box',
                transition: 'border 0.2s',
              }}
              onFocus={e => e.target.style.border = '2px solid #a3b6d9'}
              onBlur={e => e.target.style.border = '2px solid #d2d8e6'}
              required
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Tiêu đề <span style={{ color: 'red' }}>*</span></label>
            <input
              type="text"
              name="title"
              placeholder="Nhập tiêu đề"
              value={form.title}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px 18px',
                border: '2px solid #d2d8e6',
                borderRadius: 12,
                fontSize: 18,
                background: '#fff',
                outline: 'none',
                color: '#222',
                fontWeight: 400,
                 fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                marginBottom: 0,
                boxSizing: 'border-box',
                transition: 'border 0.2s',
              }}
              onFocus={e => e.target.style.border = '2px solid #a3b6d9'}
              onBlur={e => e.target.style.border = '2px solid #d2d8e6'}
              required
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Nội dung yêu cầu hỗ trợ <span style={{ color: 'red' }}>*</span></label>
            <textarea
              name="content"
              placeholder="Nhập nội dung hỗ trợ"
              value={form.content}
              onChange={handleChange}
              required
              rows={4}
              style={{
                width: '100%',
                padding: '14px 18px',
                border: '2px solid #d2d8e6',
                borderRadius: 12,
                fontSize: 18,
                background: '#fff',
                outline: 'none',
                color: '#222',
                fontWeight: 400,
                 fontFamily: 'Inter, Arial, Helvetica, sans-serif',
                marginBottom: 0,
                boxSizing: 'border-box',
                transition: 'border 0.2s',
                resize: 'vertical',
                minHeight: 120,
              }}
              onFocus={e => e.target.style.border = '2px solid #a3b6d9'}
              onBlur={e => e.target.style.border = '2px solid #d2d8e6'}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>Hình ảnh đính kèm (nếu có)</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '8px 0',
                fontSize: 16,
                 fontFamily: 'Inter, Arial, Helvetica, sans-serif',
              }}
            />
          </div>
          <button type="submit" style={{ marginTop: 24, background: '#ffe066', color: '#111', fontWeight: 700, border: 'none', borderRadius: 8, padding: '12px 0', width: 160, fontSize: 18, cursor: 'pointer' }}>Gửi yêu cầu</button>
        </form>
      </div>
      {/* Right: Image */}
      <div
        className="support-image-container"
        style={{
          width: 380,
          minHeight: 480,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 0,
          border: 'none',
          margin: 0,
          fontFamily: 'Times New Roman, Times, serif',
        }}
      >
        <img
          src={vcpcHeader}
          alt="VCPC Header"
          style={{
            maxWidth: '90%',
            maxHeight: 420,
            borderRadius: 12,
            objectFit: 'contain',
            margin: '0 auto',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
};

export default Support;
