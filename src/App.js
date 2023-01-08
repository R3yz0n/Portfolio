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
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Mails from "./mails/Mails";

function App() {
  // backend

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease", once: 'true' });

  }, [])





  return (
    <>

      <Routes>
        <Route path='/' element={<>
          <Navbar />
          <Home />
          <SocialLinks />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />
        </>} />

        <Route path='/mails' element={<Mails />} />

      </Routes>


    </>
  );
}

export default App;
