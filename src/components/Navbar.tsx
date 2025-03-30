import React, { useState, useEffect, useRef } from "react";
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
      <a href="#" className="nav-link">
        {t("Voluntariado", "Volunteering")}
      </a>
      <a href="#" className="nav-link">
        {t("Eventos", "Events")}
      </a>
      <a href="#" className="nav-link">
        {t("Testimonios", "Testimonials")}
      </a>
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

          <a href="#" className="nav-link">
            {t("Inicio", "Home")}
          </a>
          <a href="#" className="nav-link">
            {t("Historia", "Our Story")}
          </a>
          <div className="dropdown" ref={dropdownRef}>
            <a href="#" className="nav-link" onClick={toggleDropdown}>
              {t("Contribuciones", "Contributions")} <FaChevronDown />
            </a>
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
        <a href="#" className="nav-link">
          {t("Inicio", "Home")}
        </a>
        <a href="#" className="nav-link">
          {t("Historia", "Our Story")}
        </a>
        <div className="dropdown">
          <a href="#" className="nav-link" onClick={toggleDropdown}>
            {t("Contribuciones", "Contributions")} <FaChevronDown />
          </a>
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
