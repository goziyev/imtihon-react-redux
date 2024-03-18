import { useNavigate } from "react-router-dom";
import style from "./index.module.css";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import StoreModal from "../storeModal";

function Checkout() {
  const navigate = useNavigate();
  const data = useSelector((state) => state.customers);
  const [total, setTotal] = useState(0);

  const first = useRef("");
  const second = useRef("");
  const third = useRef("");
  const fourth = useRef("");
  const fiveth = useRef("");
  const sixth = useRef("");
  const seventh = useRef("");
  const eigth = useRef("");
  const ninith = useRef("");
  const [modal, setModal] = useState(false);
  function goBack() {
    navigate(-1);
  }
  function validate() {
    if (!first.current.value.trim().length) {
      alert("Barcha maydonlar to'ldirilishi shart!!!");
      first.current.value = "";
      first.current.focus();
      return false;
    }
    if (!second.current.value.trim().length) {
      alert("Barcha maydonlar to'ldirilishi shart!!!");
      second.current.value = "";
      second.current.focus();
      return false;
    }
    if (!third.current.value.trim().length) {
      alert("Barcha maydonlar to'ldirilishi shart!!!");
      third.current.value = "";
      third.current.focus();
      return false;
    }
    if (!fourth.current.value.trim().length) {
      alert("Barcha maydonlar to'ldirilishi shart!!!");
      fourth.current.value = "";
      fourth.current.focus();
      return false;
    }
    if (!fiveth.current.value.trim().length) {
      alert("Barcha maydonlar to'ldirilishi shart!!!");
      fiveth.current.value = "";
      fiveth.current.focus();
      return false;
    }
    if (!sixth.current.value.trim().length) {
      alert("Barcha maydonlar to'ldirilishi shart!!!");
      sixth.current.value = "";
      sixth.current.focus();
      return false;
    }
    if (!seventh.current.value.trim().length) {
      alert("Barcha maydonlar to'ldirilishi shart!!!");
      seventh.current.value = "";
      seventh.current.focus();
      return false;
    }
    if (!eigth.current.value.trim().length) {
      alert("Barcha maydonlar to'ldirilishi shart!!!");
      eigth.current.value = "";
      eigth.current.focus();
      return false;
    }
    if (!ninith.current.value.trim().length) {
      alert("Barcha maydonlar to'ldirilishi shart!!!");
      ninith.current.value = "";
      ninith.current.focus();
      return false;
    }
    return true;
  }

  useEffect(() => {
    if (modal) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
  }, [modal]);
  const divStyle = {
    pointerEvents: "none",
    "&:hover": {
      pointerEvents: "initial",
    },
    marginLeft: "auto",
    marginRight: "auto",
  };

  useEffect(() => {
    const totalPrice = data.reduce((acc, customer) => {
      return acc + Number(customer.price) * customer.count;
    }, 0);
    setTotal(totalPrice);
  }, [data]);

  const formattedTotal = total.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  function handleCheck(e) {
    e.preventDefault();
    if (validate()) {
      setModal(!modal);
    }
  }

  return (
    <>
      <div className={style.background}>
        <div className={style.container}>
          <div className={style.goBack}>
            <p onClick={goBack}>Go Back</p>
          </div>
          <div className={style.wrapper}>
            <div className={style.formWrapper}>
              <h3 className={style.formTitle}>CHECKOUT</h3>
              <p className={style.details}>BILLING DETAILS</p>
              <form className={style.form}>
                <div className={style.formInput}>
                  <label
                    className="form-control "
                    style={{ maxWidth: "290px", width: "100%" }}
                  >
                    <div className="label">
                      <span className="label-text">Name</span>
                    </div>
                    <input
                      ref={first}
                      type="text"
                      placeholder="Alexai Ward"
                      className="input input-bordered"
                      style={{ maxWidth: "290px", width: "100%" }}
                      required
                    />
                  </label>

                  <label
                    className="form-control "
                    style={{ maxWidth: "290px", width: "100%" }}
                  >
                    <div className="label">
                      <span className="label-text">Email Address</span>
                    </div>
                    <input
                      ref={second}
                      type="email"
                      placeholder="New York"
                      className="input input-bordered"
                      style={{ maxWidth: "290px", width: "100%" }}
                      required
                    />
                  </label>
                </div>
                <label
                  className="form-control"
                  style={{ maxWidth: "290px", width: "100%" }}
                >
                  <div
                    className="label"
                    style={{ maxWidth: "290px", width: "100%" }}
                  >
                    <span className="label-text">Phone Number</span>
                  </div>
                  <input
                    ref={third}
                    type="number"
                    placeholder="+1 202-555-0136"
                    className="input input-bordered "
                    style={{ maxWidth: "290px", width: "100%" }}
                    required
                  />
                </label>
              </form>
              <p className={style.details}>SHIPPING INFO</p>
              <form className={style.form}>
                <label className="form-control  mb-2" style={{ width: "100%" }}>
                  <div className="label">
                    <span className="label-text">Address</span>
                  </div>
                  <input
                    ref={fourth}
                    type="text"
                    placeholder="1137 Williams Avenue"
                    className="input input-bordered mb-5"
                    style={{ width: "100%" }}
                    required
                  />
                </label>
                <div className={style.formInput}>
                  <label
                    className="form-control"
                    style={{ maxWidth: "290px", width: "100%" }}
                  >
                    <div className="label">
                      <span className="label-text">ZIP Code</span>
                    </div>
                    <input
                      ref={fiveth}
                      type="number"
                      placeholder="10001"
                      className="input input-bordered"
                      style={{ maxWidth: "290px", width: "100%" }}
                      required
                    />
                  </label>

                  <label
                    className="form-control "
                    style={{ maxWidth: "290px", width: "100%" }}
                  >
                    <div className="label">
                      <span className="label-text">City</span>
                    </div>
                    <input
                      ref={sixth}
                      type="text"
                      placeholder="New York"
                      className="input input-bordered"
                      style={{ maxWidth: "290px", width: "100%" }}
                      required
                    />
                  </label>
                </div>
                <label className="form-control ">
                  <div className="label">
                    <span className="label-text">Country</span>
                  </div>
                  <input
                    ref={seventh}
                    type="text"
                    placeholder="United States"
                    className="input input-bordered "
                    style={{ maxWidth: "290px", width: "100%" }}
                    required
                  />
                </label>
              </form>

              <p className={`${style.details} mb-4`}>PAYMENT DETAILS</p>
              <div className={style.formInput1}>
                <p
                  className={style.payment}
                  style={{ maxWidth: "290px", width: "100%" }}
                >
                  Payment Method
                </p>
                <div className="radio-container  w-2/4 flex flex-col  gap-4">
                  <label
                    className="radio-label input flex gap-4 items-center input-bordered"
                    style={{ maxWidth: "290px", width: "100%" }}
                  >
                    <input
                      type="radio"
                      name="radio-7"
                      className="radio radio-info"
                      defaultChecked
                    />
                    e-Money
                  </label>
                  <label
                    className="radio-label input flex gap-4 items-center input-bordered  "
                    style={{ maxWidth: "290px", width: "100%" }}
                  >
                    <input
                      type="radio"
                      name="radio-7"
                      className="radio radio-info"
                      defaultChecked
                    />
                    Cash on Delivery
                  </label>
                </div>
              </div>
              <div className={style.formInput}>
                <label
                  className="form-control mt-5 "
                  style={{ maxWidth: "290px", width: "100%" }}
                >
                  <div className="label">
                    <span className="label-text">e-Money Number</span>
                  </div>
                  <input
                    ref={eigth}
                    type="number"
                    placeholder="238521993"
                    className="input input-bordered "
                    style={{ maxWidth: "290px", width: "100%" }}
                    required
                  />
                </label>

                <label
                  className="form-control mt-5 "
                  style={{ maxWidth: "290px", width: "100%" }}
                >
                  <div className="label">
                    <span className="label-text">e-Money PIN</span>
                  </div>
                  <input
                    ref={ninith}
                    type="text"
                    placeholder="6891"
                    className="input input-bordered w-5/6"
                    style={{ maxWidth: "290px", width: "100%" }}
                    required
                  />
                </label>
              </div>
            </div>
            <div className={style.summary}>
              <h3 className={style.summaryTitle}>Summary</h3>
              <div className={style.summaryCardsWrapper}>
                {data.length ? (
                  data.map((el, index) => {
                    return (
                      <div key={index} className={style.summaryCard}>
                        <div className={style.summaryWrap}>
                          <div className={style.summaryImg}>
                            <img src={el.image} alt="Foto" />
                          </div>
                          <div className={style.summaryText}>
                            <p className={style.summaryCardTitle}>{el.name}</p>
                            <p className={style.summaryPrice}>${el.price}</p>
                          </div>
                        </div>
                        <p className={style.summarySum}>x{el.count}</p>
                      </div>
                    );
                  })
                ) : (
                  <>
                    <p>You have no products </p>
                    <iframe
                      src="https://giphy.com/embed/Phna8ImVFWEqxPUIfk"
                      width="250"
                      height="250"
                      style={divStyle}
                    ></iframe>
                  </>
                )}
              </div>
              <br />
              <br />
              <br />
              {data.length ? (
                <>
                  <div className={style.texts}>
                    <h3>TOTAL</h3>
                    <p>{formattedTotal}</p>
                  </div>
                  <div className={style.texts}>
                    <h3>SHIPPING</h3>
                    <p>$55</p>
                  </div>
                  <div className={style.texts}>
                    <h3>VAT (INCLUDED) </h3>
                    <p>$1079</p>
                  </div>
                  <div className={style.texts}>
                    <h3>GRAND TOTAL</h3>
                    <p style={{ color: "#D87D4A" }}>{formattedTotal}</p>
                  </div>
                  <button
                    onClick={handleCheck}
                    id="checkButton"
                    className={style.summaryButton}
                  >
                    CONTINUE & PAY
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {modal && <StoreModal setModal={setModal} total={formattedTotal} />}
    </>
  );
}

export default Checkout;
