import React from 'react'
import "./Navbar.css"
import LoginIcon from '@mui/icons-material/Login';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { NavLink } from 'react-router-dom';
const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light  shadow">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item" >
                                <NavLink className="nav-link active"  to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/service">Services</NavLink >
                            </li>
                            <li className="nav-item">
                                <NavLink  className="nav-link" to="/contact">Contact</NavLink >
                            </li>
                        </ul>
                        <NavLink className="navbar-brand fw-bolder fs-4 mx-auto" to="/">SESHADRI KAKU</NavLink><br/>
                        <NavLink to="/login" className='btn btn-outline-primary ms-auto px-4 '> <LoginIcon/>  Login </NavLink>
                        <NavLink to="/register" className='btn btn-outline-primary ms-2 px-4'> <PersonAddIcon/> Register </NavLink>
                        <NavLink to="/dashboard" className='btn btn-outline-primary ms-2 '> Dashboard <PersonAddIcon/> </NavLink>
                        <NavLink to="/logout" className='btn btn-outline-primary ms-2 '> Logout  </NavLink>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar