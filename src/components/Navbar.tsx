import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

interface NavbarProps {
  language: "es" | "en";
  toggleLanguage: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ language, toggleLanguage }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const t = (es: string, en: string) => (language === "es" ? es : en);

  const renderDropdownLinks = (isSidebar = false) => (
    <div
      className={`dropdown-content${
        isSidebar ? " sidebar-dropdown-content" : ""
      }`}
    >
      <Link to="/voluntariado" className="nav-link" onClick={toggleSidebar}>
        {t("Voluntariado", "Volunteering")}
      </Link>
      <Link to="/reciente" className="nav-link" onClick={toggleSidebar}>
        {t("Reciente", "Recent")}
      </Link>
    </div>
  );

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

        <div className="navbar-links">
          <label className="navbar-toggle">
            <span>{language === "es" ? "Inglés" : "English"}</span>
            <div className="toggle-switch">
              <input
                type="checkbox"
                className="toggle-checkbox"
                checked={language === "en"}
                onChange={toggleLanguage}
              />
              <div className="toggle-slider"></div>
            </div>
          </label>

          <Link to="/" className="nav-link">
            {t("Inicio", "Home")}
          </Link>
          <Link to="/historia" className="nav-link">
            {t("Historia", "Our Story")}
          </Link>
          <div className="dropdown" ref={dropdownRef}>
            <span className="nav-link" onClick={toggleDropdown}>
              {t("Contribuciones", "Contributions")} <FaChevronDown />
            </span>
            {!sidebarOpen && dropdownOpen && renderDropdownLinks()}
          </div>
          <button className="navbar-donate">{t("Donar", "Donate")}</button>
        </div>

        <div className="menu-button" onClick={toggleSidebar}>
          <FaBars />
        </div>
      </nav>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="close-button" onClick={toggleSidebar}>
          <FaTimes />
        </div>
        <Link to="/" className="nav-link" onClick={toggleSidebar}>
          {t("Inicio", "Home")}
        </Link>
        <Link to="/historia" className="nav-link" onClick={toggleSidebar}>
          {t("Historia", "Our Story")}
        </Link>
        <div className="dropdown">
          <span className="nav-link" onClick={toggleDropdown}>
            {t("Contribuciones", "Contributions")} <FaChevronDown />
          </span>
          {sidebarOpen && dropdownOpen && renderDropdownLinks(true)}
        </div>
        <label className="english-hidden-toggle">
          <span>{language === "es" ? "Inglés" : "English"}</span>
          <div className="toggle-switch">
            <input
              type="checkbox"
              className="toggle-checkbox"
              checked={language === "en"}
              onChange={toggleLanguage}
            />
            <div className="toggle-slider"></div>
          </div>
        </label>
        <button className="navbar-donate">{t("Donar", "Donate")}</button>
      </div>

      {sidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};
