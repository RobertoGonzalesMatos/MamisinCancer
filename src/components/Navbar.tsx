import React, { useState } from "react";
import "../styles/Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa"; // ✅ Import icons for menu

export const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img
            src={`/mamisincancer.png`}
            alt="MamiSinCancer Logo"
            className="mamisincancer"
          />
          <h1 className="navbar-title">MamiSinCancer</h1>
        </div>

        {/* Desktop Navbar */}
        <div className="navbar-links">
          <label className="navbar-toggle">
            <span>English</span>
            <div className="toggle-switch">
              <input type="checkbox" className="toggle-checkbox" />
              <div className="toggle-slider"></div>
            </div>
          </label>

          <a href="#">Inicio</a>
          <a href="#">Historia</a>
          <a href="#">Contributions</a>
          <button className="navbar-donate">Donate</button>
        </div>

        {/* Mobile Menu Button */}
        <button className="menu-button" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </nav>

      {/* Sidebar Menu */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <button className="close-button" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <a href="#">Inicio</a>
        <a href="#">Historia</a>
        <a href="#">Contributions</a>
        <button className="navbar-donate">Donate</button>
      </div>

      {/* Overlay when sidebar is open */}
      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};
