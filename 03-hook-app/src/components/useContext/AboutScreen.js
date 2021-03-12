
import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const AboutScreen = () => {

    const {user, setUser}= useContext(UserContext);

    const logaut=()=>{
        setUser({})
    }

    return (
        <div>
            <h1>AboutScreen</h1>
            <h1/>     
            <pre>
                { JSON.stringify(user, null, 3) }
            </pre> 

            <button 
            
            className="btn btn-warning" onClick={logaut}>
                Logaut
            </button>
        </div>
    )
}

export default AboutScreen
