import React from 'react'
import { FaFacebook, FaInstagram, FaSnapchat, FaTwitter } from 'react-icons/fa'

const ContactIcons = () => {

    const contactIconsInfo = [
        {
            icon: <FaFacebook size={30} style={{ color: 'white', }} />,
            link: 'https://www.facebook.com/reyzonchhetri/'
        },
        {
            icon: < FaInstagram size={30} style={{ color: 'white' }} />,
            link: 'https://www.instagram.com/reyzon_chhetri/'

        },
        {
            icon: <FaSnapchat size={30} style={{ color: 'white' }} />,
            link: ''

        },
        {
            icon: <FaTwitter size={30} style={{ color: 'white' }} />,
            link: 'https://twitter.com/ChhetriReyzon'
        }


    ]

    return (
        <div className='flex absolute bottom-5 w-full'>

            <section className='mx-auto flex'>
                <div className='text-[1.4rem] text-white px-10 hidden md:flex tracking-widest'>Ping me at : </div>

                <div className='flex gap-12 md:gap-6 overflow-hidden'>

                    {contactIconsInfo.map(each => <a data-aos='fade-right' href={each.link} key={Math.random()} target="_blank"
                        rel="noreferrer" className='hover:'>{each.icon}</a>)}

                </div>

            </section>
        </div>
    )
}

export default ContactIcons