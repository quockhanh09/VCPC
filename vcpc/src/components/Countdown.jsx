import { useState } from "react";
import "../style/App.css";
import sendIcon from "../assets/img/img-23.png";

function Countdown() {
  const [address] = useState("Số 33 Ngõ 294/2 Kim Mã, Phường Ngọc Hà, Thành phố Hà Nội.");

  // Encode address for Google Maps
  const mapQuery = encodeURIComponent(address);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section id="contact-location" style={{ background: "#FFFAF2", padding: "40px 0 60px 0" }}>
      {/* Call-to-action bar */}
      <div style={{
        maxWidth: 1300,
        margin: "0 auto 80px auto",
        padding: 0,
        borderRadius: 12,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: 180,
        position: "relative"
      }}>
        <div style={{ padding: "36px 0 36px 48px", flex: 1 }}>
          <div style={{
            color: "#fff",
            fontWeight: 600,
            fontSize: 32,
            lineHeight: 1.25,
            fontFamily: 'Montserrat, sans-serif',
            marginBottom: 0
          }}>
            Bạn đã sẵn sàng<br />
            bảo vệ <span style={{ color: "#B6FF8A" }}>tác phẩm</span> của mình?
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', position: 'relative', minWidth: 420 }}>
          <div style={{ position: 'relative', width: 500, height:50, maxWidth: '100%',padding: '0 48px 0 0' }}>
            
            {/* Bubble image as background, input and button above */}
            <img src={sendIcon} alt="bubble" style={{ position: 'absolute', right: -10, top: -70, height: 160, zIndex: 1, pointerEvents: 'none', filter: 'drop-shadow(0 2px 16px rgba(123,97,255,0.10))' }} />
            <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', height: 60 }}>
              <input
                type="email"
                placeholder="Nhập email của bạn"
                style={{
                  width: '100%',
                  height: 60,
                  borderRadius: 10,
                  border: '1.5px solid #ffffffff',
                  outline: 'none',
                  fontSize: 18,
                  padding: '0 120px 0 18px',
                  background: 'linear-gradient(90deg, #E7E8EC 38%, #e7e8ec5d 100%)',
                  color: '#222',
                  fontWeight: 500,
                  boxSizing: 'border-box',
                  boxShadow: '0 2px 16px 0 rgba(180,180,200,0.10)'
                }}
              />
              <button type="submit" style={{
                position: 'absolute',
                right: 5,
                top: 12,
                height: 36,
                background: '#000',
                border: '1.5px solid #000000ff',
                color: '#fff',
                borderRadius: 8,
                fontWeight: 600,
                fontSize: 16,
                padding: '0 18px 0 14px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                zIndex: 3
              }}>
                Gửi đi
              </button>
            </div>
          </div>
          {/* Bubble effect image (optional, for visual match) */}
          <div style={{
            position: "absolute",
            right: -30,
            top: -18,
            height: 120,
            width: 190,
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end"
          }}>
            {/* <img src={bubbleImg} alt="bubble" style={{ height: 120, marginRight: 24 }} /> */}
          </div>
        </div>
      </div>
      {/* Address section */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
        <h2 style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: 36,
          marginBottom: 36,
          letterSpacing: 0.5,
          fontFamily: 'Lora, serif',
          color: "#111"
        }}>ĐỊA CHỈ</h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 32, justifyContent: "center", alignItems: "flex-start" }}>
          {/* Map */}
          <div style={{ flex: "1 1 420px", minWidth: 340, maxWidth: 600, borderRadius: 24, overflow: "hidden", boxShadow: "0 2px 16px 0 rgba(180,180,200,0.10)" }}>
            <iframe
              title="Địa chỉ VCPC"
              src={mapSrc}
              width="100%"
              height="332"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Info */}
          <div style={{ flex: "1 1 340px", minWidth: 320, maxWidth: 420, background: "#BFD6FF", borderRadius: 28, padding: "32px 32px 24px 32px", color: "#10214B", boxShadow: "0 2px 16px 0 rgba(180,180,200,0.10)" }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 22 }}>📍</span>
              <span style={{ fontWeight: 700, fontSize: 20 }}>Địa chỉ</span>
            </div>
            <div style={{ marginLeft: 32, fontSize: 16 }}>
              {address}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 22 }}>📞</span>
              <span style={{ fontWeight: 700, fontSize: 20 }}>Điện thoại</span>
            </div>
            <div style={{marginLeft: 32, fontSize: 16 }}>
              (+84) 123 456 780
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 22 }}>⏰</span>
              <span style={{ fontWeight: 700, fontSize: 20 }}>Thời gian làm việc</span>
            </div>
            <div style={{marginLeft: 32, fontSize: 16 }}>
              Thứ 2 - Thứ 6 | 09:00 - 17:00  (Nghỉ trưa 12:00 - 13:00, cuối tuần và ngày Lễ)
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 22 }}>🚌</span>
              <span style={{ fontWeight: 700, fontSize: 20 }}>Phương tiện công cộng</span>
            </div>
            <div style={{ marginLeft: 32, fontSize: 16 }}>
              24, 86, 03A
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
