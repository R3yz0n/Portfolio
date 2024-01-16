import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Home from "./components/Home/Home";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
