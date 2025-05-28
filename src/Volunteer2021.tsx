// Volunteer2021.tsx
import React from "react";
import { Carousel } from "./components/Carousel";
import AudioPlayer from "./components/AudioPlayer";

interface Props {
  t: (es: string, en: string) => string;
}

const Volunteer2021: React.FC<Props> = ({ t }) => {
  return (
    <section id="vol-2021">
      <h2>2021</h2>

      {/* HUANCAVELICA */}
      <div className="timeline-block">
        <h3 className="section-subtitle">Huancavelica</h3>
        <p className="timeline-text">
          {t(
            "Huancavelica es una de las regiones mas pobres del Perú, la gran mayoría de los hogares no cuentan con internet y muchos ni siquiera tienen luz y agua potable, y sabiendo que la información es primordial para prevenir el cáncer, viajamos hasta esta localidad para llevar la información y ayuda necesaria.",
            "Huancavelica is one of the poorest regions of Peru, the vast majority of homes do not have internet and many do not even have electricity and drinking water, and knowing that information is essential to prevent cancer, we traveled to this town to take the information and necessary help."
          )}
        </p>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/_U4vv-xqJb4"
            title="Huancavelica Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <Carousel />
      </div>

      {/* IRENE AGAMA */}
      <div className="timeline-block">
        <h3 className="section-subtitle">IRENE AGAMA CHANCA</h3>
        <img
          src="/mamisincancer5.png"
          alt="Irene Agama"
          className="timeline-image"
        />
        <p className="timeline-text">
          {t(
            "Luego de nuestra visita a Huancavelica donde brindamos información de como prevenir el cáncer, Irene madre pobladora de la región se comunicó con nosotros porque se encontró un bulto en su autoexamen de mama, gracias al fondo que tenemos pudimos ayudarla con los exámenes preventivos",
            "After our visit to Huancavelica, where we provided information on how to prevent cancer, Irene, a mother from the region, contacted us because a lump was found in her breast self-examination, thanks to the fund we have we were able to help her with preventive examinations"
          )}
        </p>
        <Carousel />
      </div>

      {/* CELIA JACINTA AMAU */}
      <div className="timeline-block">
        <h3 className="section-subtitle">CELIA JACINTA AMAU</h3>
        <img
          src="/mamisincancer5.png"
          alt="Celia Jacinta"
          className="timeline-image"
        />
        <p className="timeline-text">
          {t(
            "43 años de edad, DNI: 41818987, HC: 668566. Diagnóstico: CA de mama. VIH positivo. Lugar de nacimiento: Cusco; actualmente reside en Puerto Maldonado Caserío Alegría. Tiene 6 hijos de 26 años, 23 años, 16 años, 15 años, 8 años, 5 años, tres hijos mayores se encuentran al cuidado de su padre biológico; los demás hijos se encuentran al cuidado de su abuela materna. La señora Celia no tiene pareja actual, en su provincia vive en casa alquilada, para el sustento económico trabajaba vendiendo refrescos, anticuchos, entre otras cosas. En la actualidad, la abuela materna sustenta los gastos vendiendo verduras en un mercado. No recibe mantenimiento de los padres de sus hijos. Ella está en Lima en un albergue temporal mientras está en tratamiento",
            "43 years old, ID: 41818987, HC: 668566. Diagnosis: breast AC. HIV positive. Place of birth: Cusco; currently resides in Puerto Maldonado Caserio Alegria. She has 6 children of 26, 23, 16, 15, 8, and 5 years old. The three oldest children are in the care of their biological father; the others are with their maternal grandmother. Celia has no current partner. In her province, she lives in a rented house. For economic support, she sold drinks and food like anticuchos. Currently, the grandmother supports the household by selling vegetables in a market. She receives no child support from the children's fathers. She is now in Lima staying in a temporary shelter while undergoing treatment."
          )}
        </p>
        <img
          src="/mamisincancer5.png"
          alt="Celia entrega"
          className="timeline-image"
        />
      </div>

      {/* QUECHUA */}
      <div className="timeline-block">
        <h3 className="section-subtitle">QUECHUA</h3>
        <p className="timeline-text">
          {t(
            "En el Perú más de tres millones de habitantes son quechua hablantes nativos...",
            "In Peru, more than three million inhabitants are native Quechua speakers..."
          )}
        </p>
        <img
          src="/mamisincancer5.png"
          alt="Quechua breast cancer"
          className="timeline-image"
        />
        <AudioPlayer src="/audio/breast-quechua.mp3" />
        <img
          src="/mamisincancer5.png"
          alt="Quechua cervical cancer"
          className="timeline-image"
        />
        <AudioPlayer src="/audio/cervical-quechua.mp3" />
      </div>
    </section>
  );
};

export default Volunteer2021;
