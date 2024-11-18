import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Home from "./components/Home/Home";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import { Helmet } from "react-helmet-async"; // Import Helmet

const Layout = () => {
  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Sagar Thapa Chhetri</title>
        <meta
          name="description"
          content="This is a portfolio website built using React, showcasing projects, experience, and contact information."
        />
        <meta
          name="keywords"
          content="sagar, sagar thapa chhetri, sagar chhetri, reyzon thapa, reyzon thapa chhetri, nepathya college, react, foodzoone"
        />

        <meta
          property="og:title"
          content="Sagar Thapa Chhetri AKA Reyzon - Software Developer Portfolio"
        />
        <meta
          property="og:description"
          content="Visit my portfolio to see my web development projects, learn about my skills, and contact me for collaboration opportunities."
        />
        <meta
          property="og:image"
          content="https://www.sagarthapachhetri.com.np/static/media/reyzon.fe12d3d0333959e2a346.jpg"
        />
        <meta property="og:url" content="https://www.sagarthapachhetri.com.np" />

        <meta
          name="keywords"
          content="sagar, sagar thapa chhetri, sagar chhetri, reyzon thapa, reyzon thapa chhetri, nepathya college, react, foodzoone"
        />
      </Helmet>

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
