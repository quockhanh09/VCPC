import React from "react";
import page1 from "../assets/img/page_1.png";
import imgLette1 from "../assets/img/news-related-3.jpg";
import imgNews4 from "../assets/img/ads-baner.png";
import imgNews1 from "../assets/img/news-related-1.jpg";
import imgNews2 from "../assets/img/news-related-2.jpg";
import imgNews3 from "../assets/img/news-related-3.jpg";
import heroInput from "../assets/img/bginput.png";
// Dữ liệu tin tức liên quan
const RELATED_NEWS = [
    {
        image: imgNews1,
        tag: "HỢP TÁC",
        title: "Hợp tác với Hàn Quốc thiết lập hệ thống quản lý bản quyền số",
        date: "14-04-2026",
    },
    {
        image: imgNews2,
        tag: "HỢP TÁC",
        title: "Hợp tác với Hàn Quốc thiết lập hệ thống quản lý bản quyền số",
        date: "14-04-2026",
    },
    {
        image: imgNews3,
        tag: "HỢP TÁC",
        title: "Hợp tác với Hàn Quốc thiết lập hệ thống quản lý bản quyền số",
        date: "14-04-2026",
    },
    {
        image: imgNews1,
        tag: "HỢP TÁC",
        title: "Hợp tác với Hàn Quốc thiết lập hệ thống quản lý bản quyền số",
        date: "14-04-2026",
    },
];

function Letter() {
    return (
        <>
            {/* Banner section at the top */}
            {/* <div style={{
                width: '100%',
                minHeight: 120,
                overflow: 'hidden',
                margin: '0 0 40px 0',
                position: 'relative',
                background: `url(${imgNews4}) center/cover no-repeat`,
                padding: '48px 0',
                boxSizing: 'border-box',
            }}>
                
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
            </div> */}

            {/* Main content box */}
            <div style={{ maxWidth: 1850, margin: "0 auto", padding: 32, borderRadius: 16, }}>
                <div style={{ textAlign: 'center', marginBottom: 18 }}>
                    <div
                        style={{
                            display: 'inline-block',
                            color: '#6B7683',
                            fontWeight: 700,
                            fontSize: 16,
                            letterSpacing: 2,
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            border: '2px solid #D3D8DE',
                            borderRadius: 6,
                            background: '#F9F6F1',
                            padding: '6px 24px 4px 24px',
                            boxSizing: 'border-box',
                            fontFamily: 'inherit',
                        }}
                    >
                        TIN TỨC BẢN QUYỀN
                    </div>
                </div>
                <h1 style={{ color: "#22336C", fontWeight: 700, fontSize: 28, textAlign: "center", marginBottom: 12, lineHeight: 1.3 }}>
                    VCPC chính thức triển khai các dịch vụ <br/>quản lý, tư vấn, hỗ trợ toàn diện về quyền tác giả, quyền liên quan
                </h1>
                <div style={{ display: "flex", justifyContent: "center", gap: 32, color: "#888", fontSize: 15, marginBottom: 18 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <i className="bi bi-person-circle" /> VCPC EDITOR
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <i className="bi bi-calendar" /> 14-04-2026
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <i className="bi bi-eye" /> 20,546
                    </span>
                </div>
                <div style={{ display: "flex", justifyContent: "center", margin: "32px 0" }}>
                    <img src={page1} alt="page 1" style={{ maxWidth: 1000, width: "100%", borderRadius: 12, boxShadow: "0 2px 8px 0 rgba(0,0,0,0.08)" }} />
                </div>
               


                <div style={{ width: "100%", display: "flex", justifyContent: "center", margin: "80px 0" }}>
                    {/* <form style={{
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
                                placeholder="Nhập từ khóa"
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
                    </form> */}
                </div>
            </div>



            {/* PHẦN TIN TỨC LIÊN QUAN */}

            {/* <section style={{ background: '#fcf8f2', padding: '32px 0 0 0', marginTop: 32 }}>
                <div style={{ maxWidth: 1280, margin: '0 auto', padding: 0 }}>
                    <h3 style={{ color: '#3C5DAA', fontWeight: 700, fontSize: 24, marginBottom: 28, textAlign: 'left', letterSpacing: 0.5 }}>
                        Tin Tức Liên Quan
                    </h3>
                    <div style={{
                        display: 'flex',
                        gap: 36,
                        flexWrap: 'nowrap',
                        justifyContent: 'flex-start',
                        overflowX: 'auto',
                        width: '100%',
                        minWidth: 0,
                        maxWidth: '100%',
                    }}>
                        {RELATED_NEWS.map((item, idx) => (
                            <div key={idx} style={{ width: 360, background: '#fff', borderRadius: 12, boxShadow: '0 2px 12px 0 rgba(16,33,75,0.07)', marginBottom: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                                <img src={item.image} alt={item.title} style={{ width: '100%', height: 180, objectFit: 'cover', borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
                                <div style={{ padding: '18px 18px 12px 18px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    <div style={{ color: '#888', fontWeight: 700, fontSize: 13, marginBottom: 2, textTransform: 'uppercase', letterSpacing: 0.5 }}>{item.tag}</div>
                                    <a
                                        href="#"
                                        style={{
                                            color: '#22336C',
                                            fontWeight: 600,
                                            fontSize: 17,
                                            marginBottom: 8,
                                            lineHeight: 1.3,
                                            textDecoration: 'none',
                                            transition: 'color 0.2s',
                                            display: 'block',
                                            cursor: 'pointer',
                                        }}
                                        onMouseOver={e => (e.currentTarget.style.color = '#2852BB')}
                                        onMouseOut={e => (e.currentTarget.style.color = '#22336C')}
                                    >
                                        {item.title}
                                    </a>
                                    <div style={{ color: '#888', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                                        <i className="bi bi-calendar" /> {item.date}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}
        </>
    );
}

export default Letter;