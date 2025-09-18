
import logo from "../assets/img/Logo-name.png";
import iconGlobal from "../assets/img/Icon.svg";
import { Link, useLocation } from "react-router-dom";
import "../style/App.css";


function Header() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";

  return (
    <header
      id="header"
      className="header d-flex align-items-center"
      style={{
        background: "#4B4844",
        borderRadius: "40px",
        margin: "16px auto",
        maxWidth: "1300px",
        padding: "8px 32px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={logo} alt="VCPC Logo" style={{ height: 60, marginRight: 32, flexShrink: 0 }} />
      <nav id="navmenu" className="navmenu" style={{ flexShrink: 0 }}>
        <ul style={{
         
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          listStyle: "none",
          margin: 0,
          padding: 0,
          minWidth: 700,
        }}>
          <li><Link to="/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>VỀ CHÚNG TÔI</Link></li>
          <li><Link to="/News" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>TIN TỨC</Link></li>
          <li><Link to="/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>CÔNG BỐ</Link></li>
          <li><Link to="/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>DỊCH VỤ BẢN QUYỀN</Link></li>
          <li><Link to="/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>SÀN GIAO DỊCH</Link></li>
           <li><Link to="/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>HỖ TRỢ</Link></li>
        </ul>
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: 32 }}>
  <img src={iconGlobal} alt="Globe Icon" style={{ width: 24, height: 24, marginRight: 8, filter: "brightness(0) invert(1)" }} />
        <Link to="/Login">
          <button className="Login-nav" style={{
            background: "#4569BC",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "6px 18px",
            fontWeight: 500,
            fontSize: 16,
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}>
            Đăng nhập
          </button>
        </Link>
      </div>
    </header>
  );
}

export default Header;