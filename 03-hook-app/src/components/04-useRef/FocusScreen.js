
import React, { useRef } from 'react';
import './focus.css';

const FocusScreen = () => {

    const inputRef =useRef();

    const handleClick =()=>{
        inputRef.current.select();
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
            ref={ inputRef}
                className='form-control'
                placeholder="Su nombre"
             />
            <button onClick={handleClick}
            className="btn btn-primary mt-3">
                Focus
            </button>
        </div>
    )
}

export default FocusScreen
