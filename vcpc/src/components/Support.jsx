import React from 'react';
import '../style/App.css';
import '../style/signup-in.css';
import vcpcHeader from '../assets/img/vcpc-header.png';

import { useState } from 'react';

const Support = () => {
  const [form, setForm] = useState({
    fullName: '',
    phonePrefix: '+84',
    phoneNumber: '',
    email: '',
    title: '',
    content: '',
    image: null,
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setForm({ ...form, image: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
    setError('');
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
            <div style={{ display: 'flex', gap: 8 }}>
              <select
                name="phonePrefix"
                value={form.phonePrefix}
                onChange={handleChange}
                style={{
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
                  minWidth: 80,
                  maxWidth: 110,
                }}
                onFocus={e => e.target.style.border = '2px solid #a3b6d9'}
                onBlur={e => e.target.style.border = '2px solid #d2d8e6'}
                required
              >
                <option value="+84">+84</option>
                <option value="+1">+1</option>
                <option value="+61">+61</option>
                <option value="+81">+81</option>
                <option value="+82">+82</option>
                <option value="+65">+65</option>
                <option value="+86">+86</option>
                <option value="+33">+33</option>
                <option value="+49">+49</option>
                <option value="+44">+44</option>
                {/* Add more as needed */}
              </select>
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
