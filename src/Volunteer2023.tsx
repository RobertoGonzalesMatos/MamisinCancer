import React from "react";
import "./Volunteer.css";
interface Props {
  t: (es: string, en: string) => string;
}

const Volunteer2023: React.FC<Props> = ({ t }) => {
  return (
    <section id="vol-2023" className="timeline-block">
      <h2 className="year-title">2023 AYUDA SOCIAL</h2>

      <div className="timeline-text-box">
        <p className="timeline-text">
          {t(
            "En el año 2023 una vez ya instalado en la universidad de Brown los tiempos son muy cortos para poder desarrollar actividades extracurriculares, porque la carga académica es muy intensa, sin embargo la organización de mamisincancer no puede detenerse para cumplir su principal misión que es la de difundir todo lo que este a nuestro alcance para prevenir esa penosa enfermedad que es el cáncer",
            "In the year 2023, once installed at Brown University, the times are very short to be able to develop extracurricular activities, because the academic load is very intense, however the mamisincancer organization cannot stop to fulfill its main mission, which is to spread everything within our reach to prevent this painful disease that is cancer"
          )}
        </p>
      </div>

      <div className="timeline-image-group">
        <h3 className="section-subtitle">
          {t("Publicidad ayuda social", "Advertising social aid")}
        </h3>
        <img
          src="/mamisincancer5.png"
          alt="Publicidad 2023"
          className="timeline-image"
        />
      </div>

      <div className="timeline-block">
        <h3 className="section-subtitle">
          {t("Ayuda a mami con cáncer", "Help mommy with cancer")}
        </h3>
        <p className="timeline-text">
          {t(
            "El finde semana de las familias es una festividad propia de la universidad de Brown, donde suelen venir los padres, hermanos y familiares cercanos de los estudiantes y se realizan actividades de confraternidad, por lo tanto es un evento con muchas personas, asi que era la ocasión propicia para poder cumplir la principal misión de la organización, la prevención, asi que mande a confeccionar unas bolsas con un lema relativo a la campaña DETECCIÓN TEMPRANA SALVA VIDAS y también publicitábamos nuestra página web donde encontrarán información relativa a la prevención del cáncer, y dábamos unos pequeños consejos mientras entregábamos las bolsas",
            "Family weekend is a holiday specific to Brown University, where the parents, siblings and close relatives of the students usually come and fraternity activities are carried out, therefore it is an event with many people, so it was the favorable occasion to be able to fulfill the main mission of the organization, mamisincancer5, so I had bags made with a slogan related to the EARLY DETECTION SAVES LIVES campaign and we also advertised our website where you will find information related to cancer mamisincancer5, and We gave some little advice while we delivered the bags"
          )}
        </p>
        <div className="timeline-gallery">
          <img
            src="/mamisincancer5.png"
            alt="Entrega bolsas 1"
            className="timeline-image"
          />
          <img
            src="/mamisincancer5.png"
            alt="Entrega bolsas 2"
            className="timeline-image"
          />
          <img
            src="/mamisincancer5.png"
            alt="Entrega bolsas 3"
            className="timeline-image"
          />
          <img
            src="/mamisincancer5.png"
            alt="Entrega bolsas 4"
            className="timeline-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Volunteer2023;
