

import React from "react";
import vcpcLogo from "../assets/img/vcpc-header.png";



function News() {
  return (
    <section style={{ background: "#fdf9f3", minHeight: "100vh", width: "100vw", padding: 0 }}>
      {/* Header title center */}
      <div style={{ width: "100%", textAlign: "center", marginTop: 60, marginBottom: 30 }}>
  <h1 style={{ fontFamily: 'SVN-Gilroy', color: "#3a5bb7", fontWeight: 900, fontSize: 60, lineHeight: 1.5, margin: 0, letterSpacing: 1 }}>
          TRUNG TÂM BẢO VỆ<br />BẢN QUYỀN VIỆT NAM
        </h1>
      </div>
      {/* Main content row */}
      <div style={{ display: "flex", maxWidth: 1300, margin: "0 auto", width: "100%", padding: "0 40px", gap: 0, alignItems: "flex-start", justifyContent: "center" }}>
        {/* Left: Text */}
        <div style={{ flex: 1, minWidth: 400, maxWidth: 600, marginTop: 30 }}>
          <h2 style={{ fontWeight: 700, fontSize: 32, marginBottom: 24, marginLeft: 0, color: "#111" }}>VỀ CHÚNG TÔI</h2>
          <p style={{ fontSize: 18, marginBottom: 18, color: "#222", lineHeight: 1.7 }}>
            Cơ quan chuyên trách, hoạt động với sứ mệnh bảo vệ quyền lợi hợp pháp cho các tác giả, chủ sở hữu tác phẩm, và thúc đẩy môi trường sáng tạo lành mạnh tại Việt Nam.
          </p>
          <p style={{ fontSize: 18, marginBottom: 18, color: "#222", lineHeight: 1.7 }}>
            Với vai trò là cầu nối giữa các nhà sáng tạo và hệ thống pháp luật, Trung tâm Bảo vệ Bản quyền Việt Nam cam kết mang lại sự an tâm cho các tác giả bằng cách cung cấp các dịch vụ đăng ký, tư vấn pháp lý và hỗ trợ giải quyết tranh chấp bản quyền một cách hiệu quả.
          </p>
          <p style={{ fontSize: 18, color: "#222", lineHeight: 1.7 }}>
            Chúng tôi là người bạn đồng hành của mọi nhà sáng tạo, từ nghệ sĩ, nhà văn đến lập trình viên. Trung tâm Bảo vệ Bản quyền Việt Nam không chỉ bảo vệ tài sản trí tuệ của bạn mà còn lan tỏa giá trị của sự tôn trọng bản quyền, góp phần xây dựng một nền kinh tế sáng tạo vững mạnh.
          </p>
        </div>
        {/* Right: Image + VCPC letters */}
        <div style={{ flex: 1, minWidth: 400, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", height: 480, marginTop: 0 }}>        
        {/* Logo + text */}
          <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <img src={vcpcLogo} alt="VCPC Logo" style={{ width: 350, marginBottom: 18 }} />
           
          </div>
        </div>
      </div>
    </section>

    

  );
}

export default News;
