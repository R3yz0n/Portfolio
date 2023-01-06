import MyProfilePic from '../../assets/reyzon.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import SocialMenu from './SocialMenu';
import ParticlesAnimation from '../../Particles/ParticlesAnimation';
import { BsArrowUpCircle } from 'react-icons/bs';

import { Context } from '../../Store/ContextProvider';
import { Link } from 'react-scroll';
import SocialLinks from '../SocialLinks/SocialLinks';

const Home = (props) => {
    const myDescription = `I have 8 years of experience building and designing UI/UX Application.
    Currently , I love to work on web application using technologies like
    React, Tailwind, Figma, JS and Git.`

    const { toLoadParticles } = Context()

    return (

        <main name='home' className='min-h-[90vh] w-full bg-gradient-to-b from-black  to-gray-800 text-white pt-12 md:relative overflow-hidden'>

            {toLoadParticles && <div name='Particle-JS'><ParticlesAnimation /></div>}

            <article className='max-w-[1100px]   mx-auto flex flex-col-reverse md:flex-row h-full items-center'>

                <section className='flex flex-col justify-center  md:w-[70%] py-12  px-6' data-aos='zoom-in' data-aos-duration='1400'>
                    <h1 className='text-3xl sm:text-4xl lg:text-7xl font-bold text-white '>I<span className='animate-pulse'>'</span>m a Front-end Developer</h1>

                    <p className='text-gray-500 py-4 max-w-lg sm:text-xl text-[1.17rem]' data-aos='fade-left' data-aos-duration='1600'>{myDescription}</p>

                    <div data-aos="fade-up" data-aos-duration='1300'>

                        <Link className='group w-fit px-6 py-2 my-2 flex items-center rounded-md bg-gradient-to-r hover:shadow-purple-700
                         hover:shadow-sm from-cyan-500 to-blue-500 cursor-pointer font-bold tracking-[3px] md:text-xl  'to='portfolio' smooth={true}>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-500'><MdOutlineKeyboardArrowRight size={35} /></span>
                        </Link>

                    </div>

                </section>

                <section className='md:pt-10 max-w-[320px] lg:max-w-[400px] max-h-[900px] px-10  md:mt-10 ml-[20%] md:ml-0 z-30'>
                    <img src={MyProfilePic} alt="My Profile" className='rounded-2xl h-full w-full cursor-grab' data-aos='fade-down' data-aos-duration='2000' />

                    <SocialMenu />
                    <SocialLinks />
                </section>


            </article>

            <Link className='hidden md:flex fixed z-50 bottom-3 right-5 duration-300  animate-bounce hover:animate-none opacity-70 hover:opacity-100 cursor-pointer' to='nav' smooth={true}>
                <BsArrowUpCircle size={60} style={{ borderRadius: '50%', backgroundColor: 'rgb(28,69,175)' }} />
            </Link>
        </main >
    )
}

export default Home
