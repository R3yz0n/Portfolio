import { useEffect, useState } from "react";
import { BsArrowRight, BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getProjectData } from "../../utils/constants";
import PortfolioTextSection from "./PortfolioTextSection";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const INITIAL_PROJECTS_COUNT = 4;

const Portfolio = () => {
  const [projects, setProjects] = useState(getProjectData());
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS_COUNT);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);
  const [modalMainImage, setModalMainImage] = useState(null);

  const handleInfoClick = (project) => {
    setModalProject(project);
    setModalMainImage(project.featuredImage);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalProject(null);
    setModalMainImage(null);
  };
  useEffect(() => {
    setProjects(getProjectData());
  }, []);
  return (
    <>
      {/* Modal for project info */}
      {modalOpen && modalProject && (
        <div className="fixed transition-all duration-700 inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-gray-900 max-h-[80vh] md:max-h-[95vh] overflow-y-auto thin-scrollbar rounded-lg shadow-lg p-6 max-w-4xl w-full relative">
            <button
              className="absolute top-0  leading-6 flex right-2 text-white text-5xl hover:text-yellow-400"
              onClick={handleCloseModal}
              aria-label="Close"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-2 text-white">{modalProject.title}</h2>
            <img
              src={modalMainImage || modalProject.featuredImage}
              alt={modalProject.title}
              className="w-full rounded mb-4 md:max-h-[364px] max-h-80 object-cover cursor-pointer"
              loading="eager"
              onClick={() => window.open(modalMainImage || modalProject.featuredImage, "_blank")}
            />
            {modalProject.images && modalProject.images.length > 0 && (
              <div className="flex gap-5 my-4 flex-wrap">
                {[modalProject.featuredImage, ...modalProject.images].map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Image ${idx + 1}`}
                    className={`w-24 h-16 border-2 object-cover rounded duration-100 transition-all cursor-pointer hover:brightness-75 ${modalMainImage === img ? "transform scale-125" : "border-transparent"}`}
                    onClick={() => setModalMainImage(img)}
                    loading="eager"
                  />
                ))}
              </div>
            )}
            <p className="mb-2 text-xs sm:text-sm text-justify text-gray-200 whitespace-pre-line">
              {modalProject.description}
            </p>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-t  from-[rgb(27,33,41)] to-gray-800 w-full text-white min-h-screen pb-4 py-16 flex">
        <div className="md:w-[95%] xl:w-[85%]  2xl:p-4 mx-auto flex flex-col justify-center  h-full overflow-hidden">
          <PortfolioTextSection />
          <div className="grid   lg:grid-cols-1 gap-12  md:gap-6 lg:gap-10  sm:px-0 ">
            {projects?.slice(0, visibleCount).map((project, i) => (
              <div
                key={project?.id}
                className={` shadow-md flex flex-col lg:flex-row  md:gap-6 gap-0 lg:gap-14   sm:w-auto  overflow-hidden    lg:h-72 bg-gray-800 ${
                  i % 2 === 0 ? "lg:flex-row-reverse md:pr-9 " : "md:pl-5"
                }`}
              >
                <aside className="py-5 w-full lg:w-1/2 h-full relative md:px-5">
                  <h3 className="flex justify-between mb-3 md:mb-4 items-center group  px-3 md:px-0">
                    <span className="text-xl md:text-2xl line-clamp-1">{project?.title}</span>
                    <div
                      className="flex gap-1  items-center hover:underline cursor-pointer hover:text-yellow-500"
                      onClick={() => handleInfoClick(project)}
                    >
                      Info
                      <BsEye />
                    </div>
                  </h3>
                  <hr className="mb-3 w-[96%] md:w-full mx-auto" />
                  <div className="text-opacity-60 overflow-hidden scrol  sm:text-sm leading-5 text-white overflow-y-auto px-3 md:px-0 text-justify  max-h-32">
                    <div className="text-opacity-60 overflow-hidden scrol whitespace-pre-line  line-clamp-6 lg:line-clamp-6  text-xs sm:text-sm leading-5 text-white overflow-y-auto px-1 md:px-0 text-justify max-h-32 hide-scrollbar">
                      {project?.description}
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 text-sm mt-4 lg:mt-0  lg:absolute bottom-5 right-0 w-full px-5">
                    {project?.site && (
                      <Link
                        to={project?.site}
                        className="text-base border rounded tracking-wider px-3 py-0.5 flex items-center gap-2 cursor-pointer"
                        target="_blank"
                      >
                        Live
                        <BsArrowRight className="font-bold group-hover:translate-x-1 duration-300 transition-all" />
                      </Link>
                    )}
                    {project?.code && (
                      <Link
                        to={project?.code}
                        className="text-base border rounded tracking-wider px-3 py-0.5 flex items-center gap-2 cursor-pointer"
                        target="_blank"
                      >
                        Code
                        <BsArrowRight className="font-bold group-hover:translate-x-1 duration-300 transition-all" />
                      </Link>
                    )}
                  </div>
                </aside>
                <img
                  src={project?.featuredImage}
                  data-aos="fade"
                  data-aos-duration="500"
                  onClick={() => window.open(project?.featuredImage, "_blank")}
                  alt="ERR"
                  className="duration-300 md:px-1 cursor-pointer hover:brightness-75 mix-blend-normal object-cover h-auto max-h-64 lg:max-h-72 aspect-video w-full lg:w-1/2"
                />
              </div>
            ))}
          </div>
          {visibleCount < projects.length && (
            <div className="flex justify-center mt-8">
              <div data-aos="fade" className="z-50 inline-block" data-aos-duration="1300">
                <button
                  onClick={() => setVisibleCount(projects.length)}
                  className="group z-50 w-fit px-4 py-1  mt-3  flex items-center rounded-md bg-gradient-to-r hover:shadow-purple-700 hover:shadow-sm from-cyan-500 to-blue-500 cursor-pointer font-bold tracking-[2px] "
                  to="portfolio"
                  smooth={true}
                >
                  Show More
                  <span className="group-hover:rotate-90 duration-500">
                    <MdOutlineKeyboardArrowRight size={35} />
                  </span>
                </button>
              </div>
            </div>
          )}
          {visibleCount >= projects.length && projects.length > INITIAL_PROJECTS_COUNT && (
            <div className="flex justify-center mt-8">
              <div data-aos="fade" className="z-50 inline-block" data-aos-duration="1300">
                <button
                  onClick={() => setVisibleCount(INITIAL_PROJECTS_COUNT)}
                  className="group z-50 w-fit px-4 py-1  flex items-center rounded-md bg-gradient-to-r hover:shadow-purple-700 hover:shadow-sm from-blue-500 to-cyan-500 cursor-pointer font-bold tracking-[2px] "
                  to="portfolio"
                  smooth={true}
                >
                  Show Less
                  <span className="group-hover:-rotate-90 duration-500">
                    <MdOutlineKeyboardArrowRight size={35} />
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
