
import React from 'react'
import { useCounter } from '../hooks/useCounter'
import './counter.css';

const CounterWithCustomHook = () => {

    const [ state, incremento, reset, decremento ]= useCounter(100);

    return (
        <>
            <h3>Countador</h3>
            <h2>{state}</h2>

            <button
                onClick={()=>incremento(3)}
             className="btn btn-primary mx-1"> + 1 </button>
            <button
                onClick={reset}
             className="btn btn-primary mx-1"> Reset </button>
            <button
                onClick={()=>decremento(2)}
             className="btn btn-primary mx-1"> - 1 </button>
        </>
    )
}

export default CounterWithCustomHook
