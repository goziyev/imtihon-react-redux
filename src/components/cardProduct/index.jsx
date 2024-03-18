import { Link } from "react-router-dom";
import styles from "./index.module.css";

function CardProduct({ index, el, page }) {
  const flexDirection = index % 2 === 1 ? "row-reverse" : "reverse";

  return (
    <div
      key={index}
      style={{ flexDirection: flexDirection }}
      className={`${styles.cardWrapper}`}
    >
      <div className={styles.cardImg} data-aos="fade-left">
        <img src={el.image} alt={el.name} />
      </div>
      <div className={styles.cardText} data-aos="fade-right">
        <h4>NEW PRODUCT</h4>
        <h2>{el.name}</h2>
        <p>{el.description}</p>
        <Link to={`/products/${page}/${el.id}`}>
          <button>See Product</button>
        </Link>
      </div>
    </div>
  );
}

export default CardProduct;
