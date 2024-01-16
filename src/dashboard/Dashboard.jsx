import React from "react";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Projects from "./Projects";

const Dashboard = () => {
  return (
    <main className=" min-h-screen md:h-screen w-screen bg-gradient-to-b from-[rgb(27,33,41)] to-black flex md:flex-row flex-col">
      <Sidebar />
      <section className="min-h-full  md:w-full overflow-y-auto  pt-10  md:px-20 lg:px-32 ">
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </section>
    </main>
  );
};

export default Dashboard;
