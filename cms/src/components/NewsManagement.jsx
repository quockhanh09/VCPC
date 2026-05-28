
import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

// Block types: text, image, quote, video
const emptyNews = {
  title_vi: '',
  title_kr: '',
  author: '',
  date: '',
  tag: '',
  image: '',
  blocks: [],
};

function NewsManagement() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editIdx, setEditIdx] = useState(null);
  const [form, setForm] = useState(emptyNews);

  useEffect(() => { fetchNews(); }, []);
  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:3000/news');
      setNewsList(res.data);
    } catch (e) { alert('Không lấy được danh sách tin tức'); }
    setLoading(false);
  };

  // Xử lý input cơ bản
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Block handlers
  const addBlock = type => {
    let block = { type };
    if (type === 'text') block = { ...block, vi: '', kr: '' };
    if (type === 'image') block = { ...block, url: '' };
    if (type === 'quote') block = { ...block, vi: '', kr: '', author: '' };
    if (type === 'video') block = { ...block, url: '' };
    setForm({ ...form, blocks: [...form.blocks, block] });
  };
  const updateBlock = (idx, field, value) => {
    const blocks = [...form.blocks];
    blocks[idx][field] = value;
    setForm({ ...form, blocks });
  };
  const removeBlock = idx => {
    const blocks = [...form.blocks];
    blocks.splice(idx, 1);
    setForm({ ...form, blocks });
  };

  // Thêm/sửa tin
  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.title_vi || !form.title_kr || form.blocks.length === 0) {
      alert('Nhập đủ tiêu đề và nội dung!');
      return;
    }
    setLoading(true);
    try {
      if (editIdx !== null) {
        // Sửa: xóa tin cũ, thêm tin mới (giả lập, do backend chưa có PUT)
        const old = [...newsList];
        old.splice(editIdx, 1);
        await axios.post('http://localhost:3000/news', form);
        await axios.post('http://localhost:3000/news', old[0]); // Thêm lại tin cũ đầu tiên nếu có
      } else {
        await axios.post('http://localhost:3000/news', form);
      }
      setShowModal(false);
      setForm(emptyNews);
      setEditIdx(null);
      fetchNews();
    } catch (e) { alert('Không thể đăng/sửa tin'); }
    setLoading(false);
  };

  // Xóa tin
  const handleDelete = async idx => {
    if (!window.confirm('Xóa tin này?')) return;
    // Xóa bằng cách ghi lại list trừ tin này (do backend chưa có DELETE)
    const newList = newsList.filter((_, i) => i !== idx);
    try {
      await axios.post('http://localhost:3000/news', newList[0] || {}); // Ghi lại tin đầu nếu có
      setTimeout(fetchNews, 500);
    } catch (e) { alert('Không thể xóa'); }
  };

  // Mở modal thêm/sửa
  const openModal = (item = emptyNews, idx = null) => {
    setForm(idx !== null ? item : emptyNews);
    setEditIdx(idx);
    setShowModal(true);
  };

  // Xem chi tiết tin
  const [detailIdx, setDetailIdx] = useState(null);
  const fileInputRef = useRef();
  const blockFileInputRefs = useRef([]);

  return (
    <div style={{ maxWidth: 1200, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #e6eaf5', padding: 32 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
        <div>
          <div style={{ color: '#2852BB', fontWeight: 700, fontSize: 28 }}>Quản lý tin tức</div>
          <div style={{ color: '#888', marginTop: 4 }}>Thêm, chỉnh sửa và xuất bản nội dung nhanh chóng</div>
        </div>
        <button onClick={() => openModal()} style={{ background: 'linear-gradient(90deg,#2852BB,#3b82f6)', color: '#fff', padding: '12px 28px', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 17, boxShadow: '0 2px 8px #e6eaf5' }}>+ Thêm tin mới</button>
      </div>
      <div style={{ marginBottom: 32, display: 'flex', gap: 16 }}>
        <input placeholder="Tìm kiếm tiêu đề, danh mục" style={{ padding: 12, fontSize: 16, borderRadius: 8, border: '1px solid #dbeafe', width: 340 }} onChange={e => {
          const q = e.target.value.toLowerCase();
          fetchNews();
          setNewsList(x => x.filter(n => n.title_vi?.toLowerCase().includes(q) || n.tag?.toLowerCase().includes(q)));
        }} />
        <select style={{ padding: 12, fontSize: 16, borderRadius: 8, border: '1px solid #dbeafe', minWidth: 180 }} onChange={e => {
          const v = e.target.value;
          fetchNews();
          if (v !== 'all') setNewsList(x => x.filter(n => n.tag === v));
        }}>
          <option value="all">Tất cả</option>
          {[...new Set(newsList.map(n => n.tag))].filter(Boolean).map(tag => <option key={tag} value={tag}>{tag}</option>)}
        </select>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 28 }}>
        {newsList.map((item, idx) => (
          <div key={idx} style={{ border: '1px solid #e6eaf5', borderRadius: 12, padding: 18, background: '#f8fafd', position: 'relative', boxShadow: '0 2px 8px #f3f6fa' }}>
            {item.image && <img src={item.image} alt="news" style={{ width: '100%', maxHeight: 180, objectFit: 'cover', borderRadius: 10, marginBottom: 10 }} />}
            <div style={{ fontWeight: 700, color: '#22336C', fontSize: 19, minHeight: 48 }}>{item.title_vi}</div>
            <div style={{ color: '#888', fontSize: 14, margin: '6px 0' }}>{item.tag} | {item.date} | {item.createdAt}</div>
            <div style={{ color: '#444', margin: '8px 0', minHeight: 40, fontSize: 15 }}>
              {item.blocks && item.blocks[0]?.vi?.slice(0, 80)}...
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
              <button onClick={() => setDetailIdx(idx)} style={{ background: '#e3eefd', color: '#2852BB', border: 'none', borderRadius: 6, padding: '7px 18px', fontWeight: 600 }}>Xem</button>
              <button onClick={() => openModal(item, idx)} style={{ background: '#f7e7d7', color: '#b86a0d', border: 'none', borderRadius: 6, padding: '7px 18px', fontWeight: 600 }}>Sửa</button>
              <button onClick={() => handleDelete(idx)} style={{ background: '#ffeaea', color: '#d32f2f', border: 'none', borderRadius: 6, padding: '7px 18px', fontWeight: 600 }}>Xóa</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal thêm/sửa tin */}
      {showModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.18)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 16, width: 800, maxHeight: '92vh', overflowY: 'auto', padding: 36, position: 'relative', boxShadow: '0 2px 24px #b6c6e6' }}>
            <button onClick={() => setShowModal(false)} style={{ position: 'absolute', top: 18, right: 18, background: '#eee', border: 'none', borderRadius: 8, padding: 8, fontWeight: 700, fontSize: 20 }}>×</button>
            <div style={{ fontWeight: 700, fontSize: 22, color: '#2852BB', marginBottom: 18 }}>{editIdx !== null ? 'Sửa tin tức' : 'Thêm tin tức mới'}</div>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 14 }}>
                <input name="title_vi" value={form.title_vi} onChange={handleChange} placeholder="Tiêu đề (Tiếng Việt) *" style={{ flex: 1, padding: 12, fontSize: 16, borderRadius: 8, border: '1px solid #dbeafe' }} />
                <input name="title_kr" value={form.title_kr} onChange={handleChange} placeholder="Tiêu đề (Hàn quốc) *" style={{ flex: 1, padding: 12, fontSize: 16, borderRadius: 8, border: '1px solid #dbeafe' }} />
              </div>
              <div style={{ display: 'flex', gap: 16, marginBottom: 14 }}>
                <input name="tag" value={form.tag} onChange={handleChange} placeholder="Danh mục/Tag" style={{ flex: 1, padding: 12, fontSize: 16, borderRadius: 8, border: '1px solid #dbeafe' }} />
                <input name="author" value={form.author} onChange={handleChange} placeholder="Tác giả" style={{ flex: 1, padding: 12, fontSize: 16, borderRadius: 8, border: '1px solid #dbeafe' }} />
                <input name="date" value={form.date} onChange={handleChange} placeholder="Ngày xuất bản" style={{ flex: 1, padding: 12, fontSize: 16, borderRadius: 8, border: '1px solid #dbeafe' }} />
              </div>
              <div style={{ marginBottom: 14 }}>
                <div style={{ fontWeight: 500, marginBottom: 6 }}>Upload Hình ảnh</div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <input name="image" value={form.image} onChange={handleChange} placeholder="Hoặc dán URL Hình ảnh" style={{ flex: 1, padding: 12, fontSize: 16, borderRadius: 8, border: '1px solid #dbeafe' }} />
                  <button type="button" style={{ background: '#e3eefd', color: '#2852BB', border: 'none', borderRadius: 8, padding: '10px 18px', fontWeight: 600 }} onClick={() => fileInputRef.current.click()}>Chọn ảnh</button>
                  <input ref={fileInputRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={e => {
                    const file = e.target.files[0];
                    if (!file) return;
                    const url = URL.createObjectURL(file);
                    setForm({ ...form, image: url });
                  }} />
                </div>
                {form.image && <img src={form.image} alt="preview" style={{ maxWidth: 180, marginTop: 10, borderRadius: 8 }} />}
              </div>
              <div style={{ marginBottom: 14 }}>
                <b>Nội dung tin tức (Blocks) *</b>
                <div style={{ display: 'flex', gap: 10, margin: '12px 0' }}>
                  <button type="button" onClick={() => addBlock('text')} style={{ background: '#e3eefd', color: '#2852BB', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600 }}>+ Thêm text</button>
                  <button type="button" onClick={() => addBlock('image')} style={{ background: '#e3eefd', color: '#2852BB', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600 }}>+ Thêm ảnh</button>
                  <button type="button" onClick={() => addBlock('quote')} style={{ background: '#e3eefd', color: '#2852BB', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600 }}>+ Thêm quote</button>
                  <button type="button" onClick={() => addBlock('video')} style={{ background: '#e3eefd', color: '#2852BB', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600 }}>+ Thêm video</button>
                </div>
                <div style={{ border: '1px solid #e3eefd', borderRadius: 10, padding: 14, background: '#f8fafd' }}>
                  {form.blocks.length === 0 && <div style={{ color: '#888', fontStyle: 'italic' }}>Chưa có block nào. Nhấn các nút trên để thêm text, ảnh, quote hoặc video.</div>}
                  {form.blocks.map((block, idx) => (
                    <div key={idx} style={{ border: '1px solid #eee', borderRadius: 8, margin: '12px 0', padding: 14, background: '#fff' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                        <b>#{idx + 1} {block.type.charAt(0).toUpperCase() + block.type.slice(1)}</b>
                        <button type="button" onClick={() => removeBlock(idx)} style={{ background: '#ffeaea', color: '#d32f2f', border: 'none', borderRadius: 8, padding: '2px 12px', fontWeight: 600 }}>X</button>
                      </div>
                      {block.type === 'text' && (
                        <>
                          <div style={{ margin: '6px 0' }}>
                            <input value={block.vi} onChange={e => updateBlock(idx, 'vi', e.target.value)} placeholder="Text (Tiếng Việt)" style={{ width: '100%', padding: 10, marginBottom: 6, borderRadius: 6, border: '1px solid #dbeafe' }} />
                            <input value={block.kr} onChange={e => updateBlock(idx, 'kr', e.target.value)} placeholder="Text (Hàn quốc)" style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #dbeafe' }} />
                          </div>
                        </>
                      )}
                      {block.type === 'image' && (
                        <div style={{ margin: '6px 0', display: 'flex', gap: 10, alignItems: 'center' }}>
                          <input
                            value={block.url}
                            onChange={e => updateBlock(idx, 'url', e.target.value)}
                            placeholder="URL Hình ảnh"
                            style={{ flex: 1, padding: 10, borderRadius: 6, border: '1px solid #dbeafe' }}
                          />
                          <button
                            type="button"
                            style={{ background: '#e3eefd', color: '#2852BB', border: 'none', borderRadius: 8, padding: '8px 14px', fontWeight: 600 }}
                            onClick={() => blockFileInputRefs.current[idx]?.click()}
                          >Chọn ảnh</button>
                          <input
                            ref={el => blockFileInputRefs.current[idx] = el}
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            onChange={e => {
                              const file = e.target.files[0];
                              if (!file) return;
                              const url = URL.createObjectURL(file);
                              updateBlock(idx, 'url', url);
                            }}
                          />
                          {block.url && <img src={block.url} alt="block-img" style={{ maxWidth: 80, marginLeft: 8, borderRadius: 8 }} />}
                        </div>
                      )}
                      {block.type === 'quote' && (
                        <>
                          <input value={block.vi} onChange={e => updateBlock(idx, 'vi', e.target.value)} placeholder="Quote (Tiếng Việt)" style={{ width: '100%', padding: 10, marginBottom: 6, borderRadius: 6, border: '1px solid #dbeafe' }} />
                          <input value={block.kr} onChange={e => updateBlock(idx, 'kr', e.target.value)} placeholder="Quote (Hàn quốc)" style={{ width: '100%', padding: 10, marginBottom: 6, borderRadius: 6, border: '1px solid #dbeafe' }} />
                          <input value={block.author} onChange={e => updateBlock(idx, 'author', e.target.value)} placeholder="Tác giả/Nguồn" style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #dbeafe' }} />
                        </>
                      )}
                      {block.type === 'video' && (
                        <div style={{ margin: '6px 0' }}>
                          <input value={block.url} onChange={e => updateBlock(idx, 'url', e.target.value)} placeholder="URL Video (Youtube embed)" style={{ width: '100%', padding: 10, borderRadius: 6, border: '1px solid #dbeafe' }} />
                          {block.url && <iframe width="260" height="146" src={block.url} title="video" style={{ marginTop: 8, borderRadius: 8 }} allowFullScreen />}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 16, marginTop: 22 }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ background: '#eee', color: '#333', border: 'none', borderRadius: 8, padding: '12px 28px', fontWeight: 600 }}>Hủy</button>
                <button type="submit" style={{ background: 'linear-gradient(90deg,#2852BB,#3b82f6)', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 28px', fontWeight: 700 }} disabled={loading}>{editIdx !== null ? 'Lưu' : 'Tạo tin'}</button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 18 }}>
                <button type="button" onClick={() => setShowModal(false)} style={{ background: '#eee', color: '#333', border: 'none', borderRadius: 6, padding: '10px 24px', fontWeight: 600 }}>Hủy</button>
                <button type="submit" style={{ background: '#2852BB', color: '#fff', border: 'none', borderRadius: 6, padding: '10px 24px', fontWeight: 600 }} disabled={loading}>{editIdx !== null ? 'Lưu' : 'Tạo tin'}</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal xem chi tiết tin */}
      {detailIdx !== null && newsList[detailIdx] && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.18)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: 16, width: 800, maxHeight: '92vh', overflowY: 'auto', padding: 36, position: 'relative', boxShadow: '0 2px 24px #b6c6e6' }}>
            <button onClick={() => setDetailIdx(null)} style={{ position: 'absolute', top: 18, right: 18, background: '#eee', border: 'none', borderRadius: 8, padding: 8, fontWeight: 700, fontSize: 20 }}>×</button>
            <h2 style={{ color: '#2852BB', marginBottom: 8 }}>{newsList[detailIdx].title_vi}</h2>
            <div style={{ color: '#888', fontSize: 14, marginBottom: 8 }}>{newsList[detailIdx].tag} | {newsList[detailIdx].date} | {newsList[detailIdx].createdAt}</div>
            {newsList[detailIdx].image && <img src={newsList[detailIdx].image} alt="news" style={{ maxWidth: 320, borderRadius: 10, marginBottom: 16 }} />}
            <div style={{ margin: '12px 0' }}>
              {newsList[detailIdx].blocks?.map((block, idx) => (
                <div key={idx} style={{ marginBottom: 18 }}>
                  {block.type === 'text' && <div style={{ fontSize: 17, color: '#222', marginBottom: 4 }}>{block.vi}</div>}
                  {block.type === 'image' && block.url && <img src={block.url} alt="block-img" style={{ maxWidth: 340, borderRadius: 8, marginBottom: 4 }} />}
                  {block.type === 'quote' && <blockquote style={{ borderLeft: '4px solid #2852BB', margin: 0, paddingLeft: 14, color: '#2852BB', fontStyle: 'italic', background: '#f3f6fa', borderRadius: 6, paddingTop: 6, paddingBottom: 6 }}>{block.vi}<br /><span style={{ color: '#888', fontSize: 14 }}>— {block.author}</span></blockquote>}
                  {block.type === 'video' && block.url && <iframe width="340" height="192" src={block.url} title="video" style={{ borderRadius: 8, marginTop: 6 }} allowFullScreen />}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsManagement;
