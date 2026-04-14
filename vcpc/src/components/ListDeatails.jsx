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
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;
  const artworks = [
    // Âm nhạc (20 items)
    { id: 1, img: trendingImg3, name: 'Lạc Trôi', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 2, img: trendingImg1, name: 'Bài Ca Hy Vọng', artist: 'Trọng Tấn', price: '$1670', cat: 'Âm nhạc' },
    { id: 3, img: trendingImg2, name: 'Nơi Này Có Anh', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 4, img: trendingImg3, name: 'Chạy Ngay Đi', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 5, img: trendingImg1, name: 'Em Của Ngày Hôm Qua', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 6, img: trendingImg2, name: 'Hãy Trao Cho Anh', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 7, img: trendingImg3, name: 'Chúng Ta Không Thuộc Về Nhau', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 8, img: trendingImg1, name: 'Muộn Rồi Mà Sao Còn', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 9, img: trendingImg2, name: 'Chắc Ai Đó Sẽ Về', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 10, img: trendingImg3, name: 'Âm Thầm Bên Em', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 11, img: trendingImg1, name: 'Cơn Mưa Ngang Qua', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 12, img: trendingImg2, name: 'Không Phải Dạng Vừa Đâu', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 13, img: trendingImg3, name: 'Making My Way', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 14, img: trendingImg1, name: 'Buông Đôi Tay Nhau Ra', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 15, img: trendingImg2, name: 'Chúng Ta Của Tương Lai', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 16, img: trendingImg3, name: 'Chúng Ta Của Hiện Tại', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 17, img: trendingImg1, name: 'There\'s No One At All', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 18, img: trendingImg2, name: 'Một Năm Mới Bình An', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 19, img: trendingImg3, name: 'Đừng Về Trễ', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },
    { id: 20, img: trendingImg1, name: 'Thái Bình Mồ Hôi Rơi', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Âm nhạc' },

    // Hội họa (20 items)
    { id: 21, img: trendingImg2, name: 'Thiếu Nữ Bên Hoa', artist: 'Tô Ngọc Vân', price: '$1670', cat: 'Hội họa' },
    { id: 22, img: trendingImg3, name: 'Em Thúy', artist: 'Tô Ngọc Vân', price: '$1670', cat: 'Hội họa' },
    { id: 23, img: trendingImg1, name: 'Thiếu Nữ Bên Hồ', artist: 'Nguyễn Phan Chánh', price: '$1670', cat: 'Hội họa' },
    { id: 24, img: trendingImg2, name: 'Chợ Tết', artist: 'Bùi Xuân Phái', price: '$1670', cat: 'Hội họa' },
    { id: 25, img: trendingImg3, name: 'Phố Phùng Hưng', artist: 'Bùi Xuân Phái', price: '$1670', cat: 'Hội họa' },
    { id: 26, img: trendingImg1, name: 'Hàng Đào', artist: 'Bùi Xuân Phái', price: '$1670', cat: 'Hội họa' },
    { id: 27, img: trendingImg2, name: 'Phố Cổ Hà Nội', artist: 'Bùi Xuân Phái', price: '$1670', cat: 'Hội họa' },
    { id: 28, img: trendingImg3, name: 'Cầu Long Biên', artist: 'Bùi Xuân Phái', price: '$1670', cat: 'Hội họa' },
    { id: 29, img: trendingImg1, name: 'Chân Dung Phụ Nữ', artist: 'Nguyễn Gia Trí', price: '$1670', cat: 'Hội họa' },
    { id: 30, img: trendingImg2, name: 'Thiếu Nữ', artist: 'Nguyễn Gia Trí', price: '$1670', cat: 'Hội họa' },
    { id: 31, img: trendingImg3, name: 'Bến Sông', artist: 'Nguyễn Sáng', price: '$1670', cat: 'Hội họa' },
    { id: 32, img: trendingImg1, name: 'Đồng Quê', artist: 'Nguyễn Tư Nghiêm', price: '$1670', cat: 'Hội họa' },
    { id: 33, img: trendingImg2, name: 'Mùa Thu', artist: 'Lê Phổ', price: '$1670', cat: 'Hội họa' },
    { id: 34, img: trendingImg3, name: 'Hoa Sen', artist: 'Lê Phổ', price: '$1670', cat: 'Hội họa' },
    { id: 35, img: trendingImg1, name: 'Thiếu Nữ Việt Nam', artist: 'Mai Trung Thứ', price: '$1670', cat: 'Hội họa' },
    { id: 36, img: trendingImg2, name: 'Cô Gái Bên Đàn', artist: 'Mai Trung Thứ', price: '$1670', cat: 'Hội họa' },
    { id: 37, img: trendingImg3, name: 'Phong Cảnh', artist: 'Nguyễn Văn Tỵ', price: '$1670', cat: 'Hội họa' },
    { id: 38, img: trendingImg1, name: 'Chợ Hoa', artist: 'Nguyễn Văn Tỵ', price: '$1670', cat: 'Hội họa' },
    { id: 39, img: trendingImg2, name: 'Mùa Xuân', artist: 'Trần Văn Cẩn', price: '$1670', cat: 'Hội họa' },
    { id: 40, img: trendingImg3, name: 'Hồ Gươm', artist: 'Trần Văn Cẩn', price: '$1670', cat: 'Hội họa' },

    // Văn học (20 items)
    { id: 41, img: trendingImg1, name: 'Số Đỏ', artist: 'Vũ Trọng Phụng', price: '$1670', cat: 'Văn học' },
    { id: 42, img: trendingImg2, name: 'Dế Mèn Phiêu Lưu Ký', artist: 'Tô Hoài', price: '$1670', cat: 'Văn học' },
    { id: 43, img: trendingImg3, name: 'Chí Phèo', artist: 'Nam Cao', price: '$1670', cat: 'Văn học' },
    { id: 44, img: trendingImg1, name: 'Lão Hạc', artist: 'Nam Cao', price: '$1670', cat: 'Văn học' },
    { id: 45, img: trendingImg2, name: 'Vợ Nhặt', artist: 'Kim Lân', price: '$1670', cat: 'Văn học' },
    { id: 46, img: trendingImg3, name: 'Tắt Đèn', artist: 'Ngô Tất Tố', price: '$1670', cat: 'Văn học' },
    { id: 47, img: trendingImg1, name: 'Việc Làng', artist: 'Nguyễn Công Hoan', price: '$1670', cat: 'Văn học' },
    { id: 48, img: trendingImg2, name: 'Những Ngôi Sao Xa Xôi', artist: 'Lê Minh Khuê', price: '$1670', cat: 'Văn học' },
    { id: 49, img: trendingImg3, name: 'Chiếc Lược Ngà', artist: 'Nguyễn Quang Sáng', price: '$1670', cat: 'Văn học' },
    { id: 50, img: trendingImg1, name: 'Rừng Xà Nu', artist: 'Nguyễn Trung Thành', price: '$1670', cat: 'Văn học' },
    { id: 51, img: trendingImg2, name: 'Đất Nước Đứng Lên', artist: 'Nguyễn Đình Thi', price: '$1670', cat: 'Văn học' },
    { id: 52, img: trendingImg3, name: 'Quê Người', artist: 'Tế Hanh', price: '$1670', cat: 'Văn học' },
    { id: 53, img: trendingImg1, name: 'Đồng Chí', artist: 'Chính Hữu', price: '$1670', cat: 'Văn học' },
    { id: 54, img: trendingImg2, name: 'Sông Hương', artist: 'Hoàng Cầm', price: '$1670', cat: 'Văn học' },
    { id: 55, img: trendingImg3, name: 'Việt Bắc', artist: 'Tố Hữu', price: '$1670', cat: 'Văn học' },
    { id: 56, img: trendingImg1, name: 'Đất Nước', artist: 'Nguyễn Khoa Điềm', price: '$1670', cat: 'Văn học' },
    { id: 57, img: trendingImg2, name: 'Áo Lụa Hà Đông', artist: 'Hoàng Phủ Ngọc Tường', price: '$1670', cat: 'Văn học' },
    { id: 58, img: trendingImg3, name: 'Vang Bóng Một Thời', artist: 'Nguyễn Tuân', price: '$1670', cat: 'Văn học' },
    { id: 59, img: trendingImg1, name: 'Truyện Kiều', artist: 'Nguyễn Du', price: '$1670', cat: 'Văn học' },
    { id: 60, img: trendingImg2, name: 'Tiếng Thu', artist: 'Nguyễn Du', price: '$1670', cat: 'Văn học' },

    // Kiến trúc (20 items)
    { id: 61, img: trendingImg3, name: 'Nhà Hát Lớn Hà Nội', artist: 'Harlay', price: '$1670', cat: 'Kiến trúc' },
    { id: 62, img: trendingImg1, name: 'Chùa Một Cột', artist: 'Lý Thái Tông', price: '$1670', cat: 'Kiến trúc' },
    { id: 63, img: trendingImg2, name: 'Văn Miếu Quốc Tử Giám', artist: 'Lý Thánh Tông', price: '$1670', cat: 'Kiến trúc' },
    { id: 64, img: trendingImg3, name: 'Hoàng Thành Thăng Long', artist: 'Lý Công Uẩn', price: '$1670', cat: 'Kiến trúc' },
    { id: 65, img: trendingImg1, name: 'Cầu Long Biên', artist: 'Gustave Eiffel', price: '$1670', cat: 'Kiến trúc' },
    { id: 66, img: trendingImg2, name: 'Lăng Chủ Tịch Hồ Chí Minh', artist: 'Garold Isacovič', price: '$1670', cat: 'Kiến trúc' },
    { id: 67, img: trendingImg3, name: 'Chùa Hương', artist: 'Triều Trần', price: '$1670', cat: 'Kiến trúc' },
    { id: 68, img: trendingImg1, name: 'Đền Hùng', artist: 'Vua Hùng', price: '$1670', cat: 'Kiến trúc' },
    { id: 69, img: trendingImg2, name: 'Bảo Tàng Lịch Sử', artist: 'Nguyễn Hữu Chính', price: '$1670', cat: 'Kiến trúc' },
    { id: 70, img: trendingImg3, name: 'Cầu Nhật Tân', artist: 'Kazuhiro Ikeda', price: '$1670', cat: 'Kiến trúc' },
    { id: 71, img: trendingImg1, name: 'Landmark 81', artist: 'British Design', price: '$1670', cat: 'Kiến trúc' },
    { id: 72, img: trendingImg2, name: 'Bitexco Financial Tower', artist: 'Carlos Zapata', price: '$1670', cat: 'Kiến trúc' },
    { id: 73, img: trendingImg3, name: 'Vincom Center', artist: 'Atkins Global', price: '$1670', cat: 'Kiến trúc' },
    { id: 74, img: trendingImg1, name: 'Keangnam Landmark', artist: 'Heerim Architects', price: '$1670', cat: 'Kiến trúc' },
    { id: 75, img: trendingImg2, name: 'Lotte Center Hanoi', artist: 'Callison RTKL', price: '$1670', cat: 'Kiến trúc' },
    { id: 76, img: trendingImg3, name: 'Tháp Rùa', artist: 'Triều Lê', price: '$1670', cat: 'Kiến trúc' },
    { id: 77, img: trendingImg1, name: 'Cầu Trần Thị Lý', artist: 'Louis Berger', price: '$1670', cat: 'Kiến trúc' },
    { id: 78, img: trendingImg2, name: 'Cầu Vàng', artist: 'TA Landscape', price: '$1670', cat: 'Kiến trúc' },
    { id: 79, img: trendingImg3, name: 'Nhà Hát TP.HCM', artist: 'Félix Olivier', price: '$1670', cat: 'Kiến trúc' },
    { id: 80, img: trendingImg1, name: 'Bưu Điện TP.HCM', artist: 'Villedieu', price: '$1670', cat: 'Kiến trúc' },

    // Phần mềm (20 items)
    { id: 81, img: trendingImg2, name: 'VCCorp Platform', artist: 'VCCorp', price: '$1670', cat: 'Phần mềm' },
    { id: 82, img: trendingImg3, name: 'Zalo Messaging', artist: 'VNG Corporation', price: '$1670', cat: 'Phần mềm' },
    { id: 83, img: trendingImg1, name: 'Momo Wallet', artist: 'M-Service', price: '$1670', cat: 'Phần mềm' },
    { id: 84, img: trendingImg2, name: 'ViettelPay', artist: 'Viettel Group', price: '$1670', cat: 'Phần mềm' },
    { id: 85, img: trendingImg3, name: 'Sendo Shopping', artist: 'FPT Online', price: '$1670', cat: 'Phần mềm' },
    { id: 86, img: trendingImg1, name: 'Tiki Platform', artist: 'Tiki Corporation', price: '$1670', cat: 'Phần mềm' },
    { id: 87, img: trendingImg2, name: 'Shopee Vietnam', artist: 'Sea Group', price: '$1670', cat: 'Phần mềm' },
    { id: 88, img: trendingImg3, name: 'Grab Vietnam', artist: 'Grab Holdings', price: '$1670', cat: 'Phần mềm' },
    { id: 89, img: trendingImg1, name: 'GoViet', artist: 'Gojek', price: '$1670', cat: 'Phần mềm' },
    { id: 90, img: trendingImg2, name: 'Base.vn', artist: 'Base.vn JSC', price: '$1670', cat: 'Phần mềm' },
    { id: 91, img: trendingImg3, name: 'Haravan', artist: 'Haravan JSC', price: '$1670', cat: 'Phần mềm' },
    { id: 92, img: trendingImg1, name: 'MISA Accounting', artist: 'MISA JSC', price: '$1670', cat: 'Phần mềm' },
    { id: 93, img: trendingImg2, name: 'Fast Accounting', artist: 'FAST JSC', price: '$1670', cat: 'Phần mềm' },
    { id: 94, img: trendingImg3, name: 'Vtiger CRM', artist: 'Vtiger Vietnam', price: '$1670', cat: 'Phần mềm' },
    { id: 95, img: trendingImg1, name: 'VNPT iGate', artist: 'VNPT Group', price: '$1670', cat: 'Phần mềm' },
    { id: 96, img: trendingImg2, name: 'FPT ERP', artist: 'FPT Software', price: '$1670', cat: 'Phần mềm' },
    { id: 97, img: trendingImg3, name: 'VCCorp CMS', artist: 'VCCorp', price: '$1670', cat: 'Phần mềm' },
    { id: 98, img: trendingImg1, name: 'CMC Cloud', artist: 'CMC Corporation', price: '$1670', cat: 'Phần mềm' },
    { id: 99, img: trendingImg2, name: 'Viettel Cloud', artist: 'Viettel Group', price: '$1670', cat: 'Phần mềm' },
    { id: 100, img: trendingImg3, name: 'FPT Cloud', artist: 'FPT Telecom', price: '$1670', cat: 'Phần mềm' },

    // Bản ghi (20 items)
    { id: 101, img: trendingImg1, name: 'Live Concert 2023', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Bản ghi' },
    { id: 102, img: trendingImg2, name: 'The Masked Singer VN', artist: 'VTV', price: '$1670', cat: 'Bản ghi' },
    { id: 103, img: trendingImg3, name: 'Rap Việt Season 3', artist: 'Vie Channel', price: '$1670', cat: 'Bản ghi' },
    { id: 104, img: trendingImg1, name: 'Vietnam Idol', artist: 'HTV', price: '$1670', cat: 'Bản ghi' },
    { id: 105, img: trendingImg2, name: 'The Voice Vietnam', artist: 'VTV', price: '$1670', cat: 'Bản ghi' },
    { id: 106, img: trendingImg3, name: 'King Of Rap', artist: 'VieON', price: '$1670', cat: 'Bản ghi' },
    { id: 107, img: trendingImg1, name: 'Sing My Song', artist: 'VTV', price: '$1670', cat: 'Bản ghi' },
    { id: 108, img: trendingImg2, name: 'Giọng Hát Việt Nhí', artist: 'VTV', price: '$1670', cat: 'Bản ghi' },
    { id: 109, img: trendingImg3, name: 'Vietnam Got Talent', artist: 'VTV', price: '$1670', cat: 'Bản ghi' },
    { id: 110, img: trendingImg1, name: 'Bài Hát Việt', artist: 'VTV', price: '$1670', cat: 'Bản ghi' },
    { id: 111, img: trendingImg2, name: 'Vietnam Next Top Model', artist: 'VTV', price: '$1670', cat: 'Bản ghi' },
    { id: 112, img: trendingImg3, name: 'Asia\'s Got Talent VN', artist: 'AXN Asia', price: '$1670', cat: 'Bản ghi' },
    { id: 113, img: trendingImg1, name: 'Người Bí Ẩn', artist: 'HTV', price: '$1670', cat: 'Bản ghi' },
    { id: 114, img: trendingImg2, name: 'Ca Sĩ Thần Tượng', artist: 'VTV', price: '$1670', cat: 'Bản ghi' },
    { id: 115, img: trendingImg3, name: 'Gương Mặt Thân Quen', artist: 'VTV', price: '$1670', cat: 'Bản ghi' },
    { id: 116, img: trendingImg1, name: 'Đấu Trường Âm Nhạc', artist: 'HTV', price: '$1670', cat: 'Bản ghi' },
    { id: 117, img: trendingImg2, name: 'Vietnam Band Festival', artist: 'VTV', price: '$1670', cat: 'Bản ghi' },
    { id: 118, img: trendingImg3, name: 'Đường Lên Đỉnh Olympia', artist: 'VTV', price: '$1670', cat: 'Bản ghi' },
    { id: 119, img: trendingImg1, name: 'Ai Là Triệu Phú', artist: 'VTV', price: '$1670', cat: 'Bản ghi' },
    { id: 120, img: trendingImg2, name: 'Táo Quân', artist: 'VTV', price: '$1670', cat: 'Bản ghi' },

    // Bài hát (20 items)
    { id: 121, img: trendingImg3, name: 'See Tình', artist: 'Hoàng Thùy Linh', price: '$1670', cat: 'Bài hát' },
    { id: 122, img: trendingImg1, name: 'Kẻ Cắp Gặp Bà Già', artist: 'Hoàng Thùy Linh', price: '$1670', cat: 'Bài hát' },
    { id: 123, img: trendingImg2, name: 'Để Mị Nói Cho Mà Nghe', artist: 'Hoàng Thùy Linh', price: '$1670', cat: 'Bài hát' },
    { id: 124, img: trendingImg3, name: 'Bánh Mì Không', artist: 'Đạt G x DuUyên', price: '$1670', cat: 'Bài hát' },
    { id: 125, img: trendingImg1, name: 'Anh Tự Do Nhưng Cô Đơn', artist: 'RPT MCK', price: '$1670', cat: 'Bài hát' },
    { id: 126, img: trendingImg2, name: 'Sao Cũng Được', artist: 'RPT MCK', price: '$1670', cat: 'Bài hát' },
    { id: 127, img: trendingImg3, name: 'Bigcityboi', artist: 'Binz', price: '$1670', cat: 'Bài hát' },
    { id: 128, img: trendingImg1, name: 'Gene', artist: 'Binz', price: '$1670', cat: 'Bài hát' },
    { id: 129, img: trendingImg2, name: 'Đi Để Trở Về', artist: 'Soobin Hoàng Sơn', price: '$1670', cat: 'Bài hát' },
    { id: 130, img: trendingImg3, name: 'Phía Sau Một Cô Gái', artist: 'Soobin Hoàng Sơn', price: '$1670', cat: 'Bài hát' },
    { id: 131, img: trendingImg1, name: 'Anh Đã Quen Với Cô Đơn', artist: 'Soobin Hoàng Sơn', price: '$1670', cat: 'Bài hát' },
    { id: 132, img: trendingImg2, name: 'Lạ Lùng', artist: 'Vũ', price: '$1670', cat: 'Bài hát' },
    { id: 133, img: trendingImg3, name: 'Bước Qua Nhau', artist: 'Vũ', price: '$1670', cat: 'Bài hát' },
    { id: 134, img: trendingImg1, name: 'Đánh Đố', artist: 'Trịnh Thăng Bình', price: '$1670', cat: 'Bài hát' },
    { id: 135, img: trendingImg2, name: 'Người Âm Phủ', artist: 'Trịnh Thăng Bình', price: '$1670', cat: 'Bài hát' },
    { id: 136, img: trendingImg3, name: 'Có Chắc Yêu Là Đây', artist: 'Sơn Tùng M-TP', price: '$1670', cat: 'Bài hát' },
    { id: 137, img: trendingImg1, name: 'Yêu Là Tha Thu', artist: 'Only C', price: '$1670', cat: 'Bài hát' },
    { id: 138, img: trendingImg2, name: '3107', artist: 'Dương Hoàng Yến', price: '$1670', cat: 'Bài hát' },
    { id: 139, img: trendingImg3, name: 'Độ Tộc 2', artist: 'Masew x Masiu', price: '$1670', cat: 'Bài hát' },
    { id: 140, img: trendingImg1, name: 'Thuỷ Triều', artist: 'Quang Hùng MasterD', price: '$1670', cat: 'Bài hát' },
  ];
  
  // Pagination logic
  const allFiltered = artworks.filter(a => a.cat === activeCat);
  const totalPages = Math.ceil(allFiltered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const filtered = allFiltered.slice(startIndex, startIndex + itemsPerPage);

  // Reset page when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCat]);
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
            <form role="search" aria-label="Tìm kiếm bản quyền" onSubmit={(e) => e.preventDefault()} style={{ position: 'relative', margin: '80px auto 0', maxWidth: 760, display: 'flex', alignItems: 'center' }}>
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
                    <circle cx="11" cy="11" r="7" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
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
                {art.id === 4 && <div style={{ position: 'absolute', bottom: 12, right: 14, width: 12, height: 12, background: '#6ec6ff', borderRadius: '50%', boxShadow: '0 0 12px #6ec6ff' }} />}
                <img src={art.img} alt={art.name} className="license-card-img" />
                <div className="license-card-body">
                  <div className="license-card-title">{art.name}</div>
                  <div className="license-card-artist">{art.artist}</div>
                  <div className="license-card-price">{art.price}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 12, marginTop: 50 }}>
              <button 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                style={{
                  background: currentPage === 1 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: currentPage === 1 ? '#666' : '#fff',
                  fontSize: 16,
                  fontWeight: 600,
                  padding: '10px 20px',
                  borderRadius: 8,
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                ← Trước
              </button>
              
              <div style={{ display: 'flex', gap: 8 }}>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    style={{
                      background: page === currentPage 
                        ? 'linear-gradient(90deg,#2763ff 0%,#62baff 100%)' 
                        : 'rgba(255,255,255,0.08)',
                      border: page === currentPage ? 'none' : '1px solid rgba(255,255,255,0.15)',
                      color: '#fff',
                      fontSize: 15,
                      fontWeight: page === currentPage ? 700 : 500,
                      padding: '8px 14px',
                      borderRadius: 6,
                      cursor: 'pointer',
                      minWidth: 40,
                      boxShadow: page === currentPage ? '0 4px 12px -4px rgba(98,186,255,0.4)' : 'none',
                      transition: 'all 0.3s'
                    }}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button 
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
                style={{
                  background: currentPage === totalPages ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.15)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: currentPage === totalPages ? '#666' : '#fff',
                  fontSize: 16,
                  fontWeight: 600,
                  padding: '10px 20px',
                  borderRadius: 8,
                  cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                Sau →
              </button>
            </div>
          )}
        </div>
      </section>


    </div>

  );
}

export default ListDeatails;








