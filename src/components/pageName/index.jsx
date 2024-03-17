import styles from "./index.module.css";
function PageName({ name }) {
  return (
    <div className={styles.PageName}>
      <div>
        <h3>{name}</h3>
      </div>
    </div>
  );
}

export default PageName;
