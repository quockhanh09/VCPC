import page1 from "../assets/img/page_1.png";
import filePdf from "../assets/img/File_in.pdf";



import { useState } from "react";
import vcpcLogo from "../assets/img/vcpc-header.png";


import team1 from "../assets/img/team1.png";
import team2 from "../assets/img/team2.png";
import team3 from "../assets/img/team3.png";
import team4 from "../assets/img/team4.png";
import team5 from "../assets/img/team5.png";
import team6 from "../assets/img/team6.png";
import team7 from "../assets/img/team7.png";
import team8 from "../assets/img/team8.png";



const TEAM = [
  {
    img: team1,
    name: "Nguyễn Văn Cương",
    position: "Giám đốc Trung tâm",
    desc: "Lorem ipsum dolor sit amet consectetur. Odio quam quisque ac tristique odio tortor nibh."
  },
  {
    img: team2,
    name: "Nguyễn Văn B",
    position: "Giám đốc Trung tâm",
    desc: "Lorem ipsum dolor sit amet consectetur. Odio quam quisque ac tristique odio tortor nibh."
  },
  {
    img: team3,
    name: "Nguyễn Văn C",
    position: "Giám đốc Trung tâm",
    desc: "Lorem ipsum dolor sit amet consectetur. Odio quam quisque ac tristique odio tortor nibh."
  },
  {
    img: team4,
    name: "Nguyễn Văn D",
    position: "Giám đốc Trung tâm",
    desc: "Lorem ipsum dolor sit amet consectetur. Odio quam quisque ac tristique odio tortor nibh."
  },
  {
    img: team5,
    name: "Nguyễn Văn E",
    position: "Giám đốc Trung tâm",
    desc: "Lorem ipsum dolor sit amet consectetur. Odio quam quisque ac tristique odio tortor nibh."
  },
  {
    img: team6,
    name: "Nguyễn Văn F",
    position: "Giám đốc Trung tâm",
    desc: "Lorem ipsum dolor sit amet consectetur. Odio quam quisque ac tristique odio tortor nibh."
  },
  {
    img: team7,
    name: "Nguyễn Văn G",
    position: "Giám đốc Trung tâm",
    desc: "Lorem ipsum dolor sit amet consectetur. Odio quam quisque ac tristique odio tortor nibh."
  },
  {
    img: team8,
    name: "Nguyễn Văn H",
    position: "Giám đốc Trung tâm",
    desc: "Lorem ipsum dolor sit amet consectetur. Odio quam quisque ac tristique odio tortor nibh."
  },
];


