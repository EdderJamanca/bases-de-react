
import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

const FormWithCustomHook = () => {

    const [value, handleImputChange]= useForm({
        name:'',
        email:'',
        password:''
    })

    const { name, email, password } = value;

    useEffect( ()=>{
        console.log('email Cambio');
    },[email]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(value);
    }

    return (
        <form onSubmit={handleSubmit}>
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
                <input
                type="password" 
                name="password"
                className="form-control mb-3"
                placeholder='***********' 
                value={password}
                onChange={ handleImputChange }
                />
            </div>
            <button className='btn btn-primary ' type="submit">Guardar</button>
        </form>
    )
}

export default FormWithCustomHook
