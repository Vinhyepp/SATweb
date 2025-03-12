import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const loggedInUser = localStorage.getItem('loggedInUser');

  return (
    <nav>
      <ul>
        <li><Link to="/">Trang Chủ</Link></li>
        <li><Link to="/exercises">Bài Tập</Link></li>
        {loggedInUser ? (
          <>
            <li><Link to="/account">Tài Khoản</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/register">Đăng Ký</Link></li>
            <li><Link to="/login">Đăng Nhập</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
