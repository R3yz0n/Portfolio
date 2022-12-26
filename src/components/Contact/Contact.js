import React from 'react'

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>

            <div>
                <div>
                    <p>Contact Me</p>
                    <p>Submit the form beolow to get in touch</p>
                </div>

                <div>

                    <form action="">

                        <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                        <textarea name="message" cols="30" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                        <button className='text-white bg-gradient-to-b from=cyan-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-75'>Let's Talk</button>
                    </form>
                </div>

            </div>


        </div>
    )
}

export default Contact