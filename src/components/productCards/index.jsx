import styles from "./index.module.css";
import heardphones from "../../assets/Headphon.png";
import speakers from "../../assets/speaker.png";
import earphones from "../../assets/earphone.png";
import ProductCard from "../productCard";
function ProductSmallCard() {
  return (
    <div className={styles.cardsWrapper}>
      <ProductCard img={heardphones} name={"HEADPHONES"} />
      <ProductCard img={speakers} name={"SPEAKERS"} />
      <ProductCard img={earphones} name={"EARPHONES"} />
    </div>
  );
}

export default ProductSmallCard;
