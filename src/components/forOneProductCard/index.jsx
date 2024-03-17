import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { useEffect, useState } from "react";

function ForOneProductCard({ el }) {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const number = Number(count) * Number(price);
  const formattedNumber = number.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  useEffect(() => {
    setPrice(Number(el.price));
  });
  return (
    <div
      style={{ flexDirection: "reverse" }}
      className={`${styles.cardWrapper}`}
    >
      <div className={styles.cardImg}>
        <img src={el.image} alt={el.name} />
      </div>
      <div className={styles.cardText}>
        <h4>NEW PRODUCT</h4>
        <h2>{el.name}</h2>
        <p className={styles.description}>{el.description}</p>
        <p className={styles.cardPrice}>{formattedNumber}</p>
        <div className={styles.wrapper}>
          <div className={styles.storeCard}>
            <p
              onClick={() => {
                setCount(count <= 1 ? count : count - 1);
              }}
            >
              -
            </p>
            <p>{count}</p>
            <p
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </p>
          </div>
          <Link>
            <button disabled={count == 0 ? true : false}>ADD TO CART</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForOneProductCard;
