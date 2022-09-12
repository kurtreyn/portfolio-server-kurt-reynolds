import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/sidebarStyle.css';

export default function SideBar({ isLoggedIn }) {
  return (
    <div className="sidebar-container">
      <div className="sidebar-content-wrapper">
        {/* <Link to="/algorithms" className="sidebar-text">
          Algorithms
        </Link> */}
        <Link to="/users/login" className="sidebar-text">
          Login
        </Link>
        {isLoggedIn ? (
          <Link to="/project_settings" className="sidebar-text">
            Project Settings
          </Link>
        ) : null}
      </div>
    </div>
  );
}
