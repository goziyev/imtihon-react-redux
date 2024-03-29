import { Link } from "react-router-dom";
import styles from "./index.module.css";
function YxOneCard() {
  return (
    <div className={styles.containerWrapper}>
      <div className={styles.cardImg} data-aos="fade-right">
        <img src="./earphone.png" alt="Earophones picture" />
      </div>
      <div className={styles.cardTexts} data-aos="fade-left">
        <h3>YX1 EARPHONES</h3>
        <Link to="/products/EARPHONES/1" className={styles.cardButton}>
          SEE PRODUCTS
        </Link>
      </div>
    </div>
  );
}

export default YxOneCard;
