import Arrow from "../../assets/arrow.gif";
import { FaLightbulb } from "react-icons/fa";

const PortfolioTextSection = () => {
  return (
    <div id="projects" className="pb-6 md:pb-6 mb-8 pt-4 ">
      <p className="text-3xl sm:text-4xl md:text-5xl opacity-80 font-bold flex px-1 items-center">
        <span className=" rounded-md px-2 font-sa">Projects</span>

        <FaLightbulb className=" md:ml-2 -mt-1.5 text-yellow-400 text-2xl sm:text-3xl md:text-4xl" />
      </p>
    </div>
  );
};

export default PortfolioTextSection;
