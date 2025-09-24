


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
    year: 2025,
    content: `Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet. Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.`
  },
  {
    year: 2024,
    content: `Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet. Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.`
  },
  {
    year: 2023,
    content: `Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet. Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.`
  },
  {
    year: 2022,
    content: `Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet. Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.`
  },
  {
    year: 2021,
    content: `Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet. Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.Lorem ipsum dolor sit amet consectetur. Tristique nulla elit blandit arcu erat sed tempor. Ac dignissim risus volutpat quam consequat. Commodo non donec netus adipiscing. Ac ut eu fringilla morbi nunc sed dictum cras purus. Augue gravida arcu aliquam cursus nunc amet nulla sit. Vel aliquam ut faucibus at augue nunc in. Etiam eget diam purus neque suspendisse ultrices nec id ac. Netus nulla elementum id netus fames dignissim eget. Elementum pellentesque egestas eu amet.`
  }

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
          {/* Tiêu đề và đường kẻ ngang */}
          <div style={{ display: "flex", alignItems: "center", marginTop: 60, marginBottom: 32 }}>
            <h1 style={{ fontFamily: 'SVN-Gilroy', fontWeight: 700, fontSize: 36, color: "#111", margin: 0 }}>
              LỊCH SỬ HÌNH THÀNH
            </h1>
            <div style={{ flex: 1, height: 2, background: "#bdbdbd", marginLeft: 24 }} />
          </div>
          {/* Timeline và content */}
          <div style={{ display: "flex", alignItems: "flex-start", gap: 0 }}>
            {/* Left: Years timeline */}
            <div style={{ minWidth: 305, marginTop: 60, marginLeft: 80 }}>
              <div>
                {YEARS.map((item, idx) => (
                  <div key={item.year} style={{ display: "flex", alignItems: "center", position: "relative" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: 12 }}>
                      <span
                        style={{
                          width: 16,
                          height: 16,
                          borderRadius: "50%",
                          background: idx === selected ? "#3a5bb7" : "#d3d8e6",
                          display: "block",
                          marginBottom: 10,
                          border: idx === selected ? "2px solid #3a5bb7" : "2px solid #d3d8e6"
                        }}
                      ></span>
                      {idx < YEARS.length - 1 && (
                        <div style={{ width: 2, height: 28, background: "#e0e0e0" }} />
                      )}
                    </div>
                    <button
                      onClick={() => setSelected(idx)}
                      style={{
                        background: "none",
                        border: "none",
                        outline: "none",
                        fontFamily: 'SVN-Gilroy',
                        fontWeight: idx === selected ? 700 : 500,
                        fontSize: 25,
                        color: idx === selected ? "#3a5bb7" : "#CAD9FF",
                        cursor: "pointer",
                        transition: "color 0.2s",
                        marginBottom: 20,
                        transform: "translateY(-10px)"
                      }}
                    >
                      Năm {item.year}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: Content */}
            <div style={{ flex: 1, marginLeft: 40, marginTop: 0, padding: 5 }}>
              <div style={{ fontSize: 16, color: "#222", lineHeight: 1.7, textAlign: "justify" }}>
                {YEARS[selected].content}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ĐỘI NGŨ CỦA CHÚNG TÔI */}
      <section style={{ background: "#fcf8f2", width: "100vw", padding: 0, minHeight: 600, marginTop: 0 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 40px" }}>
          {/* Title and border line */}
          <div style={{ display: "flex", alignItems: "center", marginTop: 32, marginBottom: 32 }}>
            <div style={{ flex: 1, height: 2, background: "#bdbdbd", marginRight: 32 }} />
            <h1 style={{ fontFamily: 'SVN-Gilroy', fontWeight: 900, fontSize: 36, color: "#111", margin: 0, letterSpacing: 1, textAlign: "right", minWidth: 420 }}>
              ĐỘI NGŨ CỦA CHÚNG TÔI
            </h1>
          </div>
          {/* Team grid using TEAM const, 2 rows, 4 columns, gap and card style refined */}
          <div style={{ display: "flex", flexDirection: "column", gap: 80, marginTop: 0, marginBottom: 60 }}>
            {[0, 1].map(rowIdx => (
              <div key={rowIdx} style={{ display: "flex", flexDirection: "row", gap: 0, justifyContent: "space-between" }}>
                {TEAM.slice(rowIdx * 4, rowIdx * 4 + 4).map((member, idx) => (
                  <div key={member.name} style={{ flex: 1, maxWidth: 260, minWidth: 220, display: "flex", flexDirection: "column", alignItems: "flex-start", background: "transparent", borderRadius: 0, boxShadow: "none", padding: "0 12px", position: "relative", minHeight: 370 }}>
                    {/* Heart background and avatar */}
                    <div style={{ position: "relative", width: 140, height: 140, margin: "0 0 0 0" }}>
                    
                      <img src={member.img} alt={member.name} style={{ width: 200, height: 240, objectFit: "cover", zIndex: 1, position: "relative", marginLeft: 15 }} />
                    </div>
                    {/* Name */}
                    <div style={{ transform: "translateY(110px)" }}>
                    <div style={{ fontFamily: 'SVN-Gilroy', fontWeight: 700, fontSize: 22, color: "#3C5DAA", marginBottom: 5, marginTop: 18, textAlign: "left", zIndex: 2, lineHeight: 1.1 }}>
                      {member.name}
                    </div>
                    {/* Position */}
                    <div style={{ fontFamily: 'SVN-Gilroy', fontWeight: 400, fontSize: 16, color: "#10214B", marginBottom: 10, textAlign: "left", zIndex: 2, lineHeight: 1.1 }}>
                      {member.position}
                    </div>
                    {/* Description */}
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
      </section>
    </>
  );
}

export default Introduction;
