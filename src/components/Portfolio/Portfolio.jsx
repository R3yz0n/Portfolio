import { BsArrowRight } from "react-icons/bs";
import PortfolioTextSection from "./PortfolioTextSection";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link } from "react-router-dom";
const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const navigateToImage = (image) => {
    window.open(image, "_blank");
  };
  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const projects = await getDocs(collection(db, "projects"));
        const projectsData = projects.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProjects([...projectsData]);
        // console.log(projectsData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNotices();
  }, []);
  return (
    <div className="bg-gradient-to-t from-[rgb(27,33,41)] to-gray-800 w-full text-white min-h-screen pb-4 py-16 flex">
      <div
        className="sm:w-[85%] 2xl: p-4 mx-auto flex flex-col justify-center  h-full overflow-hidden"
        id="portfolio"
      >
        <PortfolioTextSection />

        <div className="grid   md:grid-cols-1 gap-12  md:gap-6 lg:gap-10  sm:px-0 ">
          {projects?.map((project, i) => (
            <div
              key={project?.id}
              className={` shadow-md flex flex-col md:flex-row  md:gap-6 gap-0 lg:gap-14   sm:w-auto  overflow-hidden   lg:h-72 bg-gray-800 ${
                i % 2 === 0 ? "md:flex-row-reverse md:pr-5" : "md:pl-5"
              }`}
            >
              <aside className="py-5 w-full md:w-1/2 h-full ">
                <h3 className="flex justify-between mb-3 md:mb-4 items-center group  px-3 md:px-0">
                  <span className="text-xl md:text-2xl">{project?.title}</span>
                  <Link
                    to={project?.link}
                    className="text-base border rounded tracking-wider px-3 py-0.5 flex items-center gap-2 cursor-pointer"
                    target="_blank"
                  >
                    Live
                    <BsArrowRight className="font-bold text-lg group-hover:translate-x-1 duration-300 transition-all" />
                  </Link>
                </h3>
                <hr className="mb-3 w-[96%] md:w-full mx-auto" />
                <div
                  className="text-opacity-60 t text-xs sm:text-[13px] leading-5 text-white overflow-y-auto px-3 md:px-0 text-justify  "
                  data-aos="fade"
                  data-aos-duration="500"
                >
                  {project?.description}
                </div>
              </aside>
              <img
                src={project?.image}
                data-aos="zoom-out"
                data-aos-duration="500"
                onClick={() => navigateToImage(project?.image)}
                alt="ERR"
                className="duration-300 cursor-pointer hover:brightness-75 mix-blend-normal object-cover h-auto max-h-64 lg:max-h-72 aspect-video w-full md:w-1/2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
