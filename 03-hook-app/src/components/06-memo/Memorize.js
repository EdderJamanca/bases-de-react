import React, { useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'

const Memorize = () => {

    const [state, incremento] = useCounter(10);
    const [show, setShow] =useState(true);

    return (
        <>
            <h1>Counter: <Small value={state} /></h1>
            <button
                className="btn btn-primary"
                onClick={()=>incremento()}
            >
                    + 1
            </button>
            <button
             className="btn btn-outline-primary ml-3 mx-1"
             onClick={ ()=>{
                 setShow(!show)
             }}
            >
                {JSON.stringify(show)}
            </button>
            
        </>
    )
}

export default Memorize
