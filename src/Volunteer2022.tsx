import React from "react";
import "./Volunteer.css";

interface Props {
  t: (es: string, en: string) => string;
}

const Volunteer2022: React.FC<Props> = ({ t }) => {
  return (
    <div className="timeline-block">
      <h2 className="section-title">2022 {t("AYUDA SOCIAL", "SOCIAL AID")}</h2>

      <div className="timeline-block">
        <p className="timeline-text">
          {t(
            "En el año 2022 después de un año exhaustivo de trabajo logré ingresar a la universidad de Brown con una beca completa, lo cual hizo que viajara a estudiar a los Estados Unidos y mi dedicación hacia la organización mamisincancer no fuera con la misma intensidad de los años anteriores, felizmente pude participar desde el extranjero apoyando a mi prima Luana Bueno quien logró realizar una linda campaña en ayuda de personas con cáncer",
            "In 2022, after an exhaustive year of work, I managed to enter Brown University with a full scholarship, which made me travel to study in the United States and my dedication to the mamisincancer organization was not with the same intensity as the previous years. Happily, I was able to participate from abroad supporting my cousin Luana Bueno who managed to carry out a nice campaign to help people with cancer"
          )}
        </p>
        <h3 className="section-subtitle">
          {t("Publicidad ayuda social", "Advertising social aid")}
        </h3>
        <img
          src="/mamisincancer5.png"
          alt="Publicidad ayuda social"
          className="timeline-image"
        />
      </div>

      <div className="timeline-block">
        <h3 className="section-subtitle">
          {t("Ayuda a mami con cáncer", "Help mommy with cancer")}
        </h3>
        <p className="timeline-text">
          {t(
            "Se logró apoyar a la asociación ALDIMI Asociación Albergue de Enfermos de Cáncer Señor de la Divina Misericordia, que es una asociación civil sin fines de lucro, que brinda ayuda a pacientes de cáncer de provincias, en extrema pobreza, sin parientes en Lima. Cuyo propósito es que todo peruano de cualquier edad con diagnóstico de cáncer y escasos recursos económicos disponga de los apoyos óptimos y oportunos para su curación e integración plena a su comunidad. vendimos poleras, gorras, polos y con lo recaudado compramos los víveres necesarios para la institución, además dimos algunas charlas y compartimos con los beneficiarios de la asociación",
            "The association was supported ALDIMI Association of the Lord of Divine Mercy Cancer Patients Shelter, which is a non-profit civil association that provides help to cancer patients from the provinces, in extreme poverty, without relatives in Lima. The purpose of which is that every Peruvian of any age diagnosed with cancer and with limited economic resources has the optimal and timely support for their healing and full integration into their community. We sold t-shirts, caps, polo shirts and with the proceeds we bought the necessary supplies for the institution, we also gave some talks and shared with the beneficiaries of the association"
          )}
        </p>
        <img
          src="/mamisincancer5.png"
          alt="Ayuda ALDMI"
          className="timeline-image"
        />
        <img
          src="/mamisincancer5.png"
          alt="Compartiendo con pacientes"
          className="timeline-image"
        />
        <img
          src="/mamisincancer5.png"
          alt="Luana con pacientes"
          className="timeline-image"
        />
        <img
          src="/mamisincancer5.png"
          alt="Grupo beneficiario"
          className="timeline-image"
        />
      </div>
    </div>
  );
};

export default Volunteer2022;
