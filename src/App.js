import Navbar from "./components/Navbar/Navbar";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from "./components/Home/Home";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import ContextProvider from "./Store/ContextProvider";
import Footer from "./components/Footer";

function App() {

  // it contais particles and preloader;




  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease", once: 'true' });

  }, [])





  return (
    <>

      <ContextProvider>
        <Navbar />
        <Home />
      </ContextProvider>
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />


    </>
  );
}

export default App;
