
import React, { useRef, useLayoutEffect, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layaut.css';

const Layaut01 = () => {

    const [state, incremento] = useCounter(1);

    const { data }= useFetch(`https://www.breakingbadapi.com/api/quotes/${ state }`);

    const { quote } =!!data && data[0];

   const pTag = useRef();
   const [boxSize,setBoxSize] = useState({});


   useLayoutEffect( () =>  {

    setBoxSize( pTag.current.getBoundingClientRect() );

    },[quote])
    

    return (
        <>
            <h1>BreakINGbAD Quotes</h1>
            <hr />
         
      
            <blockquote className="blockquote text-right">
                    <p className="mb-3">{quote}</p>
                   
            </blockquote>

            <button onClick={()=>incremento()} className="btn btn-primary">
                otro quote
            </button>
            <pre>{JSON.stringify(boxSize, null, 3)}</pre>
        </>
    )
}

export default Layaut01
