import './App.css'
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
          <header className="header">
              {/*  Navigation  */}
          <Navigation/>
          </header>


          <section>
          {/*  PageTitle  */}
          <PageTitle/>
          {/*  Introduction  */}
          <Introduction/>
          </section>

          <section>
          {/*  Products  */}
              <ProductsTitle/>
              <Products/>
          </section>

          <section>
              {/*  ContactUs  */}
             <ContactUs/>
          </section>

          <section>
              {/*  InterestingTopics  */}
              <InterestingTopics/>
          </section>

          <footer>
          {/*  Footer  */}
          <Footer/>
          </footer>

      </>
  )
}

export default App
