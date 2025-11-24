import React, { useState } from "react";
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

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 1) {
      if (!lastName.trim()) {
        alert("Vui lòng nhập Họ (bắt buộc)");
        return;
      }
      setStep(2);
    }
  };

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
                1
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
        {/* Step 1 card */}
        <form
          onSubmit={handleNext}
          style={{
            width: 440,
            background: "#ffffff69",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            borderRadius: 24,
            boxShadow: "0 4px 32px 0 rgba(60,93,170,0.10)",
            padding: "32px 32px 32px 32px",
            margin: "0 auto 24px auto",
            position: "relative",
          }}
        >
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
              <input
                id="lastName"
                type="text"
                placeholder="Nhập Họ của bạn"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1.5px solid #e6e6e6",
                  borderRadius: 8,
                  fontSize: 15,
                  background: "#fafbfc",
                  outline: "none",
                  fontWeight: 500,
                  color: "#222",
                }}
              />
            </div>
            <div style={{ marginBottom: 18 }}>
              <label htmlFor="middleFirstName" style={{ fontWeight: 600, color: "#444", fontSize: 14, marginBottom: 6, display: "block" }}>
                Tên đệm và Tên
              </label>
              <input
                id="middleFirstName"
                type="text"
                placeholder="Nhập Tên đệm và Tên của bạn"
                value={middleFirstName}
                onChange={(e) => setMiddleFirstName(e.target.value)}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1.5px solid #e6e6e6",
                  borderRadius: 8,
                  fontSize: 15,
                  background: "#fafbfc",
                  outline: "none",
                  fontWeight: 500,
                  color: "#222",
                }}
              />
            </div>
            <div style={{ marginBottom: 18 }}>
              <label style={{ fontWeight: 600, color: "#444", fontSize: 14, marginBottom: 6, display: "block" }}>
                Ngày sinh
              </label>
              <div style={{ display: "flex", gap: 12 }}>
                <select
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  style={{ flex: 1, padding: "10px 12px", border: "1.5px solid #e6e6e6", borderRadius: 8, background: "#fafbfc", fontWeight: 500 }}
                >
                  <option value="">Ngày</option>
                  {days.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  style={{ flex: 1, padding: "10px 12px", border: "1.5px solid #e6e6e6", borderRadius: 8, background: "#fafbfc", fontWeight: 500 }}
                >
                  <option value="">Tháng</option>
                  {months.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  style={{ flex: 1, padding: "10px 12px", border: "1.5px solid #e6e6e6", borderRadius: 8, background: "#fafbfc", fontWeight: 500 }}
                >
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
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={gender === g}
                      onChange={(e) => setGender(e.target.value)}
                      style={{ width: 16, height: 16, cursor: "pointer" }}
                    />
                    {g}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              style={{
                width: "100%",
                background: "#000",
                color: "#fff",
                fontWeight: 700,
                fontSize: 18,
                border: "none",
                borderRadius: 24,
                padding: "14px 0",
                cursor: "pointer",
                boxShadow: "0 2px 8px 0 rgba(60,93,170,0.04)",
              }}
            >
              Tiếp theo
            </button>
        </form>
        {/* Placeholder upcoming steps styled */}
        <div style={{ width: 440, borderRadius: 24, padding: "20px 28px", marginBottom: 24, background: "linear-gradient(90deg,#fff8f0 0%,rgba(255,255,255,0.5) 65%,rgba(255,255,255,0) 100%)", boxShadow: "0 2px 8px rgba(60,93,170,0.05)", display: "flex", alignItems: "center" }}>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#c5cbdb", color: "#fff", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 12 }}>2</div>
          <div style={{ fontSize: 15, fontWeight: 500, color: "#8d8d8d" }}>Thông tin liên hệ</div>
        </div>
        <div style={{ width: 440, borderRadius: 24, padding: "20px 28px", background: "linear-gradient(90deg,#fff8f0 0%,rgba(255,255,255,0.5) 65%,rgba(255,255,255,0) 100%)", boxShadow: "0 2px 8px rgba(60,93,170,0.05)", display: "flex", alignItems: "center" }}>
          <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#c5cbdb", color: "#fff", fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 12 }}>3</div>
          <div style={{ fontSize: 15, fontWeight: 500, color: "#8d8d8d" }}>Thông tin đăng nhập</div>
        </div>
      </section>
    </div>
  );
};

export default Register;
