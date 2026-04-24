

import logo from "../assets/img/Logo-name.png";
import iconGlobal from "../assets/img/Icon.svg";
import { Link, useLocation } from "react-router-dom";
import "../style/App.css";
import { useEffect, useState } from "react";



function Header() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/Login";
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`header d-flex align-items-center${isFixed ? " fixed-header" : ""}`}
      style={{
        background: "#4B4844",
        borderRadius: "40px",
        margin: isFixed ? "0 auto" : "16px auto",
        maxWidth: "1000px",
        padding: "8px 32px",
        boxShadow: isFixed ? "0 4px 16px rgba(0,0,0,0.10)" : "0 2px 8px rgba(0,0,0,0.04)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontFamily: 'SVN-Gilroy',
        position: isFixed ? "fixed" : "static",
        top: isFixed ? 0 : undefined,
        left: isFixed ? 0 : undefined,
        right: isFixed ? 0 : undefined,
        zIndex: isFixed ? 1000 : undefined,
        width: isFixed ? "100vw" : undefined,
        transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
      }}
    >
      <Link to="/">
        <img src={logo} alt="VCPC Logo" style={{ height: 60, marginRight: 32, flexShrink: 0, cursor: 'pointer' }} />
      </Link>
      <nav id="navmenu" className="navmenu" style={{ flexShrink: 0 }}>
        <ul style={{
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          listStyle: "none",
          margin: 0,
          padding: 0,
          minWidth: 700,
          fontFamily: 'SVN-Gilroy',
        }}>
          <li><Link to="/Introduction" style={{ color: "#fff", fontWeight: 400, textDecoration: "none", fontSize: 16 }}>VỀ CHÚNG TÔI</Link></li>
          <li><Link to="/News" style={{ color: "#fff", fontWeight:400, textDecoration: "none", fontSize: 16 }}>TIN TỨC</Link></li>
          {/* <li><Link to="/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>CÔNG BỐ</Link></li> */}
          {/* <li><Link to="/Deatails" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>DỊCH VỤ BẢN QUYỀN</Link></li> */}
          {/* <li><Link to="/" style={{ color: "#fff", fontWeight: 500, textDecoration: "none", fontSize: 16 }}>SÀN GIAO DỊCH</Link></li> */}
          <li><Link to="/Support" style={{ color: "#fff", fontWeight: 400, textDecoration: "none", fontSize: 16 }}>HỖ TRỢ</Link></li>
        </ul>
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: 32 }}>
        <img src={iconGlobal} alt="Globe Icon" style={{ width: 24, height: 24, marginRight: 8, filter: "brightness(0) invert(1)" }} />
        {/* <Link to="/Login">
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
        </Link> */}
      </div>
    </header>
  );
}
export default Header;