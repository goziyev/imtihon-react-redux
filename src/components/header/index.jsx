import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";
import shape from "../../assets/shape.svg";
import hamburger from "../../assets/hamburger.svg";
import logo from "../../assets/logo.svg";

function MyModal({ isOpen, setIsOpen }) {
  const divStyle = {
    pointerEvents: "none",
    "&:hover": {
      pointerEvents: "initial",
    },
  };
  return isOpen ? (
    <>
      <div className={styles.modal} data-aos="flip-up">
        <iframe
          style={divStyle}
          src="https://giphy.com/embed/14106sUJFvH5Sw"
          width="350"
          height="350"
        ></iframe>
      </div>
      <div
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        className={styles.modalBackground}
      ></div>
    </>
  ) : (
    ""
  );
}

function Header() {
  const [show, setShow] = useState(false);
  function showNav() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header>
        <div className={styles.container}>
          <div className={styles.header__content}>
            <div className={styles.responsive}>
              <div className={styles.hamburger}>
                <div className="navbar-start">
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle"
                    >
                      <img onClick={showNav} src={hamburger} alt="" />
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content   z-[1] p-4 text-md font-[600] shadow bg-black text-white rounded-box w-52"
                    >
                      <Link to="/">Home</Link>

                      <Link to="/products/HEADPHONES">Heardphones</Link>

                      <Link to="/products/SPEAKERS">Speakers</Link>

                      <Link to="/products/EARPHONES">Earphones</Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className={styles.header__logo}>
              <Link to="/">
                <img src={logo} />
              </Link>
            </div>
            <div data-aos="fade-up" className={styles.links}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/products/HEADPHONES">Headphones</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/products/SPEAKERS">Speakers</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/products/EARPHONES">Earphones</Link>
                </li>
              </ul>
            </div>
            <div
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className={styles.basket}
            >
              <img src={shape} />
            </div>
          </div>

          <div className={styles.border}></div>
        </div>
      </header>

      <div>
        <MyModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
}

export default Header;
