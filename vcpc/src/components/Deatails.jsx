import { useState, useEffect, useRef } from "react";
import "../style/App.css";
import "../style/img-3d.css";
import bgDe from "../assets/img/Copyright Market_001.jpg";
import img99 from "../assets/img/image99.png";
import heroInput from "../assets/img/bginput.png";

import appa from "../assets/img/partner.png";
import vcpmc from "../assets/img/partner1.png";
import riav from "../assets/img/partner2.png";
import trendingImg1 from "../assets/img/image109.png";
import trendingImg2 from "../assets/img/image106.png";
import trendingImg3 from "../assets/img/image107.png";
import trendingAvatar1 from "../assets/img/image108.png";
import trendingAvatar3 from "../assets/img/Group-143726086.png";

import iconTreanding from "../assets/img/CollectorLog-ETH.png";


function Deatails() {
  // Trending data & hooks
  const trendingList = [
    { img: trendingImg1, title: 'VIẾT TIẾP CÂU...', author: 'Nguyễn Hùng', price: '$180,025', avatar: trendingAvatar1, icon: <img src={iconTreanding} alt="icon" style={{ width: 28, height: 28, marginLeft: 8, objectFit: 'contain' }} />, color: '#ff9800' },
    { img: trendingImg2, title: 'CÒN GÌ ĐẸP...', author: 'Nguyễn Hùng', price: '$180,345', avatar: null, icon: <img src={iconTreanding} alt="icon" style={{ width: 28, height: 28, marginLeft: 8, objectFit: 'contain' }} />, color: '#3b5cff', isPause: true },
    { img: trendingImg3, title: 'LẠC TRÔI', author: 'Sơn Tùng M-TP', price: '$9,945.1', avatar: trendingAvatar3, icon: <img src={iconTreanding} alt="icon" style={{ width: 28, height: 28, marginLeft: 8, objectFit: 'contain' }} />, color: '#7b61ff' },
    { img: trendingImg1, title: 'BÀI CA HY VỌNG', author: 'Trọng Tấn', price: '$12,000', avatar: trendingAvatar1, icon: <img src={iconTreanding} alt="icon" style={{ width: 28, height: 28, marginLeft: 8, objectFit: 'contain' }} />, color: '#ff9800' },
    { img: trendingImg2, title: 'NƠI NÀY CÓ ANH', author: 'Sơn Tùng M-TP', price: '$8,000', avatar: trendingAvatar3, icon: <img src={iconTreanding} alt="icon" style={{ width: 28, height: 28, marginLeft: 8, objectFit: 'contain' }} />, color: '#7b61ff' },
    { img: trendingImg3, title: 'HÀNH TRÌNH MỚI', author: 'Minh Vương', price: '$15,000', avatar: trendingAvatar1, icon: <img src={iconTreanding} alt="icon" style={{ width: 28, height: 28, marginLeft: 8, objectFit: 'contain' }} />, color: '#ff9800' },
  ];
  const [center, setCenter] = useState(1);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const handleMouseDown = (e) => { setIsDragging(true); setStartX(e.pageX - carousel.offsetLeft); setScrollLeft(carousel.scrollLeft); };
    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);
    const handleMouseMove = (e) => { if (!isDragging) return; e.preventDefault(); const x = e.pageX - carousel.offsetLeft; const walk = (x - startX) * 1.2; carousel.scrollLeft = scrollLeft - walk; };
    carousel.addEventListener('mousedown', handleMouseDown);
    carousel.addEventListener('mouseleave', handleMouseLeave);
    carousel.addEventListener('mouseup', handleMouseUp);
    carousel.addEventListener('mousemove', handleMouseMove);
    return () => { carousel.removeEventListener('mousedown', handleMouseDown); carousel.removeEventListener('mouseleave', handleMouseLeave); carousel.removeEventListener('mouseup', handleMouseUp); carousel.removeEventListener('mousemove', handleMouseMove); };
  }, [isDragging, startX, scrollLeft]);
  useEffect(() => {
    const carousel = carouselRef.current; if (!carousel) return; const handleScroll = () => { const cardWidth = 300 + 24; const scroll = carousel.scrollLeft; const idx = Math.round(scroll / cardWidth) + 1; setCenter(Math.max(1, Math.min(trendingList.length - 2, idx))); }; carousel.addEventListener('scroll', handleScroll); return () => carousel.removeEventListener('scroll', handleScroll);
  }, [trendingList.length]);

  // License listing data & hooks
  const categories = ['Âm nhạc', 'Hội họa', 'Văn học', 'Kiến trúc', 'Phần mềm', 'Bản ghi', 'Bài hát'];
  const [activeCat, setActiveCat] = useState('Âm nhạc');
  const artworks = [
    { id: 1, img: trendingImg3, name: 'Lạc Trôi', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 2, img: trendingImg1, name: 'Bài Ca Hy Vọng', artist: 'Trọng Tấn', price: '$1670', cat: 'Âm nhạc' },
    { id: 3, img: trendingImg2, name: 'Nơi Này Có Anh', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 4, img: trendingImg3, name: 'Artwork Name', artist: 'Artist Name', price: '$1670', cat: 'Âm nhạc' },
    { id: 5, img: trendingImg1, name: 'Artwork Name', artist: 'Artist Name', price: '$1670', cat: 'Âm nhạc' },
    { id: 6, img: trendingImg2, name: 'Artwork Name', artist: 'Artist Name', price: '$1670', cat: 'Âm nhạc' },
    { id: 7, img: trendingImg3, name: 'Artwork Name', artist: 'Artist Name', price: '$1670', cat: 'Âm nhạc' },
    { id: 8, img: trendingImg1, name: 'Artwork Name', artist: 'Artist Name', price: '$1670', cat: 'Âm nhạc' },

    { id: 9, img: trendingImg3, name: 'Lạc Trôi', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Hội họa' },
    { id: 10, img: trendingImg1, name: 'Bài Ca Hy Vọng', artist: 'Trọng Tấn', price: '$1670', cat: 'Hội họa' },
    { id: 11, img: trendingImg2, name: 'Nơi Này Có Anh', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Hội họa' },
    { id: 12, img: trendingImg3, name: 'Artwork Name', artist: 'Artist Name', price: '$1670', cat: 'Hội họa' },
    { id: 13, img: trendingImg1, name: 'Artwork Name', artist: 'Artist Name', price: '$1670', cat: 'Hội họa' },
    { id: 14, img: trendingImg2, name: 'Artwork Name', artist: 'Artist Name', price: '$1670', cat: 'Hội họa' },
    { id: 15, img: trendingImg3, name: 'Artwork Name', artist: 'Artist Name', price: '$1670', cat: 'Hội họa' },
    { id: 16, img: trendingImg1, name: 'Artwork Name', artist: 'Artist Name', price: '$1670', cat: 'Hội họa' },
  ];
  const filtered = artworks.filter(a => a.cat === activeCat).slice(0, 8);
  // Nghệ sĩ đồng hành (section cuối theo mẫu)
  const accompanyArtists = [
    { id: 1, name: 'Nguyễn Văn...', eth: '3.2 ETH' },
    { id: 2, name: 'Sơn Tùng M-TP', eth: '3.2 ETH' },
    { id: 3, name: 'Tùng Dương', eth: '3.2 ETH' },
    { id: 4, name: 'Nguyễn Hùng', eth: '3.2 ETH' },
    { id: 5, name: 'Mỹ Tâm', eth: '3.2 ETH' },
    { id: 6, name: 'RPT MCK', eth: '3.2 ETH', highlight: true },
    { id: 7, name: 'Đen Vâu', eth: '3.2 ETH' },
    { id: 8, name: 'Soobin Hoàn...', eth: '3.2 ETH' },
    { id: 9, name: 'Tự Long', eth: '3.2 ETH' },
    
  ];

  return (
    <>
      <section
        id="service-details"
        className="service-details section"
        style={{ padding: "30px 0", backgroundImage: `url(${bgDe})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >

        <section
          id="service-details"
          className="service-details section"
          style={{ padding: "30px 0", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* HERO BANNER SECTION - UI sát mẫu */}
          <div style={{
            width: '100%',
            minHeight: 600,

            position: 'relative',
            overflow: 'visible',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 0 40px 0',
          }}>
            {/* Star/particle effects */}
            
            <div style={{ position: 'absolute', top: 420, left: '60%', width: 7, height: 7, borderRadius: '50%', background: '#f2a3e2', opacity: 0.6, boxShadow: '0 0 10px #f2a3e2' }}></div>
            {/* Main content */}
            <div style={{ display: 'flex', width: '100%', maxWidth: 1200, alignItems: 'center', justifyContent: 'space-between', zIndex: 2 }}>
              {/* Left: Text */}
              <div style={{ flex: 1, paddingLeft: 32, maxWidth: 540 }}>
                <div style={{
                  fontSize: 60,
                  fontWeight: 800,
                  lineHeight: 1.08,
                  marginBottom: 18,
                  background: 'linear-gradient(90deg, #3cf2b6 10%, #6ec6ff 40%, #b18cff 70%, #f2a3e2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block',
                  letterSpacing: '-2px',
                }}>
                  Tìm Kiếm &<br />Giao Dịch <span style={{ display: 'inline-block' }}>Bản Quyền</span>
                </div>
                <div style={{ color: '#c7cbe7', fontSize: 18, marginBottom: 36, maxWidth: 480, fontWeight: 400, lineHeight: 1.5 }}>
                  Tham gia sàn giao dịch bản quyền giúp các tác giả thương mại hóa tài sản trí tuệ của mình, đồng thời thu hút đầu tư và thúc đẩy sự phát triển của ngành công nghiệp sáng tạo.
                </div>
                <div style={{ display: 'flex', gap: 18, marginBottom: 44 }}>
                  <button style={{
                    background: 'linear-gradient(90deg,#3a8dff 60%,#6ec6ff 100%)', color: '#fff', border: 'none', borderRadius: 32,
                    padding: '13px 38px', fontWeight: 700, fontSize: 18, cursor: 'pointer',
                    boxShadow: '0 2px 12px 0 #3a8dff44', transition: 'background 0.2s',
                  }}>Tìm hiểu</button>
                  <button style={{
                    background: 'rgba(255,255,255,0.04)', color: '#fff', border: '2px solid #fff', borderRadius: 32,
                    padding: '13px 38px', fontWeight: 700, fontSize: 18, cursor: 'pointer',
                    boxShadow: '0 2px 12px 0 #fff2', transition: 'background 0.2s',
                  }}>Đăng tác phẩm</button>
                </div>
                <div style={{ display: 'flex', gap: 56, marginTop: 36 }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 34, fontWeight: 800, color: '#fff', textShadow: '0 2px 8px #0006' }}>232K+</div>
                    <div style={{ fontSize: 16, color: '#c7cbe7', marginTop: 4 }}>Tác phẩm</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 34, fontWeight: 800, color: '#fff', textShadow: '0 2px 8px #0006' }}>200K+</div>
                    <div style={{ fontSize: 16, color: '#c7cbe7', marginTop: 4 }}>Nghệ sĩ</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 34, fontWeight: 800, color: '#fff', textShadow: '0 2px 8px #0006' }}>10K+</div>
                    <div style={{ fontSize: 16, color: '#c7cbe7', marginTop: 4 }}>Giao dịch</div>
                  </div>
                </div>
              </div>
              {/* Right: Banner Card */}
              <div className="banner-3d-wrap">
                <div className="banner-3d-card-bg"></div>
                <div className="banner-3d-card">
                  <img src={img99} alt="Lạc Trôi" className="banner-3d-img" />
                  <div className="banner-3d-info">
                    <div className="banner-3d-avatar"></div>
                    <div className="banner-3d-meta">
                      <div className="banner-3d-title">Lạc Trôi</div>
                      <div className="banner-3d-user">@sontungmtp</div>
                      <div className="banner-3d-price">$5758.31</div>
                    </div>
                    <div className="banner-3d-dot"></div>
                  </div>
                  <div className="banner-3d-timer">
                    <div className="banner-3d-timer-col"><div>17</div><div className="banner-3d-timer-label">Hours</div></div>
                    <span>:</span>
                    <div className="banner-3d-timer-col"><div>56</div><div className="banner-3d-timer-label">Minutes</div></div>
                    <span>:</span>
                    <div className="banner-3d-timer-col"><div>03</div><div className="banner-3d-timer-label">Seconds</div></div>
                  </div>
                  {/* Star/particle overlay on card */}
                  <div className="banner-3d-star banner-3d-star1"></div>
                  <div className="banner-3d-star banner-3d-star2"></div>
                  <div className="banner-3d-star banner-3d-star3"></div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              width: '80%',
              height: '1px',
              backgroundColor: '#EDD9B9',
              margin: '70px auto',
            }}
          />

          {/* Partner logos row (three imported images) */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 36 }}>
            <div style={{ display: 'flex', gap: 72, alignItems: 'center' }}>
              <img
                src={appa}
                alt="APPA"
                style={{ height: 64, objectFit: 'contain', opacity: 0.95, transition: 'transform 220ms ease', cursor: 'pointer' }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <img
                src={vcpmc}
                alt="VCPMC"
                style={{ height: 64, objectFit: 'contain', opacity: 0.95, transition: 'transform 220ms ease', cursor: 'pointer' }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <img
                src={riav}
                alt="RIAV"
                style={{ height: 64, objectFit: 'contain', opacity: 0.95, transition: 'transform 220ms ease', cursor: 'pointer' }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.12)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              />
            </div>
          </div>
        </section>


        {/* Trending Section */}
        <section style={{ padding: '48px 0 80px 0' }}>
          <div style={{ maxWidth: '100vw', margin: '0 auto', padding: 0 }}>
            <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: 36, marginBottom: 36, letterSpacing: 0.5, fontFamily: 'Lora, serif', background: 'linear-gradient(90deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Bản quyền đang xu hướng</h2>
            <div ref={carouselRef} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 0, marginBottom: 32, position: 'relative', minHeight: 340, overflowX: 'auto', scrollBehavior: 'smooth', cursor: isDragging ? 'grabbing' : 'grab', userSelect: 'none', WebkitOverflowScrolling: 'touch', padding: '0 10vw', scrollbarWidth: 'none', msOverflowStyle: 'none' }} className="trending-carousel-hide-scroll">
              {trendingList.map((item, idx) => {
                const isCenter = idx === center;
                const isSide = idx === center - 1 || idx === center + 1;
                return (
                  <div key={idx} className={isCenter ? 'trending-card trending-card-center trending-card-gradient-border' : (isSide ? 'trending-card trending-card-center' : 'trending-card trending-card-blur')} style={{ margin: isCenter ? '0 24px' : '0 0px', zIndex: isCenter ? 2 : 1, cursor: 'pointer', transition: 'all 0.3s cubic-bezier(.4,2,.6,1)', filter: (isCenter || isSide) ? 'none' : 'blur(2.5px) grayscale(0.5) opacity(0.6)', opacity: (isCenter || isSide) ? 1 : 0.4, pointerEvents: 'auto', background: '#19172cd2', borderRadius: 24, boxShadow: isCenter ? '0 0 0 4px #2900cc4b, 0 2px 16px 0 rgba(180,180,200,0.10)' : '0 2px 16px 0 rgba(180,180,200,0.10)', width: 360, padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', border: isCenter ? '3px solid #3667E2' : '3px solid transparent' }} onClick={() => { if (isCenter) return; if (isSide && carouselRef.current) { const cardWidth = 300 + 24; const scrollTo = (idx - 1) * cardWidth; carouselRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' }); } }}>
                    <img src={item.img} alt={item.title} style={{ width: 300, height: 250, objectFit: 'cover', borderRadius: 16, marginBottom: 22 }} />
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: 8 }}>
                      {item.isPause ? <div style={{ width: 36, height: 36, borderRadius: 8, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 8 }}><i className="fa-solid fa-pause" style={{ color: '#fff', fontSize: 20 }}></i></div> : <img src={item.avatar} alt="avatar" style={{ width: 36, height: 36, borderRadius: 8, marginRight: 8 }} />}
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, fontSize: 18, color: item.color, textTransform: 'uppercase', letterSpacing: 0.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>{item.title}</div>
                        <div style={{ color: '#888', fontSize: 14, fontWeight: 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>{item.author}</div>
                      </div>
                      {item.icon}
                    </div>
                    <div style={{ width: '100%', textAlign: 'right', fontWeight: 700, fontSize: 20, color: '#ffffffff', marginBottom: isCenter ? 16 : 0 }}>{item.price}</div>
                    {isCenter && <button style={{ width: '100%', background: 'linear-gradient(90deg,#3b5cff 0%,#7b61ff 100%)', color: '#fff', border: 'none', borderRadius: 12, fontWeight: 700, fontSize: 20, padding: '12px 0', marginTop: 8, marginBottom: 0, cursor: 'pointer', boxShadow: '0 2px 8px 0 rgba(123,97,255,0.10)', transition: 'background 0.2s' }}>Chọn ngay</button>}
                  </div>
                );
              })}
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", margin: "80px 0" }}>
              <form style={{ display: "flex", alignItems: "center", width: 800, height: 80, background: "#fff", borderRadius: 18, boxShadow: "0 4px 24px 0 rgba(16,33,75,0.07)", overflow: "hidden" }}>
                <div style={{ flex: 1, height: "100%", position: "relative", display: "flex", alignItems: "center", border: "none", paddingLeft: 18, background: "none" }}>
                  <img src={heroInput} alt="bginput" style={{ position: "absolute", left: 0, top: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 1, pointerEvents: "none", userSelect: "none" }} />
                  <input type="text" placeholder="Tìm kiếm tác phẩm" style={{ width: "100%", height: "100%", border: "none", outline: "none", background: "transparent", fontSize: 20, color: "#B6C0D2", fontWeight: 400, padding: "0 0 0 8px", zIndex: 2, position: "relative" }} />
                </div>
                <button type="submit" style={{ height: "100%", minWidth: 160, background: "linear-gradient(180deg, #2852BB 0%, #A6BDF3 100%)", color: "#fff", fontWeight: 500, fontSize: 22, border: "none", borderRadius: "0 18px 18px 0", boxShadow: "0 4px 16px 0 rgba(16,33,75,0.10)", cursor: "pointer", transition: "background 0.2s" }}>Tìm kiếm</button>
              </form>
            </div>
          </div>
        </section>


        <section>
          {/* License Listing Section */}
          <div className="license-section" style={{ position: 'relative', padding: '40px 0 100px 0' }}>
           
            <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: 38, marginBottom: 34, letterSpacing: .5, fontFamily: 'Lora, serif', background: 'linear-gradient(90deg,#3cf2b6 0%, #6ec6ff 40%, #b18cff 70%, #6654F1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>DANH SÁCH BẢN QUYỀN</h2>
            <div className="license-tabs" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 18, margin: '0 auto 42px', maxWidth: 1100 }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCat(cat)} className={'license-tab' + (activeCat === cat ? ' active' : '')}>{cat}</button>
              ))}
            </div>
            <div className="license-grid" style={{ maxWidth: 1380, margin: '0 auto' }}>
              {filtered.map((art, idx) => (
                <div key={art.id} className="license-card" style={{ position: 'relative' }}>
                  {idx === 3 && <div style={{ position: 'absolute', bottom: 12, right: 14, width: 12, height: 12, background: '#6ec6ff', borderRadius: '50%', boxShadow: '0 0 12px #6ec6ff' }} />}
                  <img src={art.img} alt={art.name} className="license-card-img" />
                  <div className="license-card-body">
                    <div className="license-card-title">{art.name}</div>
                    <div className="license-card-artist">{art.artist}</div>
                    <div className="license-card-price">{art.price}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: 50 }}>
              <button className="license-more-btn">Xem thêm</button>
            </div>
          </div>
        </section>

        <section>
          {/* Timeline (Quy trình giao dịch bản quyền) */}
          <div className="cp-container">
            <h2 className="cp-title">QUY TRÌNH GIAO DỊCH BẢN QUYỀN</h2>
            <p className="cp-sub">Quy trình giao dịch bản quyền được tóm tắt gồm trong 3 bước: định giá tác phẩm, niêm yết và giao dịch trên sàn, sau đó hoàn tất thủ tục pháp lý.</p>

            <div className="cp-timeline">
              <div className="cp-line"></div>

              {/* Step 1 */}
              <div className="cp-item left">
                <span className="cp-dot"></span>
                <div className="cp-box">
                  <div className="cp-step">Bước 1</div>
                  <h3 className="cp-heading">Lựa chọn bản quyền</h3>
                  <p className="cp-text">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="cp-item right">
                <span className="cp-dot"></span>
                <div className="cp-box">
                  <div className="cp-step">Bước 2</div>
                  <h3 className="cp-heading">Điền mẫu đăng ký</h3>
                  <p className="cp-text">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="cp-item left">
                <span className="cp-dot"></span>
                <div className="cp-box">
                  <div className="cp-step">Bước 3</div>
                  <h3 className="cp-heading">Nhận kết quả</h3>
                  <p className="cp-text">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="cp-item right">
                <span className="cp-dot"></span>
                <div className="cp-box">
                  <div className="cp-step">Bước 4</div>
                  <h3 className="cp-heading">Hợp đồng & Thanh toán</h3>
                  <p className="cp-text">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.</p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="cp-item left">
                <span className="cp-dot"></span>
                <div className="cp-box">
                  <div className="cp-step">Bước 5</div>
                  <h3 className="cp-heading">Cấp phép</h3>
                  <p className="cp-text">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.</p>
                  <span className="cp-star" aria-hidden="true"></span>
                </div>
              </div>

              {/* Step 6 */}
              <div className="cp-item right">
                <span className="cp-dot"></span>
                <div className="cp-box">
                  <div className="cp-step">Bước 6</div>
                  <h3 className="cp-heading">Sử dụng & Quản lý</h3>
                  <p className="cp-text">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec facilisis. Senectus eget.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

          <section id="accompany-artists" style={{ padding: '70px 0 90px' }}>
            <div style={{ maxWidth: 1250, margin: '0 auto', padding: '0 20px' }}>
              <h2 style={{ textAlign: 'center', fontWeight: 800, fontSize: 32, marginBottom: 20, letterSpacing: .5, color: '#fff' }}>NGHỆ SĨ ĐỒNG HÀNH</h2>
              <p style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 58px', lineHeight: 1.55, color: '#c7cbe7', fontSize: 15 }}>
                VCPC luôn tự hào có sự đồng hành và ủng hộ từ các nghệ sĩ uy tín, góp phần tạo nên một cộng đồng sáng tạo văn minh, tôn trọng bản quyền.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '26px 28px', justifyItems: 'stretch' }}>
                {accompanyArtists.map(a => (
                  <div key={a.id} style={{ position: 'relative' }}>
                    {/* Outer gradient border wrapper with notch */}
                    <div style={{
                      position: 'relative',
                      background: 'linear-gradient(90deg,#2ab9ff 0%, #4b6ce9 50%, #6a58d9 100%)',
                      padding: 1,
                      borderRadius: 12,
                      clipPath: 'polygon(0 0,100% 0,100% calc(100% - 22px),calc(100% - 55px) 100%,0 100%)',
                      boxShadow: '0 4px 12px -2px rgba(40,120,200,0.25), 0 2px 6px 0 rgba(0,0,0,0.35)',
                      transition: 'transform .25s ease, box-shadow .25s ease'
                    }}>
                      {/* Inner content card */}
                      <div style={{
                        background: '#121a31',
                        borderRadius: 11,
                        clipPath: 'polygon(0 0,100% 0,100% calc(100% - 22px),calc(100% - 55px) 100%,0 100%)',
                        padding: '14px 22px 18px 18px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14,
                        minHeight: 86,
                        position: 'relative'
                      }}>
                        <div style={{ width: 46, height: 46, borderRadius: '50%', background: '#d9d9d9', flexShrink: 0 }} />
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontWeight: 600, fontSize: 16, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', letterSpacing: .2 }}>{a.name}</div>
                          <div style={{ display: 'flex', alignItems: 'center', marginTop: 5 }}>
                            <img src={iconTreanding} alt="eth" style={{ width: 16, height: 16, objectFit: 'contain', marginRight: 6 }} />
                            <span style={{ fontSize: 12, fontWeight: 500, color: '#c7cbe7', letterSpacing: '.3px' }}>{a.eth}</span>
                          </div>
                        </div>
                        <button style={{ background: 'none', border: 'none', color: '#1ea9ff', fontSize: 15, fontWeight: 600, cursor: 'pointer', padding: 4, textDecoration: 'underline' }}>Theo dõi</button>
                        {/* Diagonal notch subtle fill */}
                        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 70, height: 36, background: 'linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 70%)', clipPath: 'polygon(100% 0,0 100%,100% 100%)' }} />
                      </div>
                      {/* Star highlight */}
                      
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 60 }}>
                <button style={{
                  background: 'rgba(0,0,0,0.15)',
                  color: '#fff',
                  border: '1px solid #1ea9ff',
                  borderRadius: 40,
                  padding: '14px 42px',
                  fontSize: 16,
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 0 0 2px rgba(30,169,255,0.25) inset'
                }}>Xem thêm</button>
              </div>
            </div>
          </section>
      </section>

    </>

  );
}

export default Deatails;








