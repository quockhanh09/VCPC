import React from 'react';
import '../style/App.css';
import '../style/signup-in.css';
import vcpcHeader from '../assets/img/vcpc-header.png';

import { useState } from 'react';

const Support = () => {
  const [form, setForm] = useState({
    userId: '',
    email: '',
    title: '',
    content: '',
  });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.userId.trim() || !form.email.trim() || !form.title.trim() || !form.content.trim()) {
      setError('Vui lòng nhập đầy đủ thông tin bắt buộc.');
      return;
    }
    // Xử lý gửi form ở đây
    alert('Gửi thành công!');
    setForm({ userId: '', email: '', title: '', content: '' });
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
        fontFamily: 'Times New Roman, Times, serif',
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
          fontFamily: 'Times New Roman, Times, serif',
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
          Ngoài ra, bạn cũng có thể gửi email trực tiếp cho chúng tôi theo địa chỉ <br />
          
        </p>
        <form style={{ marginTop: 24 }} onSubmit={handleSubmit}>
          {error && <div style={{ color: 'red', marginBottom: 12, fontWeight: 600 }}>{error}</div>}
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ flex: 1 }}>
              <label>* ID người dùng</label>
              <input
                type="text"
                name="userId"
                placeholder="Nhập ID người dùng"
                value={form.userId}
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
                  fontFamily: 'Times New Roman, Times, serif',
                  marginBottom: 0,
                  boxSizing: 'border-box',
                  transition: 'border 0.2s',
                }}
                onFocus={e => e.target.style.border = '2px solid #a3b6d9'}
                onBlur={e => e.target.style.border = '2px solid #d2d8e6'}
              />
            </div>
            <div style={{ flex: 1 }}>
              <label>* Email nhận phản hồi</label>
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
                  fontFamily: 'Times New Roman, Times, serif',
                  marginBottom: 0,
                  boxSizing: 'border-box',
                  transition: 'border 0.2s',
                }}
                onFocus={e => e.target.style.border = '2px solid #a3b6d9'}
                onBlur={e => e.target.style.border = '2px solid #d2d8e6'}
              />
            </div>
          </div>
          <div style={{ marginTop: 16 }}>
            <label>* Tiêu đề</label>
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
                fontFamily: 'Times New Roman, Times, serif',
                marginBottom: 0,
                boxSizing: 'border-box',
                transition: 'border 0.2s',
              }}
              onFocus={e => e.target.style.border = '2px solid #a3b6d9'}
              onBlur={e => e.target.style.border = '2px solid #d2d8e6'}
            />
          </div>
          <div style={{ marginTop: 16 }}>
            <label>* Nội dung yêu cầu hỗ trợ</label>
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
                fontFamily: 'Times New Roman, Times, serif',
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
