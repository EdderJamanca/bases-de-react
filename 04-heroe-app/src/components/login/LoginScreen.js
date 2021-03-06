import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

const LoginScreen = ({ history }) => {

    // const { dispath } = useContext( AuthContext );
    const { dispatch }  = useContext(AuthContext);
   
    const handleLogin =()=>{
        const lastPath =localStorage.getItem('lastPath') || '/';
        // history.push('/');// esto permite cambiar o llevar a otra pagína
        // history.replace('/');// esto le indica q la dirección del url comienza en '/'
        dispatch({
            type:types.login,
            payload:{
                name:'Edder'
            }
        });
        history.replace(lastPath);


    }


    return (
        <div className="container mt-5">
             <h1>Login</h1>
             <hr/>

             <button
                className="btn btn-primary"
                onClick={handleLogin}
             >
                 Login
             </button>
        </div>
    )
}

export default LoginScreen
