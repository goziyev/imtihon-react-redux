import { useNavigate } from "react-router-dom";
import styles from "./index.module.css";
function ZxFristCard() {
  const navigate = useNavigate();
  return (
    <div className={styles.bigContainer}>
      <div data-aos="flip-left" className={styles.container}>
        <div className={styles.cardImg}>
          <img src="./zx9.png" alt="" />
        </div>
        <div className={styles.cardText}>
          <h3 className={styles.cardTitle}>ZX9 SPEAKER</h3>
          <p className={styles.cardDescription}>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button
            onClick={() => {
              navigate("/products/SPEAKERS/6");
            }}
            className={styles.cardButton}
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
    </div>
  );
}

export default ZxFristCard;
