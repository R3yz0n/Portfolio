import portfolios from './PortfoliosData';
import PortfolioTextSection from './PortfolioTextSection';

const Portfolio = () => {


    return (

        <div name='portfolio' className='bg-gradient-to-t from-[rgb(27,33,41)] to-gray-800 w-full text-white min-h-screen pb-4'>

            <div className='max-w-[1080px] 2xl: p-4 mx-auto flex flex-col justify-center w-full h-full overflow-hidden'>
                <PortfolioTextSection />

                <div id='portfolio' className='grid sm:grid-cols-2  md:grid-cols-3 gap-6 md:gap-10  sm:px-0'>
                    {
                        portfolios.map(({ id, src, aos }) =>

                            <div key={id} data-aos={aos} data-aos-duration="1200" className='shadow-md shadow-gray-600 rounded-xl w-[80%] sm:w-auto mx-auto overflow-hidden'>
                                <img src={src} alt="ERR" className='rounded-md duration-500 hover:scale-110' />

                                <div className='flex item-center justify-center text-xl md:text-2xl font-josefin-sans'>
                                    <button className='w-1/2 p-3 md:p-5  duration-200 hover:bg-gray-800 hover:text-yellow-400'>Demo</button>
                                    <button className='w-1/2 p-3 md:p-5 duration-200  hover:bg-gray-800 hover:text-yellow-400'>Code</button>
                                </div>
                            </div>
                        )
                    }
                </div>


            </div>

        </div>
    )
}

export default Portfolio