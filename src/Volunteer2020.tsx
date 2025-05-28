import React from "react";

interface Props {
  t: (es: string, en: string) => string;
}

const Volunteer2020: React.FC<Props> = ({ t }) => {
  return (
    <section id="vol-2020">
      <h2>2020</h2>

      {/* TEXTO PRINCIPAL */}
      <div className="timeline-block">
        <p className="timeline-text">
          {t(
            "En el 2020 la coyuntura presentada en el mundo debido a la pandemia del Covid 19 no frenó nuestra iniciativa para seguir ayudando, ahora somos varios los alumnos del colegio Casuarinas que se unieron a la causa de ayudar a personas con cáncer, para lo cual utilizamos la tecnología, como redes sociales, etc. para conseguir fondos y poder brindar ayuda dentro de nuestras posibilidades y las necesidades de la Fundación Peruana del Cáncer, institución a la cual estamos apoyando en esta oportunidad, específicamente al albergue Frieda Heller que acoge a personas que vienen del interior del país y no tienen donde hospedarse mientras reciben tratamiento contra el cáncer",
            "In 2020 the pandemic that halted all of the world’s activities didn’t stop us from helping those in need. Now, as an integrated project of the Casuarinas CAS course more people have joined the cause and helped to make this initiative grow. We used social media in order to promote mamisincancer5 in the fight against cancer, we raised funds to provide necessary needs to patients from the Peruvian Cancer Foundation (specifically the Frieda Heller Hostel), and finally, we helped another low-income mother with monetary aid for her treatment and screening."
          )}
        </p>
      </div>

      {/* PUBLICIDAD AYUDA SOCIAL */}
      <div className="timeline-block">
        <h3 className="section-subtitle">
          {t("Publicidad ayuda social", "Advertising social aid")}
        </h3>
        <div className="timeline-image-group">
          <img
            src="/mamisincancer5.png"
            alt="Publicidad 1"
            className="timeline-image"
          />
          <img
            src="/mamisincancer5.png"
            alt="Publicidad 2"
            className="timeline-image"
          />
        </div>
      </div>

      {/* ENTREGA AYUDA SOCIAL */}
      <div className="timeline-block">
        <h3 className="section-subtitle">
          {t("Entrega ayuda social", "Deliver social aid")}
        </h3>
        <div className="timeline-image-group">
          <img
            src="/mamisincancer5.png"
            alt="Entrega ayuda"
            className="timeline-image"
          />
        </div>
      </div>

      {/* AYUDA A MAMI CON CÁNCER */}
      <div className="timeline-block">
        <h3 className="section-subtitle">
          {t("Ayuda a mami con cáncer", "Help mommy with cancer")}
        </h3>
        <p className="timeline-text">
          {t(
            "Gracias a la revista escolar Casuarinas pudimos organizar diversos eventos, como concursos de talentos, mascotas, dibujos, con el fin de recaudar fondos para ayudar a la mami Teresa Rodriguez Torres, paciente oncológica de 43 años de edad que padece cáncer de mama con metástasis a pulmón y hueso, ella es una mami de escasos recursos procedente de la ciudad de Chimbote, tiene 2 hijos uno de 15 y otro de 8años, es madre soltera ya que su esposo se encuentra preso, ha venido a Lima para poder realizarse su tratamiento pero no tiene ningún familiar ni medios económicos para su estadía, felizmente le han dado posada en el albergue Frieda Heller, y lo recaudado se lo entregamos para poder aliviar en algo sus necesidades",
            "Thanks to the Casuarinas school magazine we were able to organize various events, such as talent shows, pet contests, drawings contests, in order to raise funds to help Teresa Rodriguez Torres, a 43-year-old mother and cancer patient who suffers from breast cancer with metastases to lung and bone, she is a mother with few resources from the city of Chimbote, she has 2 children, one has 15 and the other 8 years old. She is a single mother since her husband is in prison, she has come to Lima to undergo treatment but she does not have any family or financial means for her stay. Thankfully they have given her an inn at the Frieda Heller hostel, and we provided her with financial support in order to alleviate her needs to an extent."
          )}
        </p>
        <div className="timeline-image-group">
          <img
            src="/mamisincancer5.png"
            alt="Frente FPC"
            className="timeline-image"
          />
          <img
            src="/mamisincancer5.png"
            alt="Concurso talentos"
            className="timeline-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Volunteer2020;
