import { useNavigate, useParams } from "react-router-dom";
import PageName from "../../components/pageName";
import ProductSmallCard from "../../components/productCards";
import MusicanBoy from "../../components/musicianBoy";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import CardProduct from "../../components/cardProduct";
function Products() {
  const { page } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_PRODUCTS_API}${page}`)
      .then((res) => res.json())
      .then((el) => {
        setData(el);
      })
      .catch((err) => {
        console.log("Products sahifasidagi yuklab olish hatolik", err);
      });
  }, []);

  return (
    <>
      <PageName name={page} />
      <div className={styles.cardsWrapper}>
        {data.map((el, index) => {
          return <CardProduct key={index} page={"ALL"} index={index} el={el} />;
        })}
      </div>
      <ProductSmallCard />
      <MusicanBoy />
    </>
  );
}

export default Products;
