import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/news')
      .then(res => {
        // id là index trong mảng (tạm thời, có thể thay bằng id thực tế nếu có)
        setNews(res.data[id]);
      });
  }, [id]);

  if (!news) return <div style={{ padding: 40 }}>Đang tải...</div>;

  return (
    <div style={{ maxWidth: 900, margin: '40px auto', background: '#fff', borderRadius: 16, boxShadow: '0 2px 16px #e6eaf5', padding: 32 }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: 18, background: '#e3eefd', color: '#2852BB', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600 }}>← Quay lại</button>
      <h1 style={{ color: '#22336C', fontWeight: 700, fontSize: 32, marginBottom: 8 }}>{news.title_vi}</h1>
      <div style={{ color: '#888', fontSize: 15, marginBottom: 8 }}>{news.tag} | {news.date} | {news.author}</div>
      {news.image && <img src={news.image} alt="news" style={{ maxWidth: 400, borderRadius: 12, marginBottom: 18 }} />}
      <div style={{ margin: '18px 0' }}>
        {news.blocks?.map((block, idx) => (
          <div key={idx} style={{ marginBottom: 22 }}>
            {block.type === 'text' && <div style={{ fontSize: 18, color: '#222', marginBottom: 4 }}>{block.vi}</div>}
            {block.type === 'image' && block.url && <img src={block.url} alt="block-img" style={{ maxWidth: 500, borderRadius: 10, marginBottom: 4 }} />}
            {block.type === 'quote' && <blockquote style={{ borderLeft: '4px solid #2852BB', margin: 0, paddingLeft: 14, color: '#2852BB', fontStyle: 'italic', background: '#f3f6fa', borderRadius: 6, paddingTop: 6, paddingBottom: 6 }}>{block.vi}<br /><span style={{ color: '#888', fontSize: 14 }}>— {block.author}</span></blockquote>}
            {block.type === 'video' && block.url && <iframe width="500" height="280" src={block.url} title="video" style={{ borderRadius: 10, marginTop: 6 }} allowFullScreen />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsDetail;
