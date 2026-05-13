// Thêm fetch polyfill nếu cần cho trình duyệt cũ

// Hàm gửi dữ liệu đăng ký dịch vụ
async function handleRegister(step, ownerForms, authorForms, phanLoai, tinhTrangGCN, soGCN) {
  try {
    if (step === 1) {
      // Lấy dữ liệu chủ sở hữu đầu tiên
      const owner = ownerForms[0] || {};
      const data = {
        fullName: owner.fields?.hoten || '',
        phone: owner.fields?.sdt || '',
        email: owner.fields?.email || '',
        phanLoai: owner.phanLoai,
        ...owner.fields,
        tinhTrangGCN,
        soGCN
      };
      const res = await fetch('http://localhost:3000/register/step1', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Lỗi gửi đăng ký step 1');
      alert(result.message || 'Đã gửi đăng ký step 1!');
    } else if (step === 2) {
      // Lấy dữ liệu tác giả đầu tiên
      const author = authorForms[0] || {};
      const data = {
        fullName: author.hoten || '',
        phone: author.sdt || '',
        email: author.email || '',
        ...author,
        phanLoai,
        tinhTrangGCN,
        soGCN
      };
      const res = await fetch('http://localhost:3000/register/step2', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await res.json();
      if (!res.ok) throw new Error(result.message || 'Lỗi gửi đăng ký step 2');
      alert(result.message || 'Đã gửi đăng ký step 2!');
    }
  } catch (err) {
    alert(err.message || 'Lỗi gửi đăng ký dịch vụ');
  }
}

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/img/Vector-Vcpc.png";


function DangKyDichVuBanQuyen() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [phanLoai, setPhanLoai] = useState("Cá nhân");
  const handleSaveDraft = (e) => {
    e.preventDefault();
    setStep(2);
  };
  const [tinhTrangGCN, setTinhTrangGCN] = useState("chua");
  const [soGCN, setSoGCN] = useState("");
  const isGCN = tinhTrangGCN === "da";

  // State for multiple owner forms
  const [ownerForms, setOwnerForms] = useState([
      { phanLoai: "Cá nhân", fields: { ngaycap: '' } }
  ]);

  // Handler for changing a field in a specific owner form
  const handleOwnerFormChange = (idx, key, value) => {
    setOwnerForms(forms => forms.map((form, i) => 
      i === idx ? { ...form, fields: { ...form.fields, [key]: value } } : form
    ));
  };

  // Handler for changing 'phanLoai' in a specific owner form
  const handleOwnerPhanLoaiChange = (idx, value) => {
    setOwnerForms(forms => forms.map((form, i) => 
      i === idx ? { ...form, phanLoai: value, fields: {} } : form
    ));
  };

  // Add new owner form
  const handleAddOwnerForm = () => {
    setOwnerForms(forms => ([
      ...forms,
      { phanLoai: "Cá nhân", fields: { ngaycap: '' } }
    ]));
  };

  // --- Step 2: Nhiều form tác giả ---
  const [authorForms, setAuthorForms] = useState([
    { hoten: '', quoctich: 'Việt Nam', butdanh: '', cccd: '', ngaycap: '', noicap: '', sdt: '', email: '', diachi: '' }
  ]);

  const handleAddAuthorForm = () => {
    setAuthorForms(forms => ([
      ...forms,
      { hoten: '', quoctich: 'Việt Nam', butdanh: '', cccd: '', ngaycap: '', noicap: '', sdt: '', email: '', diachi: '' }
    ]));
  };
  const handleAuthorFormChange = (idx, key, value) => {
    setAuthorForms(forms => forms.map((form, i) =>
      i === idx ? { ...form, [key]: value } : form
    ));
  };

  // --- Step 3: Hồ sơ đính kèm ---
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [dropActive, setDropActive] = useState(false);
  const fileInputRef = useRef();

  // Xử lý chọn file (từ input hoặc drag&drop)
  const handleFileChange = (e) => {
    let files = Array.from(e.target.files || []);
    // Gộp với file cũ, loại trùng tên
    setAttachedFiles(prev => {
      const all = [...prev, ...files];
      const unique = [];
      const names = new Set();
      for (const f of all) {
        if (!names.has(f.name)) {
          unique.push(f);
          names.add(f.name);
        }
      }
      return unique;
    });
    // Reset input nếu chọn lại cùng file
    if (e.target.value) e.target.value = "";
  };

  // Xóa file khỏi danh sách
  const handleRemoveFile = (idx) => {
    setAttachedFiles(files => files.filter((_, i) => i !== idx));
  };

  // Handler for Cancel button
  const handleCancel = () => {
    if (step === 1) {
      navigate("/DichVuBanQuyen");
    } else if (step === 2) {
      setStep(1);
    } else if (step === 3) {
      setStep(2);
    }
  };

  return (
    <div style={{ background: "#FFFAF2", minHeight: "100vh", paddingBottom: 40 }}>
      <div style={{ maxWidth: 520, margin: "0 auto", paddingTop: 32, textAlign: "center" }}>
        <img src={logo} alt="VCPC Logo" style={{ width: 90, marginBottom: 12 }} />
        <h1 style={{ color: "#2852BB", fontWeight: 800, fontSize: 28, marginBottom: 8, fontFamily: 'SVN-Gilroy', letterSpacing: 0.2 }}>
          ĐĂNG KÝ DỊCH VỤ BẢN QUYỀN
        </h1>
        <p style={{ color: "#3B3B3B", fontSize: 16, marginBottom: 32, fontWeight: 400 }}>
          Vui lòng cung cấp các thông tin chuyên môn chính xác để Hội đồng giám định có cơ sở đánh giá.
        </p>
      </div>
      {/* Stepper */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 0,
        marginBottom: 32,
        marginTop: 8
      }}>
        {/* Step 1 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 220 }}>
          <span style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: step === 1 ? "#2852BB" : "#E6E6F0",
            color: step === 1 ? "#fff" : "#A3A3B3",
            fontWeight: 600,
            fontSize: 17,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 4
          }}>1</span>
          <span style={{ color: step === 1 ? "#222" : "#B6B6B6", fontWeight: step === 1 ? 700 : 600, fontSize: step === 1 ? 19 : 18, fontFamily: 'SVN-Gilroy', textAlign: "center", lineHeight: 1.2 }}>Thông tin<br />chủ sở hữu</span>
        </div>
        {/* Line 1 */}
        <div style={{ width: 120, height: 2, background: "#D9D9D9", margin: "0 8px" }} />
        {/* Step 2 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 220 }}>
          <span style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: step === 2 ? "#2852BB" : "#E6E6F0",
            color: step === 2 ? "#fff" : "#A3A3B3",
            fontWeight: 600,
            fontSize: 17,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 4
          }}>2</span>
          <span style={{ color: step === 2 ? "#222" : "#B6B6B6", fontWeight: step === 2 ? 700 : 600, fontSize: step === 2 ? 19 : 18, fontFamily: 'SVN-Gilroy', textAlign: "center", lineHeight: 1.2 }}>Thông tin<br />tác phẩm</span>
        </div>
        {/* Line 2 */}
        <div style={{ width: 120, height: 2, background: "#D9D9D9", margin: "0 8px" }} />
        {/* Step 3 */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minWidth: 220 }}>
          <span style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: step === 3 ? "#2852BB" : "#E6E6F0",
            color: step === 3 ? "#fff" : "#A3A3B3",
            fontWeight: 600,
            fontSize: 17,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 4
          }}>3</span>
          <span style={{ color: step === 3 ? "#222" : "#B6B6B6", fontWeight: step === 3 ? 700 : 600, fontSize: step === 3 ? 19 : 18, fontFamily: 'SVN-Gilroy', textAlign: "center", lineHeight: 1.2 }}>Đính kèm<br />tài liệu</span>
        </div>
      </div>
      {/* Form 1: Chủ sở hữu */}

      {step === 1 && (
        <div style={{
          maxWidth: 980,
          margin: "0 auto 32px auto",
          borderRadius: 20,
          padding: 32,
          marginBottom: 24,
        }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 32 }}>
            {/* Left text block OUTSIDE form box */}
            <div style={{ minWidth: 260, maxWidth: 320, marginLeft: 0, marginRight: 0, paddingLeft: 0, background: 'transparent', boxShadow: 'none', paddingTop: 0 }}>
              <div style={{
                fontWeight: 800,
                color: "#2852BB",
                fontSize: 26,
                marginBottom: 6,
                fontFamily: 'SVN-Gilroy',
                lineHeight: 1.18,
                letterSpacing: 0.1,
                textAlign: "left"
              }}>Chủ sở hữu / Bên<br />được ủy quyền</div>
              <div style={{
                color: "#888",
                fontSize: 14,
                marginBottom: 0,
                fontWeight: 400,
                lineHeight: 1.5,
                marginTop: 2,
                textAlign: "left"
              }}>
                Thông tin cá nhân hoặc tổ chức sở hữu<br />hoặc được ủy quyền thực hiện dịch vụ
              </div>
            </div>
            {/* Form box */}
            <div style={{ flex: 1, background: "#F7F8FE", borderRadius: 20, boxShadow: "0 2px 16px rgba(0,0,0,0.06)", padding: 32, border: "1.5px solid #E0E6F7" }}>
              <form>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {/* Phân loại */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Phân loại <span style={{ color: 'red' }}>*</span></label>
                    <select
                      value={phanLoai}
                      onChange={e => setPhanLoai(e.target.value)}
                      style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }}
                    >
                      <option value="Cá nhân">Cá nhân</option>
                      <option value="Tổ chức">Tổ chức</option>
                    </select>
                  </div>
                  {/* Form Cá nhân */}
                  {phanLoai === "Cá nhân" && (
                    <>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label>Họ và tên <span style={{ color: 'red' }}>*</span></label>
                        <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label>Quốc tịch <span style={{ color: 'red' }}>*</span></label>
                        <select style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }}>
                          <option>Việt Nam</option>
                          <option>Khác</option>
                        </select>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label>Số CCCD / Hộ chiếu <span style={{ color: 'red' }}>*</span></label>
                        <input  style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                       <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                         <label>Ngày cấp <span style={{ color: 'red' }}>*</span></label>
                         <input
                           type="date"
                           value={ownerForms[0].fields.ngaycap || ''}
                           onChange={e => handleOwnerFormChange(0, 'ngaycap', e.target.value)}
                           style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", cursor: "pointer" }}
                           placeholder="Chọn ngày"
                           onFocus={e => e.target.showPicker && e.target.showPicker()}
                         />
                       </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                        <label>Nơi cấp <span style={{ color: 'red' }}>*</span></label>
                        <input  style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                        <input  style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label>Email <span style={{ color: 'red' }}>*</span></label>
                        <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                        <label>Địa chỉ <span style={{ color: 'red' }}>*</span></label>
                        <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                    </>
                  )}
                  {/* Form Tổ chức */}
                  {phanLoai === "Tổ chức" && (
                    <>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                        <label>Tên tổ chức <span style={{ color: 'red' }}>*</span></label>
                        <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label>Mã số doanh nghiệp <span style={{ color: 'red' }}>*</span></label>
                        <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                       <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                         <label>Ngày cấp <span style={{ color: 'red' }}>*</span></label>
                         <input
                           type="date"
                           value={ownerForms[0].fields.ngaycap || ''}
                           onChange={e => handleOwnerFormChange(0, 'ngaycap', e.target.value)}
                           style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", cursor: "pointer" }}
                           placeholder="Chọn ngày"
                           onFocus={e => e.target.showPicker && e.target.showPicker()}
                         />
                       </div>
                                      {/* Nếu có nhiều ownerForms thì render đúng input date cho từng form */}
                                      {ownerForms.length > 1 && ownerForms.map((form, idx) => idx > 0 && (
                                        <div key={idx} style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
                                          <label>Ngày cấp (chủ sở hữu {idx + 1}) <span style={{ color: 'red' }}>*</span></label>
                                          <input
                                            type="date"
                                            value={form.fields.ngaycap || ''}
                                            onChange={e => handleOwnerFormChange(idx, 'ngaycap', e.target.value)}
                                            style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", cursor: "pointer" }}
                                            placeholder="Chọn ngày"
                                            onFocus={e => e.target.showPicker && e.target.showPicker()}
                                          />
                                        </div>
                                      ))}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                        <label>Nơi cấp <span style={{ color: 'red' }}>*</span></label>
                        <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label>Người đại diện pháp luật <span style={{ color: 'red' }}>*</span></label>
                        <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label>Chức danh <span style={{ color: 'red' }}>*</span></label>
                        <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label>Người phụ trách công việc <span style={{ color: 'red' }}>*</span></label>
                        <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label>Chức danh <span style={{ color: 'red' }}>*</span></label>
                        <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                        <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label>Email <span style={{ color: 'red' }}>*</span></label>
                        <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                        <label>Địa chỉ tổ chức <span style={{ color: 'red' }}>*</span></label>
                        <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                      </div>
                    </>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Thông tin yêu cầu và Thông tin tác giả/đồng tác giả */}
      {step === 2 && (
        <>
          {/* Form 1: Thông tin yêu cầu (chuẩn UI ảnh 2) */}
          <div style={{ maxWidth: 980, margin: "0 auto 32px auto", borderRadius: 20, padding: 0, marginBottom: 24, border: "none", display: "flex",gap: 20 }}>
            {/* Left text block */}
            <div style={{ minWidth: 260, maxWidth: 320,  borderTopLeftRadius: 20, borderBottomLeftRadius: 20, padding: "32px 0 32px 32px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
              <div style={{ fontWeight: 800, color: "#2852BB", fontSize: 24, marginBottom: 6, fontFamily: 'SVN-Gilroy', lineHeight: 1.18, letterSpacing: 0.1, textAlign: "left" }}>Thông tin yêu cầu</div>
              <div style={{ color: "#888", fontSize: 14, fontWeight: 400, lineHeight: 1.5, marginTop: 2, textAlign: "left" }}>
                Thông tin liên quan đến dịch vụ  cầnthực hiện
              </div>
            </div>
            {/* Form box */}
            <div style={{ flex: 1, padding: 32, borderRadius: 20, background: "#F7F8FE" }}>
              <form>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {/* Phân loại */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Phân loại <span style={{ color: 'red' }}>*</span></label>
                    <select style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} defaultValue="Tư vấn đăng ký Quyền tác giả">
                      <option>Dịch vụ công bố bản quyền quyền tác giả</option>
                      <option>Dịch vụ Công bố bản quyền quyền liên quan</option>
                      <option>Dịch vụ tư vấn đăng ký quyền tác giả</option>
                      <option>Dịch vụ tư vấn đăng ký quyền liên quan</option>
                      <option>Dịch vụ cấp lại giấy chứng nhận quyền tác giả/quyền liên quan</option>
                      <option>Dịch vụ cấp phép sử dụng bản quyền</option>
                      <option>Dịch vụ bảo vệ bản quyền toàn diện</option>
                      <option>Dịch vụ giám định bản quyền</option>
                      <option>Dịch vụ đại điền quyền tác giả / quyền liên quan</option>
                      <option>Báo cáo vi phạm bản quyền</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  {/* Tên tác phẩm / Tên cuộc biểu diễn */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ color: "#222", fontSize: 15 }}>Tên tác phẩm / Tên cuộc biểu diễn <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                  </div>
                  {/* Ngày hình thành */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ color: "#222", fontSize: 15 }}>Ngày hình thành <span style={{ color: 'red' }}>*</span></label>
                    <input type="text" style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                  </div>
                  {/* Mô tả */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                    <label style={{ color: "#222", fontSize: 15 }}>Mô tả về tác phẩm / cuộc biểu diễn <span style={{ color: 'red' }}>*</span></label>
                    <textarea style={{ width: "100%", minHeight: 80, padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", resize: "vertical", fontSize: 15 }} placeholder="Mô tả về nội dung, thời lượng, công cụ ứng dụng, thao tác đã thực hiện, cấu tạo, ... về tác phẩm" />
                  </div>
                  {/* Tình trạng chứng nhận */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ color: "#222", fontSize: 15 }}>Tình trạng chứng nhận <span style={{ color: 'red' }}>*</span></label>
                    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                      <label style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, fontSize: 15, cursor: 'pointer' }}>
                        <span style={{
                          width: 24,
                          height: 24,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 4,
                          background: tinhTrangGCN === 'chua' ? '#000' : '#fff',
                          border: '2px solid #000',
                          marginRight: 6,
                          transition: 'background 0.2s',
                          position: 'relative',
                        }}>
                          <input
                            type="checkbox"
                            checked={tinhTrangGCN === 'chua'}
                            onChange={() => setTinhTrangGCN('chua')}
                            style={{ opacity: 0, width: 24, height: 24, position: 'absolute', left: 0, top: 0, margin: 0, cursor: 'pointer' }}
                          />
                          {tinhTrangGCN === 'chua' && (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 8.5L7 11.5L12 5.5" stroke="#B6B6B6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        Chưa có GCN
                      </label>
                      <label style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, fontSize: 15, cursor: 'pointer' }}>
                        <span style={{
                          width: 24,
                          height: 24,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 4,
                          background: tinhTrangGCN === 'da' ? '#000' : '#fff',
                          border: '2px solid #000',
                          marginRight: 6,
                          transition: 'background 0.2s',
                          position: 'relative',
                        }}>
                          <input
                            type="checkbox"
                            checked={tinhTrangGCN === 'da'}
                            onChange={() => setTinhTrangGCN('da')}
                            style={{ opacity: 0, width: 24, height: 24, position: 'absolute', left: 0, top: 0, margin: 0, cursor: 'pointer' }}
                          />
                          {tinhTrangGCN === 'da' && (
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M4 8.5L7 11.5L12 5.5" stroke="#B6B6B6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </span>
                        Đã có GCN
                      </label>
                    </div>
                  </div>
                  {/* Giấy chứng nhận số */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ color: "#222", fontSize: 15 }}>Giấy chứng nhận số <span style={{ color: 'red' }}>*</span></label>
                    <input
                      style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: isGCN ? "#fff" : "#F3F4F6", fontSize: 15 }}
                      placeholder={isGCN ? "Nhập số GCN" : "-"}
                      disabled={!isGCN}
                      required={isGCN}
                      value={soGCN}
                      onChange={e => setSoGCN(e.target.value)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Form 2: Thông tin tác giả/đồng tác giả (nhiều form, mỗi form cách nhau vách) */}
          {authorForms.map((form, idx) => (
            <React.Fragment key={idx}>
              {idx === 0 ? (
                <div style={{ maxWidth: 980, margin: "0 auto auto", borderRadius: 20, padding: 0,  border: "none", display: "flex", gap: 20 }}>
                  {/* Left text */}
                  <div style={{ minWidth: 260, maxWidth: 320, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, padding: "32px 0 32px 32px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                    <div style={{ fontWeight: 800, color: "#2852BB", fontSize: 24, marginBottom: 6, fontFamily: 'SVN-Gilroy', lineHeight: 1.18, letterSpacing: 0.1, textAlign: "left" }}>Thông tin tác giả/đồng tác giả</div>
                    <div style={{ color: "#888", fontSize: 14, fontWeight: 400, lineHeight: 1.5, marginTop: 2, textAlign: "left" }}>
                      Thông tin tác giả/đồng tác giả trên Giấy chứng nhận Quyền tác giả / Quyền liên quan
                    </div>
                  </div>
                  {/* Form box */}
                  <div style={{ flex: 1, padding: 32, borderRadius: 20, background: "#F7F8FE" }}>
                    <form>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                        {/* Họ tên tác giả */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label style={{ color: "#222", fontSize: 15 }}>Họ tên tác giả <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.hoten} onChange={e => handleAuthorFormChange(idx, 'hoten', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                        </div>
                        {/* Quốc tịch */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label style={{ color: "#222", fontSize: 15 }}>Quốc tịch <span style={{ color: 'red' }}>*</span></label>
                          <select value={form.quoctich} onChange={e => handleAuthorFormChange(idx, 'quoctich', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }}>
                            <option>Việt Nam</option>
                            <option>Khác</option>
                          </select>
                        </div>
                        {/* Bút danh */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label style={{ color: "#222", fontSize: 15 }}>Bút danh thể hiện trên tác phẩm (nếu có) <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.butdanh} onChange={e => handleAuthorFormChange(idx, 'butdanh', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                        </div>
                        {/* Số CCCD/Hộ chiếu */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label style={{ color: "#222", fontSize: 15 }}>Số CCCD / Hộ chiếu <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.cccd} onChange={e => handleAuthorFormChange(idx, 'cccd', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                        </div>
                        {/* Ngày cấp */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label style={{ color: "#222", fontSize: 15 }}>Ngày cấp <span style={{ color: 'red' }}>*</span></label>
                          <input type="date" value={form.ngaycap} onChange={e => handleAuthorFormChange(idx, 'ngaycap', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="Chọn ngày" />
                        </div>
                        {/* Nơi cấp */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label style={{ color: "#222", fontSize: 15 }}>Nơi cấp <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.noicap} onChange={e => handleAuthorFormChange(idx, 'noicap', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                        </div>
                        {/* Số điện thoại */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label style={{ color: "#222", fontSize: 15 }}>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.sdt} onChange={e => handleAuthorFormChange(idx, 'sdt', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                        </div>
                        {/* Email */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label style={{ color: "#222", fontSize: 15 }}>Email <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.email} onChange={e => handleAuthorFormChange(idx, 'email', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                        </div>
                        {/* Địa chỉ tác giả */}
                        <div style={{ gridColumn: "1/3", display: "flex", flexDirection: "column", gap: 8 }}>
                          <label style={{ color: "#222", fontSize: 15 }}>Địa chỉ tác giả <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.diachi} onChange={e => handleAuthorFormChange(idx, 'diachi', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              ) : (
                <div style={{ maxWidth: 640, margin: "0 auto 32px auto", borderRadius: 20, padding: 32, background: "#F7F8FE", marginLeft: 800 }}>
                  <form>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                      {/* Họ tên tác giả */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label style={{ color: "#222", fontSize: 15 }}>Họ tên tác giả <span style={{ color: 'red' }}>*</span></label>
                        <input value={form.hoten} onChange={e => handleAuthorFormChange(idx, 'hoten', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                      </div>
                      {/* Quốc tịch */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label style={{ color: "#222", fontSize: 15 }}>Quốc tịch <span style={{ color: 'red' }}>*</span></label>
                        <select value={form.quoctich} onChange={e => handleAuthorFormChange(idx, 'quoctich', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }}>
                          <option>Việt Nam</option>
                          <option>Khác</option>
                        </select>
                      </div>
                      {/* Bút danh */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label style={{ color: "#222", fontSize: 15 }}>Bút danh thể hiện trên tác phẩm (nếu có) <span style={{ color: 'red' }}>*</span></label>
                        <input value={form.butdanh} onChange={e => handleAuthorFormChange(idx, 'butdanh', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                      </div>
                      {/* Số CCCD/Hộ chiếu */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label style={{ color: "#222", fontSize: 15 }}>Số CCCD / Hộ chiếu <span style={{ color: 'red' }}>*</span></label>
                        <input value={form.cccd} onChange={e => handleAuthorFormChange(idx, 'cccd', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                      </div>
                      {/* Ngày cấp */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label style={{ color: "#222", fontSize: 15 }}>Ngày cấp <span style={{ color: 'red' }}>*</span></label>
                        <input type="text" value={form.ngaycap} onChange={e => handleAuthorFormChange(idx, 'ngaycap', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                      </div>
                      {/* Nơi cấp */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label style={{ color: "#222", fontSize: 15 }}>Nơi cấp <span style={{ color: 'red' }}>*</span></label>
                        <input value={form.noicap} onChange={e => handleAuthorFormChange(idx, 'noicap', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                      </div>
                      {/* Số điện thoại */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label style={{ color: "#222", fontSize: 15 }}>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                        <input value={form.sdt} onChange={e => handleAuthorFormChange(idx, 'sdt', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                      </div>
                      {/* Email */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <label style={{ color: "#222", fontSize: 15 }}>Email <span style={{ color: 'red' }}>*</span></label>
                        <input value={form.email} onChange={e => handleAuthorFormChange(idx, 'email', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                      </div>
                      {/* Địa chỉ tác giả */}
                      <div style={{ gridColumn: "1/3", display: "flex", flexDirection: "column", gap: 8 }}>
                        <label style={{ color: "#222", fontSize: 15 }}>Địa chỉ tác giả <span style={{ color: 'red' }}>*</span></label>
                        <input value={form.diachi} onChange={e => handleAuthorFormChange(idx, 'diachi', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                      </div>
                    </div>
                  </form>
                </div>
              )}
              {idx < authorForms.length - 1 && (
                <div style={{ width: "610px", borderBottom: "2px solid #d2dbf7", margin: "0px 0px 0px 820px", alignSelf: "flex-start" }} />
              )}
            </React.Fragment>
          ))}
          <div style={{ maxWidth: 980, margin: "20px auto 20px", display: "flex", justifyContent: "flex-end" }}>
            <button type="button" onClick={handleAddAuthorForm} style={{ background: "#2852BB", color: "#fff", border: "none", borderRadius: 8, padding: "10px 32px", fontWeight: 600, fontSize: 16, cursor: "pointer", minWidth: 170, display: "flex", alignItems: "center", gap: 8 }}>
              + Thêm tác giả
            </button>
          </div>
        </>
      )}
        {/* Form 3: Thông tin chủ sở hữu/đồng chủ sở hữu (chuẩn UI ảnh) */}
        {step === 2 && (
          <div>
            {/* Form đầu tiên: luôn có left text và form box */}
            {ownerForms.length > 0 && (
              <div style={{ maxWidth: 980, margin: "0 auto 0 auto", borderRadius: 20, padding: 0, marginBottom: 0, border: "none", display: "flex", gap: 20 }}>
                {/* Left text block */}
                <div style={{ minWidth: 260, maxWidth: 320, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, padding: "32px 0 32px 32px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
                  <div style={{ fontWeight: 800, color: "#2852BB", fontSize: 22, marginBottom: 6, fontFamily: 'SVN-Gilroy', lineHeight: 1.18, letterSpacing: 0.1, textAlign: "left" }}>Thông tin chủ sở hữu/đồng chủ sở hữu</div>
                  <div style={{ color: "#888", fontSize: 13, fontWeight: 400, lineHeight: 1.5, marginTop: 2, textAlign: "left" }}>
                    Thông tin chủ sở hữu/đồng chủ sở hữu trên Giấy chứng nhận Quyền tác giả / Quyền liên quan
                  </div>
                </div>
                {/* Form box */}
                <div style={{ flex: 1, padding: 32, borderRadius: 20, background: "#F7F8FE" }}>
                  <form>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                      {/* Phân loại */}
                      <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                        <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Phân loại <span style={{ color: 'red' }}>*</span></label>
                        <select
                          value={ownerForms[0].phanLoai}
                          onChange={e => handleOwnerPhanLoaiChange(0, e.target.value)}
                          style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }}
                        >
                          <option value="Cá nhân">Cá nhân</option>
                          <option value="Tổ chức">Tổ chức</option>
                        </select>
                      </div>
                      {/* Form Cá nhân */}
                      {ownerForms[0].phanLoai === "Cá nhân" && (
                        <>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Họ tên chủ sở hữu <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.hoten || ''} onChange={e => handleOwnerFormChange(0, 'hoten', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Quốc tịch <span style={{ color: 'red' }}>*</span></label>
                            <select value={ownerForms[0].fields.quoctich || 'Việt Nam'} onChange={e => handleOwnerFormChange(0, 'quoctich', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }}>
                              <option>Việt Nam</option>
                              <option>Khác</option>
                            </select>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Số CCCD / Hộ chiếu <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.cccd || ''} onChange={e => handleOwnerFormChange(0, 'cccd', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Ngày cấp <span style={{ color: 'red' }}>*</span></label>
                            <input type="date" value={ownerForms[0].fields.ngaycap || ''} onChange={e => handleOwnerFormChange(0, 'ngaycap', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="Chọn ngày" />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Nơi cấp <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.noicap || ''} onChange={e => handleOwnerFormChange(0, 'noicap', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.sdt || ''} onChange={e => handleOwnerFormChange(0, 'sdt', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Email <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.email || ''} onChange={e => handleOwnerFormChange(0, 'email', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                          <div style={{ gridColumn: "1/3", display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Địa chỉ tác giả <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.diachi || ''} onChange={e => handleOwnerFormChange(0, 'diachi', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                        </>
                      )}
                      {/* Form Tổ chức */}
                      {ownerForms[0].phanLoai === "Tổ chức" && (
                        <>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                            <label>Họ tên chủ sở hữu <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.hoten || ''} onChange={e => handleOwnerFormChange(0, 'hoten', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Quốc tịch <span style={{ color: 'red' }}>*</span></label>
                            <select value={ownerForms[0].fields.quoctich || 'Việt Nam'} onChange={e => handleOwnerFormChange(0, 'quoctich', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }}>
                              <option>Việt Nam</option>
                              <option>Khác</option>
                            </select>
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Số đăng ký kinh doanh <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.sodkkd || ''} onChange={e => handleOwnerFormChange(0, 'sodkkd', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Ngày cấp <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.ngaycap || ''} onChange={e => handleOwnerFormChange(0, 'ngaycap', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Nơi cấp <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.noicap || ''} onChange={e => handleOwnerFormChange(0, 'noicap', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Người đại diện pháp luật <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.nguoidai || ''} onChange={e => handleOwnerFormChange(0, 'nguoidai', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Chức danh <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.chucdanh || ''} onChange={e => handleOwnerFormChange(0, 'chucdanh', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.sdt || ''} onChange={e => handleOwnerFormChange(0, 'sdt', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Email <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.email || ''} onChange={e => handleOwnerFormChange(0, 'email', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                          <div style={{ gridColumn: "1/3", display: "flex", flexDirection: "column", gap: 8 }}>
                            <label>Địa chỉ tổ chức <span style={{ color: 'red' }}>*</span></label>
                            <input value={ownerForms[0].fields.diachi || ''} onChange={e => handleOwnerFormChange(0, 'diachi', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                          </div>
                        </>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            )}
            {/* Các form box thêm mới: chỉ nằm dưới, không có left text */}
            {ownerForms.slice(1).map((form, idx) => (
              <React.Fragment key={idx}>
                {/* Vạch ngăn cách phía trên form đầu tiên được thêm mới */}
                {(idx === 0 && ownerForms.length > 1) && (
                  <div style={{ width: "610px", borderBottom: "2px solid #E0E6F7", margin: "0px 0px 0px 820px", alignSelf: "flex-start" }} />
                )}
                <div style={{ maxWidth: 640, margin: "0 auto 0px auto", borderRadius: 20, padding: 32, background: "#F7F8FE", marginLeft: 805 }}>
                  <form>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                    {/* Phân loại */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                      <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Phân loại <span style={{ color: 'red' }}>*</span></label>
                      <select
                        value={form.phanLoai}
                        onChange={e => handleOwnerPhanLoaiChange(idx + 1, e.target.value)}
                        style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }}
                      >
                        <option value="Cá nhân">Cá nhân</option>
                        <option value="Tổ chức">Tổ chức</option>
                      </select>
                    </div>
                    {/* Form Cá nhân */}
                    {form.phanLoai === "Cá nhân" && (
                      <>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Họ tên chủ sở hữu <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.hoten || ''} onChange={e => handleOwnerFormChange(idx + 1, 'hoten', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Quốc tịch <span style={{ color: 'red' }}>*</span></label>
                          <select value={form.fields.quoctich || 'Việt Nam'} onChange={e => handleOwnerFormChange(idx + 1, 'quoctich', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }}>
                            <option>Việt Nam</option>
                            <option>Khác</option>
                          </select>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Số CCCD / Hộ chiếu <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.cccd || ''} onChange={e => handleOwnerFormChange(idx + 1, 'cccd', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Ngày cấp <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.ngaycap || ''} onChange={e => handleOwnerFormChange(idx + 1, 'ngaycap', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Nơi cấp <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.noicap || ''} onChange={e => handleOwnerFormChange(idx + 1, 'noicap', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.sdt || ''} onChange={e => handleOwnerFormChange(idx + 1, 'sdt', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Email <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.email || ''} onChange={e => handleOwnerFormChange(idx + 1, 'email', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ gridColumn: "1/3", display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Địa chỉ tác giả <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.diachi || ''} onChange={e => handleOwnerFormChange(idx + 1, 'diachi', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                      </>
                    )}
                    {/* Form Tổ chức */}
                    {form.phanLoai === "Tổ chức" && (
                      <>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                          <label>Họ tên chủ sở hữu <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.hoten || ''} onChange={e => handleOwnerFormChange(idx + 1, 'hoten', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Quốc tịch <span style={{ color: 'red' }}>*</span></label>
                          <select value={form.fields.quoctich || 'Việt Nam'} onChange={e => handleOwnerFormChange(idx + 1, 'quoctich', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }}>
                            <option>Việt Nam</option>
                            <option>Khác</option>
                          </select>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Số đăng ký kinh doanh <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.sodkkd || ''} onChange={e => handleOwnerFormChange(idx + 1, 'sodkkd', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Ngày cấp <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.ngaycap || ''} onChange={e => handleOwnerFormChange(idx + 1, 'ngaycap', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Nơi cấp <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.noicap || ''} onChange={e => handleOwnerFormChange(idx + 1, 'noicap', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Người đại diện pháp luật <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.nguoidai || ''} onChange={e => handleOwnerFormChange(idx + 1, 'nguoidai', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Chức danh <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.chucdanh || ''} onChange={e => handleOwnerFormChange(idx + 1, 'chucdanh', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.sdt || ''} onChange={e => handleOwnerFormChange(idx + 1, 'sdt', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Email <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.email || ''} onChange={e => handleOwnerFormChange(idx + 1, 'email', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                        <div style={{ gridColumn: "1/3", display: "flex", flexDirection: "column", gap: 8 }}>
                          <label>Địa chỉ tổ chức <span style={{ color: 'red' }}>*</span></label>
                          <input value={form.fields.diachi || ''} onChange={e => handleOwnerFormChange(idx + 1, 'diachi', e.target.value)} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} />
                        </div>
                      </>
                    )}
                    </div>
                  </form>
                </div>
                {/* Vạch ngăn cách giữa các form, không ở cuối */}
                {idx > 0 && idx < ownerForms.length - 1 && (
                  <div style={{ width: "610px", borderBottom: "2px solid #E0E6F7", margin: "0px 0px 0px 820px", alignSelf: "flex-start" }} />
                )}
              </React.Fragment>
            ))}
            <div style={{ maxWidth: 980, margin: "20px auto 0", display: "flex", justifyContent: "flex-end" }}>
              <button type="button" onClick={handleAddOwnerForm} style={{ background: "#2852BB", color: "#fff", border: "none", borderRadius: 8, padding: "10px 32px", fontWeight: 600, fontSize: 16, cursor: "pointer", minWidth: 170, display: "flex", alignItems: "center", gap: 8 }}>
                + Thêm chủ sở hữu
              </button>
            </div>
          </div>
        )}
      {/* Step 3: Hồ Sơ Đính Kèm */}
      {step === 3 && (
        <div style={{ maxWidth: 980, margin: "32px auto 0 auto", padding: 0, display: "flex", gap: 32 }}>
          {/* Left: Label + Mô tả */}
          <div style={{ minWidth: 260, maxWidth: 320, padding: "32px 0 32px 32px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
            <div style={{ fontWeight: 800, color: "#2852BB", fontSize: 20, marginBottom: 6, fontFamily: 'SVN-Gilroy', lineHeight: 1.18, letterSpacing: 0.1, textAlign: "left" }}>Hồ Sơ Đính Kèm</div>
            <div style={{ color: "#B6B6B6", fontSize: 13, fontWeight: 400, lineHeight: 1.5, marginTop: 2, textAlign: "left" }}>
              Tải lên các giấy tờ pháp lý liên quan
            </div>
          </div>
          {/* Right: Upload Area */}
          <div style={{ flex: 1, background: "#f5f5f5", borderRadius: 16, padding: 48, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div
              onDragOver={e => { e.preventDefault(); setDropActive(true); }}
              onDragLeave={e => { e.preventDefault(); setDropActive(false); }}
              onDrop={e => {
                e.preventDefault();
                setDropActive(false);
                const files = Array.from(e.dataTransfer.files);
                handleFileChange({ target: { files } });
              }}
              style={{
                width: "100%",
                minHeight: 320,
                border: dropActive ? "2.5px dashed #2852BB" : "2.5px dashed #D9D9D9",
                borderRadius: 18,
                background: "#F7F8FE",
                padding: 72,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transition: "border 0.2s",
                cursor: "pointer"
              }}
              onClick={() => fileInputRef.current && fileInputRef.current.click()}
            >
              {/* Icon folder upload */}
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: 12 }}>
                <rect width="52" height="52" rx="12" fill="#E6EDFB" />
                <path d="M16 36C14.8954 36 14 35.1046 14 34V22C14 20.8954 14.8954 20 16 20H20.5858C21.1166 20 21.6247 19.7893 22 19.4142L23.4142 18C23.7893 17.6247 24.2974 17.4142 24.8284 17.4142H36C37.1046 17.4142 38 18.3097 38 19.4142V34C38 35.1046 37.1046 36 36 36H16Z" fill="#2852BB"/>
                <path d="M26 24V31" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
                <path d="M22.5 27L26 24L29.5 27" stroke="#fff" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
              {/* Hướng dẫn */}
              <div style={{ color: "#888", fontSize: 18, textAlign: "center", marginBottom: 16 }}>
                Drag your file(s) to start uploading <span style={{ color: '#B6B6B6' }}>or</span>
              </div>
              {/* Button thêm tệp tin */}
              <button
                type="button"
                onClick={e => { e.stopPropagation(); fileInputRef.current && fileInputRef.current.click(); }}
                style={{
                  border: "2px solid #2852BB",
                  background: "#fff",
                  color: "#2852BB",
                  borderRadius: 999,
                  padding: "12px 32px",
                  fontWeight: 600,
                  fontSize: 18,
                  cursor: "pointer",
                  marginTop: 8,
                  transition: "background 0.2s, color 0.2s, border 0.2s"
                }}
                onMouseOver={e => { e.currentTarget.style.background = '#E6EDFB'; }}
                onMouseOut={e => { e.currentTarget.style.background = '#fff'; }}
              >
                Thêm tệp tin
              </button>
              <input
                type="file"
                multiple
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {/* Preview list */}
              {attachedFiles.length > 0 && (
                <div style={{ marginTop: 24, width: "100%" }}>
                  <div style={{ fontWeight: 600, color: "#2852BB", fontSize: 15, marginBottom: 8 }}>Danh sách tệp đã chọn:</div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {attachedFiles.map((file, idx) => (
                      <li key={idx} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", borderRadius: 8, padding: "8px 16px", marginBottom: 8, boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
                        <span style={{ color: "#222", fontSize: 15, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 260 }}>{file.name}</span>
                        <button type="button" onClick={e => { e.stopPropagation(); handleRemoveFile(idx); }} style={{ background: "none", border: "none", color: "#F25C4C", fontWeight: 600, fontSize: 15, cursor: "pointer" }}>X</button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* Cảnh báo và nút thao tác */}
      <div style={{ maxWidth: 980, margin: "32px auto 0 auto", padding: 0 }}>
        <div style={{ background: "#FFD6D0", borderRadius: 12, padding: "18px 24px 18px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 32, height: 32, borderRadius: "50%", background: "#fff", color: "#F25C4C", fontWeight: 700, fontSize: 20, marginRight: 8, border: "2px solid #F25C4C" }}>i</span>
            <div>
              <div style={{ fontWeight: 700, color: "#A13B2B", fontSize: 16, marginBottom: 2 }}>Lưu ý quan trọng!</div>
              <div style={{ color: "#A13B2B", fontSize: 15, fontWeight: 400 }}>
                Các hành vi làm giả chứng từ pháp lý chứng minh hồ sơ có thể phải chịu trách nhiệm trước pháp luật.
              </div>
            </div>
          </div>
          <button style={{ background: "#C9C9C9", color: "#10214B", border: "none", borderRadius: 8, padding: "8px 18px", fontWeight: 500, fontSize: 15, cursor: "pointer", minWidth: 120, marginLeft: 24 }}>Xem hướng dẫn</button>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 16 }}>
          <button
            type="button"
            onClick={handleCancel}
            style={{ background: "#C9C9C9", color: "#10214B", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 500, fontSize: 16, cursor: "pointer", minWidth: 110 }}
          >
            Hủy bỏ
          </button>
          {step === 1 && (
            <button type="button" onClick={handleSaveDraft} style={{ background: "#C9C9C9", color: "#10214B", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 500, fontSize: 16, cursor: "pointer", minWidth: 110 }}>Lưu bản nháp</button>
          )}
          {step === 2 && (
            <button type="button" onClick={() => setStep(3)} style={{ background: "#C9C9C9", color: "#10214B", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 500, fontSize: 16, cursor: "pointer", minWidth: 110 }}>Lưu bản nháp</button>
          )}
          <button
            style={{ background: "#2852BB", color: "#fff", border: "none", borderRadius: 8, padding: "10px 32px", fontWeight: 600, fontSize: 16, cursor: "pointer", minWidth: 170, display: "flex", alignItems: "center", gap: 8 }}
            onClick={() => handleRegister(step, ownerForms, authorForms, phanLoai, tinhTrangGCN, soGCN)}
          >
            Đăng ký dịch vụ
            <span style={{ fontSize: 20, marginLeft: 4 }}>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DangKyDichVuBanQuyen;
