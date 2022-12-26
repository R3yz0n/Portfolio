import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react';
import Avatar from '../logo/Avatar';



const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = ['home', 'about', 'portfolio', 'experience', 'contact'];


    const linksRow = links.map((link) => <li data-aos="zoom-in" className='px-6 cursor-pointer capitalize font-medium text-[#f9ceadda]
    hover:scale-95 duration-200 hover:bg-[#242323] flex items-center text-lg lg:text-[1.3rem]'><a href={`#${link}`}>{link}</a></li>);


    const linksCol = links.map((link) => <li className='px-4 py-6 text-3xl cursor-pointer capitalize font-bold text-[#f9ceadda]
   font-josefin-sans duration-200  hover:animate-pulse hover:scale-150 hover:text-white' data-aos="zoom-in">{link}</li>);


    const toggleNavHandler = () => setNav(!nav);


    return (

        <nav className='flex justify-between items-center w-full h-20 text-white bg-[rgb(11,15,20)] px-4'>

            <div className='flex px-3'>
                <span data-aos="fade-right" data-aos-duration='1200'><Avatar /></span>
                <h2 className='pl-4 text-xl pt-2 text-[#f4d731]' data-aos="zoom-in-down" data-aos-duration='900'>ELEVEN • Net</h2>
            </div>

            <ul className='hidden md:flex text-xl h-full px-4'>{linksRow} </ul>


            <div className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden ' onClick={toggleNavHandler} data-aos='zoom-in-down' data-aos-duration='1000'>
                {!nav && <FaBars size={30} />}
            </div>


            <ul className={nav ? `flex flex-col py-6 items-center fixed top-0 left-0 w-[100%] h-[130vh] bg-gradient-to-b
                 from-black to-gray-800 ease-in-out duration-700 z-10 `: `fixed left-[-400px] w-0`} >

                <li className='py-2 ml-[85%] animate-pulse' onClick={toggleNavHandler} data-aos="fade-right"> <FaTimes size={40} /></li>

                {linksCol}
            </ul>

        </nav>


    )
}
export default Navbar;
