
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../style/App.css";

// Import ảnh
import imgNews1 from "../assets/img/news-related-1.jpg";
import imgNews2 from "../assets/img/news-related-2.jpg";
import imgNews3 from "../assets/img/news-related-3.jpg";
import heroInput from "../assets/img/bginput.png";
import imgNews4  from "../assets/img/ads-baner.png";
import imgEventMain from "../assets/img/politics_post01.png";
import imgCopyright1 from "../assets/img/image-100.png";


// Dữ liệu event
const MAIN_EVENT = {
  image: imgEventMain,
  tag: 'Cuộc thi',
  title: 'Phát Động Cuộc Thi "Sáng Tạo Và Tôn Trọng Bản Quyền": Sân Chơi Mới Cho Người Trẻ',
  date: '08-06-2025',
  desc: 'Cuộc thi do Trung tâm phối hợp tổ chức nhằm nâng cao nhận thức của giới trẻ về tầm quan trọng của việc tôn trọng bản quyền. Các tác phẩm tham gia thuộc nhiều thể loại, từ video, infographic đến các bài viết, đều thể hiện sự sáng tạo và hiểu biết về pháp luật sở hữu trí tuệ.'
};
const SUB_EVENTS = [
  { title: 'Tập huấn, bồi dưỡng kiến thức pháp luật', date: '08-06-2025' },
  { title: 'Hội nghị hợp tác quốc tế về bản quyền', date: '08-06-2025' },
  { title: 'Hội thảo về thực thi bản quyền trên môi trường số', date: '08-06-2025' },
];

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

// Dữ liệu bản quyền mới nhất
const COPYRIGHT_ITEMS = [
  {
    image: imgCopyright1,
    tag: 'ÂM NHẠC',
    title: 'Đừng Làm Trái Tim Anh Đau',
    date: '08-06-2024',
    official: true,
  },
  {
    image: imgCopyright1,
    tag: 'ÂM NHẠC',
    title: 'Đừng Làm Trái Tim Anh Đau',
    date: '10-06-2024',
    official: true,
  },
  {
    image: imgCopyright1,
    tag: 'ÂM NHẠC',
   title: 'Đừng Làm Trái Tim Anh Đau',
    date: '12-06-2024',
    official: true,
  },
  {
    image: imgCopyright1,
    tag: 'ÂM NHẠC',
    title: 'Đừng Làm Trái Tim Anh Đau',
    date: '15-06-2024',
    official: true,
  },
  {
    image: imgCopyright1,
    tag: 'ÂM NHẠC',
    title: 'Đừng Làm Trái Tim Anh Đau',
    date: '18-06-2024',
    official: true,
  },
  {
    image: imgCopyright1,
    tag: 'ÂM NHẠC',
    title: 'Đừng Làm Trái Tim Anh Đau',
    date: '20-06-2024',
    official: true,
  },
];

