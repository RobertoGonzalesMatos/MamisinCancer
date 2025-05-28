import React from "react";
import "./Volunteer.css";

interface Year2024Props {
  t: (es: string, en: string) => string;
}

const Volunteer2024: React.FC<Year2024Props> = ({ t }) => {
  return (
    <section id="vol-2024">
      <h2 className="year-title">2024 AYUDA SOCIAL</h2>

      <div className="timeline-block">
        <div className="dual-text">
          <p className="timeline-text">
            {t(
              "Brown University se ha convertido en mi hogar estos últimos años, realmente siento que he crecido enormemente en esta etapa de mi vida tanto en el ámbito profesional como personal, parece que tan rápido llegaron mis 20 años pero estoy orgulloso de lo que voy logrando, MAMISINCANCER sigue siendo un proyecto que me acompaña y al que no pienso abandonar, hoy desde mi posición de miembro del club AVGE donde tocamos música de videojuegos tomo la iniciativa de poder organizar un concierto para que lo recaudado se entregado esta vez a la Sociedad Americana del Cáncer, el concierto fue un éxito pudimos recaudar más de 1200 dólares para ayudar a mamis que necesitan mucha ayuda por las circunstancias en que se encuentran, me siento contento por lo logrado pero seguiré sumando esfuerzos para obtener tiempo dentro de esta etapa de mi vida tan agitada últimamente para ayudar a Mamis de mi querido Perú, se que hay muchas mamis que luchan día a día por sacar a sus hijos adelante y está cruel enfermedad las hace enfrentar un futuro incierto, son guerreras luchadoras, pero las circunstancias muchas veces les pone trabas, así que el 2025 nuestro esfuerzo será definitivamente para ellas",
              "Brown University has become my home these last few years, I really feel like I have grown enormously in this stage of my life both professionally and personally, it seems like my 20s came so fast but I am proud of what I am achieving, MAMISINCANCER continues to be a project that accompanies me and that I do not plan to abandon, today from my position as a member of the AVGE club where we play video game music, I take the initiative to organize a concert so that the proceeds are given this time to the American Cancer Society, the concert was a success we were able to raise more than 1200 dollars to help mothers who need a lot of help due to the circumstances they are in, I feel happy for what has been achieved but I will continue joining efforts to find time within this stage of my life so hectic lately to help Mothers of my beloved Peru, I know that there are many mothers who fight day by day to raise their children and this cruel disease forces them to face an uncertain future, they are warriors fighters, but circumstances often put obstacles in their way, so in 2025 our effort will definitely be for them"
            )}
          </p>
          <img
            src="/mamisincancer5.png"
            alt="Concierto AVGE 2024"
            className="timeline-image"
          />
        </div>
      </div>

      <div className="timeline-block images-grid">
        <img
          src="/mamisincancer5.png"
          alt="Evento AVGE - Imagen 1"
          className="timeline-image"
        />
        <img
          src="/mamisincancer5.png"
          alt="Evento AVGE - Imagen 2"
          className="timeline-image"
        />
        <img
          src="/mamisincancer5.png"
          alt="Evento AVGE - Imagen 3"
          className="timeline-image"
        />
      </div>

      <div className="timeline-block">
        <img
          src="/mamisincancer5.png"
          alt="Post de Instagram del evento AVGE"
          className="timeline-image"
        />
      </div>
    </section>
  );
};

export default Volunteer2024;
