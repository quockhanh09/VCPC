import React from "react";
import "../style/App.css";

// Import ảnh
import imgNews1 from "../assets/img/news-related-1.jpg";
import imgNews2 from "../assets/img/news-related-2.jpg";
import imgNews3 from "../assets/img/news-related-3.jpg";

// Dữ liệu tin chính và tin liên quan
const MAIN_NEWS = {
  image: imgNews1,
  tag: "BẢN QUYỀN",
  title: "Công Bố Báo Cáo Thường Niên: Tình Hình Vi Phạm Bản Quyền Năm 2025",
  author: "VCPC EDITOR",
  date: "08-06-2025",
  views: "20,546",
  desc:
    "Báo cáo chi tiết về tình hình vi phạm bản quyền trong năm qua đã được Trung tâm công bố rộng rãi. Báo cáo nêu bật những thách thức mới, đặc biệt là sự gia tăng của các hành vi vi phạm trực tuyến, và đưa ra các khuyến nghị pháp lý cần thiết.",
};

const RELATED_NEWS = [
  {
    image: imgNews1,
    tag: "HỢP TÁC",
    title: "Hợp tác với Hàn Quốc thiết lập hệ thống quản lý bản quyền số",
    date: "08-06-2024",
  },
  {
    image: imgNews2,
    tag: "HỢP TÁC",
    title: "Hợp tác với Hàn Quốc thiết lập hệ thống quản lý bản quyền số",
    date: "08-06-2024",
  },
  {
    image: imgNews3,
    tag: "HỢP TÁC",
    title: "Hợp tác với Hàn Quốc thiết lập hệ thống quản lý bản quyền số",
    date: "08-06-2024",
  },
   {
    image: imgNews2,
    tag: "HỢP TÁC",
    title: "Hợp tác với Hàn Quốc thiết lập hệ thống quản lý bản quyền số",
    date: "08-06-2024",
  },
   {
    image: imgNews2,
    tag: "HỢP TÁC",
    title: "Hợp tác với Hàn Quốc thiết lập hệ thống quản lý bản quyền số",
    date: "08-06-2024",
  },
];

function News() {
  return (
    <section style={{ background: "#fcf8f2", minHeight: "100vh", padding: 0 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 40, alignItems: "flex-start", padding: "40px 0" }}>
        {/* Main News */}
        <div style={{ flex: 2, padding: 36, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={MAIN_NEWS.image} alt="Main News" style={{ width: "100%", maxHeight: 390, objectFit: "cover", marginBottom: 28 }} />
          <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", gap: 12, marginBottom: 18 }}>
            <span style={{ background: "#f3f3f3", color: "#7a7a7a", fontWeight: 600, fontSize: 15, borderRadius: 6, padding: "4px 18px", letterSpacing: 1, border: '1px solid #d3d3d3' }}>{MAIN_NEWS.tag}</span>
          </div>
          <h2 style={{ color: "#183354", fontWeight: 700, fontSize: 28, margin: 0, marginBottom: 18, textAlign: "center", lineHeight: 1.3 }}>{MAIN_NEWS.title}</h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, color: "#888", fontSize: 15, marginBottom: 18 }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}> <i className="fa fa-user" /> {MAIN_NEWS.author}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}> <i className="fa fa-calendar" /> {MAIN_NEWS.date}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}> <i className="fa fa-eye" /> {MAIN_NEWS.views}</span>
          </div>
          <div style={{ color: "#444", fontSize: 16, textAlign: "center", marginBottom: 0, maxWidth: 600 }}>{MAIN_NEWS.desc}</div>
        </div>
        {/* Related News */}
        <div style={{ flex: 1, minWidth: 320, marginTop: 8 }}>
          <h3 style={{ color: "#3C5DAA", fontWeight: 700, fontSize: 24, marginBottom: 28, textAlign: "left", letterSpacing: 0.5 }}>Tin Tức Liên Quan</h3>
          {RELATED_NEWS.map((item, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24, borderBottom: "1px solid #e6e6e6", paddingBottom: 18 }}>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#888", fontWeight: 700, fontSize: 13, marginBottom: 2, textTransform: 'uppercase', letterSpacing: 0.5 }}>{item.tag}</div>
                <div style={{ color: "#183354", fontWeight: 600, fontSize: 16, marginBottom: 8, lineHeight: 1.3 }}>{item.title}</div>
                <div style={{ color: "#888", fontSize: 14, display: "flex", alignItems: "center", gap: 6 }}>
                  <i className="fa fa-calendar" /> {item.date}
                </div>
              </div>
              <img src={item.image} alt={item.title} style={{ width: 70, height: 70, objectFit: "cover", borderRadius: 8, marginLeft: 8 }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default News;

