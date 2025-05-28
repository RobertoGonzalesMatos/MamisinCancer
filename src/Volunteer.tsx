import React from "react";
import { Navbar } from "./components/Navbar";
import "./Volunteer.css";
import Volunteer2019 from "./Volunteer2019";
import Volunteer2020 from "./Volunteer2020";
import Volunteer2021 from "./Volunteer2021";
import Volunteer2022 from "./Volunteer2022";
import Volunteer2023 from "./Volunteer2023";
import Volunteer2024 from "./Volunteer2024";

const Volunteer: React.FC<{
  language: "es" | "en";
  toggleLanguage: () => void;
}> = ({ language, toggleLanguage }) => {
  const t = (es: string, en: string) => (language === "es" ? es : en);

  return (
    <div style={{ overflow: "visible" }}>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <div className="volunteer-layout">
        <aside className="volunteer-sidebar">
          <ul>
            <li>
              <a href="#vol-2019">{t("2019", "2019")}</a>
            </li>
            <li>
              <a href="#vol-2020">2020</a>
            </li>
            <li>
              <a href="#vol-2021">2021</a>
            </li>
            <li>
              <a href="#vol-2022">2022</a>
            </li>
            <li>
              <a href="#vol-2023">2023</a>
            </li>
            <li>
              <a href="#vol-2024">2024</a>
            </li>
            {/* Add more years */}
          </ul>
        </aside>

        <div className="volunteer-content">
          <section id="vol-2019">
            <Volunteer2019 t={t} />
          </section>
          <section id="vol-2020">
            <Volunteer2020 t={t} />
          </section>
          <section id="vol-2021">
            <Volunteer2021 t={t} />
          </section>
          <section id="vol-2022">
            <Volunteer2022 t={t} />
          </section>
          <section id="vol-2023">
            <Volunteer2023 t={t} />
          </section>
          <section id="vol-2024">
            <Volunteer2024 t={t} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
