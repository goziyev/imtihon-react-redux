import { useParams, useNavigate, Link } from "react-router-dom";
import style from "./index.module.css";
import { useEffect, useState } from "react";
import ForOneProductCard from "../../components/forOneProductCard";
import ProductSmallCard from "../../components/productCards";

function ProductPage() {
  const navigate = useNavigate();
  const { id, page } = useParams();
  const [data, setData] = useState({});
  const [feature, setFeature] = useState([]);
  const [gallery, setGallery] = useState({});
  const [others, setOthers] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_PRODUCTS_API}${page}/${id}`)
      .then((res) => res.json())
      .then((el) => {
        setData(el);
        setFeature(el.includes);
        setGallery(el.gallery);
        setOthers(el.others);
      });
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={style.container}>
      <h3 className={style.goBack} onClick={goBack}>
        {" "}
        Go Back
      </h3>
      <div className={style.cardWrapper}>
        <ForOneProductCard el={data} page />
      </div>
      <div className={style.featuredWrapper}>
        <div className={style.features}>
          <h3>FEATURES</h3>
          <p>{data.features}</p>
        </div>
        <div className={style.inTheBox}>
          <h3>IN THE BOX</h3>
          {feature.map((el, index) => {
            return (
              <div className={style.texts} key={index}>
                <h3>{el.quantity}x</h3>
                <p>{el.item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.imagesWrapper}>
        <div className={style.imagesFirst}>
          <img src={gallery.first} alt={data.name} />
          <img src={gallery.second} alt={data.name} />
        </div>
        <div className={style.imagesThird}>
          <img src={gallery.third} alt={data.name} />
        </div>
      </div>
      <h3 className={style.moreProductsTitle}>you may also like</h3>
      <div className={style.moreProducts}>
        {others.map((el, index) => {
          return (
            <div className={style.moreCard} key={index}>
              <div className={style.moreCardImg}>
                <img src={el.image} alt="" />
              </div>
              <h3 className={style.moreTitle}>{el.name}</h3>
              <Link
                to={`/products/${page}/${el.id}`}
                className={style.moreLink}
              >
                SEE PRODUCT
              </Link>
            </div>
          );
        })}
      </div>
      <ProductSmallCard/>
    </div>
  );
}

export default ProductPage;
