import React, { useState } from "react";
import { Carousel } from "./components/Carousel";
import { Navbar } from "./components/Navbar";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";

const App: React.FC = () => {
  const [language, setLanguage] = useState<"es" | "en">("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (es: string, en: string) => (language === "es" ? es : en);

  return (
    <div>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <div className="app-container">
        <Carousel />

        <div className="mainContainer">
          <section className="section-box">
            <h2 className="section-title">
              {t("¿Quiénes Somos?", "Who We Are?")}
            </h2>
            <p className="section-text">
              {t(
                "Somos una organización de ayuda social, que apoya a madres de escasos recursos a prevenir los tipos de cáncer más prevalentes y las que ya sufren la enfermedad salgan lo más pronto de ella.",
                "We are a social aid organization that helps underprivileged mothers prevent the most common types of cancer and supports those already affected to recover as soon as possible."
              )}
            </p>
          </section>

          <section className="section-box">
            <h2 className="section-title">
              {t("La prevención salva vidas", "Prevention Saves Lives")}
            </h2>
            <div className="prevention-content">
              <div className="prevention-text">
                <img
                  src="/prevention.png"
                  alt="Protection Icon"
                  className="prevention-icon"
                />
                <p className="prevention">
                  {t(
                    "La prevención es de vital importancia cuando se trata del cáncer. Mira este video para ver como fomentamos esta idea!",
                    "Prevention is vital when it comes to cancer. Watch this video to learn more about how Mamisincancer promotes this idea!"
                  )}
                </p>
              </div>
              <div className="prevention-video">
                <iframe
                  src="https://www.youtube.com/embed/3UUdLYAMQMw"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              </div>
            </div>
          </section>

          <section className="CancerContainer">
            <div className="CancerInfo">
              <h2 className="section-title">
                {t("Cancer Cervical", "Cervical Cancer")}
              </h2>
              <img
                src="/cervix.png"
                alt="Protection Icon"
                className="prevention-icon"
              />
              <p className="section-text">
                {t(
                  "El cáncer de cuello uterino es una de las principales causas de muerte por cáncer en mujeres peruanas. El tamizaje con Papanicolaou (PAP) presenta limitaciones como baja sensibilidad, cobertura y seguimiento. El Virus del Papiloma Humano (VPH), causa de este cáncer, puede detectarse con pruebas moleculares. Su implementación, junto con la auto-toma de muestras ofrece un enfoque prometedor para mejorar el acceso, diagnóstico y tratamiento oportuno.",
                  "Cervical cancer is one of the leading causes of cancer death among Peruvian women. Pap smear (PAP) screening has limitations such as low sensitivity, coverage, and follow-up. Human Papillomavirus (HPV), the cause of this cancer, can be detected with molecular tests. Implementing these, along with self-sampling, offers a promising approach to improving access, diagnosis, and timely treatment."
                )}
              </p>
            </div>
            <div className="CancerInfo">
              <h2 className="section-title">
                {t("Cancer de Mama", "Breast Cancer")}
              </h2>
              <img
                src="/breast.png"
                alt="Protection Icon"
                className="prevention-icon"
              />
              <p className="section-text">
                {t(
                  "El cáncer de mama en el Perú se ha convertido en la primera neoplasia más frecuente, que produce un gran impacto económico y pobre sobrevida por su diagnóstico tardío; resulta necesario establecer un Plan integral que implemente estrategias innovadoras que faciliten el acceso de las usuarias a un tamizaje por mamografía, un diagnóstico temprano y tratamiento oportuno de los casos positivos para reducir la morbi mortalidad por cáncer de mama.",
                  "Breast cancer in Peru has become the most common neoplasm, with a significant economic impact and poor survival due to late diagnosis. It is necessary to establish a comprehensive plan that implements innovative strategies to facilitate access to mammography screening, early diagnosis, and timely treatment of positive cases to reduce breast cancer morbidity and mortality."
                )}
              </p>
            </div>
          </section>

          <section className="section-box">
            <h2 className="section-title">
              {t("Concierto profondos", "Fundrasing Concert")}
            </h2>
            <div className="prevention-content">
              <div className="prevention-text">
                <p className="prevention">
                  {t(
                    "Concierto para promocionar y financiar el uso de pruebas preventivas del Cancer",
                    "Concert to raise awareness and finance the use of screening tests for Cancer prevention"
                  )}
                </p>
                <p className="section-text">
                  {t(
                    "El 14 de julio del 2019 logré organizar un concierto con compañeros del colegio, para recaudar fondos y llevar a mamis de escasos recursos a realizarse pruebas preventivas contra el cáncer",
                    "On July 14, 2019 I managed to organize a concert with classmates from school, to raise funds and take moms with limited resources to take preventive tests against cancer"
                  )}
                </p>
              </div>
              <div className="prevention-video">
                <iframe
                  src="https://www.youtube.com/embed/FEjbPzeP2Iw"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              </div>
            </div>
          </section>
          <section className="section-box">
            <h2 className="section-title">
              {t(
                "Expandiendo a todas las regiones del Peru",
                "Expanding our reach throughout Peru"
              )}
            </h2>
            <p className="section-text">
              {t(
                "En el Perú mas de tres millones de habitantes son Quechua hablantes nativos, siendo uno de los idiomas oficiales del país. Brindaremos información relevante sobre prevención del cáncer en el idioma Quechua. Aqui hay un video donde visitamos comunidades andinas para promover la prevencion y un audio con la traducción en Quechua.",
                "In Peru more than three million inhabitants are native Quechua speakers, being one of the official languages ​​of the country. We will provide relevant information on cancer prevention in the Quechua language. Here is a video where we raise awareness in low income communities in the andes and its corresponding translation in Quechua"
              )}
            </p>
            <div
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
              }}
            >
              <div className="prevention-video">
                <iframe
                  src="https://www.youtube.com/embed/UoZE4xEyXRY"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              </div>
            </div>
            <AudioPlayer src="/quechua.mpeg" />
          </section>
        </div>
      </div>
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Mamisincancer.{" "}
          {t(
            "Contactanos atravez de +51 999267461.",
            "Contact us through +51 999267461"
          )}
        </p>
      </footer>
    </div>
  );
};

export default App;
