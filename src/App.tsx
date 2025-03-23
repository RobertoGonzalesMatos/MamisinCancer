import React from "react";
import { Carousel } from "./components/Carousel";
import { Navbar } from "./components/Navbar";
import "./App.css";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="app-container">
        <Carousel />

        <div className="mainContainer">
          {/* "Who We Are" Section */}
          <section className="section-box">
            <h2 className="section-title">¿Quiénes Somos?</h2>
            <p className="section-text">
              Somos una organización de ayuda social, que apoya a madres de
              escasos recursos a prevenir los tipos de cáncer más prevalentes y
              las que ya sufren la enfermedad salgan lo más pronto de ella.
            </p>
          </section>

          {/* "Prevention Saves Lives" Section */}
          <section className="section-box">
            <h2 className="section-title">La prevención salva vidas</h2>
            <div className="prevention-content">
              {/* Left Column */}
              <div className="prevention-text">
                <img
                  src="/prevention.png"
                  alt="Protection Icon"
                  className="prevention-icon"
                />
                <p className="prevention">
                  La prevención es de vital importancia cuando se trata del
                  cáncer.
                </p>
              </div>
              {/* Right Column (Video) */}
              <div className="prevention-video">
                <iframe
                  src="https://www.youtube.com/embed/3UUdLYAMQMw"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </section>
          <section className="CancerContainer">
            <div className="section-box">
              <h2 className="section-title">Cancer de Mama</h2>
              <p className="section-text">
                Somos una organización de ayuda social, que apoya a madres de
                escasos recursos a prevenir los tipos de cáncer más prevalentes
                y las que ya sufren la enfermedad salgan lo más pronto de ella.
              </p>
            </div>
            <div className="section-box">
              <h2 className="section-title">Cancer de Cuello uterino</h2>
              <p className="section-text">
                Somos una organización de ayuda social, que apoya a madres de
                escasos recursos a prevenir los tipos de cáncer más prevalentes
                y las que ya sufren la enfermedad salgan lo más pronto de ella.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
