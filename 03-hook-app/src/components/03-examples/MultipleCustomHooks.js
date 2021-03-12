
import React from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './example.css';

const MultipleCustomHooks = () => {

    const {state, incremento} = useCounter(1);

    const {loading, data }= useFetch(`https://www.breakingbadapi.com/api/quotes/${ state }`);

    const { author, quote } =!!data && data[0];

    console.log(author, quote );
    

    return (
        <>
            <h1>BreakINGbAD Quotes</h1>
            <hr />
         
            {
                loading 
                ? (<div className="alert text-center alert-primary">
                   loading......
               </div>) : 
               (
                    <blockquote className="blockquote text-right">
                            <p className="mb-3">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                    </blockquote>
                    )

                    
            }
            <button onClick={()=>incremento()} className="btn btn-primary">
                otro
            </button>
        </>
    )
}

export default MultipleCustomHooks
