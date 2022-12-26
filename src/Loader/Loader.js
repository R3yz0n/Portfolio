import LoaderImg from './loader.gif'

const Loader = () => {
    return (
        <div className="fixed z-10 h-screen w-full bg-black flex m-auto" >
            <img src={LoaderImg} className='h-[200px] w-[200px] m-auto' alt="" />
        </div>
    )
}

export default Loader;