const YEARS = [
  {
    month: 3,
    year: 2025,
    content: `Đây là giai đoạn Trung tâm khẳng định vị thế là một đơn vị sự nghiệp công lập đa chức năng, phù hợp với xu thế chuyển đổi số.<br />
<ul style="margin: 8px 0 0 18px; padding: 0 0 0 18px;">
  <li style="margin-bottom: 8px;">
    <span >Chính thức mang tên VCPC (25/3/2025):</span> Quyết định số 68/QĐ-BQTG của Cục trưởng Cục Bản quyền tác giả đã quy định chức năng, nhiệm vụ mới và chính thức đổi tên đơn vị thành Trung tâm Bảo vệ bản quyền Việt Nam (tên giao dịch quốc tế là Vietnam Copyright Protection Center – VCPC).
  </li>
  <li>
    <span >Vị thế và vai trò hiện tại:</span> VCPC hiện nay hoạt động như một trung tâm cung cấp dịch vụ tổng thể, từ giám định, tư vấn bảo vệ bản quyền đến khai thác tài sản trí tuệ. Đơn vị đóng vai trò là đầu mối hiệu quả hỗ trợ cơ quan quản lý nhà nước, đồng thời là địa chỉ tin cậy cho các tổ chức, cá nhân trong việc bảo hộ quyền lợi sáng tạo trong bối cảnh hội nhập quốc tế sâu rộng.
  </li>
</ul>`
  },
  {
    month: 10,
    year: 2023,
    content: `Sau 7 năm hoạt động, để đáp ứng sự phát triển của thị trường bản quyền và thúc đẩy công nghiệp văn hóa, Trung tâm đã có bước chuyển đổi lớn.<br/>
Quyết định kiện toàn (31/10/2023): Theo Quyết định số 374/QĐ-BQTG, Trung tâm được đổi tên thành Trung tâm Giám định, Thông tin và Chuyển giao quyền tác giả, quyền liên quan.<br/>
Mở rộng nhiệm vụ: Không còn bó hẹp trong lĩnh vực giám định, chức năng của Trung tâm đã bao quát thêm các mảng: thông tin, truyền thông, xây dựng cơ sở dữ liệu và đặc biệt là hỗ trợ chuyển giao, khai thác quyền tác giả, quyền liên quan. Sự thay đổi này đánh dấu nỗ lực của Trung tâm trong việc tham gia sâu hơn vào việc phát hành và lưu thông tài sản trí tuệ trên thị trường.`
  },
  {
    month: 7,
    year: 2016,
    content: `Với Quyết định số 88/QĐ-BQTG của Cục trưởng Cục Bản quyền tác giả, quy chế tổ chức và hoạt động của Trung tâm chính thức được ban hành<br/>
. Đây là cột mốc quan trọng giúp Trung tâm xây dựng đội ngũ giám định viên chuyên nghiệp và triển khai hoạt động giám định một cách bài bản, tạo nền tảng vững chắc cho hoạt động bản quyền tại Việt Nam.`
  },
  {
    month: 6,
    year: 2016,
    content: `Tiền thân của VCPC là Trung tâm Giám định quyền tác giả, quyền liên quan được thành lập theo Quyết định số 1981/QĐ-BVHTTDL của Bộ trưởng Bộ Văn hóa, Thể thao và Du lịch<br/>
. Trong giai đoạn đầu, Trung tâm tập trung vào các nhiệm vụ chuyên sâu: thực hiện hoạt động giám định, cung cấp ý kiến chuyên môn phục vụ giải quyết tranh chấp, xử lý vi phạm và hỗ trợ quản lý nhà nước về thực thi pháp luật sở hữu trí tuệ.`
  },
];

