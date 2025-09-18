import facebookLogo from "../assets/img/Facebook.svg";
import youtubeLogo from "../assets/img/Youtube.svg";
import linkedinLogo from "../assets/img/Linkedin.svg";
import footerLogo from "../assets/img/footerI.png";
import logo from "../assets/img/Logo-name.png";
import "../style/App.css";
// file PDF bạn có thể để trong public hoặc import như asset
import chinhSach from "../assets/img/Chính sách bảo mật.pdf";
import dieuKhoan from "../assets/img/The Guardians_Điều khoản sử dụng.pdf";

function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        background: "linear-gradient(180deg, #FFFAF2 0%, #D0D3DC 15% ,#A3ADC7 27%, #6479A9 43%, #345092 62%, #253A6A 80%, #182544 100%)",
        color: "#fff",
        padding: "0",
        fontFamily: "'Montserrat', Arial, sans-serif",
        marginTop: 0
      }}
    >
      <div style={{
        fontFamily:"Lora,seft",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        maxWidth: 1200,
        margin: "0 auto",
        padding: "48px 0 24px 0"
      }}>
        {/* Left: Logo and Info */}
        <div style={{ flex: 1.5, minWidth: 400, display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
            <img src={footerLogo} alt="VCPC" style={{ height: 80, width: "auto" }} />
          </div>
          <div style={{ color: "#fff", fontSize: 16, fontWeight: 400, marginBottom: 4 }}>
            Số 33 Ngõ 294/2 Kim Mã, Phường Ngọc Hà, Thành phố Hà Nội.<br />
            MST: 0110541851<br />
            Điện thoại:<br />
            Email:<br />
            Đại diện pháp luật: Nguyễn Văn Cương (Mr.)
          </div>
          <div style={{ color: "#B6C0D2", fontSize: 14}}>
            Bản quyền thuộc về VCPC ©
          </div>
        </div>
        {/* Center: Links */}
        <div style={{ fontFamily:"Lora,seft", flex: 1, minWidth: 180, display: "flex", flexDirection: "column", gap: 8 ,marginLeft: 500}}>
          <div style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>TRANG CHỦ</div>
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 400, marginBottom: 2 }}>Trang chủ</div>
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 400, marginBottom: 2 }}>Tin tức & Sự kiện</div>
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 400, marginBottom: 2 }}>Công bố bản quyền</div>
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 400, marginBottom: 2 }}>Dịch vụ bản quyền</div>
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 400, marginBottom: 2 }}>Hỗ trợ</div>
        </div>
        {/* Right: Quick Links */}
        <div style={{ fontFamily:"Lora,seft", flex: 1, minWidth: 180, display: "flex", flexDirection: "column", gap: 8 ,textAlign:"right"}}>
          
          <div style={{ fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 8 }}>TRUY CẬP NHANH</div>
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 400, marginBottom: 2 }}>Đăng ký bản quyền</div>
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 400, marginBottom: 2 }}>Thông tin bản quyền</div>
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 400, marginBottom: 2 }}>Văn bản pháp luật</div>
          <div style={{ color: "#fff", fontSize: 15, fontWeight: 400, marginBottom: 2 }}>Các loại biểu mẫu</div>
          
          <div style={{ display: "flex", gap: 18, marginTop: 40, textAlign:"right", justifyContent :"flex-end"}}>
            <a href="#" style={{ color: "#fff", fontSize: 24 }}>
              <img src={facebookLogo} alt="Facebook" style={{ width: 40, height: 40, objectFit: "contain" }} />
            </a>
            <a href="#" style={{ color: "#fff", fontSize: 24 }}>
              <img src={youtubeLogo} alt="YouTube" style={{ width: 40, height: 40, objectFit: "contain" }} />
            </a>
            <a href="#" style={{ color: "#fff", fontSize: 24 }}>
              <img src={linkedinLogo} alt="LinkedIn" style={{ width: 40, height: 40, objectFit: "contain" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
