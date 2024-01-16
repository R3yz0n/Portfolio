import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Layout from "./Layout";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, easing: "ease", once: "true" });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