function Introduction() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      {/* PHẦN GIỚI THIỆU */}
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

      {/* PHẦN LỊCH SỬ HÌNH THÀNH */}
      <section style={{ background: "#fdf9f3", minHeight: 400, width: "100vw", padding: 0 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0" }}>

          <div style={{ display: "flex", alignItems: "center", marginTop: 60, marginBottom: 32 }}>
            <h1 style={{ fontFamily: 'SVN-Gilroy', fontWeight: 700, fontSize: 36, color: "#111", margin: 0 }}>
              LỊCH SỬ HÌNH THÀNH
            </h1>
            <div style={{ flex: 1, height: 2, background: "#bdbdbd", marginLeft: 24 }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0, width: '100%' }}>
            {/* Cột trái: timeline */}
            <div style={{ width: 200, minWidth: 180, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 40, paddingBottom: 40, paddingLeft: 18 }}>
              {YEARS.map((item, idx) => (
                <button
                  key={item.year}
                  onClick={() => setSelected(idx)}
                  style={{
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    cursor: 'pointer',
                    marginBottom: idx < YEARS.length - 1 ? 70 : 0,
                    padding: 0,
                    width: '100%',
                  }}
                >
                  <span
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      background: idx === selected ? '#233a7c' : '#d3d8e6',
                      border: idx === selected ? '2.5px solid #233a7c' : '2.5px solid #d3d8e6',
                      display: 'inline-block',
                      marginRight: 14,
                      transition: 'background 0.2s, border 0.2s',
                    }}
                  ></span>
                  {/* Tách số/tháng và năm thành 2 span, style riêng */}
                  {(() => {
                    // Hỗ trợ day, month, year
                    const parts = [];
                    // Đặt cùng một fontSize cho tất cả các phần
                    const timeFontSize = idx === selected ? 28 : 22;
                    if (item.day) {
                      parts.push({
                        value: item.day.toString().padStart(2, '0'),
                        style: {
                          fontFamily: 'SVN-Gilroy',
                          fontWeight: 700,
                          fontSize: timeFontSize,
                          color: idx === selected ? '#233a7c' : '#c2cbe6',
                          letterSpacing: 1,
                          transition: 'color 0.2s, font-size 0.2s',
                          marginBottom: 0,
                        }
                      });
                    }
                    if (item.month) {
                      if (parts.length > 0) parts.push({
                        value: ' . ',
                        style: {
                          fontFamily: 'SVN-Gilroy',
                          fontWeight: 700,
                          fontSize: timeFontSize,
                          color: idx === selected ? '#233a7c' : '#c2cbe6',
                          margin: '0 2px',
                          transition: 'color 0.2s, font-size 0.2s',
                        }
                      });
                      parts.push({
                        value: item.month.toString().padStart(2, '0'),
                        style: {
                          fontFamily: 'SVN-Gilroy',
                          fontWeight: 700,
                          fontSize: timeFontSize,
                          color: idx === selected ? '#233a7c' : '#c2cbe6',
                          letterSpacing: 1,
                          transition: 'color 0.2s, font-size 0.2s',
                          marginBottom: 0,
                        }
                      });
                    }
                    if (item.year) {
                      if (parts.length > 0) parts.push({
                        value: ' . ',
                        style: {
                          fontFamily: 'SVN-Gilroy',
                          fontWeight: 700,
                          fontSize: timeFontSize,
                          color: idx === selected ? '#233a7c' : '#c2cbe6',
                          margin: '0 2px',
                          transition: 'color 0.2s, font-size 0.2s',
                        }
                      });
                      parts.push({
                        value: item.year,
                        style: {
                          fontFamily: 'SVN-Gilroy',
                          fontWeight: 700,
                          fontSize: timeFontSize,
                          color: idx === selected ? '#233a7c' : '#c2cbe6',
                          marginBottom: 0,
                          transition: 'color 0.2s, font-size 0.2s',
                        }
                      });
                    }
                    return (
                      <>
                        {parts.map((part, i) => (
                          <span key={i} style={part.style}>{part.value}</span>
                        ))}
                      </>
                    );
                  })()}
                </button>
              ))}
            </div>
            {/* Cột phải: nội dung */}
            <div style={{ flex: 1, marginLeft: 40, marginTop: 30, padding: 5, display: 'flex', justifyContent: 'flex-start' }}>
              <div
                style={{
                  fontSize: 16,
                  color: '#222',
                  lineHeight: 1.7,
                  textAlign: 'justify',
                  maxWidth: 750,
                  width: '100%',
                  padding: '24px 32px',
                }}
                dangerouslySetInnerHTML={{ __html: YEARS[selected].content }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PHẦN CHỨC NĂNG NHIỆM VỤ */}
      <section style={{ background: "#fdf9f3", minHeight: 350, width: "100vw", padding: 0 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0" }}>
          {/* Tiêu đề và đường kẻ ngang */}
          <div style={{ display: "flex", alignItems: "center", marginTop: 60, marginBottom: 32, position: 'relative' }}>
            <h1 style={{ fontFamily: 'SVN-Gilroy', fontWeight: 700, fontSize: 36, color: "#111", margin: 0 }}>
              CHỨC NĂNG NHIỆM VỤ
            </h1>
            <div style={{ flex: 1, height: 2, background: "#bdbdbd", marginLeft: 24 }} />
            <button
              onClick={() => window.location.href = '/chuc-nang-nhiem-vu'}
              style={{
                position: 'absolute',
                right: 0,
                background: 'none',
                border: 'none',
                color: '#222',
                fontSize: 15,
                fontFamily: 'SVN-Gilroy',
                cursor: 'pointer',
                padding: 0,
                marginRight: 0,
                top: 2,
                fontWeight: 400,
              }}
            >
              Xem thêm &gt;
            </button>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
            {/* Left: Danh sách chức năng */}
            {(() => {
              const FUNCTION_LIST = [
                {
                  label: 'Giám định &\nHỗ trợ thực thi pháp luật',
                  color: '#233a7c',
                  content: [
                    'Trung tâm Bảo vệ bản quyền Việt Nam (VCPC) là đơn vị sự nghiệp công lập trực thuộc Cục Bản quyền tác giả, có tư cách pháp nhân, con dấu riêng và tài khoản tại Kho bạc nhà nước cũng như Ngân hàng thương mại. Trung tâm đồng vai trò then chốt trong việc cung cấp các dịch vụ công và hỗ trợ quản lý nhà nước về quyền tác giả, quyền liên quan và phát triển công nghiệp văn hóa.',
                    'VCPC chủ trì tiếp nhận và thực hiện hoạt động giám định quyền tác giả, quyền liên quan theo yêu cầu của các tổ chức, cá nhân. Trung tâm chịu trách nhiệm lưu trữ, bảo quản mẫu vật, chứng cứ và hồ sơ giám định, đồng thời cung cấp các dịch vụ giám sát để phát hiện các hành vi vi phạm bản quyền.'
                  ]
                },
                {
                  label: 'Quản lý dữ liệu &\nChuyển đổi số',
                  color: '#bfcbe6',
                  content: [
                    'Với Quyết định số 88/QĐ-BQTG của Cục trưởng Cục Bản quyền tác giả, quy chế tổ chức và hoạt động của Trung tâm chính thức được ban hành.',
                    '. Đây là cột mốc quan trọng giúp Trung tâm xây dựng đội ngũ giám định viên chuyên nghiệp và triển khai hoạt động giám định một cách bài bản, tạo nền tảng vững chắc cho hoạt động bản quyền tại Việt Nam.'
                  ]
                },
                {
                  label: 'Chuyển giao &\nKhai thác quyền',
                  color: '#bfcbe6',
                  content: [
                    'Tiền thân của VCPC là Trung tâm Giám định quyền tác giả, quyền liên quan được thành lập theo Quyết định số 1981/QĐ-BVHTTDL của Bộ trưởng Bộ Văn hóa, Thể thao và Du lịch. Trong giai đoạn đầu, Trung tâm tập trung vào các nhiệm vụ chuyên sâu: thực hiện hoạt động giám định, cung cấp ý kiến chuyên môn phục vụ giải quyết tranh chấp, xử lý vi phạm và hỗ trợ quản lý nhà nước về thực thi pháp luật sở hữu trí tuệ.'
                  ]
                },
                {
                  label: 'Thông tin, Truyền thông\n & Đào tạo',
                  color: '#bfcbe6',
                  content: [
                    'VCPC thực hiện chức năng thông tin theo quy định quốc tế, phổ biến kiến thức pháp luật và đào tạo bồi dưỡng chuyên môn nghiệp vụ. Trung tâm đồng tổ chức các sự kiện như hội nghị, hội thảo và thực hiện biên soạn, dịch thuật, xuất bản các tài liệu nghiên cứu, hướng dẫn về bản quyền.'
                  ]
                },
                {
                  label: 'Phát triển\n và Dịch vụ công khác',
                  color: '#bfcbe6',
                  content: [
                    'Trung tâm cung cấp dịch vụ cấp bản sao, phô bản Giấy chứng nhận đăng ký quyền tác giả, quyền liên quan và các bản định hình đối tượng quyền. Ngoài ra, VCPC nghiên cứu đề xuất các dự án liên danh, liên kết và xã hội hóa nhằm thúc đẩy sự phát triển của các ngành công nghiệp văn hóa tại Việt Nam.'
                  ]
                }
              ];
              const [selectedFunc, setSelectedFunc] = useState(0);
              return <>
                <div style={{ flex: 1, width: '100%', display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {FUNCTION_LIST.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', marginBottom: 24, paddingLeft: 0, paddingRight: 0 }}>
                      {/* Cột trái: label chức năng */}
                      <div
                        style={{
                          minWidth: 290,
                          maxWidth: 340,
                          paddingLeft: 0,
                          paddingRight: 24,
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: 12,
                          cursor: 'pointer',
                          height: '100%',
                        }}
                        onClick={() => setSelectedFunc(idx)}
                      >
                        <span style={{
                          width: 14,
                          height: 14,
                          borderRadius: '50%',
                          background: idx === selectedFunc ? '#233a7c' : '#bfcbe6',
                          display: 'inline-block',
                          marginRight: 10,
                          marginTop: 4,
                          transition: 'background 0.2s',
                        }}></span>
                        <span style={{
                          color: idx === selectedFunc ? '#233a7c' : '#bfcbe6',
                          fontWeight: idx === selectedFunc ? 700 : 600,
                          fontSize: idx === selectedFunc ? 22 : 20,
                          fontFamily: 'SVN-Gilroy',
                          lineHeight: 1.2,
                          whiteSpace: 'pre-line',
                          wordBreak: 'break-word',
                          transition: 'color 0.2s, font-size 0.2s, font-weight 0.2s',
                          textAlign: 'left',
                          display: 'block',
                          maxWidth: 300,
                        }}>{item.label}</span>
                      </div>
                      {/* Cột phải: nội dung chức năng */}
                      <div style={{ flex: 1, minWidth: 400, paddingLeft: 0, paddingRight: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        {item.content.map((text, i) => (
                          <div key={i} style={{ fontSize: 16, color: idx === selectedFunc ? '#222' : '#bfcbe6', lineHeight: 1.7, textAlign: 'justify', marginBottom: 10, transition: 'color 0.2s' }}>
                            {text}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>;
            })()}
          </div>
        </div>
      </section>

      {/*   
      <section style={{ background: "#fcf8f2", width: "100vw", padding: 0, minHeight: 600, marginTop: 0 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
         
          <div style={{ display: "flex", alignItems: "center", marginTop: 32, marginBottom: 32 }}>
            <div style={{ flex: 1, height: 2, background: "#bdbdbd", marginRight: 32 }} />
            <h1 style={{ fontFamily: 'SVN-Gilroy', fontWeight: 900, fontSize: 36, color: "#111", margin: 0, letterSpacing: 1, textAlign: "right", minWidth: 420 }}>
              ĐỘI NGŨ CỦA CHÚNG TÔI
            </h1>
          </div>
        
          <div style={{ display: "flex", flexDirection: "column", gap: 80, marginTop: 0, marginBottom: 60 }}>
            {[0, 1].map(rowIdx => (
              <div key={rowIdx} style={{ display: "flex", flexDirection: "row", gap: 0, justifyContent: "space-between" }}>
                {TEAM.slice(rowIdx * 4, rowIdx * 4 + 4).map((member, idx) => (
                  <div key={member.name} style={{ flex: 1, maxWidth: 260, minWidth: 220, display: "flex", flexDirection: "column", alignItems: "flex-start", background: "transparent", borderRadius: 0, boxShadow: "none", padding: "0 12px", position: "relative", minHeight: 370 }}>
                    
                    <div style={{ position: "relative", width: 140, height: 140, margin: "0 0 0 0" }}>
                    
                      <img src={member.img} alt={member.name} style={{ width: 200, height: 240, objectFit: "cover", zIndex: 1, position: "relative", marginLeft: 15 }} />
                    </div>
               
                    <div style={{ transform: "translateY(110px)" }}>
                    <div style={{ fontFamily: 'SVN-Gilroy', fontWeight: 700, fontSize: 22, color: "#3C5DAA", marginBottom: 5, marginTop: 18, textAlign: "left", zIndex: 2, lineHeight: 1.1 }}>
                      {member.name}
                    </div>
                
                    <div style={{ fontFamily: 'SVN-Gilroy', fontWeight: 400, fontSize: 16, color: "#10214B", marginBottom: 10, textAlign: "left", zIndex: 2, lineHeight: 1.1 }}>
                      {member.position}
                    </div>
                
                    <div style={{ fontFamily: 'SVN-Gilroy', fontWeight: 400, fontSize: 15, color: "#222", textAlign: "left", zIndex: 2, lineHeight: 1.5, marginTop: 0 }}>
                      {member.desc}
                    </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default Introduction;
