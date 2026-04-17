
import vcpcLogo from "../assets/img/vcpc-header.png";
import React from "react";

export default function ChucNangNhiemVu() {
  return (
    <div style={{ background: "#fcf8f2", minHeight: "100vh", width: "100vw", padding: 0 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px 0 0 0", display: 'flex', flexDirection: 'row', alignItems: 'flex-start', gap: 40 }}>
        <div style={{ flex: 1, minWidth: 420 }}>
          <h1 style={{ fontFamily: 'SVN-Gilroy', fontWeight: 700, fontSize: 32, color: "#111", margin: 0, marginBottom: 24 }}>
            CHỨC NĂNG NHIỆM VỤ
          </h1>
          <p style={{ fontSize: 17, color: '#222', lineHeight: 1.7, marginBottom: 18 }}>
            Trung tâm Bảo vệ bản quyền Việt Nam là đơn vị sự nghiệp công lập trực thuộc Cục Bản quyền tác giả. Trung tâm có tư cách pháp nhân, con dấu riêng, được mở tài khoản tại Kho bạc nhà nước và Ngân hàng thương mại để hoạt động. Tên giao dịch quốc tế là Vietnam Copyright Protection Center (VCPC).
          </p>
          <p style={{ fontSize: 17, color: '#222', lineHeight: 1.7, marginBottom: 18 }}>
            Trung tâm thực hiện chức năng cung cấp dịch vụ công về: giám định, thông tin, truyền thông, chuyển giao, khai thác quyền tác giả, quyền liên quan; hỗ trợ quản lý nhà nước và thực thi về bản quyền và công nghiệp văn hóa; tư vấn, hỗ trợ bảo vệ quyền lợi cho các tổ chức, cá nhân.
          </p>

        
        </div>
        <div style={{ flex: 1, minWidth: 320, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={vcpcLogo} alt="VCPC Logo" style={{ width: 320, maxWidth: '100%', height: 'auto', display: 'block', margin: '0 auto' }} />
        </div>
      </div>
      <div style={{ marginTop: 40, textAlign: 'center' }}>
        <button style={{ border: '1px solid #bdbdbd', background: '#fff', color: '#233a7c', fontWeight: 600, fontSize: 14, borderRadius: 6, padding: '6px 18px', letterSpacing: 1, marginBottom: 18, cursor: 'default' }}>CÔNG BỐ</button>
        <h2 style={{ fontFamily: 'SVN-Gilroy', fontWeight: 900, fontSize: 28, color: '#233a7c', margin: 0, marginBottom: 18, marginTop: 12, textTransform: 'uppercase', lineHeight: 1.2 }}>
          CHỨC NĂNG, NHIỆM VỤ, QUYỀN HẠN VÀ CƠ CẤU TỔ CHỨC<br />CỦA TRUNG TÂM BẢO VỆ BẢN QUYỀN VIỆT NAM
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 18, marginBottom: 18, color: '#233a7c', fontSize: 15, fontFamily: 'SVN-Gilroy', opacity: 0.85 }}>
          <span><i className="fa fa-user" style={{ marginRight: 6 }}></i> VCPC EDITOR</span>
          <span><i className="fa fa-calendar" style={{ marginRight: 6 }}></i> 08-06-2025</span>
          <span><i className="fa fa-eye" style={{ marginRight: 6 }}></i> 20,546</span>
          <span><i className="fa fa-download" style={{ marginRight: 6 }}></i> TẢI VỀ FILE</span>
        </div>
        <ul style={{
          textAlign: 'left',
          maxWidth: 900,
          margin: '0 auto',
          color: '#6d6d6d',
          fontSize: 16,
          fontFamily: 'SVN-Gilroy',
          lineHeight: 1.7,
          paddingLeft: 32,
          marginBottom: 24,
        }}>
          <li>Căn cứ Luật Sở hữu trí tuệ ngày 29 tháng 11 năm 2005; Luật sửa đổi, bổ sung một số điều của Luật Sở hữu trí tuệ ngày 19 tháng 6 năm 2009; Luật sửa đổi, bổ sung một số điều của Luật Kinh doanh bảo hiểm, Luật Sở hữu trí tuệ ngày 14 tháng 6 năm 2019 và Luật sửa đổi, bổ sung một số điều của Luật Sở hữu trí tuệ ngày 16 tháng 6 năm 2022;</li>
          <li>Căn cứ Nghị định số 17/2023/NĐ-CP ngày 26 tháng 4 năm 2023 của Chính phủ quy định chi tiết một số điều và biện pháp thi hành Luật sở hữu trí tuệ về quyền tác giả, quyền liên quan;</li>
          <li>Căn cứ Nghị định số 43/2025/NĐ-CP ngày 28 tháng 02 năm 2025 của Chính phủ quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Bộ Văn hóa, Thể thao và Du lịch;</li>
          <li>Căn cứ Quyết định số 693/QĐ-BVHTTDL ngày 18 tháng 3 năm 2025 của Bộ trưởng Bộ Văn hóa,Thể thao và Du lịch, quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Cục Bản quyền tác giả;</li>
          <li>Theo đề nghị của Giám đốc Trung tâm Bảo vệ bản quyền Việt Nam và Chánh Văn phòng Cục.</li>
   </ul>
        <div style={{ maxWidth: 900, margin: '0 auto', marginBottom: 32, textAlign: 'left' }}>
          <div style={{
            textAlign: 'center',
            fontFamily: 'SVN-Gilroy',
            fontWeight: 700,
            fontSize: 24,
            color: '#6d6d6d',
            margin: 0,
            marginBottom: 18,
            letterSpacing: 1
          }}>QUYẾT ĐỊNH</div>
          <div style={{ fontWeight: 700, fontSize: 17, color: '#222', fontFamily: 'SVN-Gilroy', marginBottom: 10, marginTop: 8 }}>
            Điều 1. Vị trí và chức năng
          </div>
          <ol style={{ color: '#6d6d6d', fontSize: 16, fontFamily: 'SVN-Gilroy', lineHeight: 1.7, paddingLeft: 18, margin: 0, listStylePosition: 'inside' }}>
            <li style={{ marginBottom: 6 }}>Trung tâm Bảo vệ bản quyền Việt Nam là đơn vị sự nghiệp công lập trực thuộc Cục Bản quyền tác giả, thực hiện chức năng cung cấp dịch vụ công về hoạt động giám định, thông tin, truyền thông, chuyển giao, khai thác quyền tác giả, quyền liên quan; hỗ trợ hoạt động quản lý nhà nước và thực thi về quyền tác giả, quyền liên quan và công nghiệp văn hóa; tư vấn, hỗ trợ bảo vệ bản quyền cho các tổ chức, cá nhân.</li>
            <li style={{ marginBottom: 6 }}>Trung tâm có tên quốc tế là: Vietnam Copyright Protection Center (Viết tắt là VCPC).</li>
            <li>Trung tâm có tư cách pháp nhân, con dấu riêng và được mở tài khoản tại Kho bạc nhà nước và Ngân hàng thương mại.</li>
          </ol>
          <div style={{ fontWeight: 700, fontSize: 17, color: '#222', fontFamily: 'SVN-Gilroy', marginBottom: 10, marginTop: 8 }}>
            Điều 2. Nhiệm vụ, quyền hạn
          </div>
          <ol style={{ color: '#6d6d6d', fontSize: 16, fontFamily: 'SVN-Gilroy', lineHeight: 1.7, paddingLeft: 18, margin: 0, listStylePosition: 'inside' }}>
            <li>Xây dựng, trình Cục trưởng ban hành kế hoạch công tác dài hạn, ngắn hạn, hàng năm và tổ chức thực hiện sau khi được phê duyệt.</li>
            <li>Giúp Cục trưởng xây dựng các cơ chế, chính sách, dự án, đề án về giám định, thông tin, dữ liệu, chuyển đổi số, chuyển giao, khai thác, tư vấn, hỗ trợ bảo vệ quyền tác giả, quyền liên quan trong phạm vi chức năng, nhiệm vụ của Trung tâm.</li>
            <li>Chủ trì, tiếp nhận và thực hiện giám định quyền tác giả, quyền liên quan theo yêu cầu của các tổ chức, cá nhân; hỗ trợ các tổ chức và cá nhân về chuyên môn trong công tác giám định; thực hiện lưu trữ, bảo quản, quản lý và khai thác mẫu vật, chứng cứ, tài liệu, hồ sơ giám định về quyền tác giả, quyền liên quan.</li>
            <li>Tổ chức, phối hợp tổ chức các hoạt động, dịch vụ thông tin, truyền thông về quyền tác giả, quyền liên quan và công nghiệp văn hóa; phổ biến tác phẩm, đối tượng quyền liên quan đến với công chúng theo đề nghị của tác giả, chủ sở hữu quyền tác giả, quyền liên quan; thực hiện thu thập, lưu trữ, xử lý và bảo đảm an toàn, an ninh, bảo mật dữ liệu; thực hiện chức năng thông tin theo quy định tại Công ước Berne và các điều ước quốc tế mà Việt Nam là thành viên.</li>
            <li>Thực hiện các hoạt động, dịch vụ chuyển giao, khai thác bao gồm:
              <ol type="a" style={{ paddingLeft: 22, margin: 0, color: '#6d6d6d', fontSize: 16, fontFamily: 'SVN-Gilroy', lineHeight: 1.7, listStylePosition: 'inside' }}>
                <li>Tiếp nhận và xử lý hồ sơ đề nghị chấp thuận sử dụng quyền tác giả đối với tác phẩm văn học, nghệ thuật và khoa học, quyền liên quan đối với cuộc biểu diễn, bản ghi âm, ghi hình, chương trình phát sóng mà Nhà nước là đại diện chủ sở hữu hoặc Nhà nước là đại diện quản lý theo quy định của pháp luật;</li>
                <li>Tiếp nhận và xử lý hồ sơ đề nghị chấp thuận việc khai thác, sử dụng quyền dịch tác phẩm từ tiếng nước ngoài sang tiếng Việt và sao chép tác phẩm để giảng dạy, nghiên cứu không nhằm mục đích thương mại theo quy định tại Phụ lục Công ước Berne về bảo hộ tác phẩm văn học, nghệ thuật;</li>
                <li>Tiếp nhận và xử lý hồ sơ đề nghị chấp thuận cho tổ chức áp dụng ngoại lệ không xâm phạm quyền tác giả dành cho người khuyết tật;</li>
                <li>Hỗ trợ thực hiện quy trình, hoàn thiện thủ tục cho tổ chức, cá nhân nhận chuyển giao quyền tác giả, quyền liên quan theo quy định.</li>
              </ol>
            </li>
            <li>Xây dựng, quản lý và khai thác cơ sở dữ liệu, hệ thống thông tin về quyền tác giả, quyền liên quan và công nghiệp văn hóa:
              <ol type="a" style={{ paddingLeft: 22, margin: 0, color: '#6d6d6d', fontSize: 16, fontFamily: 'SVN-Gilroy', lineHeight: 1.7, listStylePosition: 'inside' }}>
                <li>Tổ chức xây dựng, lưu trữ, bảo quản, phát triển hệ thống cơ sở dữ liệu;</li>
                <li>Nghiên cứu và ứng dụng khoa học công nghệ, công nghệ thông tin trong quản lý, khai thác cơ sở dữ liệu quốc gia về quyền tác giả, quyền liên quan;</li>
                <li>Thực hiện các dịch vụ khai thác cơ sở dữ liệu theo quy định của pháp luật.</li>
              </ol>
            </li>
            <li>Cung cấp dịch vụ cấp bản sao/phó bản Giấy chứng nhận đăng ký quyền tác giả, Giấy chứng nhận đăng ký quyền liên quan; bản sao tác phẩm; bản sao bản định hình đối tượng quyền liên quan theo quy định của pháp luật.</li>
            <li>Tổ chức, phối hợp tổ chức các hoạt động truyền thông, hội nghị, hội thảo, tọa đàm, tuyên truyền phổ biến kiến thức pháp luật, đào tạo bồi dưỡng chuyên môn, nghiệp vụ về quyền tác giả, quyền liên quan và công nghiệp văn hóa theo quy định của pháp luật.</li>
            <li>Tổ chức, phối hợp tổ chức các hoạt động thúc đẩy sự phát triển các ngành công nghiệp văn hóa.</li>
            <li>Cung cấp dịch vụ tư vấn và hỗ trợ bảo vệ bản quyền:
              <ol type="a" style={{ paddingLeft: 22, margin: 0, color: '#6d6d6d', fontSize: 16, fontFamily: 'SVN-Gilroy', lineHeight: 1.7, listStylePosition: 'inside' }}>
                <li>Tổ chức hoạt động tư vấn, dịch vụ về quyền tác giả, quyền liên quan;</li>
                <li>Tổ chức, phối hợp tổ chức các hoạt động hỗ trợ bảo vệ quyền tác giả, quyền liên quan;</li>
                <li>Cung cấp các dịch vụ giám sát, phát hiện vi phạm bản quyền.</li>
              </ol>
            </li>
            <li>Tổ chức, phối hợp tổ chức biên soạn, dịch và xuất bản sách, tài liệu về pháp luật, sách nghiên cứu, sách tham khảo, sách tra cứu, hướng dẫn về quyền tác giả, quyền liên quan và công nghiệp văn hóa theo quy định của pháp luật.</li>
            <li>Hỗ trợ quản trị, vận hành, khai thác trang Thông tin điện tử của Cục Bản quyền tác giả.</li>
            <li>Nghiên cứu, đề xuất các dự án, đề án, chương trình liên danh, liên kết, xã hội hóa trong lĩnh vực bản quyền tác giả và công nghiệp văn hóa trình cấp có thẩm quyền phê duyệt và tổ chức triển khai thực hiện.</li>
            <li>Đề xuất khen thưởng các tổ chức, các nhân có thành tích trong hoạt động giám định, thông tin và chuyển giao về quyền tác giả, quyền liên quan.</li>
            <li>Quản lý viên chức, người lao động; thực hiện chế độ, chính sách đối với viên chức, người lao động thuộc phạm vi quản lý của Trung tâm theo quy định của pháp luật và phân cấp quản lý của Cục trưởng.</li>
            <li>Quản lý, sử dụng tài sản, tài chính được giao và các nguồn thu khác theo quy định của pháp luật.</li>
            <li>Thực hiện báo cáo định kỳ, đột xuất về lĩnh vực được giao theo quy định của Cục trưởng.</li>
            <li>Phối hợp với Văn phòng Cục và các phòng chuyên môn và các cơ quan, đơn vị liên quan trong việc thực hiện các nhiệm vụ được giao.</li>
            <li>Thực hiện các nhiệm vụ khác do Cục trưởng giao.</li>
          </ol>

          <div style={{ maxWidth: 900, margin: '0 auto', marginBottom: 32, textAlign: 'left' }}>
          <div style={{ fontWeight: 700, fontSize: 17, color: '#222', fontFamily: 'SVN-Gilroy', marginBottom: 10, marginTop: 8 }}>
            Điều 3. Cơ cấu tổ chức
          </div>
          <ol style={{ color: '#6d6d6d', fontSize: 16, fontFamily: 'SVN-Gilroy', lineHeight: 1.7, paddingLeft: 18, margin: 0, listStylePosition: 'inside' }}>
            <li>Lãnh đạo Trung tâm:<br />&nbsp;&nbsp;&nbsp;&nbsp;Giám đốc và các Phó Giám đốc.</li>
            <li>Các phòng chuyên môn, nghiệp vụ:<br />&nbsp;&nbsp;&nbsp;&nbsp;Trung tâm được thành lập các phòng chuyên môn, nghiệp vụ trực thuộc. Căn cứ chức năng, nhiệm vụ và yêu cầu thực tiễn, Giám đốc Trung tâm đề nghị Cục trưởng thành lập các phòng chuyên môn, nghiệp vụ theo quy định.</li>
            <li>Viên chức và người lao động hợp đồng theo quy định.<br />&nbsp;&nbsp;&nbsp;&nbsp;Giám đốc Trung tâm chịu trách nhiệm trước Cục trưởng và trước pháp luật về thực hiện nhiệm vụ, quyền hạn được giao; sắp xếp, bố trí viên chức và lao động hợp đồng theo vị trí việc làm; xây dựng và ban hành Quy chế tổ chức và hoạt động của Trung tâm.</li>
          </ol>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', marginBottom: 32, textAlign: 'left' }}>
          <div style={{ fontWeight: 700, fontSize: 17, color: '#222', fontFamily: 'SVN-Gilroy', marginBottom: 10, marginTop: 8 }}>
            Điều 4. Hiệu lực thi hành
          </div>
          <div style={{ color: '#6d6d6d', fontSize: 16, fontFamily: 'SVN-Gilroy', lineHeight: 1.7, marginBottom: 8 }}>
            Quyết định này có hiệu lực thi hành kể từ ngày ký và thay thế Quyết định 374/QĐ-BQTG ngày 30 tháng 10 năm 2023 của Cục trưởng Cục Bản quyền tác giả quy định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Trung tâm Giám định, Thông tin và Chuyển giao quyền tác giả, quyền liên quan
          </div>
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', marginBottom: 32, textAlign: 'left' }}>
          <div style={{ fontWeight: 700, fontSize: 17, color: '#222', fontFamily: 'SVN-Gilroy', marginBottom: 10, marginTop: 8 }}>
            Điều 5. Trách nhiệm thi hành
          </div>
          <div style={{ color: '#6d6d6d', fontSize: 16, fontFamily: 'SVN-Gilroy', lineHeight: 1.7 }}>
            Chánh Văn phòng Cục, Giám đốc Trung tâm Bảo vệ bản quyền Việt Nam, Trưởng các phòng thuộc Cục và các tổ chức, cá nhân có liên quan chịu trách nhiệm thi hành Quyết định này./.
          </div>
        </div>
        </div>

        
      </div>
    </div>
  );
}
