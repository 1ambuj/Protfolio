import About from "./components/About";
import Header from "./components/Home";
import "./App.css"
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

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
       <BackToTopButton />
      </>
  )
}

export default App
