import React, { useMemo, useState } from 'react'
import { useCounter } from '../../hooks/useCounter'
import { Small } from './Small'


const MemoHook = () => {

    const [state, incremento] = useCounter(100);
    const [show, setShow] =useState(true);

    const procesoPesado =( iteraciones ) =>{
       
        for(let i=0; i<iteraciones; i++){
            console.log('Ahí vamos......');
        }

        return `${ iteraciones } iteraciones realizadas`
    }

    const memoProcesoPesado = useMemo( ()=> procesoPesado(state), [state]);

    return (
        <>
            <h1>MemoHook</h1>
            <h1>Counter:<small>{ state }</small></h1>
            <hr/>

            <p>{memoProcesoPesado}</p>
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

export default MemoHook
