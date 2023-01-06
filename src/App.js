import Navbar from "./components/Navbar/Navbar";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from "./Loader/Loader";
import Home from "./components/Home/Home";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import ContextProvider from "./Store/ContextProvider";
import Footer from "./components/Footer";

function App() {
  const [toLoad, setToLoad] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease", once: 'true' });
    setToLoad(true);
    setTimeout(() => {
      setToLoad(false);

    }, 3600);

  }, [])





  return (
    <>


      {toLoad ?
        <Loader /> :
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


      }



    </>
  );
}

export default App;
