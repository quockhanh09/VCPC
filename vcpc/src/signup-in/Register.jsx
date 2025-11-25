import React, { useState, useRef } from "react";
import "../style/signup-in.css";
import vcpcLogo from "../assets/img/Vector-Vcpc.png";
import bgLo from "../assets/img/hero-section.png";

const days = Array.from({ length: 31 }, (_, i) => i + 1);
const months = Array.from({ length: 12 }, (_, i) => i + 1);
const years = Array.from({ length: 80 }, (_, i) => new Date().getFullYear() - i);

const Register = () => {
  const [step, setStep] = useState(1);
  const [lastName, setLastName] = useState("");
  const [middleFirstName, setMiddleFirstName] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [gender, setGender] = useState("");
  // Step 2 - contact
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const otpRefs = useRef(Array.from({ length: 6 }, () => React.createRef()));
  // Step 3 - credentials
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registeredId, setRegisteredId] = useState("");

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!lastName.trim()) {
        alert("Vui lòng nhập Họ (bắt buộc)");
        return;
      }
      setStep(2);
    }
    if (step === 2) {
      if (!phone.trim() || !email.trim()) {
        alert("Vui lòng nhập Số điện thoại và Email");
        return;
      }
      // Show OTP modal for verification before going to step 3
      setShowOtp(true);
    }
    if (step === 3) {
      if (!userId.trim() || !password.trim() || !confirmPassword.trim()) {
        alert("Vui lòng nhập đầy đủ thông tin đăng nhập");
        return;
      }
      if (password !== confirmPassword) {
        alert("Mật khẩu xác nhận không khớp");
        return;
      }
      // Simulate register success
      setRegisteredId(userId || `${lastName.toLowerCase()}vcpc`);
      setStep(4);
    }
  };

  const handleVerifyOtp = () => {
    // Simple check: require all 6 digits filled
    if (otp.some((d) => d === "")) {
      alert("Vui lòng nhập đầy đủ mã OTP");
      return;
    }
    setShowOtp(false);
    setStep(3);
  };

  const CollapsedCard = ({ num, label }) => (
    <div style={{ width: 440, borderRadius: 24, padding: "20px 28px", marginBottom: 24, background: "linear-gradient(90deg,#fff8f0 0%,rgba(255,255,255,0.5) 65%,rgba(255,255,255,0) 100%)", boxShadow: "0 2px 8px rgba(60,93,170,0.05)", display: "flex", alignItems: "center" }}>
      <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#c5cbdb", color: "#fff", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 12 }}>{num}</div>
      <div style={{ fontSize: 15, fontWeight: 500, color: "#8d8d8d" }}>{label}</div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#fcf8f2", position: "relative" }}>
      <div style={{ width: "100%", textAlign: "center", paddingTop: 36 }}>
        <img src={vcpcLogo} alt="VCPC" style={{ height: 150 }} />
      </div>
      {/* Page title */}
      <div style={{ textAlign: "center", marginTop: 0, marginBottom: 24 }}>
        <div style={{ fontWeight: 700, fontSize: 24, color: "#222" }}>Đăng ký</div>
        <div style={{ fontSize: 12, marginTop: 8, color: "#555", lineHeight: 1.4 }}>
          Đăng ký tài khoản để trở thành thành viên của <br /> Trung tâm Bảo vệ Bản quyền Việt Nam
        </div>
      </div>
      {/* Step indicator revised */}
      {step !== 4 && (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start", gap: 32, marginBottom: 12 }}>
        {[
          { key: 1, label: "Thông tin cơ bản" },
          { key: 2, label: "Thông tin liên hệ" },
          { key: 3, label: "Thông tin đăng nhập" },
        ].map((item, idx, arr) => (
          <React.Fragment key={item.key}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: step === item.key ? "#22336C" : "#cfd5e2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: step === item.key ? "#fff" : "#ffffff",
                  fontSize: 12,
                  fontWeight: 600,
                  marginBottom: 6,
                  transition: "background .3s",
                }}
              >
                {item.key}
              </div>
              <div
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: step === item.key ? "#222" : "#b0b0b0",
                  textAlign: "center",
                  lineHeight: 1.25,
                  maxWidth: 90,
                }}
              >
                {item.label}
              </div>
            </div>
            {idx < arr.length - 1 && (
              <div
                style={{
                  width: 88,
                  height: 2,
                  background: step > item.key ? "#22336C" : "#e2ddd4",
                  marginTop: 10,
                  borderRadius: 2,
                  transition: "background .3s",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      )}
      <section
        className="body-ath"
        style={{
          backgroundImage: `url(${bgLo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          paddingTop: 8,
        }}
      >
        {/* Step cards */}
        {step !== 4 && (
          <>
        {step === 1 ? (
          <form onSubmit={handleNext} style={{ width: 440, background: "#ffffff69", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", borderRadius: 24, boxShadow: "0 4px 32px 0 rgba(60,93,170,0.10)", padding: "32px", margin: "0 auto 24px auto", position: "relative" }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#222", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 12, height: 12, background: "#22336C", display: "inline-block", borderRadius: "50%" }} />
              Thông tin cơ bản
            </div>
            <div style={{ color: "#555", fontSize: 13, lineHeight: 1.5, marginBottom: 20 }}>
              Thông tin cơ bản của thành viên. <br /> Các mục có dấu <span style={{ color: "#d60000", fontWeight: 600 }}>(*)</span> là bắt buộc.
            </div>
            <div style={{ marginBottom: 18 }}>
              <label htmlFor="lastName" style={{ fontWeight: 600, color: "#444", fontSize: 14, marginBottom: 6, display: "block" }}>
                Họ <span style={{ color: "#d60000" }}>*</span>
              </label>
              <input id="lastName" type="text" placeholder="Nhập Họ của bạn" value={lastName} onChange={(e) => setLastName(e.target.value)} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e6e6e6", borderRadius: 8, fontSize: 15, background: "#fafbfc", outline: "none", fontWeight: 500, color: "#222" }} />
            </div>
            <div style={{ marginBottom: 18 }}>
              <label htmlFor="middleFirstName" style={{ fontWeight: 600, color: "#444", fontSize: 14, marginBottom: 6, display: "block" }}>
                Tên đệm và Tên
              </label>
              <input id="middleFirstName" type="text" placeholder="Nhập Tên đệm và Tên của bạn" value={middleFirstName} onChange={(e) => setMiddleFirstName(e.target.value)} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e6e6e6", borderRadius: 8, fontSize: 15, background: "#fafbfc", outline: "none", fontWeight: 500, color: "#222" }} />
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontWeight: 600, color: "#444", fontSize: 14, marginBottom: 6, display: "block" }}>Ngày sinh</label>
              <div style={{ display: "flex", gap: 12 }}>
                <select value={day} onChange={(e) => setDay(e.target.value)} style={{ flex: 1, padding: "10px 12px", border: "1.5px solid #e6e6e6", borderRadius: 8, background: "#fafbfc", fontWeight: 500 }}>
                  <option value="">Ngày</option>
                  {days.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <select value={month} onChange={(e) => setMonth(e.target.value)} style={{ flex: 1, padding: "10px 12px", border: "1.5px solid #e6e6e6", borderRadius: 8, background: "#fafbfc", fontWeight: 500 }}>
                  <option value="">Tháng</option>
                  {months.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <select value={year} onChange={(e) => setYear(e.target.value)} style={{ flex: 1, padding: "10px 12px", border: "1.5px solid #e6e6e6", borderRadius: 8, background: "#fafbfc", fontWeight: 500 }}>
                  <option value="">Năm</option>
                  {years.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontWeight: 600, color: "#444", fontSize: 14, marginBottom: 10, display: "block" }}>Giới tính</label>
              <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
                {["Nam", "Nữ", "Khác"].map((g) => (
                  <label key={g} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500, color: "#222" }}>
                    <input type="radio" name="gender" value={g} checked={gender === g} onChange={(e) => setGender(e.target.value)} style={{ width: 16, height: 16, cursor: "pointer" }} />
                    {g}
                  </label>
                ))}
              </div>
            </div>
            <button type="submit" style={{ width: "100%", background: "#000", color: "#fff", fontWeight: 700, fontSize: 18, border: "none", borderRadius: 24, padding: "14px 0", cursor: "pointer", boxShadow: "0 2px 8px 0 rgba(60,93,170,0.04)" }}>Tiếp theo</button>
          </form>
        ) : (
          <CollapsedCard num={1} label="Thông tin cơ bản" />
        )}

        {step === 2 ? (
          <form onSubmit={handleNext} style={{ width: 440, background: "#ffffff69", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", borderRadius: 24, boxShadow: "0 4px 32px 0 rgba(60,93,170,0.10)", padding: "32px", margin: "0 auto 24px auto", position: "relative" }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#222", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 12, height: 12, background: "#22336C", display: "inline-block", borderRadius: "50%" }} />
              Thông tin liên hệ
            </div>
            <div style={{ color: "#555", fontSize: 13, lineHeight: 1.5, marginBottom: 20 }}>
              Thông tin liên hệ của thành viên. <br /> Các mục có dấu <span style={{ color: "#d60000", fontWeight: 600 }}>(*)</span> là bắt buộc.
            </div>
            <div style={{ marginBottom: 18 }}>
              <label htmlFor="phone" style={{ fontWeight: 600, color: "#444", fontSize: 14, marginBottom: 6, display: "block" }}>
                Số điện thoại <span style={{ color: "#d60000" }}>*</span>
              </label>
              <input id="phone" type="tel" placeholder="Nhập số điện thoại" value={phone} onChange={(e) => setPhone(e.target.value)} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e6e6e6", borderRadius: 8, fontSize: 15, background: "#fafbfc", outline: "none", fontWeight: 500, color: "#222" }} />
            </div>
            <div style={{ marginBottom: 18 }}>
              <label htmlFor="email" style={{ fontWeight: 600, color: "#444", fontSize: 14, marginBottom: 6, display: "block" }}>
                Email <span style={{ color: "#d60000" }}>*</span>
              </label>
              <input id="email" type="email" placeholder="Nhập email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e6e6e6", borderRadius: 8, fontSize: 15, background: "#fafbfc", outline: "none", fontWeight: 500, color: "#222" }} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label htmlFor="address" style={{ fontWeight: 600, color: "#444", fontSize: 14, marginBottom: 6, display: "block" }}>Địa chỉ</label>
              <input id="address" type="text" placeholder="Nhập địa chỉ" value={address} onChange={(e) => setAddress(e.target.value)} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e6e6e6", borderRadius: 8, fontSize: 15, background: "#fafbfc", outline: "none", fontWeight: 500, color: "#222" }} />
            </div>
            <button type="submit" style={{ width: "100%", background: "#000", color: "#fff", fontWeight: 700, fontSize: 18, border: "none", borderRadius: 24, padding: "14px 0", cursor: "pointer", boxShadow: "0 2px 8px 0 rgba(60,93,170,0.04)" }}>Tiếp theo</button>
          </form>
        ) : (
          <CollapsedCard num={2} label="Thông tin liên hệ" />
        )}

        {step === 3 ? (
          <form onSubmit={handleNext} style={{ width: 440, background: "#ffffff69", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", borderRadius: 24, boxShadow: "0 4px 32px 0 rgba(60,93,170,0.10)", padding: "32px", margin: "0 auto 24px auto", position: "relative" }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#222", marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ width: 12, height: 12, background: "#22336C", display: "inline-block", borderRadius: "50%" }} />
              Thông tin đăng nhập
            </div>
            <div style={{ color: "#555", fontSize: 13, lineHeight: 1.5, marginBottom: 20 }}>
              Thông tin đăng nhập của thành viên. <br /> Các mục có dấu <span style={{ color: "#d60000", fontWeight: 600 }}>(*)</span> là bắt buộc.
            </div>
            <div style={{ marginBottom: 18 }}>
              <label htmlFor="userId" style={{ fontWeight: 600, color: "#444", fontSize: 14, marginBottom: 6, display: "block" }}>
                Tên người dùng/ID <span style={{ color: "#d60000" }}>*</span>
              </label>
              <input id="userId" type="text" placeholder="Nhập tên người dùng" value={userId} onChange={(e) => setUserId(e.target.value)} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e6e6e6", borderRadius: 8, fontSize: 15, background: "#fafbfc", outline: "none", fontWeight: 500, color: "#222" }} />
            </div>
            <div style={{ marginBottom: 18 }}>
              <label htmlFor="password" style={{ fontWeight: 600, color: "#444", fontSize: 14, marginBottom: 6, display: "block" }}>
                Mật khẩu <span style={{ color: "#d60000" }}>*</span>
              </label>
              <input id="password" type="password" placeholder="Nhập mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e6e6e6", borderRadius: 8, fontSize: 15, background: "#fafbfc", outline: "none", fontWeight: 500, color: "#222" }} />
            </div>
            <div style={{ marginBottom: 24 }}>
              <label htmlFor="confirmPassword" style={{ fontWeight: 600, color: "#444", fontSize: 14, marginBottom: 6, display: "block" }}>
                Xác nhận mật khẩu <span style={{ color: "#d60000" }}>*</span>
              </label>
              <input id="confirmPassword" type="password" placeholder="Nhập lại mật khẩu" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ width: "100%", padding: "12px 14px", border: "1.5px solid #e6e6e6", borderRadius: 8, fontSize: 15, background: "#fafbfc", outline: "none", fontWeight: 500, color: "#222" }} />
            </div>
            <button type="submit" style={{ width: "100%", background: "#000", color: "#fff", fontWeight: 700, fontSize: 18, border: "none", borderRadius: 24, padding: "14px 0", cursor: "pointer", boxShadow: "0 2px 8px 0 rgba(60,93,170,0.04)" }}>Đăng ký tài khoản</button>
          </form>
        ) : (
          <CollapsedCard num={3} label="Thông tin đăng nhập" />
        )}
        </>
        )}

        {step === 4 && (
          <div style={{ width: 440, background: "#fff", borderRadius: 16, padding: 24, textAlign: "center", boxShadow: "0 4px 32px rgba(60,93,170,0.10)", marginBottom: 48 }}>
            <div style={{ fontWeight: 700, fontSize: 20, color: "#222", marginBottom: 6 }}>Đăng ký tài khoản thành công!</div>
            <div style={{ fontSize: 13, color: "#666", marginBottom: 20 }}>Bạn đã đăng ký thành công. Bắt đầu đăng nhập để sử dụng!</div>
            <div style={{ background: "#fcf8f2", border: "1px solid #eee", borderRadius: 12, padding: 16, marginBottom: 18 }}>
              <div style={{ fontSize: 13, color: "#666", marginBottom: 6 }}>ID:</div>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#222" }}>{registeredId}</div>
            </div>
            <button onClick={() => window.location.assign('/login')} style={{ background: "#000", color: "#fff", fontWeight: 700, fontSize: 16, border: "none", borderRadius: 24, padding: "12px 18px", cursor: "pointer" }}>Đi đến Đăng nhập</button>
          </div>
        )}

        {/* OTP Modal */}
        {showOtp && (
          <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.35)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 10 }}>
            <div style={{ width: 400, borderRadius: 18, padding: 2, background: "linear-gradient(180deg, #8aa0d9 0%, #e9edf7 100%)", boxShadow: "0 12px 36px rgba(0,0,0,0.2)" }}>
              <div style={{ background: "#fff", borderRadius: 16, padding: 24 }}>
                <div style={{ fontWeight: 800, fontSize: 20, textAlign: "center", color: "#22336C", marginBottom: 12 }}>XÁC THỰC TÀI KHOẢN</div>
                <div style={{ fontSize: 13, color: "#666", textAlign: "center", marginBottom: 18 }}>Nhập mã OTP gửi về số điện thoại</div>
                <div style={{ display: "flex", gap: 10, justifyContent: "center", marginBottom: 18 }}>
                  {otp.map((v, i) => (
                    <input
                      key={i}
                      ref={otpRefs.current[i]}
                      value={v}
                      placeholder="–"
                      inputMode="numeric"
                      maxLength={1}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
                        const next = [...otp];
                        next[i] = val;
                        setOtp(next);
                        if (val && i < 5) {
                          otpRefs.current[i + 1].current?.focus();
                        }
                        if (val && i === 5) {
                          // optionally auto-verify when filled
                          // handleVerifyOtp();
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Backspace" && !otp[i] && i > 0) {
                          otpRefs.current[i - 1].current?.focus();
                        }
                      }}
                      onPaste={(e) => {
                        const data = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
                        if (!data) return;
                        const filled = data.split("").concat(Array(6 - data.length).fill(""));
                        setOtp(filled);
                        const nextIndex = Math.min(data.length, 5);
                        otpRefs.current[nextIndex].current?.focus();
                      }}
                      style={{ width: 44, height: 44, textAlign: "center", border: "1.5px solid #b5c0da", background: "#f7f9ff", borderRadius: 8, fontSize: 20, color: "#22336C", outline: "none" }}
                    />
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
                  <button type="button" onClick={() => { setOtp(["", "", "", "", "", ""]); otpRefs.current[0].current?.focus(); }} style={{ background: "#4267B2", color: "#fff", border: "none", borderRadius: 8, padding: "10px 14px", fontWeight: 700 }}>Gửi lại mã</button>
                  <button type="button" onClick={handleVerifyOtp} style={{ background: "#4267B2", color: "#fff", border: "none", borderRadius: 8, padding: "10px 14px", fontWeight: 700 }}>Xác thực tài khoản</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Register;
