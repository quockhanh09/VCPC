

import logo from "../assets/img/Vector-Vcpc.png";
import iconCard from "../assets/img/Icon.svg";
import img137 from "../assets/img/image 137.png";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Đăng ký công bố bản quyền",
    desc: "Công bố và xác lập quyền sở hữu tác phẩm.",
  },
  {
    title: "Đăng ký công bố bản quyền tập thể",
    desc: "Công bố và xác lập quyền sở hữu cho nhóm tác giả/tổ chức.",
  },
  {
    title: "Đăng ký tư vấn đăng ký quyền tác giả",
    desc: "Cung cấp tư vấn, hỗ trợ thủ tục đăng ký quyền tác giả.",
  },
  {
    title: "Đăng ký tư vấn đăng ký quyền liên quan",
    desc: "Sở hữu và bảo vệ quyền liên quan cho tác phẩm.",
  },
  {
    title: "Đăng ký cấp giấy chứng nhận liên quan",
    desc: "Cấp giấy chứng nhận quyền liên quan cho tác phẩm.",
  },
  {
    title: "Đăng ký cấp phép sử dụng bản quyền",
    desc: "Cấp phép sử dụng tác phẩm cho bên thứ ba.",
  },
  {
    title: "Đăng ký bảo vệ bản quyền toàn diện",
    desc: "Bảo vệ quyền lợi hợp pháp của chủ sở hữu tác phẩm.",
  },
  {
    title: "Đăng ký giám định bản quyền",
    desc: "Giám định, đánh giá tính hợp pháp của quyền tác giả/quyền liên quan.",
  },
  {
    title: "Báo cáo vi phạm bản quyền",
    desc: "Hỗ trợ xử lý, báo cáo các hành vi vi phạm bản quyền.",
  },
  {
    title: "Báo cáo vi phạm bản quyền",
    desc: "Hỗ trợ xử lý, báo cáo các hành vi vi phạm bản quyền.",
  },
];

function DichVuBanQuyen() {
  const navigate = useNavigate();
  return (
    <div style={{ minHeight: "100vh", background: "#F9F8F6", padding: "0 0 48px 0" }}>
      <div style={{ maxWidth: 520, margin: "0 auto", paddingTop: 32, textAlign: "center" }}>
        <img src={logo} alt="VCPC Logo" style={{ width: 200, marginBottom: 12 }} />
        <h1 style={{ color: "#2852BB", fontWeight: 800, fontSize: 28, marginBottom: 8, fontFamily: 'SVN-Gilroy', letterSpacing: 0.2 }}>
          ĐĂNG KÝ DỊCH VỤ BẢN QUYỀN
        </h1>
        <p style={{ color: "#3B3B3B", fontSize: 16, marginBottom: 32, fontWeight: 400 }}>
          Vui lòng cung cấp các thông tin chuyên môn chính xác để Hội đồng giám định có cơ sở đánh giá.
        </p>
      </div>
      <div style={{
        maxWidth: 980,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 24,
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        padding: 32,
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: 24,
        justifyItems: "center"
      }}>
        {services.map((item, idx) => (
          <div
            key={idx}
            style={{
              width: 260,
              background: "#F8F8F8",
              borderRadius: 16,
              padding: 24,
              textAlign: "center",
              boxShadow: "0 1px 4px rgba(0,0,0,0.03)",
              border: "2px solid transparent",
              transition: "border 0.2s, box-shadow 0.2s",
              cursor: "pointer",
            }}
            onClick={() => { if(idx === 0) navigate("/dang-ky-dich-vu-ban-quyen"); }}
            onMouseEnter={e => {
              e.currentTarget.style.border = "2.5px solid #2852BB";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(40,82,187,0.10)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.border = "2px solid transparent";
              e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.03)";
            }}
          >
            <>
              <img src={img137} alt="icon" style={{ width: 72, height: 48, marginBottom: 18, objectFit: "contain" }} />
              <div style={{ color: idx === 0 ? "#2852BB" : "#222", fontWeight: 700, fontSize: idx === 0 ? 20 : 17, marginBottom: 10, fontFamily: 'SVN-Gilroy' }}>{item.title}</div>
              <div style={{ color: idx === 0 ? "#555" : "#555", fontSize: idx === 0 ? 16 : 15, fontWeight: 400 }}>{idx === 0 ? "Công bố đối với Bản quyền Quyền liên quan" : item.desc}</div>
            </>
          </div>
        ))}
      </div>
      
      {/* Cảnh báo và nút thao tác */}
      <div style={{
        maxWidth: 980,
        margin: "32px auto 0 auto",
        padding: 0,
      }}>
        <div style={{
          background: "#FFD6D0",
          borderRadius: 12,
          padding: "18px 24px 18px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 24,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "#fff",
              color: "#F25C4C",
              fontWeight: 700,
              fontSize: 20,
              marginRight: 8,
              border: "2px solid #F25C4C"
            }}>i</span>
            <div>
              <div style={{ fontWeight: 700, color: "#A13B2B", fontSize: 16, marginBottom: 2 }}>Lưu ý quan trọng!</div>
              <div style={{ color: "#A13B2B", fontSize: 15, fontWeight: 400 }}>
                Các hành vi làm giả chứng từ pháp lý chứng minh hồ sơ có thể phải chịu trách nhiệm trước pháp luật.
              </div>
            </div>
          </div>
          <button style={{
            background: "#C9C9C9",
            color: "#10214B",
            border: "none",
            borderRadius: 8,
            padding: "8px 18px",
            fontWeight: 500,
            fontSize: 15,
            cursor: "pointer",
            minWidth: 120,
            marginLeft: 24
          }}>Xem hướng dẫn</button>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", gap: 16 }}>
          <button style={{
            background: "#C9C9C9",
            color: "#10214B",
            border: "none",
            borderRadius: 8,
            padding: "10px 24px",
            fontWeight: 500,
            fontSize: 16,
            cursor: "pointer",
            minWidth: 110
          }}>Hủy bỏ</button>
          <button style={{
            background: "#C9C9C9",
            color: "#10214B",
            border: "none",
            borderRadius: 8,
            padding: "10px 24px",
            fontWeight: 500,
            fontSize: 16,
            cursor: "pointer",
            minWidth: 110
          }}>Lưu bản nháp</button>
          <button style={{
            background: "#2852BB",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "10px 32px",
            fontWeight: 600,
            fontSize: 16,
            cursor: "pointer",
            minWidth: 170,
            display: "flex",
            alignItems: "center",
            gap: 8
          }}>
            Đi đến Thanh toán
            <span style={{ fontSize: 20, marginLeft: 4 }}>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DichVuBanQuyen;
