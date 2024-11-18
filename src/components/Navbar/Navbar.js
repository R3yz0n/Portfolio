import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import Avatar from "./Avatar";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const toggleNavHandler = () => setNav(!nav);

  const links = [
    { name: "home", time: 300, delay: 100 },
    { name: "about", time: 500, delay: 200 },
    { name: "projects", time: 500, delay: 300 },
    { name: "experience", time: 500, delay: 400 },
    { name: "contact", time: 500, delay: 500 },
  ];

  const linksRow = links.map((link, index) => (
    <li
      // data-aos="fade"
      className="px-6 cursor-pointer capitalize font-medium text-white
    hover:scale-95 duration-200 hover:bg-[#242323] flex items-center text-lg lg:text-[1.3rem]"
      key={index}
      // data-aos-delay={link.delay}
    >
      <Link
        duration={link.time}
        smooth={true}
        to={link.name}
        spy={true}
        offset={-70}
        className="opacity-80 hover:opacity-100 py-4 "
      >
        {link.name}
      </Link>
    </li>
  ));

  const linksCol = links.map((link, index) => (
    <li
      className="px-4 py-6 text-3xl cursor-pointer capitalize font-bold text-[#f9ceadda]
   font-josefin-sans duration-200  hover:animate-pulse hover:scale-150 hover:text-white"
      data-aos="zoom-in"
      key={index}
    >
      <Link
        duration={link.time}
        onClick={toggleNavHandler}
        smooth={true}
        spy={true}
        offset={-70}
        to={link.name}
      >
        {link.name}
      </Link>
    </li>
  ));

  return (
    <nav
      id="nav"
      className="flex  justify-between items-center w-full h-24 text-white bg-black border-b-[1px] border-gray-600 md:border-gray-900 px-4 z-50"
    >
      <div className="flex px-3">
        <span data-aos="fade" data-aos-duration="1200">
          <Avatar />
        </span>
        <h2 className="pl-4 text-xl pt-2 text-[#f4d731]" data-aos="zoom-in" data-aos-duration="900">
          ELEVEN • Net
        </h2>
      </div>

      <ul className="hidden md:flex text-xl h-full px-4 overflow-hidden">{linksRow} </ul>

      <div
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
        onClick={toggleNavHandler}
        data-aos="fade"
        data-aos-duration="1000"
      >
        {!nav && <FaBars size={30} />}
      </div>

      <ul
        className={
          nav
            ? `flex flex-col py-6 items-center fixed top-0 left-0 w-[100%] h-[130vh] bg-gradient-to-b
                 from-black to-gray-800 ease-in-out duration-700 z-50 `
            : `fixed left-[-400px] w-0`
        }
      >
        <li
          className="py-2 ml-[85%] animate-pulse"
          onClick={toggleNavHandler}
          data-aos="fade-right"
        >
          {" "}
          <FaTimes size={40} />
        </li>

        {linksCol}
      </ul>
    </nav>
  );
};
export default Navbar;
