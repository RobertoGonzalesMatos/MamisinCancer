import React from "react";
import { Navbar } from "./components/Navbar";
import Volunteer2024 from "./Volunteer2024";
import "./Volunteer.css";

const Recent: React.FC<{
  language: "es" | "en";
  toggleLanguage: () => void;
}> = ({ language, toggleLanguage }) => {
  const t = (es: string, en: string) => (language === "es" ? es : en);

  return (
    <div>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <div className="volunteer-layout">
        <div className="volunteer-content">
          <section id="vol-2024">
            <Volunteer2024 t={t} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Recent;
