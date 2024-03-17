import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.css"; // Modul CSS faylini import qilamiz
import { validate } from "../../functions";

function Register() {
  const usernameRef = useRef("");
  const loginRef = useRef("");
  const passwordRef = useRef("");
  const repasswordRef = useRef("");
  const navigate = useNavigate();

  const [loader, setLoader] = useState(false);
  function handleRegister(e) {
    e.preventDefault();
    if (validate(usernameRef, passwordRef, loginRef, repasswordRef)) {
      setLoader(true);
      const user = {
        username: usernameRef.current.value,
        email: loginRef.current.value,
        password: passwordRef.current.value,
      };
      fetch(`${import.meta.env.VITE_AUTH_API}auth/signup `, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message == "User registered successfully!") {
            navigate("/login");
          }
        })
        .catch((error) => console.error("Xatolik:", error))
        .finally(() => {
          setLoader(false);
        });
    }
  }

  return (
    <div className={styles.background}>
    <div className={styles.register__wrapper}>
      <form
        className={styles.register__form}
        onSubmit={(e) => {
          handleRegister(e);
        }}
      >
        <h3 className={styles.register__title}>Sign Up</h3>
        <input ref={usernameRef} type="text" placeholder="Username" />
        <input ref={loginRef} type="email" placeholder="Email address" />
        <input ref={passwordRef} type="Password" placeholder="Password" />
        <input
          ref={repasswordRef}
          type="Password"
          placeholder="Repeat password"
        />
        <button className={styles.register__button} disabled={loader}>
          {!loader ? "Create an accaount" : "Loading.."}
        </button>
        <p className={styles.register__description}>
          Already have an accaount ? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
    </div>
  );
}

export default Register;
