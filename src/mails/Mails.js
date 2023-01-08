import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Mails = () => {
    const [mailData, setMailData] = useState([])
    const getMails = async () => {
        const { data } = await axios.get('https://portfolio-backend-dd4b5-default-rtdb.firebaseio.com/mails.json')

        const temp = []
        for (let key in data) {

            temp.push({ id: key, email: data[key].email, name: data[key].name, message: data[key].message })

        }
        setMailData(temp)


    }

    useEffect(() => {
        getMails()
    }, [])
    return (
        <div className='bg-black text-white w-full min-h-screen '>

            <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8 gap-4 w-full'>
                {mailData.map(({ id, name, email, message }) =>
                    <div key={id} className='flex flex-col gap-2 w-full  overflow-ellipsis p-8 min-h-fit'>

                        <p>
                            <span className='px-1 text-lg text-yellow-500'>Name:</span>
                            <span className='px-1'>{name}</span>
                        </p>

                        <p>
                            <span className='px-1 text-lg text-yellow-500'>Email:</span>
                            <span className='px-1'>{email}</span>
                        </p>

                        <p className=' flex'>
                            <span className='px-1 text-yellow-500 underline'>Message</span>
                            <span className='overflow-ellipsis h-full text-wrap text-sm w-[80%] mx-auto px-2'>{message}</span>
                        </p>

                    </div>)}

            </section>


        </div>
    )
}

export default Mails