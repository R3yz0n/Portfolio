import Arrow from '../../assets/arrow.gif'
const PortfolioTextSection = () => {
    return (
        <div className='pb-3 md:pb-6 pt-4' >
            <p className='text-3xl sm:text-4xl md:text-5xl opacity-80 font-bold flex px-1 '>

                <span className='border-gray-500 border-b-4 rounded-md px-2' >Portfolio</span>

                <img src={Arrow} className='w-10 md:w-12 rotate-90 mx-2' alt="ERR" />
            </p>

            <p className='py-6 text-[1.1rem] md:text-[1.4rem] font-josefin-sans' id='portfolio'>Checkout some of my work right here .</p>
        </div>
    )
}

export default PortfolioTextSection