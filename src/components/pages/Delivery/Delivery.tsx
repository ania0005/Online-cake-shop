import React from "react";
import styles from "./Delivery.module.css";

const Delivery: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Delivery and payment</h2>
      <h3 className={styles.header1}>
        Unsere Torten sind nach der Lieferung noch mindestens 7 Tage haltbar. Mehr Informationen:
      </h3>
      <div className={styles.section}>
        <p className={styles.sectionContent}>
        DHL Paket__________________________5,90 €__________2 Werktage (+/- 1 Werktag)
        </p>
        <p className={styles.sectionContent}>
        DHL Express________________________9,90 €__________1 Werktage
        </p>
        <p className={styles.sectionContent}>
        DHL Express, vor 12 Uhr__________12,90 €__________1 Werktage
        </p>
        <p className={styles.sectionContent}>
        DHL Samstagsexpress____________14,90 €__________1 Werktage
        </p>

      </div>
    </div>
  );
};

export default Delivery;
