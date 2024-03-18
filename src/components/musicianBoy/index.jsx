import styles from "./index.module.css";

function MusicanBoy() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.musicBlock}>
        <div className={styles.musicImage} data-aos="fade-up-left"></div>
        <div className={styles.musicInfo} data-aos="fade-up-right">
          <h2>
            BRINGING YOU THE <span>BEST</span> AUDIO GEAR
          </h2>
          <p>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default MusicanBoy;
