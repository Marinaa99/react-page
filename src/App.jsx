import './App.scss'
import Footer from "./components/footer/Footer.jsx";
import PageTitle from "./components/title/pageTitle/PageTitle.jsx";
import Introduction from "./components/introduction/Introduction.jsx";
import ProductsTitle from "./components/title/productsTitle/ProductsTitle.jsx";
import Products from "./components/products/Products.jsx";
import ContactUs from "./components/contactUs/contactUs.jsx";
import InterestingTopics from "./components/interestingTopics/InterestingTopics.jsx";
import Navigation from "./components/navigation/Navigation.jsx";

function App() {


  return (
      <>

          <Navigation/>

          <Introduction/>

          <Products/>

          <ContactUs/>

          <InterestingTopics/>

          <Footer/>


      </>
  )
}

export default App
