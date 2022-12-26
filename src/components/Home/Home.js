import MyProfilePic from '../../assets/reyzon.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import SocialMenu from './SocialMenu';

const Home = () => {
    const myDescription = `I have 8 years of experience building and designing UI/UX Application.
    Currently , I love to work on web application using technologies like
    React, Tailwind, Figma, JS and Git.`
    return (

        <main name='home' className='min-h-[90vh]   w-full bg-gradient-to-b from-black via-black  to-gray-800 text-white pt-8'>



            <article className='max-w-[1100px]   mx-auto flex flex-col-reverse md:flex-row h-full items-center '>

                <section className='flex flex-col justify-center  md:w-[70%] py-12  px-6' data-aos='zoom-in' data-aos-duration='1400'>
                    <h1 className='text-3xl sm:text-4xl lg:text-7xl font-bold text-white'>I'm a Front-end Developer</h1>

                    <p className='text-gray-500 py-4 max-w-lg sm:text-xl text-[1.17rem]' data-aos='fade-left' data-aos-duration='1600'>{myDescription}</p>

                    <div data-aos="fade-up" data-aos-duration='1300'>
                        <button className='group w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r
                        from-cyan-500 to-blue-500 cursor-pointer font-bold tracking-[1.7px]'>Portfolio
                            <span className='group-hover:rotate-90 duration-500'><MdOutlineKeyboardArrowRight size={35} /></span></button>

                    </div>

                </section>

                <section className='md:pt-10 max-w-[320px] lg:max-w-[400px] max-h-[900px] px-10  md:mt-10 ml-[20%] md:ml-0'>
                    <img src={MyProfilePic} alt="My Profile" className='rounded-2xl h-full w-full' data-aos='fade-down' data-aos-duration='2000' />

                    <SocialMenu />
                </section>


            </article>
        </main >
    )
}

export default Home
