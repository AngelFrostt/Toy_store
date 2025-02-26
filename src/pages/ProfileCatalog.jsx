import HeaderProfile from "../components/HeaderProfile.jsx";
import Footer from '../components/Footer.jsx';
import '../components/catalog/Catalog.css'
import '../components/StoreMotto.jsx'
import BestSellers from '../components/BestSellers.jsx';
import CatalogFilters from '../components/catalog/CatalogFilters.jsx';

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