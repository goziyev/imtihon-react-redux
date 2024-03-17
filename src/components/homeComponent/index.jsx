import { Link } from "react-router-dom";
import styles from "./index.module.css";

function HomeComponent() {
  return (
    <div className={styles.componentBackground}>
      <div className={styles.container}>
        <div className={styles.componentTitle}>
          <h5>NEW PRODUCT</h5>
          <h2>XX99 Mark II Headphones</h2>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link to="/products/HEADPHONES/4">
            <button>See Product</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeComponent;
