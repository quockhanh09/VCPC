import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Login.css";


const Login = ({ onLogin, passwords }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwords[username] && passwords[username] === password) {
      onLogin(username);
    } else {
      setError("Sai tài khoản hoặc mật khẩu");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Đăng nhập CMS</h2>
        <input
          type="text"
          placeholder="Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <div className="login-error">{error}</div>}
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Login;
