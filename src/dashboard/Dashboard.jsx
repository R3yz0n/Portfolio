import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Projects from "./Projects";
import SEOHead from "../components/SEO/SEOHead";
import { pagesSEO } from "../utils/seoData";

const Dashboard = () => {
  return (
    <>
      <SEOHead
        title={pagesSEO.dashboard.title}
        description={pagesSEO.dashboard.description}
        keywords={pagesSEO.dashboard.keywords}
        url={pagesSEO.dashboard.path}
        noIndex={true} // Don't index admin pages
      />
      <main className=" min-h-screen md:h-screen w-screen bg-gradient-to-b from-[rgb(27,33,41)] to-black flex md:flex-row flex-col">
        <Sidebar />
        <section className="min-h-full  md:w-full overflow-y-auto  pt-10  md:px-20 lg:px-32 ">
          <Routes>
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
