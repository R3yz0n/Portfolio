import React from 'react'
import { TiTick } from 'react-icons/ti'
import './Spinner.css'

const Spinner = ({ loading }) => {
    return (
        <div className="spinner-container flex mt-10 px-2">
            {loading.spinner && <div className="loading-spinner"></div>}
            {loading.tick && <TiTick color='green' size={36} />}

        </div>

    )
}

export default Spinner