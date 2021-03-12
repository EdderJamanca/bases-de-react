import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {

    const {setUser} = useContext(UserContext);

    const nuevoUser=()=>{
        setUser({
            id:123,
            name:'Edder',
            email:'edder@gmail.com'
        })
    }

    return (
        <div>
            <h1>LoginScreen</h1>
            <h1/>     

            <button className="btn btn-primary"
                onClick={ nuevoUser }
            >
                Login
            </button> 
        </div>
    )
}

export default LoginScreen
