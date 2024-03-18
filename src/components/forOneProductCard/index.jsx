import { Link } from "react-router-dom";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
function ForOneProductCard({ el }) {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
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
  function handleAlert(e) {
    e.preventDefault();
    const product = {
      id: el.id,
      name: el.name,
      image: el.image,
      count: count,
      price: price,
    };
    dispatch({ type: "Add", payload: product });
    toast.success("The product has been added to the cart");
  }

  return (
    <>
      <div
        style={{ flexDirection: "reverse" }}
        className={`${styles.cardWrapper}`}
      >
        <div className={styles.cardImg} data-aos="fade-right">
          <img src={el.image} alt={el.name} />
        </div>
        <div className={styles.cardText} data-aos="fade-left">
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
              <button
                onClick={handleAlert}
                disabled={count == 0 ? true : false}
              >
                ADD TO CART
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ForOneProductCard;
