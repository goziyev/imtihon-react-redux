import { Link } from "react-router-dom";
import styles from "./index.module.css";

function ZxSeventhCard() {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.background} data-aos="flip-down">
        <h3 className={styles.cardTitle}>ZX7 SPEAKER</h3>
        <Link to="/products/SPEAKERS/5" className={styles.cardButton}>
          SEE PRODUCT
        </Link>
      </div>
    </div>
  );
}

export default ZxSeventhCard;
