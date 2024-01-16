import techs from "./ExperienceTechs";
import ExperienceTextSection from "./ExperienceTextSection";

const Experience = () => {
  return (
    <div className="bg-gradient-to-b from-[rgb(27,33,41)] to-black w-full min:h-screen  overflow-hidden pt-16">
      <div className="max-w-screen-lg mx-auto p-4  xl:px-0 flex flex-col justify-center w-full h-full text-white">
        <ExperienceTextSection />

        <main className="w-full lg:w-[1000px] grid grid-cols-2 sm:grid-cols-3 text-center py-8 px-6 lg:px-0  gap-x-8 lg:gap-x-16 gap-y-14 ">
          {techs.map(({ id, src, title, style, aos }) => (
            <section
              key={id}
              data-aos={aos}
              className={`my-1 md:my-0 shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer hover:text-red-300 ${style}`}
            >
              <img src={src} alt="ERR" className="w-16 sm:w-20 md:w-[85px] mx-auto" />
              <p className="mt-4 text-md md:text-lg font-bold">{title}</p>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Experience;
