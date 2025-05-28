import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // Página principal (Inicio)
import History from "./History"; // Página Historia
import Recent from "./Recent";
import Volunteer from "./Volunteer"; // Página Voluntariado tipo línea del tiempo
import Volunteer2024 from "./Volunteer2024";

const AppWrapper: React.FC = () => {
  const [language, setLanguage] = useState<"es" | "en">("es");
  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  const t = (es: string, en: string) => (language === "es" ? es : en);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<App language={language} toggleLanguage={toggleLanguage} />}
        />
        <Route
          path="/historia"
          element={
            <History language={language} toggleLanguage={toggleLanguage} />
          }
        />
        <Route
          path="/voluntariado"
          element={
            <Volunteer language={language} toggleLanguage={toggleLanguage} />
          }
        />
        <Route
          path="/reciente"
          element={
            <Recent language={language} toggleLanguage={toggleLanguage} />
          }
        />
      </Routes>
    </Router>
  );
};

export default AppWrapper;
