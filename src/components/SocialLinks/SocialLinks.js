import { SocialLinksData } from './SocialLinksData'

const SocialLinks = () => {

    return (

        <div className='hidden lg:flex flex-row top-[60%] left-0 fixed z-50' data-aos="zoom-in-right" >

            <ul>
                {
                    SocialLinksData.map(({ child, href, style, download, id, delay }) =>

                    (<li key={id} className={`flex justify-between items-center w-[9rem] h-12 px-3 hov-dur
                     bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-4px] duration-300 ${style}`}
                        data-aos='zoom-in-right' data-aos-delay={delay} >

                        <a href={href} target="_blank" rel="noreferrer" download={download} className='w-full text-white font-bold flex justify-between' >{child}</a>

                    </li>))
                }
            </ul>


        </div >
    )
}

export default SocialLinks