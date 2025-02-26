import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Slider from "../components/Slider.jsx";
import StoreMotto from "../components/StoreMotto.jsx";
import AboutUs from "../components/AboutUs.jsx";
// import BestSellers from '../components/BestSellers.jsx';
import HomeBestSellers from "../components/HomeBestSellers.jsx";
import BestSellers from "../components/BestSellers.jsx";
import "../App.css";

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <AboutUs />
      <Slider />
      <StoreMotto />
      <p className="title_BestSellers">Бестселлеры</p>
      <HomeBestSellers />
      <p className="title_BestSellers" id="CatalogHome">
        Каталог
      </p>
      <BestSellers />
      <p className="title_BestSellers" id="CatalogHome">
        Чтобы посомтрет полный ассмортимент <br /> Зарегестрируйтесь
      </p>
      <Footer />
    </div>
  );
}

export default Home;
