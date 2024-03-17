import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.css"; // Modul CSS ni import qilamiz
import { validateLogin } from "../../functions";

function Login() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    if (validateLogin(usernameRef, passwordRef)) {
      setLoader(true);
      const user = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };
      fetch(`${import.meta.env.VITE_AUTH_API}auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.id) {
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("user", JSON.stringify(data));
            navigate("/");
            navigate("/");
          } else {
            alert(data.message);
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
            handleLogin(e);
          }}
        >
          <h3 className={styles.register__title}>Login</h3>
          <input ref={usernameRef} type="text" placeholder="Username" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className={styles.register__button} disabled={loader}>
            {!loader ? "Login to your account" : "Loading.."}
          </button>
          <p className={styles.register__description}>
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
