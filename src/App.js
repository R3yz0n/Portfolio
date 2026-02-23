import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { HelmetProvider } from "react-helmet-async";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease", once: "true" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  console.log("hi reyzon!");

  return (
    <HelmetProvider>
      <main>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </main>
    </HelmetProvider>
  );
}

export default App;
