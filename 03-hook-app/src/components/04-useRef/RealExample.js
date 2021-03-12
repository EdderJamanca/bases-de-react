
import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';

const RealExample = () => {

    const [ shaw, setShaw]=useState(false);

    return (
        <div>
            <h1>RealExample</h1>
            { shaw && <MultipleCustomHooks />}

            <button 
            onClick={ ()=>{
                setShaw(!shaw)
            }}
            className="btn btn-primary mt-5">
              show/ hide
            </button>

        </div>
    )
}

export default RealExample
