import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import ServiceManagement from './components/ServiceManagement';
import AccountManagement from './components/AccountManagement';
import NewsManagement from './components/NewsManagement';
import Header from './components/Header';
import Login from './components/Login';
import './App.css';
import './components/Sidebar.css';

const userData = {
  admin1: { name: 'Admin 1', email: 'admin1@gmail.com', avatar: 'https://randomuser.me/api/portraits/men/11.jpg' },
  admin2: { name: 'Admin 2', email: 'admin2@gmail.com', avatar: 'https://randomuser.me/api/portraits/men/12.jpg' },
  admin3: { name: 'Admin 3', email: 'admin3@gmail.com', avatar: 'https://randomuser.me/api/portraits/men/13.jpg' },
};

function getPasswords() {
  // Lấy mật khẩu từ localStorage, nếu chưa có thì trả về mặc định
  const saved = JSON.parse(localStorage.getItem('cms-passwords') || '{}');
  return { admin1: saved.admin1 || '123456', admin2: saved.admin2 || '123456', admin3: saved.admin3 || '123456' };
}
function setPasswords(newPwds) {
  localStorage.setItem('cms-passwords', JSON.stringify(newPwds));
}

function App() {
  const [selected, setSelected] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [user, setUser] = useState(null);
  const [passwords, setPwds] = useState(getPasswords());

  const handleLogin = (username) => {
    setUser(userData[username] || null);
  };

  const handleChangePassword = (oldPass, newPass, cb) => {
    if (!user) return cb(false, 'Chưa đăng nhập');
    const username = Object.keys(userData).find(k => userData[k].name === user.name);
    if (!username) return cb(false, 'Không tìm thấy tài khoản');
    if (passwords[username] !== oldPass) return cb(false, 'Sai mật khẩu cũ');
    const newPasswords = { ...passwords, [username]: newPass };
    setPwds(newPasswords);
    setPasswords(newPasswords);
    cb(true);
  };

  if (!user) {
    return <Login onLogin={handleLogin} passwords={passwords} />;
  }

  let Content;
  if (selected === 'dashboard') Content = <Dashboard />;
  else if (selected === 'service') Content = <ServiceManagement />;
  else if (selected === 'news') Content = <NewsManagement />;
  else if (selected === 'account') Content = <AccountManagement username={Object.keys(userData).find(k => userData[k].name === user.name)} onChangePassword={handleChangePassword} />;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f6f8fa' }}>
      {sidebarOpen && <Sidebar onSelect={setSelected} selected={selected} />}
      <div style={{ flex: 1 }}>
        <Header onMenuClick={() => setSidebarOpen((v) => !v)} user={user} />
        <main style={{ padding: '32px 40px' }}>
          {Content}
        </main>
      </div>
    </div>
  );
}

export default App;
