import { useSelector } from "react-redux";
import icon from "../../assets/icona.png";
import style from "./index.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function StoreModal({ setModal, total }) {
  const data = useSelector((state) => state.customers);
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (data.length > 0) {
      setProduct(data[0]);
    }
  }, [data]);

  return (
    <div
      className={style.modal}
      onClick={() => {
        setModal(false);
      }}
    >
      <div className={style.modalMain}>
        <img src={icon} alt="True icon" width={64} />
        <h3 className={style.modalTitle}>
          THANK YOU <br />
          FOR YOUR ORDER
        </h3>
        <p>You will receive an email confirmation shortly.</p>
        <div className={style.modalCardWrapper}>
          <div className={style.modalCard}>
            <div className={style.summaryCard}>
              <div className={style.summaryWrap}>
                <div className={style.summaryImg}>
                  <img src={product.image} alt="Foto" />
                </div>
                <div className={style.summaryText}>
                  <p className={style.summaryCardTitle}>{product.name}</p>
                  <p className={style.summaryPrice}>${product.price}</p>
                </div>
              </div>
              <p className={style.summarySum}>x1</p>
            </div>
            {data.length > 1 && (
              <p className={style.modalAndText}>
                and {data.length - 1} other item(s)
              </p>
            )}
          </div>
          <div className={style.grandCard}>
            <p>GRAND TOTAL</p>
            <h3>{total}</h3>
          </div>
        </div>
        <Link to="/" className={style.button}>BACK TO HOME</Link>
      </div>
    </div>
  );
}

export default StoreModal;
