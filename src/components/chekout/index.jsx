import React, { useState, useEffect } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

function Checkout() {
  const [showModal, setShowModal] = useState(false);

  function openModal(e) {
    e.stopPropagation();
    setShowModal(!showModal);
  }

  useEffect(() => {
    if (showModal) {
      document.addEventListener("click", handleCloseModal);
    } else {
      document.removeEventListener("click", handleCloseModal);
    }
    return () => {
      document.removeEventListener("click", handleCloseModal);
    };
  }, [showModal]);

  const handleCloseModal = (event) => {
    if (!event.target.classList.contains(styles.modal)) {
      setShowModal(false);
    }
  };

  return (
    <>
      <div
        style={showModal ? { backgroundColor: "black", opacity: "0.4" } : {}}
        className={styles.checkoutWrapper}
      >
        <Link
          style={{
            textDecoration: "none",
            color: "gray",
            marginLeft: "50px",
            display: "inline-block",
            marginTop: "50px",
          }}
          to="/"
        >
          <p className={styles.go}>Go back</p>
        </Link>
        <div className={styles.formWrapper}>
          <form>
            <h2>CHECKOUT</h2>
            <div className={styles.build}>
              <p>Billing Details</p>
              <div className={styles.nameEmail}>
                <label>
                  <p>Name</p>
                  <input type="text" placeholder="Alexei Ward" />
                </label>
                <label>
                  <p>Email</p>
                  <input type="email" placeholder="alexei@mail.com" />
                </label>
              </div>
              <label>
                <p>Phone Number</p>
                <input type="text" placeholder="+1 202-555-0136" />
              </label>
            </div>
            <div className={styles.shipping}>
              <p>shipping info</p>
              <label>
                <p>Address</p>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="1137 Williams Avenue"
                />
              </label>
              <div className={styles.codeCity}>
                <label>
                  <p>ZIP Code</p>
                  <input type="number" name="" id="" placeholder="10001" />
                </label>
                <label>
                  <p>City</p>
                  <input type="text" name="" id="" placeholder="New York" />
                </label>
              </div>
              <label className={styles.country}>
                <p>Country</p>
                <input type="text" name="" id="" placeholder="United States" />
              </label>
            </div>
            <div className={styles.payments}>
              <p>payment details</p>
              <div className={styles.method}>
                <p>Payment Method</p>
                <div className={styles.select}>
                  <div className={styles.money}>
                    <input type="radio" name="cost" id="" />
                    <h3>e-Money</h3>
                  </div>
                  <div className={styles.card}>
                    <input type="radio" name="cost" id="" />
                    <h3>Cash on Delivery</h3>
                  </div>
                </div>
              </div>
              <div className={styles.paymentOrder}>
                <label>
                  <p>e-Money Number</p>
                  <input type="text" name="" id="" placeholder="238521993" />
                </label>
                <label>
                  <p>e-Money PIN</p>
                  <input type="text" name="" id="" placeholder="6891" />
                </label>
              </div>
            </div>
          </form>
          <div className={styles.details}>
            <h2>summary</h2>
            <div className={styles.cardsSummary}>
              <div className={styles.card}>
                <div className={styles.imgCost}>
                  <div className={styles.cardImg}>
                    <img src="./xx59.png" alt="product" />
                  </div>
                  <div className={styles.info}>
                    <h3>XX99 MK II</h3>
                    <p>$ 2,999</p>
                  </div>
                </div>
                <div className={styles.num}>
                  <span>x1</span>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgCost}>
                  <div className={styles.cardImg}>
                    <img src="./xx59.png" alt="product" />
                  </div>
                  <div className={styles.info}>
                    <h3>XX99 MK II</h3>
                    <p>$ 2,999</p>
                  </div>
                </div>
                <div className={styles.num}>
                  <span>x1</span>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.imgCost}>
                  <div className={styles.cardImg}>
                    <img src="./xx59.png" alt="product" />
                  </div>
                  <div className={styles.info}>
                    <h3>XX99 MK II</h3>
                    <p>$ 2,999</p>
                  </div>
                </div>
                <div className={styles.num}>
                  <span>x1</span>
                </div>
              </div>
            </div>
            <div className={styles.info1}>
              <div className={styles.price}>
                <h4>TOTAL</h4>
                <span>$ 5,396</span>
              </div>
              <div className={styles.price}>
                <h4>SHIPPING</h4>
                <span>$ 50</span>
              </div>
              <div className={styles.price}>
                <h4>VAT (INCLUDED)</h4>
                <span>$ 1,079</span>
              </div>
              <div className={styles.garondTotal}>
                <h4>GRAND TOTAL</h4>
                <span>$ 5,446</span>
              </div>
            </div>
            <button onClick={(e) => openModal(e)}>CONTINUE & PAY</button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className={styles.modal}>
          <img src="./tick.png" alt="tick" />
          <h2>THANK YOU FOR YOUR ORDER</h2>
          <p>You will receive an email confirmation shortly.</p>
          <div className={styles.modalInfo}>
            <div className={styles.cardInfo}>
              <div className={styles.cardModal}>
                <img src="./xx59.png" alt="product" />
                <div className={styles.modalTextCard}>
                  <h5>XX99 MK II</h5>
                  <h4>$ 2,999</h4>
                </div>
                <span>x1</span>
              </div>
              <p>and 2 other item(s)</p>
            </div>
            <div className={styles.blackInfo}>
              <p>GRAND TOTAL</p>
              <h3>$ 5,446</h3>
            </div>
          </div>
          <Link style={{ textDecoration: "none" }} to="/">
            <button>BACK TO HOME</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Checkout;
