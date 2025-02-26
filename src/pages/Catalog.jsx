// import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import '../components/catalog/Catalog.css'
import '../components/StoreMotto.jsx'
import BestSellers from '../components/BestSellers.jsx';
import CatalogFilters from '../components/catalog/CatalogFilters.jsx';
import HeaderProfile from "../components/HeaderProfile.jsx";

function Catalog() {
  return (
    <div className='wrapper'>
      <HeaderProfile />
      <CatalogFilters />
      <BestSellers />
      <Footer />
    </div>
  );
}

export default Catalog;