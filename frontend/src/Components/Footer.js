import React from 'react'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='row  bg-dark py-5'>
          <div className='col-12 '>
            <ul class="nav justify-content-center">
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/about">About</NavLink >
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/service">Services</NavLink >
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/contact">Contact</NavLink >
              </li>
            </ul>
          </div>
          <div className='col-12 text-center py-3'>
            <p className='fw-3 text-white'>Copyright ©2020 - 2023 ,Seshadri Kaku </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer