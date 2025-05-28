import React from "react";
import { Navbar } from "./components/Navbar";
import "./App.css";
import "./History.css";

interface HistoryProps {
  language: "es" | "en";
  toggleLanguage: () => void;
}

const History: React.FC<HistoryProps> = ({ language, toggleLanguage }) => {
  const t = (es: string, en: string) => (language === "es" ? es : en);

  return (
    <div>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <div className="history-container">
        <div className="history-left">
          <img src="/brown.png" alt="Brown University" className="main-photo" />
          <h1 className="section-title">{t("HISTORIA", "OUR STORY")}</h1>
          <p className="section-text">
            {t(
              "Cuando tenía alrededor de 11 años, noté que el ambiente en mi hogar no era el mismo, mis abuelos paternos salían muy temprano, regresaban muy tarde, igual no veía a mi padre parte del día y todos se encontraban siempre preocupados; en muchas ocasiones los encontraba llorando alrededor de la mesa, luego me enteré que a mi tío Coquito, el hermano de mi papá, le habían diagnosticaron cáncer de páncreas, lastimosamente un tiempo después falleció. Poco tiempo después mis abuelos maternos que radican en la sierra del Perú de un momento a otra vinieron a vivir a nuestra casa, se levantaban muy temprano y venían conmigo en el carro de mi papá que me llevaba al colegio y a ellos los dejábamos en un hospital en el camino, luego me enteré que ese hospital era para pacientes con cáncer, ya que habían diagnosticado a mi abuelo con cáncer de mama y pulmón.  Como este hosptal quedaba cerca de mi colegio, tuve la oportunidad de ir varias veces y el panorama era desolador, mucha gente sufriendo, gente de escasos recursos durmiendo en las bancas, haciendo interminables colas desde muy tempranas horas, no recibiendo una atención digna, es decir debían agregar al dolor de la enfermedad el dolor de las circunstancias que debían atravesar para poder ser atendidos. Mi abuelo fue operado dos veces recibió sesiones de quimioterapia y felizmente ahora se mantiene estable con sus controles periódicos. Después de haber estado expuesto a todo este sufrimiento que no solo lo padecieron mis familiares afectados sino toda la familia, pensé si he sufrido tanto presenciando el dolor de mis familiares, el dolor se multiplicaría por mil si la afectada sería mi mamá, así que les comenté a mis padres que deberíamos ayudar a alguna institución que proteja a madres de escasos recursos que padezcan de cáncer, estuvimos buscando si existía alguna institución que se dedicará exclusivamente a ayudar a madres y no la encontramos, así que decidí crear la organización de ayuda social MAMISINCANCER",
              "When I was around 11 years old, I began to realize that the environment in my home was not the same, my paternal grandparents left very early, they came back very late, even I did not see my father part of the day and everyone was always worried. Sometimes I found them crying around the table, then they told me that my uncle Coquito, my father's brother, was diagnosed with pancreatic cancer, unfortunately, a few months later he passed away. A short time later my maternal grandparents, who live in the mountains of Peru, came to live at our house. They got up very early and came with me in my dad's car that took me to school and we left them at a hospital on the way, then I found out that this hospital was for cancer patients, then they told me that my grandfather was diagnosed with breast and lung cancer.  This hospital was close to my school and I had the opportunity to go several times and the outlook was bleak, many people suffering, poor people sleeping on the benches, making endless lines from very early hours, not receiving dignified attention. this means they had to add to the pain of the disease, the pain of the circumstances they had to go through in order to be cared for. My grandfather was operated on twice, received chemotherapy sessions, and happily, now he is stable with his regular check-ups. After having been exposed to all this suffering that not only my affected relatives suffered but the whole family, I thought if I have suffered so much witnessing the pain of my close relatives, the pain would be multiplied by a thousand if the affected one was my mother, so I told my parents that we should help an institution that protects low-income mothers who suffer from cancer, we were looking to see if there was an institution that will be dedicated exclusively to helping mothers and we could not find it, so I decided to create the aid organization social MAMISINCANCER"
            )}
          </p>
        </div>

        <div className="history-right">
          <div className="person-box">
            <h3 className="person-name">ROBERTO GONZALES</h3>
            <p className="person-role">{t("FUNDADOR", "FOUNDER")}</p>
            <img
              src="/founder.png"
              alt="Roberto Gonzales"
              className="profile-photo"
            />
          </div>

          <div className="person-box">
            <h3 className="person-name">HUMBERTO GONZALES ALIAGA</h3>
            <p className="person-role">{t("Tío Coquito", "Uncle")}</p>
            <img
              src="/coquito.png"
              alt="Tío Coquito"
              className="profile-photo"
            />
          </div>

          <div className="person-box">
            <h3 className="person-name">HUMBERTO MATOS VILA</h3>
            <p className="person-role">{t("Abuelo materno", "Grandfather")}</p>
            <img
              src="/abuelo.png"
              alt="Abuelo Materno"
              className="profile-photo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
