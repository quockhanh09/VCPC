import React, { useState } from "react";
import "./ChangePassword.css";

const ChangePassword = ({ username, onChangePassword, onClose }) => {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!oldPass || !newPass || !confirm) {
      setError("Vui lòng nhập đầy đủ thông tin");
      setSuccess("");
      return;
    }
    if (newPass !== confirm) {
      setError("Mật khẩu mới không khớp");
      setSuccess("");
      return;
    }
    onChangePassword(oldPass, newPass, (ok, msg) => {
      if (ok) {
        setSuccess("Đổi mật khẩu thành công!");
        setError("");
        setOldPass(""); setNewPass(""); setConfirm("");
      } else {
        setError(msg || "Sai mật khẩu cũ");
        setSuccess("");
      }
    });
  };

  return (
    <div className="change-pass-modal">
      <div className="change-pass-box">
        <h3>Đổi mật khẩu</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Mật khẩu cũ"
            value={oldPass}
            onChange={e => setOldPass(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu mới"
            value={newPass}
            onChange={e => setNewPass(e.target.value)}
          />
          <input
            type="password"
            placeholder="Nhập lại mật khẩu mới"
            value={confirm}
            onChange={e => setConfirm(e.target.value)}
          />
          {error && <div className="change-pass-error">{error}</div>}
          {success && <div className="change-pass-success">{success}</div>}
          <div className="change-pass-actions">
            <button type="submit">Đổi mật khẩu</button>
            <button type="button" onClick={onClose}>Đóng</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
