
import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [count, setcount] = useState(10);

    const increment = useCallback( (num)=>{
        setcount( c=>c+num)
    },[setcount])

    return (
        <div>
            <h1>useCallback Hook: { count }</h1>
            <hr/>
            <ShowIncrement increment={increment} />
        </div>
    )
}

export default CallbackHook
