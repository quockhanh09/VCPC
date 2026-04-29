import React, { useState } from "react";

import logo from "../assets/img/Vector-Vcpc.png";

function DangKyDichVuBanQuyen() {
  const [step, setStep] = useState(1);
  const handleSaveDraft = (e) => {
    e.preventDefault();
    setStep(2);
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
          }}>1</span>
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
          }}>1</span>
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
                  {/* ...existing code... (giữ nguyên các trường form chủ sở hữu) */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Phân loại <span style={{ color: 'red' }}>*</span></label>
                    <select style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} >
                      <option>Cá nhân</option>
                      <option>Tổ chức</option>
                    </select>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Quốc tịch <span style={{ color: 'red' }}>*</span></label>
                    <select style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} >
                      <option>Việt Nam</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Họ và tên <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="Nguyễn Văn Cường" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Ngày cấp <span style={{ color: 'red' }}>*</span></label>
                    <input type="text" style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="01-01-2020" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Số CCCD / Hộ chiếu <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="0011 8655 3409"/>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Nơi cấp <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="Cục Cảnh sát Quản lý Hành chính về Trật tự Xã hội" />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="(+84) 987 654 321"  />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Email <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="cuongvcpc@gmail.com" />
                  </div>
                  <div style={{ gridColumn: "1/3", display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Địa chỉ <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="Số 33 ngõ 294/2 Kim Mã, phường Ngọc Hà, Thành phố Hà Nội, Việt Nam" />
                  </div>
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
          <div style={{ maxWidth: 980, margin: "0 auto 32px auto", borderRadius: 20, background: "#fff", boxShadow: "0 2px 16px rgba(40,82,187,0.08)", padding: 0, marginBottom: 24, border: "none", display: "flex" }}>
            {/* Left text block */}
            <div style={{ minWidth: 260, maxWidth: 320, background: "#F7F8FE", borderTopLeftRadius: 20, borderBottomLeftRadius: 20, padding: "32px 0 32px 32px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
              <div style={{ fontWeight: 800, color: "#2852BB", fontSize: 24, marginBottom: 6, fontFamily: 'SVN-Gilroy', lineHeight: 1.18, letterSpacing: 0.1, textAlign: "left" }}>Thông tin yêu cầu</div>
              <div style={{ color: "#888", fontSize: 14, fontWeight: 400, lineHeight: 1.5, marginTop: 2, textAlign: "left" }}>
                Thông tin liên quan đến dịch vụ cần thực hiện
              </div>
            </div>
            {/* Form box */}
            <div style={{ flex: 1, padding: 32, borderTopRightRadius: 20, borderBottomRightRadius: 20, background: "#F7F8FE" }}>
              <form>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {/* Phân loại */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Phân loại <span style={{ color: 'red' }}>*</span></label>
                    <select style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} defaultValue="Tư vấn đăng ký Quyền tác giả">
                      <option>Tư vấn đăng ký Quyền tác giả</option>
                      <option>Đăng ký Quyền tác giả</option>
                      <option>Đăng ký Quyền liên quan</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  {/* Tên tác phẩm / Tên cuộc biểu diễn */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Tên tác phẩm / Tên cuộc biểu diễn <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                  </div>
                  {/* Ngày hình thành */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Ngày hình thành <span style={{ color: 'red' }}>*</span></label>
                    <input type="text" style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                  </div>
                  {/* Mô tả */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Mô tả về tác phẩm / cuộc biểu diễn <span style={{ color: 'red' }}>*</span></label>
                    <textarea style={{ width: "100%", minHeight: 80, padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", resize: "vertical", fontSize: 15 }} placeholder="Mô tả về nội dung, thời lượng, công cụ ứng dụng, thao tác đã thực hiện, cấu tạo, ... về tác phẩm" />
                  </div>
                  {/* Tình trạng chứng nhận */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Tình trạng chứng nhận <span style={{ color: 'red' }}>*</span></label>
                    <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                      <label style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, fontSize: 15 }}>
                        <input type="checkbox" style={{ accentColor: "#2852BB", width: 18, height: 18 }} /> Chưa có GCN
                      </label>
                      <label style={{ display: "flex", alignItems: "center", gap: 6, fontWeight: 500, fontSize: 15 }}>
                        <input type="checkbox" style={{ accentColor: "#2852BB", width: 18, height: 18 }} /> Đã có GCN
                      </label>
                    </div>
                  </div>
                  {/* Giấy chứng nhận số */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Giấy chứng nhận số <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#F3F4F6", fontSize: 15 }} placeholder="-" disabled />
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* Form 2: Thông tin tác giả/đồng tác giả (chuẩn UI ảnh) */}
          <div style={{ maxWidth: 980, margin: "0 auto 32px auto", borderRadius: 20, background: "#fff", boxShadow: "0 2px 16px rgba(40,82,187,0.08)", padding: 0, marginBottom: 24, border: "none", display: "flex" }}>
            {/* Left text block */}
            <div style={{ minWidth: 260, maxWidth: 320, background: "#F7F8FE", borderTopLeftRadius: 20, borderBottomLeftRadius: 20, padding: "32px 0 32px 32px", display: "flex", flexDirection: "column", justifyContent: "flex-start" }}>
              <div style={{ fontWeight: 800, color: "#2852BB", fontSize: 24, marginBottom: 6, fontFamily: 'SVN-Gilroy', lineHeight: 1.18, letterSpacing: 0.1, textAlign: "left" }}>Thông tin tác giả/đồng tác giả</div>
              <div style={{ color: "#888", fontSize: 14, fontWeight: 400, lineHeight: 1.5, marginTop: 2, textAlign: "left" }}>
                Thông tin tác giả/đồng tác giả trên Giấy chứng nhận Quyền tác giả / Quyền liên quan
              </div>
            </div>
            {/* Form box */}
            <div style={{ flex: 1, padding: 32, borderTopRightRadius: 20, borderBottomRightRadius: 20, background: "#F7F8FE" }}>
              <form>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  {/* Họ tên tác giả */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Họ tên tác giả <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                  </div>
                  {/* Quốc tịch */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Quốc tịch <span style={{ color: 'red' }}>*</span></label>
                    <select style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }}>
                      <option>Việt Nam</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  {/* Bút danh */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Bút danh thể hiện trên tác phẩm (nếu có) <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                  </div>
                  {/* Số CCCD/Hộ chiếu */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Số CCCD / Hộ chiếu <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                  </div>
                  {/* Ngày cấp */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Ngày cấp <span style={{ color: 'red' }}>*</span></label>
                    <input type="text" style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                  </div>
                  {/* Nơi cấp */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Nơi cấp <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                  </div>
                  {/* Số điện thoại */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                  </div>
                  {/* Email */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Email <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                  </div>
                  {/* Địa chỉ tác giả */}
                  <div style={{ gridColumn: "1/3", display: "flex", flexDirection: "column", gap: 8 }}>
                    <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Địa chỉ tác giả <span style={{ color: 'red' }}>*</span></label>
                    <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff", fontSize: 15 }} placeholder="" />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 24 }}>
                  <button type="button" style={{ background: "#2852BB", color: "#fff", border: "none", borderRadius: 8, padding: "10px 32px", fontWeight: 600, fontSize: 16, cursor: "pointer", minWidth: 170, display: "flex", alignItems: "center", gap: 8 }}>
                    + Thêm tác giả
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
      {/* Form 2: Tổ chức */}
      <div style={{ maxWidth: 980, margin: "0 auto 32px auto", borderRadius: 20, padding: 32, marginBottom: 24 }}>
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
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Phân loại <span style={{ color: 'red' }}>*</span></label>
                  <select style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }}>
                    <option>Tổ chức</option>
                    <option>Cá nhân</option>
                  </select>
                </div>
                {/* Tên tổ chức */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                  <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Tên tổ chức <span style={{ color: 'red' }}>*</span></label>
                  <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="Công ty Cổ phần ABC" />
                </div>
                {/* Mã số doanh nghiệp */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Mã số doanh nghiệp <span style={{ color: 'red' }}>*</span></label>
                  <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="0947356289" />
                </div>
                {/* Ngày cấp */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Ngày cấp <span style={{ color: 'red' }}>*</span></label>
                  <input type="text" style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="01-01-2020" />
                </div>
                {/* Nơi cấp */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, gridColumn: "1/3" }}>
                  <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Nơi cấp <span style={{ color: 'red' }}>*</span></label>
                  <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="Phòng Đăng ký doanh nghiệp, Bộ Tài chính" />
                </div>
                {/* Người đại diện pháp luật */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Người đại diện pháp luật <span style={{ color: 'red' }}>*</span></label>
                  <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="Nguyễn Văn Cường" />
                </div>
                {/* Chức danh */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Chức danh <span style={{ color: 'red' }}>*</span></label>
                  <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="Giám đốc" />
                </div>
                {/* Người phụ trách công việc */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Người phụ trách công việc <span style={{ color: 'red' }}>*</span></label>
                  <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="Phạm Minh Hoàng" />
                </div>
                {/* Chức danh phụ trách */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Chức danh <span style={{ color: 'red' }}>*</span></label>
                  <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="Trợ lý" />
                </div>
                {/* Số điện thoại */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                  <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="(+84) 987 654 321" />
                </div>
                {/* Email */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Email <span style={{ color: 'red' }}>*</span></label>
                  <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="cuongvcpc@gmail.com" />
                </div>
                {/* Địa chỉ tổ chức */}
                <div style={{ gridColumn: "1/3", display: "flex", flexDirection: "column", gap: 8 }}>
                  <label style={{ fontWeight: 600, color: "#2852BB", fontSize: 15 }}>Địa chỉ tổ chức <span style={{ color: 'red' }}>*</span></label>
                  <input style={{ width: "100%", padding: 10, borderRadius: 8, border: "1.5px solid #B6B6B6", background: "#fff" }} placeholder="Số 33 ngõ 294/2 Kim Mã, phường Ngọc Hà, Thành phố Hà Nội, Việt Nam" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
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
          <button style={{ background: "#C9C9C9", color: "#10214B", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 500, fontSize: 16, cursor: "pointer", minWidth: 110 }}>Hủy bỏ</button>
          {step === 1 && (
            <button type="button" onClick={handleSaveDraft} style={{ background: "#C9C9C9", color: "#10214B", border: "none", borderRadius: 8, padding: "10px 24px", fontWeight: 500, fontSize: 16, cursor: "pointer", minWidth: 110 }}>Lưu bản nháp</button>
          )}
          <button style={{ background: "#2852BB", color: "#fff", border: "none", borderRadius: 8, padding: "10px 32px", fontWeight: 600, fontSize: 16, cursor: "pointer", minWidth: 170, display: "flex", alignItems: "center", gap: 8 }}>
            Đi đến Thanh toán
            <span style={{ fontSize: 20, marginLeft: 4 }}>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DangKyDichVuBanQuyen;
