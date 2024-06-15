import React from "react";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>About Us:</h2>
     
      
      <p className={styles.paragraph}>
        Wir sind die führende Online-Einkaufsseite für Backwaren in Europa,
        insbesondere in Deutschland, bieten wir eine Auswahl von über 4000
        Produkten. Seit unserer Gründung im Jahr 2012 legen wir Wert auf
        vorteilhafte Preise und 100% Kundenzufriedenheit ständige Erweiterung
        des Produktsortiments und unter Berücksichtigung des Kundenfeedbacks,
        entwicklen wir uns weiter. Dank dieser Rückmeldungen von Ihnen sind wir
        weiterhin der Vorreiter Deutschlands und Europas in der Branche. Mit
        mehr als 34,5 Tausend registrierten Benutzern sind wir seit unserer
        Gründung zu einer großen Familie geworden. Wir bieten Tausende von
        Produkten in insgesamt über 100 Kategorien, von Küchenartikeln bis hin
        zu Spezialprodukten, zu günstigen Preisen. Zusätzlich gehören zu unseren
        eigenen Produkten British Bakery auch die Produkte von Dutzenden von in-
        und ausländischen großen Marken. Mit unseren vorteilhaften Preisen,
        fortschrittlichen Verkaufstools und Werbeaktionen machen wir als British
        Bakery das Online-Shopping sowohl für unsere Firmen- als auch für
        Privatkunden angenehm. Sie finden Tausende von Produktoptionen mit
        schnellem Versand in alle Städte Deutschlands und Europas. Genießen Sie
        es, Ihr Leben leichter zu machen und mit British Bakery sicher und
        schnell einzukaufen!
      </p>
      <p className={styles.paragraph}></p>
      <br />
    </div>
  );
};

export default About;
