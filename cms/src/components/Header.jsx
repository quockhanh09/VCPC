import React from "react";
import "./Header.css";
import { FaSearch, FaCog, FaBell, FaEnvelope, FaBars } from "react-icons/fa";

const Header = ({ onMenuClick, user }) => {
  return (
    <header className="cms-header">
      <div className="cms-header__left">
        <FaBars className="cms-header__icon cms-header__menu" onClick={onMenuClick} />
        <FaSearch className="cms-header__icon" />
        <input className="cms-header__search" type="text" placeholder="Search" />
      </div>
      <div className="cms-header__right">
        <FaCog className="cms-header__icon" />
        <FaBell className="cms-header__icon" />
        <FaEnvelope className="cms-header__icon" />
        <div className="cms-header__user">
          <img className="cms-header__avatar" src={user?.avatar || "https://randomuser.me/api/portraits/men/32.jpg"} alt="avatar" />
          <div className="cms-header__userinfo">
            <div className="cms-header__name">{user?.name || "Thomas Fleming"}</div>
            <div className="cms-header__email">{user?.email || "info@gmail.com"}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
