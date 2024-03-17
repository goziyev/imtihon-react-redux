import HomeComponent from "../../components/homeComponent";
import MusicanBoy from "../../components/musicianBoy";
import ProductSmallCard from "../../components/productCards";
import YxOneCard from "../../components/yxOneCard";
import ZxSeventhCard from "../../components/zx7Card";
import ZxFristCard from "../../components/zxfirstCard";

function Home() {
  return (
    <div>
      <HomeComponent />
      <ProductSmallCard />
      <ZxFristCard />
      <ZxSeventhCard />
      <YxOneCard />
      <MusicanBoy />
    </div>
  );
}

export default Home;
