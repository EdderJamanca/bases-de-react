import React, { useEffect } from 'react'

const Massege = () => {

    useEffect(() => {

        console.log('componente montado');

        return () => {

        console.log('componete desmontado');

        }
    }, [])


    return (
        <>
            <h3>Eres genial !</h3>
        </>
    )
}

export default Massege
