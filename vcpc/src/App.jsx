import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Layout from "./Layout.jsx";
import Header from "./components/Header";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import News from "./components/News";
import Details from "./components/Deatails";
import Newsletter from "./components/Newsletter";
import Register from "./signup-in/Register";
import Login from "./signup-in/Login";

import "./style/App.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper/swiper-bundle.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'flag-icons/css/flag-icons.min.css'

//
import logo from "./assets/img/Logo-name.png";
// import iconGlobal from "./assets/img/Icon.svg";
import heroBg from "./assets/img/herobanner-1.png";
import tabDot from "./assets/img/tab-dot.png";

import hero1 from "./assets/img/image1.png";
import heroInput from "./assets/img/bginput.png";
import bgI3 from "./assets/img/bgI3.png";


import event1 from "./assets/img/lucarly-08.png";
import event2 from "./assets/img/lucarly-02.png";
import event3 from "./assets/img/lucarly-01.png";
import event4 from "./assets/img/kram-11.png";


const eventImages = [event1, event2, event3, event4];

function App() {

  const newsData = {
    copyright: [
      {
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        title: "Hội thảo Nâng cao Năng lực Quản lý Nhà nước về Bản quyền Tác giả và Quyền Liên quan",
        desc: "Trung tâm Bảo vệ Bản quyền Việt Nam vừa tổ chức hội thảo chuyên sâu nhằm tăng cường kiến thức và kỹ năng cho các cán bộ quản lý. Sự kiện đã cập nhật những quy định mới nhất của pháp luật, đồng thời chia sẻ kinh nghiệm quốc tế trong việc bảo vệ quyền sở hữu trí tuệ.",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=120&q=80",
        title: "Phát động Cuộc thi 'Sáng Tạo Và Tôn Trọng Bản Quyền': Sân Chơi Mới Cho Người Trẻ",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=120&q=80",
        title: "Hợp Tác Chặt Chẽ Với Cơ Quan Quốc Tế Trong Cuộc Chiến Chống Vi Phạm Bản Quyền Số",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=120&q=80",
        title: "Công Bố Báo Cáo Thường Niên: Tình Hình Vi Phạm Bản Quyền Năm 2025",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&q=80",
        title: "Lễ Trao Giấy Chứng Nhận Bản Quyền: Vun Đắp Nền Tảng Cho Sự Sáng Tạo",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=120&q=80",
        title: "Cảnh Báo: Các Chiêu Trò Lừa Đảo Mạo Danh Cơ Quan Bản Quyền Ngày Càng Phức Tạp",
        author: "VCPC Editor",
        date: "01 tháng 08, 2025"
      }
    ],
    event: [
      {
        img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
        title: "Sự kiện: Ngày hội Sáng tạo Việt Nam 2025",
        desc: "Ngày hội quy tụ hàng trăm tác giả, nghệ sĩ, doanh nghiệp sáng tạo với nhiều hoạt động giao lưu, triển lãm, workshop hấp dẫn.",
        author: "VCPC Event",
        date: "15 tháng 07, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5c?auto=format&fit=crop&w=120&q=80",
        title: "Hội thảo: Bảo vệ bản quyền trong thời đại số",
        author: "VCPC Event",
        date: "10 tháng 07, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=120&q=80",
        title: "Triển lãm tác phẩm sáng tạo trẻ",
        author: "VCPC Event",
        date: "05 tháng 07, 2025"
      }
    ],
    law: [
      {
        img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5c?auto=format&fit=crop&w=600&q=80",
        title: "Luật Sở hữu trí tuệ sửa đổi 2025",
        desc: "Luật mới cập nhật nhiều quy định quan trọng về bảo vệ quyền tác giả, quyền liên quan và xử lý vi phạm.",
        author: "VCPC Law",
        date: "01 tháng 06, 2025"
      },
      {
        img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=120&q=80",
        title: "Nghị định hướng dẫn thi hành Luật Sở hữu trí tuệ",
        author: "VCPC Law",
        date: "15 tháng 05, 2025"
      }
    ]
  };

  const [tab, setTab] = useState("copyright");
  const [news, setNews] = useState(newsData);



  const tabList = [
    { key: "copyright", label: "Tin tức bản quyền", color: "#BFD6FF", text: "#224394" },
    { key: "event", label: "Sự kiện", color: "#224394", text: "#fff" },
    { key: "law", label: "Văn bản pháp luật", color: "#10214B", text: "#fff" }
  ];

  const current = news[tab];
  const main = current[0];
  const list = current.slice(1);

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // ===== TAB MENU =====
    const buttons = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    const handleTabClick = (btn) => {
      if (!btn || !btn.dataset?.tab) return;
      buttons.forEach((b) => b.classList.remove("active"));
      contents.forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");

      const tabContent = document.getElementById(btn.dataset.tab);
      if (tabContent) tabContent.classList.add("active");
    };

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => handleTabClick(btn));
    });

    // ===== CHARACTER CARD =====
    

    // ===== INIT CHARACTER SIZE =====
    const setDefaultSize = () => {
      document.querySelectorAll(".character-card").forEach((card) => {
        const defaultImg = card.querySelector("img.default");
        if (defaultImg) {
          card.style.width = defaultImg.naturalWidth + "px";
          card.style.height = defaultImg.naturalHeight + "px";
        }
      });
    };

    if (document.readyState === "complete") {
      setDefaultSize();
    } else {
      window.addEventListener("load", setDefaultSize);
    }

    // ===== COUNTDOWN =====
    const targetDate = new Date("Sep 15, 2025 20:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft(null);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", setDefaultSize);
    };
  }, []);


  return (
    <Router>
      <div className="index-page" style={{ background: "#FFFAF2" }}>

        <Header />
        <Routes>

          <Route
            path="/"
            element={
              <>
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



                <section id="about" className="about section" style={{ background: "#FFFAF2", padding: "40px 0" }}>
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gridTemplateRows: "1fr 1fr",
                    gap: 0,
                    maxWidth: 1150,
                    margin: "0 auto",
                    background: "#FFFAF2",
                    borderCollapse: "collapse"
                  }}>
                    {/* Top left */}
                    <div style={{
                      borderRight: "1px solid #D9D9D9",
                      padding: "32px 32px 24px 32px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderBottom: "1px solid #D9D9D9",
                      minHeight: 240
                    }}>
                      <div style={{ fontWeight: 900, fontSize: 30, color: "#10214B", lineHeight: 1.18, marginBottom: 16, textTransform: "uppercase", letterSpacing: 0.2, textAlign: "right" }}>
                        TRUNG TÂM BẢO VỆ<br />
                        <span style={{ color: "#224394", fontSize: 30, fontWeight: 900 }}>BẢN QUYỀN VIỆT NAM</span>
                      </div>
                      <div style={{ color: "#10214B", fontSize: 15.5, marginBottom: 24, maxWidth: 420, fontWeight: 400, lineHeight: 1.5, textAlign: "right", marginLeft: "auto" }}>
                        Đơn vị thuộc Cục Bản quyền tác giả, Bộ Văn hóa, Thể thao và Du lịch, chuyên tư vấn, hỗ trợ pháp lý và thực thi bảo vệ quyền tác giả, quyền liên quan tại Việt Nam.
                      </div>
                      <div style={{ display: "flex", alignItems: "center", marginTop: 8, justifyContent: "flex-end" }}>
                        <a href="#" style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          borderRadius: "50%",
                          background: "#10214B",
                          color: "#fff",
                          fontSize: 22,
                          marginRight: 12,
                          textDecoration: "none"
                        }}>
                          <i className="bi bi-chevron-right"></i>
                        </a>
                        <span style={{ color: "#10214B", fontWeight: 500, fontSize: 17 }}>Xem thêm</span>
                      </div>
                    </div>
                    {/* Top right */}
                    <div style={{
                      padding: "32px 32px 24px 32px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      borderBottom: "1px solid #D9D9D9"
                    }}>
                      <div style={{ fontWeight: 700, fontSize: 52, color: "#2852BB", marginBottom: 0, lineHeight: 1 }}>350.000+</div>
                      <div style={{ color: "#10214B", fontSize: 22, fontWeight: 400, marginTop: 6, fontStyle: "italic" }}>tác phẩm bản quyền</div>
                    </div>
                    {/* Bottom left */}
                    <div style={{
                      borderRight: "1px solid #D9D9D9",
                      padding: "32px 32px 24px 32px",
                      display: "flex",
                      flexDirection: "column",
                    }}>
                      <div style={{ fontWeight: 700, fontSize: 52, color: "#2852BB", marginBottom: 0, lineHeight: 1, textAlign: "right" }}>5.000+</div>
                      <div style={{ color: "#10214B", fontSize: 22, fontWeight: 400, marginTop: 6, textAlign: "right", fontStyle: "italic" }}>tác giả đồng hành</div>
                    </div>
                    {/* Bottom right */}
                    <div style={{ padding: "32px 32px 24px 32px", display: "flex", gap: 24, alignItems: "center" }}>
                      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <div style={{ color: "#10214B", fontSize: 15, marginBottom: 24, lineHeight: 1.5 }}>
                          Tác phẩm bản quyền là thành quả sáng tạo độc đáo của cá nhân hay tổ chức, cần được bảo vệ pháp lý để tôn vinh công sức của tác giả và thúc đẩy sự phát triển của tri thức, nghệ thuật.
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                          <a href="#" style={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            background: "#10214B",
                            color: "#fff",
                            fontSize: 22,
                            textDecoration: "none"
                          }}>
                            <i className="bi bi-chevron-right"></i>
                          </a>
                          <span style={{ color: "#10214B", fontWeight: 500, fontSize: 18 }}>Xem thêm</span>
                        </div>
                      </div>
                      <img src={hero1} alt="art" style={{ width: 200, height: 200, objectFit: "cover" }} />
                    </div>
                  </div>
                </section>

                {/* ===== STATS ===== */}
                {/* SEARCH BAR (stats section replaced) */}
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


                <section
                  id="services"
                  className="services section"
                  style={{
                    backgroundImage: `url(${bgI3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "20px 0px",
                  }}
                >

                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 60,
                    padding: "32px 0",

                  }}>
                    {/* Card 1 */}
                    <div style={{
                      width: 340,
                      minHeight: 340,
                      borderRadius: 20,
                      background: "rgba(90, 101, 110, 0.32)",
                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      border: "1.5px solid rgba(255,255,255,0.18)",
                      padding: "32px 28px 28px 28px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start"
                    }}
                                     
                     onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow = "0px 8px 25px rgba(218, 218, 218, 0.73)")
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}>

                      <div style={{ color: "#B6C0D2", fontSize: 18, fontWeight: 400, marginBottom: 10 }}>Dịch vụ bản quyền</div>

                      <div style={{
                        fontSize: 22,
                        fontWeight: 700,
                        marginBottom: 12,
                        background: "linear-gradient(90deg, #4DE1C1 0%, #3B8CFF 60%, #A259F7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}>
                        CÔNG BỐ BẢN QUYỀN
                      </div>

                      <div style={{ color: "#E3E6EB", fontSize: 15, fontWeight: 400, marginBottom: 32, lineHeight: 1.5 }}>
                        Lorem ipsum dolor sit amet consectetur. Integer sit viverra nullam faucibus dignissim malesuada lacus blandit phasellus. Ac pretium volutpat duis eu enim sem facilisi.
                      </div>

                      <button className="btn-service-hero"  >Đăng ký dịch vụ</button>
                    </div>
                    {/* Card 2 */}

                    <div style={{
                      width: 340,
                      minHeight: 340,
                      borderRadius: 20,
                      background: "rgba(90, 101, 110, 0.32)",

                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      border: "1.5px solid rgba(255,255,255,0.18)",
                      padding: "32px 28px 28px 28px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start"
                    }}
                    
                     onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow = "0px 8px 25px rgba(218, 218, 218, 0.73)")
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}>

                      <div style={{ color: "#B6C0D2", fontSize: 18, fontWeight: 400, marginBottom: 10 }}>Dịch vụ bản quyền</div>

                      <div style={{
                        fontSize: 22,
                        fontWeight: 700,
                        marginBottom: 12,
                        background: "linear-gradient(90deg, #4DE1C1 0%, #3B8CFF 60%, #A259F7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}>
                        GIÁM ĐỊNH BẢN QUYỀN
                      </div>

                      <div style={{ color: "#E3E6EB", fontSize: 15, fontWeight: 400, marginBottom: 32, lineHeight: 1.5 }}>
                        Lorem ipsum dolor sit amet consectetur. Integer sit viverra nullam faucibus dignissim malesuada lacus blandit phasellus. Ac pretium volutpat duis eu enim sem facilisi.
                      </div>

                      <button className="btn-service-hero" >Đăng ký dịch vụ</button>
                    </div>

                    {/* Card 3 */}
                    <div style={{
                      width: 340,
                      minHeight: 340,
                      borderRadius: 20,
                      background: "rgba(90, 101, 110, 0.32)",

                      backdropFilter: "blur(8px)",
                      WebkitBackdropFilter: "blur(8px)",
                      border: "1.5px solid rgba(255,255,255,0.18)",
                      padding: "32px 28px 28px 28px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start"
                    }}

                      onMouseEnter={(e) =>
                        (e.currentTarget.style.boxShadow = "0px 8px 25px rgba(218, 218, 218, 0.73)")
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                    >

                      <div style={{ color: "#B6C0D2", fontSize: 18, fontWeight: 400, marginBottom: 10 }}>Dịch vụ bản quyền</div>

                      <div style={{
                        fontSize: 22,
                        fontWeight: 700,
                        marginBottom: 12,
                        background: "linear-gradient(90deg, #4DE1C1 0%, #3B8CFF 60%, #A259F7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}>
                        GIAO DỊCH BẢN QUYỀN
                      </div>

                      <div style={{ color: "#E3E6EB", fontSize: 15, fontWeight: 400, marginBottom: 32, lineHeight: 1.5 }}>
                        Lorem ipsum dolor sit amet consectetur. Integer sit viverra nullam faucibus dignissim malesuada lacus blandit phasellus. Ac pretium volutpat duis eu enim sem facilisi.
                      </div>
                      <button className="btn-service-hero" >
                        Đăng ký dịch vụ
                      </button>
                    </div>
                  </div>
                </section>


                {/* ===== TRENDING COPYRIGHT SECTION (Carousel) ===== */}
                {(() => {
                  // Demo data for many cards
                  const trendingList = [
                    {
                      img: "https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27",
                      title: "VIẾT TIẾP CÂU...",
                      author: "Duyên Quỳnh & N...",
                      price: "$103,025",
                      avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=1",
                      icon: <i className="fa-solid fa-download" style={{ color: '#7b61ff', fontSize: 22, marginLeft: 8 }}></i>,
                      color: '#ff9800',
                    },
                    {
                      img: "https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27",
                      title: "CÒN GÌ ĐẸP...",
                      author: "Nguyễn Hùng",
                      price: "$180,345",
                      avatar: null,
                      icon: <i className="fa-solid fa-download" style={{ color: '#7b61ff', fontSize: 22, marginLeft: 8 }}></i>,
                      color: '#3b5cff',
                      isPause: true,
                    },
                    {
                      img: "https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27",
                      title: "LẠC TRÔI",
                      author: "Sơn Tùng M-TP",
                      price: "$9,945.1",
                      avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=2",
                      icon: <i className="fa-solid fa-download" style={{ color: '#7b61ff', fontSize: 22, marginLeft: 8 }}></i>,
                      color: '#7b61ff',
                    },
                    {
                      img: "https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27",
                      title: "BÀI CA HY VỌNG",
                      author: "Trọng Tấn",
                      price: "$12,000",
                      avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=3",
                      icon: <i className="fa-solid fa-download" style={{ color: '#7b61ff', fontSize: 22, marginLeft: 8 }}></i>,
                      color: '#ff9800',
                    },
                    {
                      img: "https://cdn.sstatic.net/Img/unified/sprites.svg?v=fcc0ea44ba27",
                      title: "NƠI NÀY CÓ ANH",
                      author: "Sơn Tùng M-TP",
                      price: "$8,000",
                      avatar: "https://api.dicebear.com/7.x/pixel-art/svg?seed=4",
                      icon: <i className="fa-solid fa-download" style={{ color: '#7b61ff', fontSize: 22, marginLeft: 8 }}></i>,
                      color: '#7b61ff',
                    },
                  ];
                  const [center, setCenter] = useState(1); // index of center card
                  const visibleCount = 3;
                  const getCardClass = (idx) => {
                    if (idx === center) return 'trending-card trending-card-center';
                    if (idx === center - 1 || idx === center + 1) return 'trending-card trending-card-side';
                    return 'trending-card trending-card-blur';
                  };
                  const handleCardClick = (idx) => {
                    setCenter(idx);
                  };
                  // Only show 3 cards in center, but render all for blur effect
                  return (
                    <section style={{ background: '#FFFAF2', padding: '48px 0 24px 0' }}>
                      <div style={{ maxWidth: 1150, margin: '0 auto', padding: 0 }}>
                        <h2 style={{
                          textAlign: 'center',
                          fontWeight: 800,
                          fontSize: 36,
                          color: '#b7a6e8',
                          marginBottom: 36,
                          letterSpacing: 0.5,
                          fontFamily: 'Lora, serif'
                        }}>
                          Bản quyền đang xu hướng
                        </h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: 0, marginBottom: 32, position: 'relative', minHeight: 340 }}>
                          {trendingList.map((item, idx) => {
                            const cardClass = getCardClass(idx);
                            return (
                              <div
                                key={idx}
                                className={cardClass}
                                style={{
                                  margin: idx === center ? '0 24px' : '0 0px',
                                  zIndex: idx === center ? 2 : 1,
                                  cursor: idx === center ? 'default' : 'pointer',
                                  transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
                                  filter: idx === center ? 'none' : (idx === center - 1 || idx === center + 1 ? 'none' : 'blur(2.5px) grayscale(0.5) opacity(0.6)'),
                                  opacity: idx === center ? 1 : (idx === center - 1 || idx === center + 1 ? 0.7 : 0.4),
                                  pointerEvents: idx < center - 1 || idx > center + 1 ? 'none' : 'auto',
                                  background: '#fff',
                                  borderRadius: 24,
                                  boxShadow: idx === center ? '0 0 0 4px #f3f0ff, 0 2px 16px 0 rgba(180,180,200,0.10)' : '0 2px 16px 0 rgba(180,180,200,0.10)',
                                  width: 300,
                                  padding: 24,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  alignItems: 'center',
                                  position: 'relative',
                                  border: idx === center ? '3px solid' : '3px solid transparent',
                                  
                                }}
                                onClick={() => idx !== center && handleCardClick(idx)}
                              >
                                <img src={item.img} alt={item.title} style={{ width: 220, height: 140, objectFit: 'cover', borderRadius: 16, marginBottom: 18 }} />
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginBottom: 8 }}>
                                  {item.isPause ? (
                                    <div style={{ width: 36, height: 36, borderRadius: 8, background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 8 }}>
                                      <i className="fa-solid fa-pause" style={{ color: '#fff', fontSize: 20 }}></i>
                                    </div>
                                  ) : (
                                    <img src={item.avatar} alt="avatar" style={{ width: 36, height: 36, borderRadius: 8, marginRight: 8 }} />
                                  )}
                                  <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: 700, fontSize: 18, color: item.color, textTransform: 'uppercase', letterSpacing: 0.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>{item.title}</div>
                                    <div style={{ color: '#888', fontSize: 14, fontWeight: 400, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 120 }}>{item.author}</div>
                                  </div>
                                  {item.icon}
                                </div>
                                <div style={{ width: '100%', textAlign: 'right', fontWeight: 700, fontSize: 20, color: '#222', marginBottom: idx === center ? 16 : 0 }}>{item.price}</div>
                                {idx === center && (
                                  <button style={{
                                    width: '100%',
                                    background: 'linear-gradient(90deg,#3b5cff 0%,#7b61ff 100%)',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: 12,
                                    fontWeight: 700,
                                    fontSize: 20,
                                    padding: '12px 0',
                                    marginTop: 8,
                                    marginBottom: 0,
                                    cursor: 'pointer',
                                    boxShadow: '0 2px 8px 0 rgba(123,97,255,0.10)',
                                    transition: 'background 0.2s'
                                  }}>Chọn ngay</button>
                                )}
                              </div>
                            );
                          })}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 8 }}>
                          <button style={{
                            background: '#fff',
                            color: '#7b61ff',
                            border: 'none',
                            borderRadius: 24,
                            fontWeight: 700,
                            fontSize: 20,
                            padding: '10px 40px',
                            boxShadow: '0 2px 8px 0 rgba(123,97,255,0.10)',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                          }}>Xem thêm</button>
                        </div>
                      </div>
                    </section>
                  );
                })()}


                
              </>
            }
          />

          <Route path="/Contact" element={<Contact />} />
          <Route path="/News" element={<News />} />
          <Route path="/Deatails" element={<Details />} />
          <Route path="/Newsletter" element={<Newsletter />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
        <Countdown />
        {/* ===== FOOTER ===== */}
        <Footer />

      </div>
    </Router>
  );
}

export default App;
