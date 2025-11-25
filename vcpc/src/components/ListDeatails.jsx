import { useState, useEffect, useRef } from "react";
import "../style/App.css";
import "../style/img-3d.css";
import bgDe from "../assets/img/Copyright Market_001.jpg";
import heroInput from "../assets/img/bginput.png";

import trendingImg1 from "../assets/img/image109.png";
import trendingImg2 from "../assets/img/image106.png";
import trendingImg3 from "../assets/img/image107.png";
import trendingAvatar1 from "../assets/img/image108.png";
import trendingAvatar3 from "../assets/img/Group-143726086.png";

import iconTreanding from "../assets/img/CollectorLog-ETH.png";


function ListDeatails() {
  // Scroll to top when this page mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);
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
    <div style={{
      backgroundImage: `url(${bgDe})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      width: '100%',
      overflow: 'hidden'
    }}>
      <section
        id="service-details"
        className="service-details section"
        style={{ padding: "30px 0", backgroundImage: `url(${bgDe})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* HERO BANNER (refined) */}
        <div style={{ width: '100%', minHeight: 420, position: 'relative', padding: '20px 0 80px' }}>
          {/* Decorative stars */}
        
          <div style={{ maxWidth: 980, margin: '0 auto', padding: '0 32px', textAlign: 'center' }}>
            <h1 style={{
              margin: 0,
              fontSize: 'clamp(40px,7vw,64px)',
              fontWeight: 700,
              color: '#fff',
              lineHeight: 1.1,
              fontFamily: 'Montserrat, sans-serif'
            }}>SÀN GIAO DỊCH</h1>
            <h2 style={{
              margin: '8px 0 0',
              fontSize: 'clamp(36px,6vw,58px)',
              fontWeight: 700,
              lineHeight: 1.08,
              background: 'linear-gradient(90deg,#3cf2b6 5%, #6ec6ff 35%, #b18cff 65%, #f2a3e2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: 'Montserrat, sans-serif'
            }}>Tác Phẩm Bản Quyền</h2>
            {/* Search bar refined (larger) */}
            <form role="search" aria-label="Tìm kiếm bản quyền" onSubmit={(e)=>e.preventDefault()} style={{ position: 'relative', margin: '80px auto 0', maxWidth: 760, display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, flex: 1 }}>
                <div style={{ width: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B6C0D2' }}>
                  <i className="bi bi-sliders2" style={{ fontSize: 28, lineHeight: 1 }}></i>
                </div>
                <input aria-label="Nhập từ khoá" type="text" placeholder="Nhập từ khoá" style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', fontSize: 24, color: '#d3d9ec', fontWeight: 500, padding: '6px 0 10px' }} />
              </div>
              {/* Underline (thicker, inset 22px from left like mock) */}
              <div style={{ position: 'absolute', left: -10, right: 0, bottom: 0, height: 2, background: 'rgba(182,192,210,0.75)', zIndex: 5, pointerEvents: 'none' }} />
              {/* Enlarged geometric button (triangles like screenshot) */}
              <button type="submit" style={{ position: 'relative', height: 72, width: 150, border: 'none', cursor: 'pointer', background: 'transparent', marginLeft: 18 }} aria-label="Tìm kiếm">
                <div style={{ position: 'absolute', inset: 0 }}>

                  <div style={{ position: 'absolute', top: 0, left: 0, width: 84, height: 72, background: 'linear-gradient(145deg,#25e6ff 0%,#22e0d9 40%,#6ec6ff 95%)', clipPath: 'polygon(12% 0,80% 0,32% 38%)' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, width: 150, height: 72, background: 'rgba(40,55,72,0.6)', clipPath: 'polygon(0 100%,60% 100%,88% 0,32% 0)' }} />
                  <div style={{ position: 'absolute', top: 0, right: 0, width: 150, height: 72, background: 'linear-gradient(135deg,#bcd5ff 0%,#b18cff 45%,#f2a3e2 100%)', clipPath: 'polygon(40% 0,100% 0,100% 100%,60% 100%,0 100%,26% 34%)' }} />
                 
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ position: 'absolute', top: '50%', right: 28, transform: 'translateY(-50%)' }}>
                    <circle cx="11" cy="11" r="7"/>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                </div>
              </button>
            </form>
          </div>
        </div>

        <div style={{ width: '80%', height: 1, backgroundColor: '#EDD9B9', margin: '40px auto 70px' }} />
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
</div>

  );
}

export default ListDeatails;








