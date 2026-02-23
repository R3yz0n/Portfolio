import techs from "./ExperienceTechs";
import ExperienceTextSection from "./ExperienceTextSection";

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-[rgb(27,33,41)] to-black w-full min:h-screen  overflow-hidden pt-10 flex">
      <div className="sm:w-[85%] p-4  xl:px-0 flex flex-col justify-center w-full h-full text-white mx-auto">
        <ExperienceTextSection />

        <main className="w-full  grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 px-4 sm:px- md:px-0 text-center py-8   gap-x-8 lg:gap-x-16 gap-y-14  md:mt-6">
          {techs.map(({ id, src, title, style, aos }) => (
            <section
              key={id}
              data-aos={aos}
              className={`my-1 md:my-0 shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer hover:text-red-300 ${style}`}
            >
              <img src={src} alt="ERR" className="w-16 sm:w-20 md:w-[85px] mx-auto" />
              <p className="mt-4 text-md md:text-lg font-old">{title}</p>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Experience;
