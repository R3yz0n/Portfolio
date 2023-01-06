import React, { useContext, useState } from 'react'

const ParticleState = React.createContext()

export const Context = () => {
    return useContext(ParticleState)
}

const ContextProvider = ({ children }) => {

    const [toLoadParticles, setToLoadParticles] = useState(false)

    const toggleParticles = () => setToLoadParticles(!toLoadParticles)


    return (
        <ParticleState.Provider value={{ toLoadParticles, toggleParticles }}>

            {children}

        </ ParticleState.Provider>


    )
}

export default ContextProvider




