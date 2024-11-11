import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
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
      {/* <main>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </main> */}
      <iframe
        className="border border-red-500"
        width="100%"
        height="650px"
        frameBorder="0"
        src="https://varosatech.speedtestcustom.com"
      ></iframe>
    </HelmetProvider>
  );
}

export default App;
