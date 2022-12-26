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

function App() {
  const [toLoad, setToLoad] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    setToLoad(true);
    setTimeout(() => {
      setToLoad(false);

    }, 800);

  }, [])

  return (
    <>


      {false ?
        <Loader /> :
        <>
          <Navbar />
          <Home />
          <SocialLinks />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
        </>


      }

    </>
  );
}

export default App;
