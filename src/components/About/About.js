import PozzyImg from '../../assets/pozzy.jpg'
const About = () => {
    const desc = <> Hey, I am Sagar Thapa Chhetri a.k.a. (Reyzon) , a Front-end Developer based in Butwal, Nepal. I am currently
        pursuing Bachelors  in Computer Application  (BCA), currently in my second-year.
        <br /><br />
        I love building stuffs on web and have always been passionate about building something cool on my own.
        Furthermore, I have been working as a Web Developer for more than 2.5yrs in both commercial and personal
        projects. By the way, I am always open for work, you can hit me up in the links below. Have a great day !</>

    return (
        <div name='about' className="w-full min-h-[80vh] text-white bg-gradient-to-b from-gray-800 to-gray-800 m-auto py-0 overflow-hidden ">



            <p className='text-center text-4xl sm:text-5xl py-4' data-aos='fade-down'>Who is this guy?</p>


            <main className='flex flex-col sm:flex-row w-[85%]  h-auto mx-auto'>

                <section className=' w-[85%] sm:h-auto sm:w-1/3 mx-auto' data-aos='zoom-out-right'>

                    <img src={PozzyImg} className='h-full w-full mx-auto sm:rounded-tl-lg sm:rounded-bl-md cursor-grab' alt="CANDID" />
                </section>

                <section className='w-full mx-auto pb-4 sm:pb-0 md:w-2/3 font-josefin-sans flex flex-col gap-3 sm:shadow-lg md:border-[3px] border-[rgb(39,48,61)] md:border-l-0 overflow-hidden'>

                    <p className='text-3xl text-center underline py-4' data-aos='fade-down' data-aos-duration="1600">Brief about me</p>
                    <p className='font-josefin-sans sm:px-6 text-sm md:text-md lg:text-lg pb-6' data-aos='fade-down' >{desc}</p>

                </section>

            </main>




        </div>
    )
}

export default About