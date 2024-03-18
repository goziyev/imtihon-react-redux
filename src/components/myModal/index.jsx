import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MyModal({ isOpen, setIsOpen }) {
  const modalData = useSelector((state) => state.customers);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = modalData.reduce((acc, customer) => {
      return acc + Number(customer.price) * customer.count;
    }, 0);
    setTotal(totalPrice);
  }, [modalData]);

  const formattedTotal = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const divStyle = {
    pointerEvents: "none",
    "&:hover": {
      pointerEvents: "initial",
    },
    marginLeft: "auto",
    marginRight: "auto",
  };

  return isOpen ? (
    <>
      <div className={styles.modal} data-aos="flip-up">
        {modalData.length ? (
          <div className={styles.modalBody}>
            <div className={styles.modalTitleText}>
              <h3>CART ({modalData.length})</h3>
              <p
                onClick={() => {
                  dispatch({ type: "All_remove" });
                }}
              >
                Remove All
              </p>
            </div>
            {modalData.map((el, index) => {
              return (
                <div key={index} className={styles.modalCard}>
                  <div className={styles.modalImg}>
                    <img width={40} height={40} src={el.image} alt="salom" />
                  </div>
                  <div className={styles.modalCardText}>
                    <h3>XX59</h3>
                    <p>${el.price}</p>
                  </div>
                  <div className={styles.storeCard}>
                    <p
                      onClick={() => {
                        setCount(count <= 1 ? count : count - 1);
                        dispatch({
                          type: "Update",
                          payload: {
                            id: el.id,
                            count: count,
                            image: el.image,
                            price: el.price,
                          },
                        });
                      }}
                    >
                      -
                    </p>
                    <p>{el.count}</p>
                    <p
                      onClick={() => {
                        setCount(count + 1);
                        dispatch({
                          type: "Update",
                          payload: {
                            id: el.id,
                            count: count,
                            image: el.image,
                            price: el.price,
                          },
                        });
                      }}
                    >
                      +
                    </p>
                  </div>
                </div>
              );
            })}
            <div className={styles.modalFooter}>
              <h3>TOTAL</h3>
              <p>{formattedTotal}</p>
            </div>
            <Link to="/checkout" className={styles.modalCheskout}>
              CHESKOUT
            </Link>
          </div>
        ) : (
          <>
            <p>You have no products</p>
            <iframe
              src="https://giphy.com/embed/Phna8ImVFWEqxPUIfk"
              width="250"
              height="250"
              style={divStyle}
            ></iframe>
          </>
        )}
      </div>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={styles.modalBackground}
      ></div>
    </>
  ) : null;
}

export default MyModal;
