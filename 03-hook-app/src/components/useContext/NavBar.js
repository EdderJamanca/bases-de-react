import React from 'react'
import {
    Link,
    NavLink
  } from "react-router-dom";

export const NavBar = () => {
    return (
        <>

            <nav className="navbar navbar-expand-md bg-danger navbar-dark px-3">

                <Link to="/" className="navbar-brand" >useContext</Link>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li  className="nav-item">
                            <NavLink exact activeClassName="active" to="/" className="nav-link" >Home</NavLink>
                        </li>
                        <li  className="nav-item">
                            <NavLink exact activeClassName="active" to="/about" className="nav-link" >about</NavLink>
                        </li>
                        <li  className="nav-item">
                            <NavLink exact activeClassName="active" to="login" className="nav-link" >Login</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            
        </>
    )
}
