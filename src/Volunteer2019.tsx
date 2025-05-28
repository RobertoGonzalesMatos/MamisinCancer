import React from "react";
import { Carousel } from "./components/Carousel";

interface Props {
  t: (es: string, en: string) => string;
}

const Volunteer2019: React.FC<Props> = ({ t }) => {
  return (
    <section id="vol-2019">
      <h2>2019</h2>

      {/* CONCIERTO PRO FONDOS */}
      <div className="timeline-block">
        <h3 className="section-subtitle">
          {t(
            "CONCIERTO PRO FONDOS PARA REALIZAR EXÁMENES PREVENTIVOS A MAMIS DE ESCASOS RECURSOS",
            "PRO-FUNDS CONCERT TO CARRY OUT PREVENTIVE EXAMINATIONS FOR LOW-RESOURCE MOMS"
          )}
        </h3>
        <p className="timeline-text">
          {t(
            "En el 2019 logré organizar un concierto para obtener fondos para llevar a mamis del AA.HH Pachacutec de Ventanilla a realizarse pruebas preventivas contra el cáncer de mama y de cuello uterino. Mis compañeros y yo tocamos 14 canciones, vendimos entradas a 30 soles, hicimos polos, gorros, chalinas... Fue un sueño hecho realidad: chicos de 14 y 15 años tocando en vivo para ayudar. Aprendimos sobre liderazgo, trabajo en equipo, ventas, ingresos, egresos y más. Con lo recaudado, una de las mamis tuvo un resultado adverso y tuvimos que tomar decisiones difíciles, como pagarle una prueba más específica. Felizmente, salió negativo.",
            "In 2019 I organized a concert to raise funds to take moms from AA.HH Pachacutec de Ventanilla for breast and cervical cancer screenings. We played 14 songs, sold tickets for 30 soles, created t-shirts, hats, scarves... It was a dream come true: teens aged 14-15 performing live to help. We learned about leadership, teamwork, finance, sales and more. One mom had an adverse test result and we had to make hard decisions, like paying for a more specific exam. Fortunately, it came back negative."
          )}
        </p>
      </div>

      {/* PREPARATIVOS */}
      <div className="timeline-block">
        <h3 className="section-subtitle">
          {t("PREPARATIVOS", "PREPARATIONS")}
        </h3>
        <Carousel
        //   images={[
        //     "/mnt/data/c48b766c-96ba-4ed6-affe-1dbc4ff20125.png",
        //     "/mnt/data/ad39a3bb-e0e1-46f1-875d-f2720de02c65.png",
        //     "/mnt/data/8e4f52a7-1f1d-451d-a6d3-d806942b038b.png",
        //   ]}
        />
      </div>

      {/* CONCIERTO */}
      <div className="timeline-block">
        <h3 className="section-subtitle">{t("CONCIERTO", "CONCERT")}</h3>
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/FEjbPzeP2Iw"
            title="Concierto Oficial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <img
          src="/mnt/data/021b613a-6d57-4531-ba29-755f5eb73997.png"
          alt="Mami en el concierto"
          className="timeline-image"
        />
      </div>

      {/* PRUEBAS PREVENTIVAS */}
      <div className="timeline-block">
        <h3 className="section-subtitle">
          {t(
            "PRUEBAS PREVENTIVAS CONTRA EL CÁNCER A MAMIS DE ESCASOS RECURSOS",
            "PREVENTIVE TESTING AGAINST POOR RESOURCE BREAST CANCER"
          )}
        </h3>
        <p className="timeline-text">
          {t(
            "El 14 de julio del 2019 realicé un concierto con ayuda de mis compañeros de colegio para recaudar fondos para exámenes contra el cáncer de mama y cuello uterino. Las mamis beneficiadas eran trabajadoras del mercado Santa Rosa en Ventanilla. Una de ellas tuvo un resultado sospechoso y se le recomendó una colposcopía. Con lo recaudado, cubrimos el examen y el día de trabajo. Felizmente, el resultado fue negativo, pero se le recomendó cauterizar el cuello uterino, lo cual también fue cubierto.",
            "On July 14, 2019, I held a concert with help from classmates to raise money for breast and cervical cancer screenings. The moms were market workers from Ventanilla. One mom had a suspicious result and was recommended a colposcopy. We paid for the test and her workday. Thankfully, the result was negative, but she was advised to have cervical cauterization, which we also covered."
          )}
        </p>
        <img
          src="/mnt/data/76c1e6fa-35a3-45b4-a47a-d04774ccaf2e.png"
          alt="Mercado Santa Rosa"
          className="timeline-image"
        />
        <img
          src="/mnt/data/1b0dc88f-2274-45ba-adee-198a7b3d9975.png"
          alt="Puerta del mercado"
          className="timeline-image"
        />
      </div>
    </section>
  );
};

export default Volunteer2019;
