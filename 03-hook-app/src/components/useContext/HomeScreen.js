import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const HomeScreen = () => {

    const {user} = useContext(UserContext);

    console.log(user);

    return (
        <div>
            <h1>HomeScreen</h1>
            <h1/>      
            <pre>
                { JSON.stringify(user) }
            </pre>
        </div>
    )
}

export default HomeScreen
