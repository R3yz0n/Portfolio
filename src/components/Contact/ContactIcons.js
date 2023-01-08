import React from 'react'
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter } from 'react-icons/fa'

const ContactIcons = () => {

    const contactIconsInfo = [
        {
            icon: <FaFacebook size={30} style={{ color: 'white', }} className='hover:text-[#4056c4!important] duration-300' />,
            link: 'https://www.facebook.com/reyzonchhetri/',
            delay: 100
        },
        {
            icon: < FaInstagram size={30} style={{ color: 'white' }} className='hover:text-[#9e3030!important] duration-300' />,
            link: 'https://www.instagram.com/reyzon_chhetri/',
            delay: 150

        },
        {
            icon: <FaSnapchat size={30} style={{ color: 'white' }} className='hover:text-[#fff347!important] duration-300' />,
            link: '',
            delay: 200

        },
        {
            icon: <FaTwitter size={30} style={{ color: 'white' }} className='duration-300 hover:text-[#2fa1ff!important]' />,
            link: 'https://twitter.com/ChhetriReyzon',
            delay: 250
        }


    ]

    return (
        <div className='flex absolute bottom-5 w-full'>

            <section className='mx-auto flex'>
                <div className='text-[1.4rem] text-white px-10 hidden md:flex tracking-widest'>Ping me at : </div>

                <div className='flex gap-12 md:gap-6 overflow-hidden'>

                    {contactIconsInfo.map(each => <a data-aos='fade-right' href={each.link} key={Math.random()} target="_blank"
                        data-aos-delay={each.delay} rel="noreferrer">{each.icon}</a>)}

                </div>

            </section>
        </div>
    )
}

export default ContactIcons