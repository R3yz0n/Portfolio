import React from "react";
import { SocialLinksData } from "../SocialLinks/SocialLinksData";

const SocialMenu = () => {
  return (
    <div
      className="flex flex-row top-[20%] left-0 absolute md:hidden "
      data-aos="fade-right"
      data-aos-duration="1200"
    >
      <ul>
        {SocialLinksData.map(({ child, href, style, download, id }) => (
          <li
            key={id}
            className={`flex  justify-between items-center w-[9.1rem] h-14 px-3 sm:h-16 
                     bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-4px] duration-300 ${style}`}
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              download={download}
              className="w-full text-white font-bold flex justify-between"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMenu;
