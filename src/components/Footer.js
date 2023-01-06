import React from 'react'

const Footer = () => {
    const text = ['R', 'E', 'Y', 'Z', 'O', 'N', '©', '2', '0', '2', '3']

    return (
        <div className='bg-[rgb(17,24,39)] text-white pt-10 pb-14 w-full flex align-baseline flex-row-reverse '>

            <p className='w-full  h-full text-center opacity-70 font-font '> {text.map((each, index) => <span className='px-1' key={index}>{each}</span>)}</p>

        </div>
    )
}

export default Footer