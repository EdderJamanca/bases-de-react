
import React, { useEffect, useState } from 'react';
import './effects.css';
import Massege from './Massege';

const SimpleForm = () => {

    const [fromState, setState ] =useState({
        name:'',
        email:''
    });

    const { name, email }= fromState;
    // permite q no se cambio
    useEffect( ()=>{
        console.log('hey !');
    },[]);
    useEffect( ()=>{
        console.log('formState cambió');
    },[fromState]);

    useEffect( ()=>{
        console.log('email cambió');
    }, [email])

    const handleImputChange =({target})=>{
        setState({
            ...fromState,
            [target.name ]:target.value
        })
    };

    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className='imput-group'>

                <input
                type="text" 
                name="name"
                className="form-control mb-3"
                placeholder='Escriba tu nombre'
                autoComplete='off' 
                value={name}
                onChange={handleImputChange}
                />

                <input
                type="email" 
                name="email"
                className="form-control mb-3"
                placeholder='edder@hotmail.com' 
                value={email}
                onChange={ handleImputChange }
                />
            </div>
            {name=='123' && <Massege />}
        </>
    )
}

export default SimpleForm