function News() {
  // Ref for copyright scrollable list
  const copyrightListRef = useRef(null);
  const navigate = useNavigate();
  return (
    <>
      {/* PHẦN TIN TỨC CŨ */}
      <section style={{ background: "#fcf8f2", minHeight: "100vh", padding: 0 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 40, alignItems: "flex-start", padding: "40px 0" }}>
          {/* Main News */}
          <div style={{ flex: 2, padding: 36, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={MAIN_NEWS.image} alt="Main News" style={{ width: "100%", maxHeight: 390, objectFit: "cover", marginBottom: 28 }} />
            <div style={{ display: "flex", justifyContent: 'center', alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span style={{ background: "#f3f3f3", color: "#7a7a7a", fontWeight: 600, fontSize: 15, borderRadius: 6, padding: "4px 18px", letterSpacing: 1, border: '1px solid #d3d3d3' }}>{MAIN_NEWS.tag}</span>
            </div>
            <h2
              style={{ color: "#183354", fontWeight: 700, fontSize: 28, margin: 0, marginBottom: 18, textAlign: "center", lineHeight: 1.3, cursor: "pointer", transition: "color 0.2s" }}
              onClick={() => navigate("/Letter")}
              onMouseOver={e => (e.currentTarget.style.color = "#2852BB")}
              onMouseOut={e => (e.currentTarget.style.color = "#183354")}
            >
              {MAIN_NEWS.title}
            </h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, color: "#888", fontSize: 15, marginBottom: 18 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}> <i className="bi bi-person-circle" /> {MAIN_NEWS.author}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}> <i className="bi bi-calendar" /> {MAIN_NEWS.date}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}> <i className="bi bi-eye" /> {MAIN_NEWS.views}</span>
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
                    <i className="bi bi-calendar" /> {item.date}
                  </div>
                </div>
                <img src={item.image} alt={item.title} style={{ width: 70, height: 70, objectFit: "cover", borderRadius: 8, marginLeft: 8 }} />
              </div>
            ))}
          </div>
        </div>

        <div style={{
          width: '100%',
          minHeight: 120,
          overflow: 'hidden',
          margin: '40px 0 0 0',
          position: 'relative',
          background: `url(${imgNews4}) center/cover no-repeat`,
          padding: '48px 0',
          boxSizing: 'border-box',
        }}>
          {/* Overlay */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(24, 24, 24, 0.45)',
            zIndex: 1,
            padding: '3px 36'
          }} />
          {/* Content */}
          <div style={{
            width: '100%',
            minWidth: 320,
            maxWidth: 1050,
            position: 'relative',
            zIndex: 2,
            padding: '36px 32px 36px 36px',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            borderRadius: 28,
            border: 'none',
            backdropFilter: 'blur(5px)',
            marginLeft: 36,
            marginRight: 0,
            boxSizing: 'border-box',
            boxShadow: '0 6px 32px 0 rgba(140, 151, 179, 0.24)',
            background: 'rgba(24, 24, 24, 0.1)',
          }}>
            <div style={{ fontWeight: 700, fontSize: 22, marginBottom: 8, letterSpacing: 0.2 }}>HỘI THẢO THƯỜNG NIÊN VỀ BẢN QUYỀN</div>
            <div style={{ fontSize: 15, marginBottom: 18, fontWeight: 400, lineHeight: 1.5 }}>
              Đăng ký ngay hôm nay để tham dự hội thảo lớn nhất năm của VCPC về các nội dung bản quyền cập nhật
            </div>
            <button style={{
              background: '#B80000',
              color: '#fff',
              fontWeight: 500,
              fontSize: 16,
              border: 'none',
              borderRadius: 4,
              padding: '10px 28px',
              cursor: 'pointer',
              boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)',
              marginTop: 4
            }}>
              Đăng ký tham gia
            </button>
          </div>
        </div>

       
      </section>

      {/* PHẦN SỰ KIỆN */}
      <section id="event" style={{ background: '#fcf8f2', padding: '32px 0 0 0' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: 0 }}>
          {/* Tiêu đề và gạch riêng */}
          <div style={{ width: '100%', marginBottom: 28, paddingLeft: 0, position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ color: '#22336C', fontWeight: 700, fontSize: 28, letterSpacing: 0.5, lineHeight: 1, zIndex: 2, position: 'relative' }}>SỰ KIỆN</span>
              <div style={{ position: 'relative', flex: 1, minWidth: 0, height: 16, display: 'flex', alignItems: 'center' }}>
                {/* Top gray line */}
                <div style={{ position: 'absolute', left: 60, top: 5, width: 1090, height: 1, background: '#DFDFDF', borderRadius: 1, zIndex: 1 }}></div>
                {/* Blue line */}
                <div style={{ position: 'absolute', left: 0, top: 5, width: 56, height: 5, background: '#3C5DAA',  clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)', borderRadius: 2, zIndex: 2 }}></div>
                {/* Bottom gray line */}
                <div style={{ position: 'absolute', left: 60, top: 12, width: 1090, height: 1, background: '#DFDFDF', borderRadius: 1, zIndex: 1 }}></div>
                {/* Gray line continues after blue */}
                <div style={{ marginLeft: 64, flex: 1, height: 1, background: 'transparent' }}></div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20 }}>
            {/* Cột trái: ảnh */}
            <div style={{ width: 420, minWidth: 320, maxWidth: 480, marginRight: 32 }}>
              <img src={MAIN_EVENT.image} alt="Sự kiện chính" style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover',  background: '#eee', boxShadow: '0 2px 12px 0 rgba(16,33,75,0.10)' }} />
            </div>
            {/* Cột giữa: nội dung */}
            <div style={{ flex: 2, minWidth: 0, borderRight: '1.5px solid #E6EAF2', padding: '0 32px 0 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ color: '#7A7A7A', fontWeight: 700, fontSize: 16, marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>{MAIN_EVENT.tag}</div>
              <div style={{ color: '#22336C', fontWeight: 700, fontSize: 30, marginBottom: 12, lineHeight: 1.25, wordBreak: 'break-word' }}>{MAIN_EVENT.title}</div>
              <div style={{ color: '#888', fontSize: 15, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10, fontWeight: 500 }}>
                <i className="bi bi-calendar" style={{ fontSize: 16 }} /> {MAIN_EVENT.date}
              </div>
              <div style={{ color: '#444', fontSize: 15, lineHeight: 1.6, fontWeight: 400 }}>{MAIN_EVENT.desc}</div>
            </div>
            {/* Cột phải: danh sách sự kiện */}
            <div style={{ flex: 1, padding: 20, display: 'flex', flexDirection: 'column', gap: 0, minWidth: 300, marginLeft: 32 }}>
              {SUB_EVENTS.map((ev, idx) => (
                <div key={idx} style={{ borderBottom: idx < SUB_EVENTS.length - 1 ? '1px solid #e6e6e6' : 'none', padding: '5px 0 20px 0', display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <div style={{ color: '#22336C', fontWeight: 700, fontSize: 24, lineHeight: 1.3, marginBottom: 2 }}>{ev.title}</div>
                  <div style={{ color: '#888', fontSize: 14, display: 'flex', alignItems: 'center', gap: 7, fontWeight: 500 }}>
                    <i className="bi bi-calendar" style={{ fontSize: 15 }} /> {ev.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


         <div style={{ width: "100%", display: "flex", justifyContent: "center", margin: "80px 0" }}>
          <form style={{
            display: "flex",
            alignItems: "center",
            width: 800,
            height: 80,
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 4px 24px 0 rgba(16,33,75,0.07)",
            overflow: "hidden"
          }}>
            <div style={{
              flex: 1,
              height: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              border: "none",
              paddingLeft: 18,
              background: "none"
            }}>
              {/* Centered heroInput image absolutely in the input area */}
              <img
                src={heroInput}
                alt="bginput"
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 1,
                  pointerEvents: "none",
                  userSelect: "none"
                }}
              />
              <input
                type="text"
                placeholder="Tìm kiếm tác phẩm"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: 20,
                  color: "#B6C0D2",
                  fontWeight: 400,
                  padding: "0 0 0 8px",
                  zIndex: 2,
                  position: "relative"
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                height: "100%",
                minWidth: 160,
                background: "linear-gradient(180deg, #2852BB 0%, #A6BDF3 100%)",
                color: "#fff",
                fontWeight: 500,
                fontSize: 22,
                border: "none",
                borderRadius: "0 18px 18px 0",
                boxShadow: "0 4px 16px 0 rgba(16,33,75,0.10)",
                cursor: "pointer",
                transition: "background 0.2s"
              }}
            >
              Tìm kiếm
            </button>
          </form>
        </div>
      </section>

      {/* Bản quyền mới nhất */}
       {/* Bản quyền mới nhất */}
            <section style={{ background: '#fcf8f2', padding: '48px 0 32px 0', marginTop: 0 }}>
              <div style={{ maxWidth: 1280, margin: '0 auto', padding: 0 }}>
                {/* Tiêu đề và gạch riêng */}
                <div style={{ width: '100%', marginBottom: 0, paddingLeft: 0, position: 'relative' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 0 }}>
                    <span style={{ color: '#22336C', fontWeight: 700, fontSize: 32, letterSpacing: 0.5, lineHeight: 1, zIndex: 2, position: 'relative' }}>BẢN QUYỀN MỚI NHẤT</span>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button
                        aria-label="Scroll left"
                        style={{ border: '1px solid #d3d3d3', background: '#fff', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s', padding: 0 }}
                        onClick={() => {
                          const el = copyrightListRef.current;
                          if (el) el.scrollBy({ left: -360, behavior: 'smooth' });
                        }}
                        type="button"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="23" height="23" rx="7.5" fill="none"/>
                          <path d="M15.5 19L9.5 12L15.5 5" stroke="#3C5DAA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button
                        aria-label="Scroll right"
                        style={{ border: '1px solid #d3d3d3', background: '#fff', borderRadius: 8, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s', padding: 0 }}
                        onClick={() => {
                          const el = copyrightListRef.current;
                          if (el) el.scrollBy({ left: 360, behavior: 'smooth' });
                        }}
                        type="button"
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="0.5" y="0.5" width="23" height="23" rx="7.5" fill="none"/>
                          <path d="M8.5 5L14.5 12L8.5 19" stroke="#3C5DAA" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                    {/* Gạch divider */}
                      <div style={{ position: 'relative', width: '100%', marginTop: 8, marginBottom: 28, height: 16 }}>
                        {/* Top gray line */}
                        <div style={{ position: 'absolute', left: 60, top: 5, width: 1220, height: 1, background: '#DFDFDF', borderRadius: 1, zIndex: 1 }}></div>
                        {/* Blue line */}
                        <div style={{ position: 'absolute', left: 0, top: 5, width: 56, height: 5, background: '#3C5DAA', clipPath: 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)', borderRadius: 2, zIndex: 2 }}></div>
                        {/* Bottom gray line */}
                        <div style={{ position: 'absolute', left: 60, top: 9, width: 1220, height: 1, background: '#DFDFDF', borderRadius: 1, zIndex: 1 }}></div>
                    </div>
                </div>
                {/* Danh sách bản quyền mới nhất */}
                <div
                  ref={copyrightListRef}
                  style={{
                    display: 'flex',
                    gap: 32,
                    overflowX: 'auto',
                    paddingBottom: 8,
                    scrollBehavior: 'smooth',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                  className="copyright-scroll-list"
                >
                  {COPYRIGHT_ITEMS.map((item, idx) => (
                    <div key={idx} style={{ minWidth: 320, maxWidth: 340, background: '#fff',  boxShadow: '0 4px 24px 0 rgba(16,33,75,0.07)', padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 0, transition: 'box-shadow 0.2s', cursor: 'pointer' }}>
                      <div style={{ width: '100%', position: 'relative', overflow: 'hidden', height: 200, background: '#222' }}>
                        <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.2s' }} />
                        {/* Play button overlay */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(24,24,24,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <div style={{ width: 64, height: 64, background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px 0 rgba(0,0,0,0.10)', cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                            <svg width="50" height="50" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="18" cy="18" r="18" fill="#fff" />
                              <polygon points="14,11 27,18 14,25" fill="#B80000" />
                            </svg>
                          </div>
                        </div>
                        {/* Official tag */}
                        {item.official && (
                          <div style={{ position: 'absolute', left: 12, bottom: 12, background: '#183354', color: '#fff', fontWeight: 700, fontSize: 16, borderRadius: 6, padding: '2px 16px', letterSpacing: 1, zIndex: 2 }}>OFFICIAL</div>
                        )}
                      </div>
                      <div style={{ padding: '18px 18px 12px 18px', width: '100%' }}>
                        <div style={{ color: '#7A7A7A', fontWeight: 700, fontSize: 18, marginBottom: 2, textTransform: 'uppercase', letterSpacing: 0.5 }}>{item.tag}</div>
                        <div style={{ color: '#183354', fontWeight: 600, fontSize: 20, marginBottom: 8, lineHeight: 1.3, wordBreak: 'break-word' }}>{item.title}</div>
                        <div style={{ color: '#888', fontSize: 16, display: 'flex', alignItems: 'center', gap: 8, fontWeight: 500 }}>
                         <i class="bi bi-calendar4"></i>
                          {item.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
    </>
  );
}

export default News;

