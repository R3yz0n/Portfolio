import { SocialLinksData } from "./SocialLinksData";

const SocialLinks = () => {
  return (
    <div className="hidden lg:flex flex-row top-[55%] left-0 fixed z-50 ">
      <ul>
        {SocialLinksData.map(({ child, href, style, download, id }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-[9.1rem] h-14 px-3
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

export default SocialLinks;
