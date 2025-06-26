import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Home from "./components/Home/Home";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import SEOHead from "./components/SEO/SEOHead";
import { seoData, pagesSEO } from "./utils/seoData";

const Layout = () => {
  return (
    <>
      {/* Enhanced SEO with structured data */}
      <SEOHead
        title={pagesSEO.home.title}
        description={pagesSEO.home.description}
        keywords={pagesSEO.home.keywords}
        url={pagesSEO.home.path}
        structuredData={seoData.structuredData}
      />

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
