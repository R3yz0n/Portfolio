import { SocialLinksData } from './SocialLinksData'

const SocialLinks = () => {

    return (

        <div className='hidden flex-row top-[65%] left-0 fixed '>

            <ul>
                {
                    SocialLinksData.map(({ child, href, style, download, id }) =>

                    (<li key={id} className={`flex justify-between items-center w-[9rem] h-12 px-3
                     bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-4px] duration-300 ${style}`}>

                        <a href={href} target="_blank" rel="noreferrer" download={download}
                            className='w-full text-white font-bold flex justify-between'>{child}</a>

                    </li>))
                }
            </ul>


        </div >
    )
}

export default SocialLinks