import React, { useState } from 'react';
import ChangePassword from './ChangePassword';

const AccountManagement = ({ username, onChangePassword }) => {
  const [showChange, setShowChange] = useState(false);
  return (
    <div>
      <h2>Quản lý tài khoản</h2>
      <p>Quản lý tài khoản người dùng tại đây.</p>
      <button onClick={() => setShowChange(true)} style={{marginTop: 20, padding: '0.6rem 1.2rem', fontWeight: 600}}>Đổi mật khẩu</button>
      {showChange && (
        <ChangePassword
          username={username}
          onChangePassword={onChangePassword}
          onClose={() => setShowChange(false)}
        />
      )}
    </div>
  );
};

export default AccountManagement;
