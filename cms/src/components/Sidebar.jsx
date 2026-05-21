
import React from 'react';
import './Sidebar.css';
import heroBanner from '../assets/img/herobanner-1.png';

const Sidebar = ({ onSelect, selected }) => {
  const menu = [
    { key: 'dashboard', label: 'Tổng quan' },
    { key: 'service', label: 'Quản lý dịch vụ bản quyền' },
    { key: 'account', label: 'Quản lý tài khoản' },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar-title" style={{textAlign: 'center'}}>
        <img src={heroBanner} alt="Logo" style={{maxWidth: '180px', width: '100%', height: 'auto', margin: '0 auto', display: 'block'}} />
      </div>
      <ul className="sidebar-menu">
        {menu.map(item => (
          <li
            key={item.key}
            className={selected === item.key ? 'active' : ''}
            onClick={() => onSelect(item.key)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
