import LoaderImg from './loader.gif'

const Loader = () => {
    return (
        <div className="fixed z-10 h-screen w-full  flex m-auto  bg-[rgb(19,17,19)]" >
            <div className='m-auto'>
                <img src={LoaderImg} className=' m-auto' alt="" />
            </div>

        </div>
    )
}

export default Loader;