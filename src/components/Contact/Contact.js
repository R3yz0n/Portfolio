import React from 'react'
import ContactText from './ContactText'
import FormImg from '../../assets/form-control.png'
import Form from './Form'
import ContactIcons from './ContactIcons'

const Contact = () => {
    return (
        <main className='bg-gradient-to-b from-black to-gray-900 w-full py-20 overflow-x-hidden relative'>


            <section name='contact' className='w-full md:h-screen  py-1 text-white px-4 md:px-4'>

                <ContactText />

                <main className='flex max-w-[800px] mx-auto py-6 md:py-3 md:min-h-[80%] gap-10 border-gray-900 shadow-md shadow-gray-800 border-t-2 rounded-md mt-6 '>

                    <div className=' hidden md:flex m-auto w-[40%] '>
                        <img src={FormImg} alt="ERR" className='w-80' data-aos='zoom-in-right' />
                    </div>

                    <Form />

                </main>

            </section>

            <ContactIcons />
        </main>
    )
}

export default Contact