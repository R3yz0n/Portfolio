import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Skills",
      link: "portfolio",
    },
    {
      name: "About",
      link: "portfolio",
    },
    {
      name: "Profile",
      link: "portfolio",
    },
  ];
  return (
    <div className="h-full w-30  ">
      <h1 className="text-3xl font-semibold text-white flex gap-3 items-center h-20   pl-3">
        <FaHome />
        <span>Portfolio</span>
      </h1>
      <ul className="flex md:flex-col text-gray-400 t gap-2 w-full md:w-4/5 ">
        {links.map((link, i) => (
          <Link
            key={i}
            className="py-2 px-3  pl-3 bg-inherit border-gray-700 border   hover:bg-blend-darken from-[rgb(27,33,41)] to-black hover:border-gray-700 rounded-tr-2xl rounded-br-2xl transition-all hover:-translate-y-1 duration-500"
            to={link.link}
          >
            {link.name}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
