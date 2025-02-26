import Footer from '../components/Footer.jsx';
import '../components/catalog/Catalog.css'
import '../components/StoreMotto.jsx'
import HeaderProfile from "../components/HeaderProfile.jsx";
import ProductCard from '../components/ProductCardr.jsx';

export default function ProductPage() {
  return (
    <div className='wrapper'>
      <HeaderProfile />
      <ProductCard />
      <Footer />
    </div>
  )
}
