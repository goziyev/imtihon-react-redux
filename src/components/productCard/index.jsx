import styles from "./index.module.css";
import icon from "../../assets/icon.svg";
import { Link } from "react-router-dom";

function ProductCard({ img, name }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImg}>
        <img className={styles.img} src={img} alt="heardphones foto" />
      </div>
      <div className={styles.card}>
        <h3>{name}</h3>
        <Link to={`/products/${name}`}>
          <p>Shop</p>
          <img src={icon} width={25} height={25} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
