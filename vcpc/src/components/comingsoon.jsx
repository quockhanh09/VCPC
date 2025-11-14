


import { useState } from "react";
import logo from "../assets/img/Logo-name.png";
import iconGlobal from "../assets/img/Icon.svg";

import heroBg from "../assets/img/herobanner-1.png";
import { Link, useLocation } from "react-router-dom";
import "../style/App.css";
function Comingsoon() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <section
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
       <img src={logo} alt="VCPC Logo" style={{ height: 60, marginRight: 32, flexShrink: 0, cursor: 'pointer' }} />
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
          
        </ul>
      </nav>
       <div style={{ display: "flex", alignItems: "center", gap: 12, marginLeft: 32 }}>
        <img src={iconGlobal} alt="Globe Icon" style={{ width: 24, height: 24, marginRight: 8, filter: "brightness(0) invert(1)" }} />
             
            </div>
      </section>
      {/* PHẦN GIỚI THIỆU */}
     <section
                       id="hero"
                       className="hero section"
                       style={{
                         margin: 0,
                         padding: 0,
                         backgroundImage: `url(${heroBg})`,
                         backgroundSize: "contain",
                         backgroundRepeat: "no-repeat",
                         backgroundPosition: "center",
                         minHeight: "500px",
                         maxHeight: "70vh",
                         width: "100vw",
                         marginTop: "30px",
                       }}
                     >
                       <div
                         className="parallax-window fullscreen hero-flex"
                         style={{
                           width: "100vw",
                           height: "100vh",
                           display: "flex",
                           alignItems: "center",
                           position: "relative",
                           overflow: "hidden",
                         }}
                       >
                       </div>
                     </section>

    </>
  );
}

export default Comingsoon;
