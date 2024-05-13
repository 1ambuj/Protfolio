import About from "./components/About";
import Header from "./components/Home";
import "./App.css"
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {


  return (
      <>
        <Header />
       <main role="main">
          <Work />
          <About />
       </main>
       <Contact />
       <Footer />
       <a href="#top" className="back-to-top" title="Back to Top">
        <img src="./images/arrow-up.svg" alt="Back to Top" className="back-to-top__image"/>
      </a>
      </>
  )
}

export default App
